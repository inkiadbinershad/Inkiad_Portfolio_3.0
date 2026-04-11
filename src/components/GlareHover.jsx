import { useRef } from 'react';

const GlareHover = ({
  children,
  glareColor = '#38BDF8',
  glareOpacity = 0.25,
  glareAngle = -45,
  glareSize = 200,
  transitionDuration = 600
}) => {
  const overlayRef = useRef(null);

  const animateIn = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = 'none';
    el.style.backgroundPosition = '-100% -100%';
    el.style.transition = `${transitionDuration}ms ease`;
    el.style.backgroundPosition = '100% 100%';
  };

  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = `${transitionDuration}ms ease`;
    el.style.backgroundPosition = '-100% -100%';
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      <div
        ref={overlayRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          willChange: 'background-position',
          background: `linear-gradient(${glareAngle}deg,
            transparent 60%,
            ${glareColor} 70%,
            transparent 100%)`,
          backgroundSize: `${glareSize}% ${glareSize}%`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '-100% -100%',
          pointerEvents: 'none',
          opacity: glareOpacity
        }}
      />
      {children}
    </div>
  );
};

export default GlareHover;