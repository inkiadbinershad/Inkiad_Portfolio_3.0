import React from 'react';

const ParticleBackground = () => {
  return (
    <div className="particle-background absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(9)].map((_, i) => (
        <div key={i} className={`particle particle-${i + 1}`}></div>
      ))}
    </div>
  );
};

export default ParticleBackground;
