import { useState, useEffect, createContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Research from './pages/Research';
import Contact from './pages/Contact';
import ClickSpark from './components/ClickSpark';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const themeClasses = {
    background: theme === 'dark' ? '#0F172A' : '#F8FAFC',
    sectionBackground: theme === 'dark' ? '#020617' : '#FFFFFF',
    cardBackground: theme === 'dark' ? '#020617' : '#FFFFFF',
    primaryText: theme === 'dark' ? '#E5E7EB' : '#0F172A',
    secondaryText: theme === 'dark' ? '#9CA3AF' : '#475569',
    accent: theme === 'dark' ? '#38BDF8' : '#2563EB',
    border: theme === 'dark' ? '#1E293B' : '#E2E8F0'
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeClasses }}>
      <ClickSpark>
        <div className="min-h-screen" style={{ backgroundColor: themeClasses.background }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </ClickSpark>
    </ThemeContext.Provider>
  );
}

export default App;
