import React from 'react';
import { useNavigate,useLocation } from "react-router-dom";
import overlay from "../images/overlay.png";

const Navigationbar = ({ setCurrentPage, currentPage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const sections = [
    { path: "/", label: "Home" },
    { path: "/Menu", label: "Menu" },
    { path: "/NewDelights", label: "New Delights" },
    { path: "/AboutUs", label: "About Us" },
  ];
  
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
           {sections.map(({ path, label }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={
                currentPath === path
                  ? "text-[#E0A03F] text-xl sm:text-4xl font-black font-['Simonetta']"
                  : "hover:text-[#E0A03F] transition-colors duration-200 text-[#FEF3B1] text-xl sm:text-4xl font-black font-['Simonetta']"
              }
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
