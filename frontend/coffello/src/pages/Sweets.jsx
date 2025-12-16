import React from 'react'
import { HeaderAnimation } from '../components/HeaderAnimation';
import overlay from "../images/overlay.png";
import expresso from "../images/Drinks/expresso.png";
import overlay1 from "../images/Drinks/overlay.png";
import FlippableCard from '../components/FlippableCard';
const Sweets = () => {
  return (
    <div className='relative top-[50px] sm:top-[60px] lg:top-20 bg-[#FEF3B1] w-full h-full justify-center pt-[68px]'>
        <div
          className="fixed top-0 left-0 w-full min-h-screen pointer-events-none z-9"
          style={{
            backgroundImage: `url(${overlay})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'top left',
            backgroundSize: 'auto',
          }}
        ></div>
        
        <div className='w-[1240px] md:h-[590px] lg:j-[680px] min-h-screen h-auto mx-auto'>
            <div className='grid grid-cols-3 gap-x-[117px] gap-y-14 justify-center'>
                
                <FlippableCard outlineColor='#9F2B2C' innerGradientEnd='#9F2B2C'/>
                <FlippableCard outlineColor='#9F2B2C' innerGradientEnd='#9F2B2C'/>
                <FlippableCard outlineColor='#9F2B2C' innerGradientEnd='#9F2B2C'/>  
                <FlippableCard outlineColor='#9F2B2C' innerGradientEnd='#9F2B2C'/>
                <FlippableCard outlineColor='#9F2B2C' innerGradientEnd='#9F2B2C'/>
                <FlippableCard outlineColor='#9F2B2C' innerGradientEnd='#9F2B2C'/>
            </div>
           
        </div>

    </div>
  )
}

export default Sweets