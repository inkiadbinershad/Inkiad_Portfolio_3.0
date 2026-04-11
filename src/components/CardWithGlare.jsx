import { useContext } from 'react';
import { ThemeContext } from '../App';
import GlareHover from './GlareHover';

const CardWithGlare = ({ children, className = '', style = {} }) => {
  const { themeClasses } = useContext(ThemeContext);

  return (
    <GlareHover>
      <div 
        className={`rounded-xl p-6 transition-all duration-300 ease-out border card-glow relative overflow-hidden ${className}`}
        style={{
          position: 'relative',
          zIndex: 0,
          backgroundColor: themeClasses.cardBackground,
          borderColor: themeClasses.border,
          border: `1px solid ${themeClasses.border}`,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
          ...style
        }}
      >
        {children}
      </div>
    </GlareHover>
  );
};

export default CardWithGlare;

