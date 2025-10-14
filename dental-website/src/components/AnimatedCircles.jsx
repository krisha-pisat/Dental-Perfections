import React, { useMemo } from 'react';

// This component generates a set of circles with random positions, sizes, and animation delays.
const AnimatedCircles = ({ circleCount = 10 }) => {
  const circles = useMemo(() => {
    return Array.from({ length: circleCount }).map((_, i) => ({
      id: i,
      size: `${Math.random() * (200 - 50) + 50}px`, // Random size between 50px and 200px
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
    }));
  }, [circleCount]);

  return (
    <div className="circles-container">
      {circles.map(circle => (
        <div
          key={circle.id}
          className="circle"
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
            animationDelay: circle.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedCircles;