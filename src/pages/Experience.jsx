import { useContext } from 'react';
import CardWithGlare from '../components/CardWithGlare';
import { ThemeContext } from '../App';
import useInView from '../hooks/useInView';

const Experience = () => {
  const { themeClasses } = useContext(ThemeContext);
  const card1Ref = useInView();
  const card2Ref = useInView();

  const experiences = [
    {
      title: 'Frontend Team Lead',
      company: 'Zantorra',
      location: 'Dhaka, Bangladesh',
      period: 'April 2025 – Dec 2025',
      description: 'Led frontend development across multiple web projects. Designed responsive UI components and layout systems. Conducted team brainstorming sessions. Delegated tasks and reviewed code. Collaborated with UI/UX designers and backend engineers. Managed timelines and resolved blockers.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript']
    },
    {
      title: 'Founder',
      company: 'Cameow',
      location: 'Dhaka, Bangladesh',
      period: 'Independent Venture',
      description: 'Built and managed a small independent brand from scratch. Designed and maintained the digital presence and content structure. Handled planning, execution, and operational decisions independently. Gained hands-on experience in market validation and user behavior. Developed strong ownership, problem-solving, and adaptability under constraints. Key Skills Applied: Digital content, branding basics, decision-making, responsibility, execution under pressure. Link: https://www.facebook.com/cameow.bd/',
      technologies: ['Digital Content', 'Branding', 'Market Validation']
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: themeClasses.background }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center blur-reveal" style={{ color: themeClasses.primaryText }}>Experience</h1>
        <p className="text-lg text-center mb-16 blur-reveal" style={{ color: themeClasses.secondaryText, animationDelay: '0.1s' }}>
          My professional journey and career highlights
        </p>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line" style={{ background: `linear-gradient(180deg, ${themeClasses.accent}, transparent)`, top: 0 }}></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const refs = [card1Ref, card2Ref];
              return (
                <div key={index} ref={refs[index]} className={`${index % 2 === 0 ? 'timeline-card-left' : 'timeline-card-right'} md:w-1/2 ${index % 2 === 1 ? 'md:ml-auto' : ''}`}>
                  <CardWithGlare className="group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="stagger-item">
                        <h2 className="text-2xl font-semibold" style={{ color: themeClasses.primaryText }}>{exp.title}</h2>
                        <div className="w-0 h-0.5 group-hover:w-full transition-all duration-300 ease-out mb-2" style={{ backgroundColor: themeClasses.accent }}></div>
                        <p className="font-medium" style={{ color: themeClasses.accent }}>{exp.company}</p>
                      </div>
                      <p className="stagger-item mt-2 md:mt-0" style={{ color: themeClasses.secondaryText, animationDelay: '0.15s' }}>{exp.period}</p>
                    </div>
                    <p className="mb-4 leading-relaxed stagger-item" style={{ color: themeClasses.primaryText, animationDelay: '0.3s' }}>{exp.description}</p>
                    {exp.company === 'Cameow' && (
                      <a
                        href="https://www.facebook.com/cameow.bd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 rounded-lg font-medium transition-all duration-400 mb-4"
                        style={{ backgroundColor: themeClasses.accent, color: themeClasses.cardBackground }}
                      >
                        Visit Cameow
                      </a>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: themeClasses.border, color: themeClasses.secondaryText }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardWithGlare>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
