import React, { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';
import './LogoLoop.css'; // Import the CSS file

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2
};

const toCssLength = (value) => (typeof value === 'number' ? `${value}px` : (value ?? undefined));

const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback(); // Initial call
      return () => window.removeEventListener('resize', handleResize);
    }

    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback(); // Initial call

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies); // Ensure dependencies are correctly passed
};


const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];
    if (images.length === 0) {
      onLoad();
      return;
    }

    let remainingImages = images.length;
    const handleImageLoad = () => {
      remainingImages -= 1;
      if (remainingImages === 0) {
        onLoad();
      }
    };

    images.forEach(img => {
      const htmlImg = img;
      if (htmlImg.complete) {
        handleImageLoad();
      } else {
        htmlImg.addEventListener('load', handleImageLoad, { once: true });
        htmlImg.addEventListener('error', handleImageLoad, { once: true }); // Treat error as load complete for logic
      }
    });

    // Cleanup function
    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

const useAnimationLoop = (trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover) => {
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Reset offset based on seqWidth when it changes
    if (seqWidth > 0) {
      offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    }

    const animate = (timestamp) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp; // Initialize timestamp on first frame
      }

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000; // Delta time in seconds
      lastTimestampRef.current = timestamp;

      // Determine target velocity (0 if paused)
      const target = pauseOnHover && isHovered ? 0 : targetVelocity;

      // Smoothly approach target velocity using exponential easing
      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      // Update position if seqWidth is valid
      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        // Wrap offset around using modulo arithmetic
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = nextOffset;

        // Apply transform (use translate3d for hardware acceleration)
        const translateX = -offsetRef.current;
        track.style.transform = `translate3d(${translateX}px, 0, 0)`;
      }

      // Continue the animation loop
      rafRef.current = requestAnimationFrame(animate);
    };

    // Start the animation loop
    rafRef.current = requestAnimationFrame(animate);

    // Cleanup function to stop animation and reset refs
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null; // Reset timestamp for next start
    };
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover, trackRef]); // Dependencies for the effect
};


// Use React.memo for performance optimization
const LogoLoop = memo(
  ({
    logos = [], // Default to empty array
    speed = 120,
    direction = 'left',
    width = '100%',
    logoHeight = 28,
    gap = 32,
    pauseOnHover = true,
    fadeOut = false,
    fadeOutColor, // Let CSS handle default based on theme
    scaleOnHover = false,
    ariaLabel = 'Partner logos',
    className, // Allow custom classes
    style // Allow custom inline styles
  }) => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const seqRef = useRef(null); // Ref for the first sequence of logos to measure width

    const [seqWidth, setSeqWidth] = useState(0); // Width of one sequence of logos
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES); // Number of copies needed
    const [isHovered, setIsHovered] = useState(false); // Track hover state

    // Calculate target velocity based on props
    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      const directionMultiplier = direction === 'left' ? 1 : -1;
      const speedMultiplier = speed < 0 ? -1 : 1; // Allow negative speed for reverse
      return magnitude * directionMultiplier * speedMultiplier;
    }, [speed, direction]);

    // Callback to update dimensions on resize or image load
    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0;

      if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth)); // Use ceiling for safety
        // Calculate how many copies are needed to fill the container + headroom
        const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, []);

    // Observe container and sequence refs for size changes
    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight]);
    // Update dimensions once images inside the sequence have loaded
    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);
    // Run the animation loop
    useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

    // Memoize CSS variables to avoid unnecessary recalculations
    const cssVariables = useMemo(
      () => ({
        '--logoloop-gap': `${gap}px`,
        '--logoloop-logoHeight': `${logoHeight}px`,
        // Pass fadeOutColor only if provided, otherwise let CSS handle it
        ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
      }),
      [gap, logoHeight, fadeOutColor]
    );

    // Memoize root class name string
    const rootClassName = useMemo(
      () =>
        ['logoloop', fadeOut && 'logoloop--fade', scaleOnHover && 'logoloop--scale-hover', className]
          .filter(Boolean) // Remove falsy values
          .join(' '),
      [fadeOut, scaleOnHover, className]
    );

    // Hover event handlers
    const handleMouseEnter = useCallback(() => {
      if (pauseOnHover) setIsHovered(true);
    }, [pauseOnHover]);

    const handleMouseLeave = useCallback(() => {
      if (pauseOnHover) setIsHovered(false);
    }, [pauseOnHover]);

    // Memoized function to render a single logo item
    const renderLogoItem = useCallback((item, key) => {
      // Check if the item has a 'node' property (React node) or 'src' (image)
      const isNodeItem = 'node' in item;

      // Determine content: React node or <img> tag
      const content = isNodeItem ? (
        <span className="logoloop__node" aria-hidden={!!item.href && !item.ariaLabel}>
          {item.node}
        </span>
      ) : (
        <img
          src={item.src} // Required for image items
          srcSet={item.srcSet}
          sizes={item.sizes}
          width={item.width} // Optional: Explicit width
          height={item.height} // Optional: Explicit height
          alt={item.alt ?? ''} // Alt text, default to empty
          title={item.title} // Optional: Tooltip title
          loading="lazy"
          decoding="async"
          draggable={false} // Prevent dragging images
        />
      );

      // Determine ARIA label for accessibility
      const itemAriaLabel = isNodeItem ? (item.ariaLabel ?? item.title) : (item.alt ?? item.title);

      // Wrap content in a link if href is provided
      const itemContent = item.href ? (
        <a
          className="logoloop__link"
          href={item.href}
          aria-label={itemAriaLabel || 'logo link'} // Provide a default label if needed
          target="_blank" // Open external links in new tab
          rel="noreferrer noopener" // Security best practices
        >
          {content}
        </a>
      ) : (
        content // Render content directly if no link
      );

      return (
        <li className="logoloop__item" key={key} role="listitem">
          {itemContent}
        </li>
      );
    }, []); // Empty dependency array as it doesn't depend on props/state outside its scope

    // Memoize the list of logo sequences (copies)
    const logoLists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, copyIndex) => (
          <ul
            className="logoloop__list"
            key={`copy-${copyIndex}`}
            role="list"
            aria-hidden={copyIndex > 0} // Hide extra copies from screen readers
            ref={copyIndex === 0 ? seqRef : undefined} // Attach ref only to the first copy for measurement
          >
            {/* Map over original logos to render items */}
            {logos.map((item, itemIndex) => renderLogoItem(item, `${copyIndex}-${itemIndex}`))}
          </ul>
        )),
      [copyCount, logos, renderLogoItem, seqRef] // Include seqRef in dependencies
    );


    // Memoize container style object
    const containerStyle = useMemo(
      () => ({
        width: toCssLength(width) ?? '100%', // Ensure width is applied
        ...cssVariables, // Apply CSS variables
        ...style // Merge with custom styles
      }),
      [width, cssVariables, style]
    );

    return (
      <div
        ref={containerRef}
        className={rootClassName}
        style={containerStyle}
        role="region" // Use region role for semantics
        aria-label={ariaLabel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="logoloop__track" ref={trackRef}>
          {logoLists}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = 'LogoLoop'; // Set display name for DevTools

export default LogoLoop;