import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useContext, useRef } from 'react';
import { ThemeContext } from '../App';
import gsap from 'gsap';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, themeClasses } = useContext(ThemeContext);

  const navRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled !== (lastScrollY > 50)) {
        gsap.to(navRef.current, {
          height: scrolled ? 48 : 64,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(logoRef.current, {
          fontSize: scrolled ? '0.9rem' : '1.25rem',
          duration: 0.3,
          ease: 'power2.out'
        });
      }
      lastScrollY = window.scrollY;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/experience', label: 'Experience' },
    { to: '/research', label: 'Research' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
<nav ref={navRef} className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'backdrop-blur-md border-b shadow-lg'
        : 'backdrop-blur-sm border-b'
    }`} style={{
      backgroundColor: isScrolled ? `${themeClasses.cardBackground}95` : `${themeClasses.cardBackground}90`,
      borderColor: themeClasses.border,
      height: 64
    }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            ref={logoRef}
            to="/"
            className="font-bold text-sm sm:text-base md:text-xl transition-colors duration-300 animate-fade-in"
            style={{ color: themeClasses.primaryText }}
          >
            INKIAD BIN ERSHAD RAFEY
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm font-medium transition-all duration-300 animate-fade-in min-h-[44px] flex items-center ${
                  location.pathname === link.to
                    ? `after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:rounded-full`
                    : ''
                }`}
                style={{
                  color: location.pathname === link.to ? themeClasses.accent : themeClasses.secondaryText,
                  '--tw-hover-text-color': themeClasses.primaryText
                }}
                onMouseEnter={(e) => e.target.style.color = themeClasses.primaryText}
                onMouseLeave={(e) => e.target.style.color = location.pathname === link.to ? themeClasses.accent : themeClasses.secondaryText}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2 rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: themeClasses.cardBackground, border: `1px solid ${themeClasses.border}` }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile hamburger + theme toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2 rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: themeClasses.cardBackground, border: `1px solid ${themeClasses.border}` }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-lg"
              style={{ color: '#38BDF8', border: `1px solid ${themeClasses.border}` }}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium px-3 py-3 rounded-lg transition-all duration-300 min-h-[44px] flex items-center"
                  style={{
                    color: location.pathname === link.to ? themeClasses.accent : themeClasses.secondaryText,
                    backgroundColor: location.pathname === link.to ? `${themeClasses.accent}15` : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = themeClasses.primaryText;
                    e.target.style.backgroundColor = `${themeClasses.accent}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = location.pathname === link.to ? themeClasses.accent : themeClasses.secondaryText;
                    e.target.style.backgroundColor = location.pathname === link.to ? `${themeClasses.accent}15` : 'transparent';
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

