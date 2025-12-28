import React from 'react'
import ice_shake from "../images/Best Sales/ice-shake.png";
import strawberryCroissant from "../images/Sweets/strawberry-croissant.png";
import { HeaderAnimation } from '../components/HeaderAnimation';
import overlay from "../images/overlay.png";
import overlay1 from "../images/Drinks/overlay.png";

import { transform } from 'framer-motion';
export const NewDelights = () => {
  return (
    <div className='bg-[#FEF3B1] w-full min-h-screen h-auto top-[50px] sm:top-[60px] lg:top-20 relative'
    style={{
            backgroundImage: `url(${overlay})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'top left',
            backgroundSize: 'auto',
          }}
      >
<div className="flex flex-wrap justify-center gap-x-12 gap-y-12 max-w-[140vh] mx-auto pb-20">        <div className='card-delights relative flex items-center justify-center mt-20 sm:w-[60vh]  sm:h-[80vh] '>
          <img
            src={overlay1}
            className="absolute inset-0 rounded-2xl w-full h-full object-cover mix-blend-screen"
            alt=""
          />
          <img src={ice_shake} className='w-[70%] z-1' alt="" />
        </div>
        <div
         className="card-delights-description relative flex flex-col items-center mt-20 sm:w-[66vh] sm:h-[80vh] gap-6">
            <img
              src={overlay1}
              className="absolute inset-0 rounded-2xl w-full h-full object-cover mix-blend-screen"
              alt=""
            />
            <HeaderAnimation text={"Chocolate\nFrappuccino"} stroke={0.01} size={4}  fontWeight={600} shadow={false} />
            <div className='relative top-50 w-full text-lg font-medium mt-4 justify-center flex'>
              < HeaderAnimation stroke={0} size={1.5} color='#E0A03F' font='Simonetta' align='left' fontWeight={600} shadow={false}
               text={"Cool, creamy, and irresistibly retro — \nour Chocolate Frappuccino is a sweet\n trip back in time. \nMade with real cocoa, smooth\n espresso, and milk whipped to\n perfection, it’s finished with\n homemade whipped cream and a\n drizzle of dark chocolate syrup.\nSip it slow, and let every taste\n remind you of old-school milk bars\n and sunny afternoons at the café\n counter."}  />
            </div>
        </div>
        <div
         className="card-delights-description relative flex flex-col items-center mt-20 sm:w-[66vh] sm:h-[80vh] gap-6">
            <img
              src={overlay1}
              className="absolute inset-0 rounded-2xl w-full h-full object-cover mix-blend-screen"
              alt=""
            />
            <HeaderAnimation text={"Chocolate\nFrappuccino"} stroke={0.01} size={4}  fontWeight={600} shadow={false} />
            <div className='relative top-50 w-full text-lg font-medium mt-4 justify-center flex'>
              < HeaderAnimation align='left' stroke={0} size={1.5} color='#E0A03F' font='Simonetta'  fontWeight={600} shadow={false} text={"Cool, creamy, and irresistibly retro — \nour Chocolate Frappuccino is a sweet\n trip back in time. \nMade with real cocoa, smooth\n espresso, and milk whipped to\n perfection, it’s finished with\n homemade whipped cream and a\n drizzle of dark chocolate syrup.\nSip it slow, and let every taste\n remind you of old-school milk bars\n and sunny afternoons at the café\n counter."}  />
            </div>
        </div>
        <div className='card-delights relative flex items-center justify-center mt-20 sm:w-[60vh]  sm:h-[80vh] '>
          <img
            src={overlay1}
            className="absolute inset-0 rounded-2xl w-full h-full object-cover mix-blend-screen"
            alt=""
          />
          <img 
            src={strawberryCroissant} 
            className='w-[100%]  z-1'
            alt="" />

        </div>
      </div>

    </div>
  )
}
