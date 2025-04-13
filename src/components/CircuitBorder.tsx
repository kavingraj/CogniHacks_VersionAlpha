import React from 'react';

function CircuitBorder() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Outer Border Frame */}
      <path
        d="M5,5 L95,5 L95,95 L5,95 L5,5"
        stroke="turquoise"
        strokeWidth="0.5"
        fill="none"
      />

      {/* Branches at the Corners */}
      {/* Top Left */}
      <path
        d="M5,5 L20,5 L20,20"
        stroke="turquoise"
        strokeWidth="0.5"
        fill="none"
      />
      {/* Top Right */}
      <path
        d="M95,5 L80,5 L80,20"
        stroke="turquoise"
        strokeWidth="0.5"
        fill="none"
      />
      {/* Bottom Right */}
      <path
        d="M95,95 L80,95 L80,80"
        stroke="turquoise"
        strokeWidth="0.5"
        fill="none"
      />
      {/* Bottom Left */}
      <path
        d="M5,95 L20,95 L20,80"
        stroke="turquoise"
        strokeWidth="0.5"
        fill="none"
      />

      {/* Branching lines from the edges towards the center */}
      {/* Top branch */}
      <path
        d="M20,20 L50,10 L80,20"
        stroke="turquoise"
        strokeWidth="0.5"
        fill="none"
      />
      {/* Bottom branch */}
      <path
        d="M20,80 L50,90 L80,80"
        stroke="turquoise"
        strokeWidth="0.5"
        fill="none"
      />
      {/* Left branch */}
      <path
        d="M20,20 L10,50 L20,80"
        stroke="turquoise"
        strokeWidth="0.5"
        fill="none"
      />
      {/* Right branch */}
      <path
        d="M80,20 L90,50 L80,80"
        stroke="turquoise"
        strokeWidth="0.5"
        fill="none"
      />

      {/* Central branching meeting in the middle */}
      <path
        d="M10,50 L50,50 L90,50"
        stroke="turquoise"
        strokeWidth="0.5"
        fill="none"
      />
    </svg>
  );
}

export default CircuitBorder;


