import { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import useInView from '../hooks/useInView';

const Contact = () => {
  const { themeClasses } = useContext(ThemeContext);
  const formRef = useInView();
  const contactRef = useInView();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const contactInfo = [
    {
      label: 'Email',
      value: 'inkiadbinershad@gmail.com',
      icon: '📧',
      link: 'mailto:inkiadbinershad@gmail.com'
    },
    {
      label: 'Phone',
      value: '01979190001',
      icon: '📞',
      link: 'tel:01979190001'
    },
    {
      label: 'Facebook',
      value: 'facebook.com/Inkiad.Bin.Ershad',
      icon: '📘',
      link: 'https://www.facebook.com/Inkiad.Bin.Ershad/'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/inkiad-bin-ershad-b99374320',
      icon: '💼',
      link: 'https://linkedin.com/in/inkiad-bin-ershad-b99374320/'
    }
  ];

  return (
    <div style={{ backgroundColor: themeClasses.background, minHeight: '100vh' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 text-center blur-reveal" style={{ color: themeClasses.primaryText }}>Contact</h1>
        <p className="text-sm sm:text-base lg:text-lg text-center mb-16 blur-reveal" style={{ color: themeClasses.secondaryText, animationDelay: '0.1s' }}>
          Let's work together and build something amazing
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div ref={contactRef} className="blur-reveal">
            <h2 className="text-lg sm:text-xl font-semibold mb-6 stagger-item" style={{ color: themeClasses.primaryText }}>Get In Touch</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center blur-reveal" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-lg card-glow" style={{ backgroundColor: themeClasses.accent }}>
                    <span style={{ color: themeClasses.cardBackground, fontSize: '1.5rem' }}>{info.icon}</span>
                  </div>
                  <div>
                    <p style={{ color: themeClasses.primaryText, fontWeight: 'medium' }}>{info.label}:</p>
                    <a
                      href={info.link}
                      style={{ color: themeClasses.accent, transition: 'color 0.3s ease' }}
                      className="inline-block min-h-[44px] py-2 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={formRef} className="rounded-xl p-6 blur-reveal transition-all duration-300 ease-out card-glow" style={{ backgroundColor: themeClasses.cardBackground, border: `1px solid ${themeClasses.border}`, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
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
    </div>
  );
};

export default Contact;
