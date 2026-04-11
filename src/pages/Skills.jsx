import { useContext } from 'react';
import { skills } from '../data/skills';
import SkillBadge from '../components/SkillBadge';
import CardWithGlare from '../components/CardWithGlare';
import { ThemeContext } from '../App';
import useInView from '../hooks/useInView';

const Skills = () => {
  const { themeClasses } = useContext(ThemeContext);
  const cardsRef1 = useInView();
  const cardsRef2 = useInView();
  const cardsRef3 = useInView();

  return (
    <div className="min-h-screen" style={{ backgroundColor: themeClasses.background }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center blur-reveal" style={{ color: themeClasses.primaryText }}>Skills</h1>
        <p className="text-lg text-center mb-16 blur-reveal" style={{ color: themeClasses.secondaryText, animationDelay: '0.1s' }}>
          Technologies and tools I work with
        </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div ref={cardsRef1} className="skill-card">
              <CardWithGlare className="group h-full">
                <div className="scan-line"></div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: themeClasses.accent }}>
                    <span style={{ color: themeClasses.cardBackground, fontSize: '1.5rem' }}>⚛️</span>
                  </div>
                  <h2 className="text-2xl font-semibold" style={{ color: themeClasses.primaryText }}>Technical Skills</h2>
                </div>
                <div className="w-0 h-0.5 group-hover:w-full transition-all duration-300 ease-out mb-2" style={{ backgroundColor: themeClasses.accent }}></div>
                <div className="flex flex-wrap gap-3">
                  {skills.technical.map((skill, index) => (
                    <SkillBadge key={index} skill={skill} />
                  ))}
                </div>
              </CardWithGlare>
            </div>

            <div ref={cardsRef2} className="skill-card">
              <CardWithGlare className="group h-full">
                <div className="scan-line"></div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: themeClasses.accent }}>
                    <span style={{ color: themeClasses.cardBackground, fontSize: '1.5rem' }}>🛠️</span>
                  </div>
                  <h2 className="text-2xl font-semibold" style={{ color: themeClasses.primaryText }}>Professional Skills</h2>
                </div>
                <div className="w-0 h-0.5 group-hover:w-full transition-all duration-300 ease-out mb-2" style={{ backgroundColor: themeClasses.accent }}></div>
                <div className="flex flex-wrap gap-3">
                  {skills.professional.map((skill, index) => (
                    <SkillBadge key={index} skill={skill} />
                  ))}
                </div>
              </CardWithGlare>
            </div>

            <div ref={cardsRef3} className="skill-card">
              <CardWithGlare className="group h-full">
                <div className="scan-line"></div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: themeClasses.accent }}>
                    <span style={{ color: themeClasses.cardBackground, fontSize: '1.5rem' }}>💡</span>
                  </div>
                  <h2 className="text-2xl font-semibold" style={{ color: themeClasses.primaryText }}>Creative Skills</h2>
                </div>
                <div className="w-0 h-0.5 group-hover:w-full transition-all duration-300 ease-out mb-2" style={{ backgroundColor: themeClasses.accent }}></div>
                <div className="flex flex-wrap gap-3">
                  {skills.creative.map((skill, index) => (
                    <SkillBadge key={index} skill={skill} />
                  ))}
                </div>
              </CardWithGlare>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
