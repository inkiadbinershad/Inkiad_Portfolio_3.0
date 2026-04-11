import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../App';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { research } from '../data/research';
import ProjectCard from '../components/ProjectCard';
import ResearchCard from '../components/ResearchCard';
import SkillBadge from '../components/SkillBadge';
import CardWithGlare from '../components/CardWithGlare';
import useMouseFollow from '../hooks/useMouseFollow';
import useInView from '../hooks/useInView';
import SplitTextReveal from '../components/SplitTextReveal';
import ParticleBackground from '../components/ParticleBackground';
import { Link } from 'react-router-dom';

const Home = () => {
  const { themeClasses } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Refs for scroll animations
  const aboutRef = useInView();
  const skillsRef = useInView();
  const projectsRef = useInView();
  const researchRef = useInView();
  const experienceRef = useInView();
  const [logoSrc, setLogoSrc] = useState(null);

  useEffect(() => {
    import('../components/Gemini_Generated_Image_9ksb5a9ksb5a9ksb.png')
      .then((m) => setLogoSrc(m.default || m))
      .catch(() => setLogoSrc(null));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:inkiadbinershad@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  const { transform: transform1, handleMouseMove: handleMouseMove1, handleMouseLeave: handleMouseLeave1 } = useMouseFollow();
  const { transform: transform2, handleMouseMove: handleMouseMove2, handleMouseLeave: handleMouseLeave2 } = useMouseFollow();
  const { transform: transform3, handleMouseMove: handleMouseMove3, handleMouseLeave: handleMouseLeave3 } = useMouseFollow();
  const { transform: transform4, handleMouseMove: handleMouseMove4, handleMouseLeave: handleMouseLeave4 } = useMouseFollow();
  const { transform: transform5, handleMouseMove: handleMouseMove5, handleMouseLeave: handleMouseLeave5 } = useMouseFollow();
  const { transform: transform6, handleMouseMove: handleMouseMove6, handleMouseLeave: handleMouseLeave6 } = useMouseFollow();

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
    <div>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center aurora-background relative overflow-hidden" style={{ backgroundColor: themeClasses.background }}>
        <ParticleBackground />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 glow-pulse" style={{ color: themeClasses.primaryText }}>
              <SplitTextReveal text="INKIAD BIN ERSHAD RAFEY" delay={0} />
            </h1>
            <p className="text-xl md:text-2xl mb-6 animate-fade-in" style={{ color: themeClasses.accent, animationDelay: '0.6s' }}>
              <span className="gradient-text">Frontend Developer</span> & Creative Professional
            </p>
            <p className="text-lg mb-8 max-w-2xl blur-reveal" style={{ color: themeClasses.primaryText, animationDelay: '0.8s' }}>
              I'm a responsibility-driven developer with hands-on startup experience, focused on building practical 
              <span className="keyword-glow"> digital solutions </span>
              with integrity and clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg font-medium transition-all duration-400 text-center card-glow"
                style={{ backgroundColor: themeClasses.accent, color: themeClasses.cardBackground, animationDelay: '1s' }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg font-medium transition-all duration-400 text-center card-glow"
                style={{
                  border: `2px solid ${themeClasses.accent}`,
                  color: themeClasses.accent,
                  backgroundColor: 'transparent',
                  animationDelay: '1.1s'
                }}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 aurora-background relative overflow-hidden" style={{ backgroundColor: themeClasses.background }}>
        <ParticleBackground />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={aboutRef}>
          <h2 className="text-4xl font-bold mb-8 text-center blur-reveal" style={{ color: themeClasses.primaryText }}>About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              {logoSrc ? (
                <img src={logoSrc} alt="Logo" className="w-48 h-48 mx-auto mb-6 rounded-full object-cover shadow-lg blur-reveal card-glow" />
              ) : (
                <div className="w-48 h-48 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg blur-reveal card-glow" style={{ backgroundColor: themeClasses.accent }}>
                  <span style={{ color: themeClasses.cardBackground, fontSize: '4rem', fontWeight: 'bold' }}>IB</span>
                </div>
              )}
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed blur-reveal" style={{ color: themeClasses.primaryText }}>
                I'm a <span className="keyword-glow">Computer Science student</span> from Bangladesh with real-world experience in startup leadership, frontend development, and digital content creation.
              </p>
              <p className="text-lg leading-relaxed blur-reveal" style={{ color: themeClasses.primaryText, animationDelay: '0.15s' }}>
                Over the past year, I worked in a <span className="keyword-glow">fast-moving startup environment</span> where I took on high-responsibility roles, including Frontend Team Lead and later management-level responsibilities. This experience shaped my ability to learn fast, adapt under pressure, and take ownership.
              </p>
              <p className="text-lg leading-relaxed blur-reveal" style={{ color: themeClasses.primaryText, animationDelay: '0.3s' }}>
                I believe in <span className="keyword-glow">skill-first growth</span>, ethical work, and building things that last. I'm currently transitioning into freelancing and remote work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 aurora-background relative overflow-hidden" style={{ backgroundColor: themeClasses.background }}>
        <ParticleBackground />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={skillsRef}>
          <h2 className="text-4xl font-bold mb-12 text-center blur-reveal" style={{ color: themeClasses.primaryText }}>Skills</h2>
          <p className="text-lg text-center mb-16 blur-reveal" style={{ color: themeClasses.secondaryText, animationDelay: '0.1s' }}>
            Technologies and tools I work with
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <CardWithGlare className="skill-card group">
              <div className="scan-line"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: themeClasses.accent }}>
                  <span style={{ color: themeClasses.cardBackground, fontSize: '1.5rem' }}>⚛️</span>
                </div>
                <h3 className="text-2xl font-semibold" style={{ color: themeClasses.primaryText }}>Technical Skills</h3>
              </div>
              <div className="w-0 h-0.5 group-hover:w-full transition-all duration-300 ease-out mb-2" style={{ backgroundColor: themeClasses.accent }}></div>
              <div className="flex flex-wrap gap-3">
                {skills.technical.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </CardWithGlare>

            <CardWithGlare className="skill-card group">
              <div className="scan-line"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: themeClasses.accent }}>
                  <span style={{ color: themeClasses.cardBackground, fontSize: '1.5rem' }}>🛠️</span>
                </div>
                <h3 className="text-2xl font-semibold" style={{ color: themeClasses.primaryText }}>Professional Skills</h3>

              </div>
              <div className="w-0 h-0.5 group-hover:w-full transition-all duration-300 ease-out mb-2" style={{ backgroundColor: themeClasses.accent }}></div>
              <div className="flex flex-wrap gap-3">
                {skills.professional.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </CardWithGlare>

            <CardWithGlare className="skill-card group">
              <div className="scan-line"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: themeClasses.accent }}>
                  <span style={{ color: themeClasses.cardBackground, fontSize: '1.5rem' }}>💡</span>
                </div>
                <h3 className="text-2xl font-semibold" style={{ color: themeClasses.primaryText }}>Creative Skills</h3>
              </div>
              <div className="w-0 h-0.5 group-hover:w-full transition-all duration-300 ease-out mb-2" style={{ backgroundColor: themeClasses.accent }}></div>
              <div className="flex flex-wrap gap-3">
                {skills.creative.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </CardWithGlare>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/skills"
              className="px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-center card-glow"
              style={{ backgroundColor: themeClasses.accent, color: themeClasses.cardBackground }}
              onMouseEnter={(e) => e.target.style.backgroundColor = themeClasses.primaryText}
              onMouseLeave={(e) => e.target.style.backgroundColor = themeClasses.accent}
            >
              View All Skills
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 aurora-background relative overflow-hidden" style={{ backgroundColor: themeClasses.background }}>
        <ParticleBackground />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={projectsRef}>
          <h2 className="text-4xl font-bold mb-12 text-center blur-reveal" style={{ color: themeClasses.primaryText }}>Projects</h2>
          <p className="text-lg text-center mb-16 blur-reveal" style={{ color: themeClasses.secondaryText, animationDelay: '0.1s' }}>
            A showcase of my recent work and contributions
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, index) => (
              <div key={project.id} className="project-card glass rounded-xl overflow-hidden">
                <div className="gradient-sweep"></div>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          {projects.length > 4 && (
            <div className="text-center mt-8">
              <Link to="/projects" className="px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                style={{ backgroundColor: themeClasses.accent, color: themeClasses.cardBackground }}
                onMouseEnter={(e) => e.target.style.backgroundColor = themeClasses.primaryText}
                onMouseLeave={(e) => e.target.style.backgroundColor = themeClasses.accent}
              >
                View All Projects
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Research & Case Studies Section */}
      <section id="research" className="py-20 aurora-background relative overflow-hidden" style={{ backgroundColor: themeClasses.background }}>
        <ParticleBackground />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={researchRef}>
          <h2 className="text-4xl font-bold mb-12 text-center blur-reveal" style={{ color: themeClasses.primaryText }}>Research & Case Studies</h2>
          <p className="text-lg text-center mb-16 blur-reveal" style={{ color: themeClasses.secondaryText, animationDelay: '0.1s' }}>
            Structured thinking, analysis, and problem-solving through research-style and case-study content
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {research.map((item, index) => (
              <div key={item.id} className="project-card glass rounded-xl overflow-hidden">
                <div className="gradient-sweep"></div>
                <ResearchCard research={item} />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/research"
              className="px-6 py-3 rounded-lg font-medium transition-all duration-400 card-glow"
              style={{ backgroundColor: themeClasses.accent, color: themeClasses.cardBackground }}
            >
              View All Research
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 aurora-background relative overflow-hidden" style={{ backgroundColor: themeClasses.background }}>
        <ParticleBackground />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={experienceRef}>
          <h2 className="text-4xl font-bold mb-12 text-center blur-reveal" style={{ color: themeClasses.primaryText }}>Experience</h2>
          <p className="text-lg text-center mb-16 blur-reveal" style={{ color: themeClasses.secondaryText, animationDelay: '0.1s' }}>
            My professional journey and career highlights
          </p>

          <div className="flex flex-col lg:flex-row gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="blur-reveal flex-1">
                <CardWithGlare className="group">
                  <div className="flex flex-col mb-4">
                    <div className="stagger-item">
                      <h3 className="text-2xl font-semibold" style={{ color: themeClasses.primaryText }}>{exp.title}</h3>
                      <div className="w-0 h-0.5 group-hover:w-full transition-all duration-300 ease-out mb-2" style={{ backgroundColor: themeClasses.accent }}></div>
                      <p style={{ color: themeClasses.accent, fontWeight: 'medium' }}>{exp.company}</p>
                    </div>
                    <p className="stagger-item mt-2" style={{ color: themeClasses.secondaryText, animationDelay: '0.15s' }}>{exp.period}</p>
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
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{ backgroundColor: themeClasses.border, color: themeClasses.secondaryText }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardWithGlare>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/experience"
              className="px-6 py-3 rounded-lg font-medium transition-all duration-400 card-glow"
              style={{ backgroundColor: themeClasses.accent, color: themeClasses.cardBackground }}
            >
              View All Experience
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20" style={{ backgroundColor: themeClasses.sectionBackground }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in" style={{ color: themeClasses.primaryText }}>Contact</h2>
          <p className="text-lg text-center mb-16 animate-fade-in" style={{ color: themeClasses.secondaryText }}>
            Let's work together and build something amazing
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6" style={{ color: themeClasses.primaryText }}>Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: themeClasses.accent }}>
                    <span style={{ color: themeClasses.cardBackground, fontSize: '1.5rem' }}>📧</span>
                  </div>
                  <div>
                    <a
                      href="mailto:inkiadbinershad@gmail.com"
                      style={{ color: themeClasses.accent, textDecoration: 'none' }}
                      className="transition-colors duration-200"
                      onMouseEnter={(e) => e.target.style.color = themeClasses.primaryText}
                      onMouseLeave={(e) => e.target.style.color = themeClasses.accent}
                    >
                      <p style={{ color: 'inherit', fontWeight: 'medium' }}>Email</p>
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: themeClasses.accent }}>
                    <span style={{ color: themeClasses.cardBackground, fontSize: '1.5rem' }}>📞</span>
                  </div>
                  <div>
                    <a
                      href="tel:01979190001"
                      style={{ color: themeClasses.accent, textDecoration: 'none' }}
                      className="transition-colors duration-200"
                      onMouseEnter={(e) => e.target.style.color = themeClasses.primaryText}
                      onMouseLeave={(e) => e.target.style.color = themeClasses.accent}
                    >
                      <p style={{ color: 'inherit', fontWeight: 'medium' }}>Phone</p>
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: themeClasses.accent }}>
                    <span style={{ color: themeClasses.cardBackground, fontSize: '1.5rem' }}>📘</span>
                  </div>
                  <div>
                    <a
                      href="https://www.facebook.com/Inkiad.Bin.Ershad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: themeClasses.accent, textDecoration: 'none' }}
                      className="transition-colors duration-200"
                      onMouseEnter={(e) => e.target.style.color = themeClasses.primaryText}
                      onMouseLeave={(e) => e.target.style.color = themeClasses.accent}
                    >
                      <p style={{ color: 'inherit', fontWeight: 'medium' }}>Facebook</p>
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: themeClasses.accent }}>
                    <span style={{ color: themeClasses.cardBackground, fontSize: '1.5rem' }}>💼</span>
                  </div>
                  <div>
                    <a
                      href="https://linkedin.com/in/inkiad-bin-ershad-b99374320/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: themeClasses.accent, textDecoration: 'none' }}
                      className="transition-colors duration-200"
                      onMouseEnter={(e) => e.target.style.color = themeClasses.primaryText}
                      onMouseLeave={(e) => e.target.style.color = themeClasses.accent}
                    >
                      <p style={{ color: 'inherit', fontWeight: 'medium' }}>LinkedIn</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="group rounded-xl p-6 animate-fade-in transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:border-blue-500 dark:hover:border-cyan-400" style={{ backgroundColor: themeClasses.cardBackground, borderColor: themeClasses.border, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-medium mb-2" style={{ color: themeClasses.primaryText }}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200"
                    style={{
                      backgroundColor: themeClasses.background,
                      border: `1px solid ${themeClasses.border}`,
                      color: themeClasses.primaryText
                    }}
                    onFocus={(e) => e.target.style.borderColor = themeClasses.accent}
                    onBlur={(e) => e.target.style.borderColor = themeClasses.border}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium mb-2" style={{ color: themeClasses.primaryText }}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200"
                    style={{
                      backgroundColor: themeClasses.background,
                      border: `1px solid ${themeClasses.border}`,
                      color: themeClasses.primaryText
                    }}
                    onFocus={(e) => e.target.style.borderColor = themeClasses.accent}
                    onBlur={(e) => e.target.style.borderColor = themeClasses.border}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-medium mb-2" style={{ color: themeClasses.primaryText }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200 resize-none"
                    style={{
                      backgroundColor: themeClasses.background,
                      border: `1px solid ${themeClasses.border}`,
                      color: themeClasses.primaryText
                    }}
                    onFocus={(e) => e.target.style.borderColor = themeClasses.accent}
                    onBlur={(e) => e.target.style.borderColor = themeClasses.border}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-200"
                  style={{ backgroundColor: themeClasses.accent, color: themeClasses.cardBackground }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = themeClasses.primaryText}
                  onMouseLeave={(e) => e.target.style.backgroundColor = themeClasses.accent}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

