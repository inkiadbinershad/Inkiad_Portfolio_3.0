import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;
    if (!overlay || !content) return;

    const tl = gsap.timeline();

    // Wipe in
    tl.set(overlay, { scaleX: 0, transformOrigin: 'left center', display: 'block' })
      .to(overlay, { scaleX: 1, duration: 0.35, ease: 'power3.inOut' })
      // Instantly show new content while overlay is covering
      .set(content, { opacity: 1 })
      // Wipe out
      .to(overlay, {
        scaleX: 0,
        transformOrigin: 'right center',
        duration: 0.35,
        ease: 'power3.inOut'
      })
      .set(overlay, { display: 'none' });

    return () => tl.kill();
  }, [location.pathname]);

  return (
    <div ref={contentRef} style={{ opacity: 1 }}>
      {/* Overlay */}
      <div
        ref={overlayRef}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'linear-gradient(135deg, #38BDF8, #0284C7)',
          zIndex: 99998,
          display: 'none',
          pointerEvents: 'none'
        }}
      />
      {children}
    </div>
  );
};

export default PageTransition;
