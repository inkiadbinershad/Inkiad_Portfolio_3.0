import { useContext } from 'react';
import { ThemeContext } from '../App';
import Navbar from './Navbar';
import Footer from './Footer';
import ClickSpark from './ClickSpark';
import CursorTrail from './CursorTrail';
import PageLoader from './PageLoader';

const Layout = ({ isLoading, children }) => {
  const { themeClasses } = useContext(ThemeContext);

  return (
    <ClickSpark>
      <div className="overflow-x-hidden min-h-screen flex flex-col" style={{ backgroundColor: themeClasses.background }}>
        <PageLoader isLoading={isLoading} />
        <CursorTrail />

        <Navbar />

        <main className="flex-1 min-h-0">
          {children}
        </main>

        <Footer />
      </div>
    </ClickSpark>
  );
};

export default Layout;
