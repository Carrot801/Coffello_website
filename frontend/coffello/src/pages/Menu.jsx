import React from 'react'
import '../style.css';
import overlay from "../images/overlay.png";
import background from "../images/Menu/background.png";
import background2 from "../images/Menu/background2.png";
const Menu = () => {
  return (
    <div className='overlay w-full h-screen bg-[#FEF3B1]'>
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
            <div className='bg-[#9F2B2C] w-1/2 h-full'>
                <img src={background} className='w-full h-full' alt="" />
            </div>
            <div className='w-1/2 h-full'>
                <img src={background2} className='w-full h-full' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Menu