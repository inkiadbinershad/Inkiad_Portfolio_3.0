import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../App';
import useInView from '../hooks/useInView';
import profileImg from '../assets/profile.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { themeClasses } = useContext(ThemeContext);
  const headingRef = useInView();
  const cardRef = useInView();
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    gsap.to(img, {
      y: -40,
      ease: 'none',
      scrollTrigger: {
        trigger: img,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    return () => ScrollTrigger.getAll().forEach(st => st.kill());
  }, []);


  return (
    <div style={{ backgroundColor: themeClasses.background }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div ref={headingRef}>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center blur-reveal" style={{ color: themeClasses.primaryText }}>About Me</h1>
        </div>
        <div ref={cardRef} className="rounded-xl p-8 blur-reveal transition-all duration-300 ease-out cursor-pointer card-glow" style={{ backgroundColor: themeClasses.cardBackground, border: `1px solid ${themeClasses.border}`, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                ref={imgRef}
                src={profileImg} 
                alt="Profile" 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full object-cover shadow-lg blur-reveal card-glow" 
                style={{ backgroundColor: themeClasses.accent }} 
              />
            </div>
            <div className="space-y-6">
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed blur-reveal" style={{ color: themeClasses.primaryText }}>
                I'm a <span className="keyword-glow">Computer Science student</span> from Bangladesh with real-world experience in startup leadership, frontend development, and digital content creation.
              </p>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed blur-reveal" style={{ color: themeClasses.primaryText, animationDelay: '0.15s' }}>
                Over the past year, I worked in a <span className="keyword-glow">fast-moving startup environment</span> where I took on high-responsibility roles, including Frontend Team Lead and later management-level responsibilities. This experience shaped my ability to learn fast, adapt under pressure, and take ownership.
              </p>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed blur-reveal" style={{ color: themeClasses.primaryText, animationDelay: '0.3s' }}>
                I believe in <span className="keyword-glow">skill-first growth</span>, ethical work, and building things that last. I'm currently transitioning into freelancing and remote work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
