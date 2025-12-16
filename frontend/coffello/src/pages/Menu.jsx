import React from 'react'
import '../style.css';
import { useNavigate } from "react-router-dom";
import overlay from "../images/overlay.png";
import background from "../images/Menu/background.png";
import background2 from "../images/Menu/background2.png";
import drinks from "../images/Menu/drinks.png";
import sweets from "../images/Menu/sweets.png";
import navigate_drinks from "../images/Menu/navigate-drinks.png";
import navigate_sweets from "../images/Menu/navigate-sweets.png";
const Menu = () => {
  const navigate = useNavigate();
  return (
    <div id='Menu' className='relative top-[50px] sm:top-[60px] lg:top-20 w-full h-screen bg-[#FEF3B1]'>
        <div
          className="fixed top-0 left-0 w-full min-h-screen pointer-events-none z-9"
          style={{
            backgroundImage: `url(${overlay})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'top left',
            backgroundSize: 'auto',
          }}
        ></div>
        <div className='flex flex-row h-screen overflow-hidden'>

            {/* LEFT SIDE */}
            <div className='relative bg-[#9F2B2C] w-1/2 h-full'>

                {/* Background */}
                <img 
                    src={background} 
                    className='absolute inset-0 w-full h-full object-cover' 
                    alt="" 
                />

                {/* Centered Drinks Image */}
                <div className='absolute inset-0 flex items-center justify-center z-10'>
                  <div className="relative inline-block">
                    <img src={drinks} alt="" />
                    <img
                      onClick={() => navigate(`/Drinks`)}
                      src={navigate_drinks}
                      className="absolute bottom-3 right-3 w-20 h-20 cursor-pointer hover:scale-105 transition-transform duration-300"
                      alt=""
                    />
                  </div>
                </div>

            </div>

            {/* RIGHT SIDE */}
            <div className='relative w-1/2 h-full'>
                {/* Background */}
                <img 
                    src={background2} 
                    className='absolute inset-0 w-full h-full object-cover' 
                    alt="" 
                />

                {/* Centered Drinks Image */}
                <div className='absolute inset-0 flex items-center justify-center z-10'>
                  <div className="relative inline-block">
                    <img src={sweets} alt="" />
                    <img 
                      onClick={()=>navigate(`/Sweets`)} 
                      src={navigate_sweets} 
                      className='absolute bottom-3 right-3 w-20 h-20 cursor-pointer hover:scale-105 transition-transform duration-300' 
                      alt="" 
                    />
                  </div>
                </div>
            </div>

            </div>
    </div>
  )
}

export default Menu