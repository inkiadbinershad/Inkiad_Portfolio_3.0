import logo from '../assets/profile.png';

const Footer = () => {
  return (
    <footer className="bg-[#0B0F14] border-t border-[#1F2933] relative overflow-hidden">
      <div className="footer-watermark hidden sm:block">
        <img src={logo} alt="logo watermark" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="text-center text-[#9CA3AF] text-sm">
          Building with responsibility, learning with humility.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
