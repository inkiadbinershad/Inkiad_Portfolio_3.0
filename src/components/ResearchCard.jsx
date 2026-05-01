import { useContext, useRef } from 'react';
import { ThemeContext } from '../App';
import useInView from '../hooks/useInView';
import CardWithGlare from './CardWithGlare';
import gsap from 'gsap';

const ResearchCard = ({ research }) => {
  const { themeClasses } = useContext(ThemeContext);
  const viewRef = useInView();
  const cardRef = useRef(null);

  const handleMagneticMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.12;
    const deltaY = (e.clientY - centerY) * 0.12;
    gsap.to(card, { x: deltaX, y: deltaY, duration: 0.3, ease: 'power2.out' });
  };

  const handleMagneticLeave = () => {
    gsap.to(cardRef.current, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
  };

  return (
    <div ref={(el) => { viewRef.current = el; cardRef.current = el; }} className="project-card group" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave}>
      <CardWithGlare>
        <div className="p-0 border-0 shadow-none">
          <div className="gradient-sweep"></div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: themeClasses.primaryText }}>{research.title}</h3>
          <div className="w-0 h-0.5 group-hover:w-full transition-all duration-300 ease-out mb-2" style={{ backgroundColor: themeClasses.accent }}></div>
          <p className="mb-4" style={{ color: themeClasses.secondaryText }}>{research.description}</p>
          {research.demo !== "#" && (
            <a
              href={research.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-lg font-medium transition-all duration-300"
              style={{ backgroundColor: themeClasses.accent, color: themeClasses.cardBackground }}
            >
              Read Case Study
            </a>
          )}
        </div>
      </CardWithGlare>
    </div>
  );
};

export default ResearchCard;
