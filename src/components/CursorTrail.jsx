import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CursorTrail = () => {
  const dotsRef = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const DOT_COUNT = 8;

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dots = dotsRef.current;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', onMouseMove);

    // Each dot follows the previous with delay
    const quickSetters = dots.map((dot) => ({
      x: gsap.quickTo(dot, 'x', { duration: 0.3, ease: 'power3' }),
      y: gsap.quickTo(dot, 'y', { duration: 0.3, ease: 'power3' })
    }));

    let frame;
    const animate = () => {
      quickSetters.forEach((qs, i) => {
        const delay = i * 0.025;
        gsap.delayedCall(delay, () => {
          qs.x(mousePos.current.x);
          qs.y(mousePos.current.y);
        });
      });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {Array.from({ length: DOT_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: `${10 - i}px`,
            height: `${10 - i}px`,
            borderRadius: '50%',
            backgroundColor: '#38BDF8',
            opacity: 1 - i * 0.1,
            pointerEvents: 'none',
            zIndex: 99997,
            transform: 'translate(-50%, -50%)',
            mixBlendMode: 'screen'
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
