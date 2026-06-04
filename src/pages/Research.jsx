import { useContext } from 'react';
import { research } from '../data/research';
import ResearchCard from '../components/ResearchCard';
import { ThemeContext } from '../App';
import useInView from '../hooks/useInView';
import styles from './Research.module.css';

const Research = () => {
  const { themeClasses } = useContext(ThemeContext);
  const headingRef = useInView();
  const contentRef = useInView();

  return (
    <div className={`${styles.pageWrapper} min-h-screen flex flex-col overflow-x-hidden`} style={{ backgroundColor: themeClasses.background }}>
      <div className={`${styles.pageContent} flex-1`}>
        <div ref={headingRef}>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 text-center blur-reveal" style={{ color: themeClasses.primaryText }}>Research & Case Studies</h1>
          <p className="text-sm sm:text-base lg:text-lg text-center mb-16 blur-reveal" style={{ color: themeClasses.secondaryText, animationDelay: '0.1s' }}>
            Structured thinking, analysis, and problem-solving through research-style and case-study content
          </p>
        </div>

        <div ref={contentRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {research.map((item, index) => (
            <div key={item.id} className="glass rounded-xl overflow-hidden relative">
              <div className="gradient-sweep"></div>
              <ResearchCard research={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
