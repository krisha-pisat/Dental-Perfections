import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- CONFIGURATION ---
const frameCount = 161; // Your frame count
const getImagePath = (frame) => {
  const paddedFrame = String(frame).padStart(3, '0');
  // Using your 'autoclave' folder
  return `/autoclave/ezgif-frame-${paddedFrame}.jpg`;
};
// ---------------------

const AutoclaveScrub = () => {
  const targetRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  // Preload images with progress AND ERROR LOGGING
  useEffect(() => {
    console.log(`Starting image preloading for ${frameCount} frames...`); // DEBUG
    const loadedImages = [];
    let loadedCount = 0;
    let errorCount = 0; // Track errors

    // --- Assuming 1-based naming (001 to 161) based on your screenshot ---
    // If your files ACTUALLY start at 000, change this loop back to: for (let i = 0; i < frameCount; i++)
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const imagePath = getImagePath(i);
      // console.log(`Attempting to load: ${imagePath}`); // DEBUG: Log path generation (uncomment if needed)
      img.src = imagePath;

      img.onload = () => {
        loadedCount++;
        // console.log(`Loaded image ${loadedCount}/${frameCount}: ${imagePath}`); // DEBUG: Log successful loads (uncomment if needed)
        setLoadProgress(Math.floor((loadedCount / frameCount) * 100));

        // Check if loading is complete (including potential errors)
        if (loadedCount + errorCount === frameCount) {
          setLoading(false);
          console.log(`✅ Finished preloading. ${loadedCount} successful, ${errorCount} errors.`); // DEBUG
        }
      };

      // --- ADDED ERROR HANDLER ---
      img.onerror = () => {
        errorCount++;
        console.error(`❌ ERROR loading image: ${imagePath}`); // DEBUG: Log the specific file that failed
        setLoadProgress(Math.floor((loadedCount / frameCount) * 100)); // Update progress even on error

        // Still check if loading should finish
        if (loadedCount + errorCount === frameCount) {
           setLoading(false);
           console.log(`⚠️ Finished preloading WITH ERRORS. ${loadedCount} successful, ${errorCount} errors.`); // DEBUG
        }
      };
      // ----------------------------

      loadedImages.push(img);
    }
    setImages(loadedImages);

    // Cleanup function in case component unmounts early
    return () => {
      console.log("Cleaning up image loader effect."); // DEBUG
    }
  }, []); // Keep empty dependency array: This effect should run only once on mount

  // --- Rest of your component (Scroll tracking, drawing, text animations) ---
  // No changes needed below this line for the debugging step

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1], {
    clamp: true,
  });

  // Draw initial image
  useEffect(() => {
    if (loading || !canvasRef.current || images.length === 0) return;
    canvasRef.current.width = 1920;
    canvasRef.current.height = 1080;
    const context = canvasRef.current.getContext('2d');
    if (context) {
      // Draw the first image from the preloaded array
      if (images[0] && images[0].complete) {
        context.drawImage(images[0], 0, 0, 1920, 1080);
      } else {
        console.warn("Initial image not ready for drawing.");
      }
    }
  }, [loading, images]); // Dependency array includes loading and images

  // Redraw on scroll
  useEffect(() => {
    if (loading || !canvasRef.current || images.length === 0) return;

    const context = canvasRef.current.getContext('2d');
    const canvas = canvasRef.current;

    if (!context) return;

    // Make sure we have a valid first image to draw if needed
    let lastKnownIndex = -1;
    if (images[0] && images[0].complete && canvasRef.current.width > 0) {
       // Ensure canvas isn't blank if first frameIndex isn't 0
       context.drawImage(images[0], 0, 0, canvas.width, canvas.height);
       lastKnownIndex = 0;
    }


    const unsubscribe = frameIndex.onChange((latest) => {
      const index = Math.floor(latest);
      // Only draw if the index has changed and the image exists
      if (index !== lastKnownIndex && images[index]) {
        const img = images[index];
        if (img.complete) { // Ensure the specific frame is loaded
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
          lastKnownIndex = index;
        } else {
          // Optional: Handle case where a specific frame isn't loaded yet
          // console.warn(`Image ${index} not ready, skipping draw.`);
        }
      }
    });

    return () => unsubscribe();
  }, [loading, images, frameIndex]); // Dependency array includes loading, images, frameIndex

  // Refined text animations
  const text1Opacity = useTransform(scrollYProgress, [0.05, 0.15, 0.25, 0.32], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.05, 0.15], [40, 0]);
  const text1Scale = useTransform(scrollYProgress, [0.05, 0.15], [0.95, 1]);

  const text2Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.62], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.35, 0.45], [40, 0]);
  const text2Scale = useTransform(scrollYProgress, [0.35, 0.45], [0.95, 1]);

  const text3Opacity = useTransform(scrollYProgress, [0.65, 0.75, 0.85, 0.92], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.65, 0.75], [40, 0]);
  const text3Scale = useTransform(scrollYProgress, [0.65, 0.75], [0.95, 1]);


  return (
    <section ref={targetRef} className="relative h-[400vh]" style={{ background: 'hsl(var(--dark-surface))' }}>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: 'hsl(var(--dark-surface))' }}>
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="w-32 h-32 rounded-full border-4 border-transparent mx-auto relative"
                   style={{
                     borderTopColor: 'hsl(var(--accent-blue))',
                     borderRightColor: 'hsl(var(--accent-cyan))',
                     animation: 'spin 1.5s linear infinite'
                   }}>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold" style={{ color: 'hsl(var(--text-primary))' }}>
                  {loadProgress}%
                </span>
              </div>
            </motion.div>
            <p className="text-lg font-light tracking-wider" style={{ color: 'hsl(var(--text-secondary))' }}>
              Loading Experience
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
       <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-0">

            {/* Left Column - Text Content */}
            <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-20 xl:px-24">
              {/* Ambient glow effect */}
              <div className="absolute inset-0 opacity-30 pointer-events-none"
                   style={{ background: 'var(--gradient-glow)' }}>
              </div>

              <div className="relative w-full max-w-2xl min-h-[400px]">

                {/* Text Block 1 */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-center"
                  style={{ opacity: text1Opacity, y: text1Y, scale: text1Scale }}
                >
                  <motion.div className="space-y-6">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                        style={{
                          color: 'hsl(var(--text-primary))',
                          textShadow: 'var(--shadow-text)'
                        }}>
                      Uncompromising
                      <span className="block bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-cyan))] bg-clip-text text-transparent">
                        Safety
                      </span>
                    </h2>
                    <p className="text-xl md:text-2xl font-light leading-relaxed"
                       style={{ color: 'hsl(var(--text-secondary))' }}>
                      Our B-Class autoclaves provide hospital-grade sterilization for every instrument.
                    </p>
                    <div className="h-1 w-24 rounded-full"
                         style={{ background: 'var(--gradient-accent)' }}>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Text Block 2 */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-center"
                  style={{ opacity: text2Opacity, y: text2Y, scale: text2Scale }}
                >
                  <motion.div className="space-y-6">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                        style={{
                          color: 'hsl(var(--text-primary))',
                          textShadow: 'var(--shadow-text)'
                        }}>
                      Advanced
                      <span className="block bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-cyan))] bg-clip-text text-transparent">
                        Sterilization
                      </span>
                    </h2>
                    <p className="text-xl md:text-2xl font-light leading-relaxed"
                       style={{ color: 'hsl(var(--text-secondary))' }}>
                      A high-vacuum pump ensures complete steam penetration, leaving no chance for contamination.
                    </p>
                    <div className="h-1 w-24 rounded-full"
                         style={{ background: 'var(--gradient-accent)' }}>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Text Block 3 */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-center"
                  style={{ opacity: text3Opacity, y: text3Y, scale: text3Scale }}
                >
                  <motion.div className="space-y-6">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                        style={{
                          color: 'hsl(var(--text-primary))',
                          textShadow: 'var(--shadow-text)'
                        }}>
                      Your Safety is
                      <span className="block bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-cyan))] bg-clip-text text-transparent">
                        Our Priority
                      </span>
                    </h2>
                    <p className="text-xl md:text-2xl font-light leading-relaxed"
                       style={{ color: 'hsl(var(--text-secondary))' }}>
                      We monitor every cycle to guarantee perfect sterilization for your peace of mind.
                    </p>
                    <div className="h-1 w-24 rounded-full"
                         style={{ background: 'var(--gradient-accent)' }}>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Canvas */}
            <div className="relative w-full h-full flex items-center justify-center p-8 lg:p-12">
              {/* Subtle border glow */}
              <div className="absolute inset-0 opacity-20"
                   style={{
                     background: 'radial-gradient(circle at 30% 50%, hsl(210 100% 65% / 0.2) 0%, transparent 50%)'
                   }}>
              </div>

              <div className="relative w-full h-full flex items-center justify-center">
                <canvas
                  ref={canvasRef}
                  className="w-full h-full object-contain rounded-lg"
                  style={{
                    visibility: loading ? 'hidden' : 'visible',
                    filter: 'drop-shadow(0 0 40px hsl(210 100% 65% / 0.3))'
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>


      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default AutoclaveScrub;