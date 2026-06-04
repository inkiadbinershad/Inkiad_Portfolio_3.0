import { useContext, useRef, useEffect } from 'react';
import { ThemeContext } from '../App';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillBadge = ({ skill }) => {
  const { themeClasses } = useContext(ThemeContext);
  const badgeRef = useRef(null);

  useEffect(() => {
    const el = badgeRef.current;
    if (!el) return;
    gsap.fromTo(el,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <span
      ref={badgeRef}
      className="group px-3 py-2 rounded-lg text-sm transition-all duration-300 ease-out cursor-pointer animate-fade-in hover:-translate-y-1 hover:shadow-lg hover:border-blue-500 dark:hover:border-cyan-400 inline-block"
      style={{
        backgroundColor: themeClasses.cardBackground,
        border: `1px solid ${themeClasses.border}`,
        color: themeClasses.primaryText
      }}
    >
      {skill}
    </span>
  );
};

export default SkillBadge;
