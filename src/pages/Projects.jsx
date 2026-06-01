import { useContext } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { ThemeContext } from '../App';
import useInView from '../hooks/useInView';

const Projects = () => {
  const { themeClasses } = useContext(ThemeContext);
  const headingRef = useInView();
  const contentRef = useInView();

  return (
    <div className="page-layer min-h-screen flex flex-col overflow-x-hidden" style={{ backgroundColor: themeClasses.background }}>
      <div className="page-content flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-[84px] pb-8">
        <div ref={headingRef}>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 text-center blur-reveal" style={{ color: themeClasses.primaryText }}>Projects</h1>
          <p className="text-sm sm:text-base lg:text-lg text-center mb-16 blur-reveal" style={{ color: themeClasses.secondaryText, animationDelay: '0.1s' }}>
            A showcase of my recent work and contributions
          </p>
        </div>

        <div ref={contentRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="glass rounded-xl overflow-hidden relative">
              <div className="gradient-sweep"></div>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
