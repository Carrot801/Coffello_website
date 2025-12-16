import React from 'react'
import { HeaderAnimation } from '../components/HeaderAnimation';
import overlay from "../images/overlay.png";
import expresso from "../images/Drinks/expresso.png";
import overlay1 from "../images/Drinks/overlay.png";
import FlippableCard from '../components/FlippableCard';
const Drinks = () => {
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
        
        <div className='w-[1240px]  h-auto mx-auto'>
            <div className='grid grid-cols-3 gap-x-[117px] gap-y-14 justify-center'>
                <div className='card flex'>
                    <div className='card-background items-center justify-center flex relative'>
                        <img
                            src={overlay1} 
                            className="absolute rounded-2xl w-full h-full object-cover mix-blend-screen z-10"
                            alt="" 
                        />
                        <img
                            src={expresso}
                            alt=""
                            className="relative z-10 "
                        />
                    </div>
                    <div className='card-text-container'>
                        <svg viewBox="0 0 auto 45">
                            <text x="0" y="30" font-family="Simonetta" font-size="36" font-weight="900" fill="#E0A03F" stroke="#9F2B2C" stroke-width="2" paint-order="stroke">
                                Espresso
                            </text>
                        </svg>
                        <svg viewBox="0 0 auto 45"  >
                            <text  x="100%" y="30" text-anchor="end" font-family="Simonetta" font-size="36" font-weight="900" fill="#E0A03F" stroke="#9F2B2C" stroke-width="2" paint-order="stroke">
                                3$
                            </text>
                        </svg>
                    </div>
                </div>
                <FlippableCard ingredients={['Sugar','Coffee','Water','Milk']} />
                <div className='card'>
                    <div className='card-background'>

                    </div>
                </div>
                <div className='card'>
                    <div className='card-background'>

                    </div>
                </div>
                <div className='card'>
                    <div className='card-background'>

                    </div>
                </div>
            </div>
           
        </div>

    </div>
  )
}

export default Drinks