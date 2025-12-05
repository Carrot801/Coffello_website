import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import overlay from "../images/overlay.png";

const Navigationbar = ({ setCurrentPage, currentPage }) => {
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();

  // Common Tailwind classes
  const linkClass = "hover:text-[#E0A03F] transition-colors duration-200 text-[#FEF3B1] text-xl sm:text-4xl font-black font-['Simonetta']";
  const activeLinkClass = "text-[#E0A03F] text-xl sm:text-4xl font-black font-['Simonetta']";

  // Scroll spy
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'about-section', 'gallery-section', 'contact-section'];
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el ) {
          setActiveSection(id);
          if (setCurrentPage) setCurrentPage(id); // update currentPage consistently
        }
      });
    };
    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [setCurrentPage]);

  // Smooth scroll to section
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
      setCurrentPage(id);
    }
  };

  return (
    <nav className={`h-[50px] sm:h-[60px] lg:h-[80px] bg-[#9F2B2C] p-1 border-[5px] border-[#FEF3B1] shadow-lg fixed top-0 left-0 right-0 z-50 transform transition-transform duration-500 }`}>
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `url(${overlay})`,
          backgroundRepeat: 'repeat',
          backgroundPosition: 'top left',
          backgroundSize: 'auto',
        }}
      ></div>
      <div className="h-[30px] w-[20px] sm:h-[30px] sm:w-[30px] flex absolute top-0 left-0" onClick={() => navigate("/admin")}></div>
      <div className="container mx-10 flex items-center justify-start h-full">
        <div className="flex items-center h-full space-x-4 sm:space-x-6">
          {['home', 'About', 'Menu', 'Contact'].map(section => (
            <a
              key={section}
              href="#"
              onClick={(e) => { e.preventDefault(); navigate(`${section}`); }}
              className={ activeSection === section ? activeLinkClass : linkClass}
            >
              {section === 'home' ? 'Home' : section === 'About' ? 'About' : section === 'Menu' ? 'Menu' : 'Contact'}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
