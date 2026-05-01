import { useState, useEffect } from 'react';

export default function PageLoader({ isLoading }) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setFadeOut(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setVisible(true);
      setFadeOut(false);
    }
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div id="pre-load" className={fadeOut ? 'fade-out' : ''}>
      <div className="loader-inner">
        <div className="loader-logo">IR</div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}

