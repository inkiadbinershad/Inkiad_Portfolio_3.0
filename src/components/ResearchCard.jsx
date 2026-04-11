import { useContext } from 'react';
import { ThemeContext } from '../App';
import useInView from '../hooks/useInView';
import CardWithGlare from './CardWithGlare';

const ResearchCard = ({ research }) => {
  const { themeClasses } = useContext(ThemeContext);
  const ref = useInView();

  return (
    <div ref={ref} className="project-card group">
      <CardWithGlare>
        <div className="p-0 border-0 shadow-none">
          <div className="gradient-sweep"></div>
          <h3 className="text-xl font-semibold mb-2" style={{ color: themeClasses.primaryText }}>{research.title}</h3>
          <div className="w-0 h-0.5 group-hover:w-full transition-all duration-300 ease-out mb-2" style={{ backgroundColor: themeClasses.accent }}></div>
          <p className="mb-4" style={{ color: themeClasses.secondaryText }}>{research.description}</p>
          {research.demo !== "#" && (
            <a
              href={research.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-lg font-medium transition-all duration-300"
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

