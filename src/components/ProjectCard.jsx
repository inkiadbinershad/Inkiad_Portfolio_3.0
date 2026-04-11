import { useContext } from 'react';
import { ThemeContext } from '../App';
import useInView from '../hooks/useInView';
import CardWithGlare from './CardWithGlare';

const ProjectCard = ({ project }) => {
  const { themeClasses } = useContext(ThemeContext);
  const ref = useInView();

  return (
    <div ref={ref} className="project-card">
      <CardWithGlare>
        <div
          className="p-0 border-0 shadow-none"
          style={{}}>
          <h3 className="text-xl font-semibold mb-2" style={{ color: themeClasses.primaryText }}>
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
            className="inline-block px-4 py-2 rounded-lg"
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

