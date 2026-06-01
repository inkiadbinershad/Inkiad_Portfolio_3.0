import { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const dotsRef = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const DOT_COUNT = 1;

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dots = dotsRef.current;
    const positions = Array.from({ length: DOT_COUNT }, () => ({ x: 0, y: 0 }));
    const ease = 0.18;

    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    let frame;
    const animate = () => {
      let targetX = mousePos.current.x;
      let targetY = mousePos.current.y;

      dots.forEach((dot, index) => {
        if (!dot) return;

        const pos = positions[index];
        pos.x += (targetX - pos.x) * ease;
        pos.y += (targetY - pos.y) * ease;
        dot.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;

        targetX = pos.x;
        targetY = pos.y;
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
            boxShadow: '0 0 10px rgba(56, 189, 248, 0.5)'
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
