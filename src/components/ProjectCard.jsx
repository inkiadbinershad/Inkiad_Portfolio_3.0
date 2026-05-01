import { useContext, useRef } from 'react';
import { ThemeContext } from '../App';
import useInView from '../hooks/useInView';
import CardWithGlare from './CardWithGlare';
import gsap from 'gsap';

const ProjectCard = ({ project }) => {
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
    <div ref={(el) => { viewRef.current = el; cardRef.current = el; }} className="project-card" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave}>
      <CardWithGlare>
        <div
          className="p-0 border-0 shadow-none"
          style={{}}>
          <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: themeClasses.primaryText }}>
            {project.title}
          </h3>

          <p className="mb-4" style={{ color: themeClasses.secondaryText }}>
            {project.description}
          </p>

          <div className="mb-4">
            <h4 style={{ color: themeClasses.primaryText }}>Tech Stack:</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded text-xs"
                  style={{
                    backgroundColor: themeClasses.border,
                    color: themeClasses.secondaryText
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-lg"
            style={{
              backgroundColor: themeClasses.accent,
              color: themeClasses.cardBackground
            }}
            onClick={() => console.warn(`Navigating to project demo: ${project.demo} (may be down - 500 error)`)}
          >
            Live Link
          </a>
        </div>
      </CardWithGlare>
    </div>
  );
};

export default ProjectCard;
