import React from 'react'
import overlay from "../images/overlay.png";
import cafe from "../images/About us/cafe.png";
import cats from "../images/About us/cats.png";
import dog from "../images/About us/dog.png";
import dogandcat from "../images/About us/dogandcat.png";
import vector from "../images/About us/vector.png";
import vector1 from "../images/About us/vector1.png";
import worker from "../images/About us/worker.png";
import overlay1 from "../images/Drinks/overlay.png";
import { HeaderAnimation } from '../components/HeaderAnimation';
export const AboutUs = () => {
  return (
    <div className='flex flex-col h-full w-full'>
      <div
        className="fixed top-0 left-0 w-full min-h-screen pointer-events-none z-1"
        style={{
          backgroundImage: `url(${overlay})`,
          backgroundRepeat: 'repeat',
          backgroundPosition: 'top left',
          backgroundSize: 'auto',
        }}
      ></div>
      <div className='bg-[#FEF3B1] relative w-full h-screen'>
        <div className='bg-[#FEF3B1] relative w-full  top-[50px] sm:top-[60px] lg:top-20'>

          <img src={vector1}
           className=' inset-0 absolute m-auto mt-5 m:w-[90%] lg:w-[60%]' 
           alt="" />
        
          <div className="flex flex-wrap">
            <div
              className="card-delights-description relative flex flex-col items-center justify-center sm:w-[70vh] sm:h-[50vh] left-[28vh] top-[34vh] z-1"
            >
              <div className="relative flex w-full items-center justify-center ">
                <HeaderAnimation 
                  text={`Step inside and step back in time.
Our café is a celebration of flavors,
memories, and moments — where
every espresso, pastry, and sweet
bite tells a story. We mix tradition
with a dash of creativity, crafting
experiences that feel like home.`}
                  stroke={0}
                  size={2.4}
                  align='left'
                  color="#E0A03F"
                  font="Simonetta"
                  fontWeight={600}
                  shadow={false}
                />
              </div>
            </div>
            <div className='card-delights-description relative flex justify-center mt-20 sm:w-[58vh]  sm:h-[50vh] rotate-[-3deg] left-[50vh] lg:left-[40vh] z-1'>
              <div className="w-[92%] h-[74%] overflow-hidden top-[4%] relative">
                <img 
                  src={worker}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <img
                src={overlay1}
                className="absolute inset-0 rounded-2xl w-full h-full object-cover mix-blend-screen"
                alt=""
              />
            </div>
            <div className='card-delights-description relative flex justify-center mt-20 sm:w-[45vh]  sm:h-[60vh] rotate-[7deg] top-[18vh] left-[45vh] lg:left-[16vh] z-1 '>
              <div className="w-[92%] h-[74%] overflow-hidden top-[4%] relative">
                <img
                  src={cafe}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <img
                src={overlay1}
                className="absolute inset-0 rounded-2xl w-full h-full object-cover mix-blend-screen"
                alt=""
              />
            </div>
            
            
          </div>
          </div>
      </div>
      <div className='w-full h-screen bg-[#9F2B2C] flex'>


      </div>
      <div className='w-full h-screen bg-[#FEF3B1] flex relative'>
        <img src={vector}
        className=' inset-0 absolute m-auto m:w-[90%] lg:w-[64%]' 
        alt="" />
        <div className="relative">
            <div
              className="card-delights-description absolute flex flex-col items-center sm:w-[70vh] sm:h-[48vh] left-[28vh] top-[48vh] z-2"
            >
            <HeaderAnimation className="top-5" text={"Furry Friends Welcome"} font='Anaheim' stroke={0} size={3} color='#9F2B2C' fontWeight={900} shadow={false} />
              
              <div className="relative flex w-full mt-25 justify-center ">
                <HeaderAnimation 
                  text={`Step inside and step back in time.
Our café is a celebration of flavors,
memories, and moments — where
every espresso, pastry, and sweet
bite tells a story. We mix tradition
with a dash of creativity, crafting
experiences that feel like home.`}
                  stroke={0}
                  size={2.4}
                  align='left'
                  color="#E0A03F"
                  font="Simonetta"
                  fontWeight={600}
                  shadow={false}
                />
              </div>
            </div>
            <div className='card-delights-description absolute flex justify-center mt-20 sm:w-[52vh]  sm:h-[38vh] rotate-[-3deg] left-[54vh] lg:left-[50vh] top-[2vh] z-3'>
              <div className="w-[92%] h-[74%] overflow-hidden top-[4%] relative">
                <img 
                  src={dogandcat}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <img
                src={overlay1}
                className="absolute inset-0 rounded-2xl w-full h-full object-cover mix-blend-screen"
                alt=""
              />
            </div>
            
            <div className='card-delights-description absolute flex justify-center mt-20 sm:w-[38vh]  sm:h-[48vh] rotate-[6deg]  left-[40vh] lg:left-[130vh] top-[40vh] z-1 '>
              <div className="w-[92%] h-[74%] overflow-hidden top-[4%] relative">
                <img
                  src={cats}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <img
                src={overlay1}
                className="absolute inset-0 rounded-2xl w-full h-full object-cover mix-blend-screen"
                alt=""
              />
            </div>
            <div className='card-delights-description absolute flex justify-center mt-20 sm:w-[42vh]  sm:h-[55vh] rotate-[3deg] top-[4vh] left-[45vh] lg:left-[98vh] z-1 '>
              <div className="w-[92%] h-[74%] overflow-hidden top-[4%] relative">
                <img
                  src={dog}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <img
                src={overlay1}
                className="absolute inset-0 rounded-2xl w-full h-full object-cover mix-blend-screen"
                alt=""
              />
            </div>
          </div>
      </div>
       <div className="bg-[#9F2B2C] w-full h-[490px] relative justify-center">
              <div className="flex flex-row w-full h-[180px] items-center justify-center pt-10 z-101">
                <div className="flex flex-col w-[400px] h-full items-center justify-center space-y-[5vw]">
                  <HeaderAnimation size={3} font={'Simonetta'} stroke={0} shadow={false} text={"Address"} color="#FEF3B1" fontWeight={900} className="name-animation-instance h-[1px]"  />
                  <HeaderAnimation size={2} font={'Anaheim'} stroke={0} shadow={false} text={"Piotrokowska 202\n90-234 Łódź"} color="#FEF3B1" className="name-animation-instance h-[1px]"  />
                </div>
                <div className="flex flex-col w-[400px] h-full items-center justify-center space-y-[5vw]">
                  <HeaderAnimation size={3} font={'Simonetta'} stroke={0} shadow={false} text={"Working hours"} color="#FEF3B1" fontWeight={900} className="name-animation-instance h-[1px]"  />
                  <HeaderAnimation size={2} font={'Anaheim'} stroke={0} shadow={false} text={"Niedziela-Czwartek: 10-20 \nPiątek-Sobota: 10-21"} color="#FEF3B1" className="name-animation-instance h-[1px]"  />
                </div>
                <div className="flex flex-col w-[400px] h-full items-center justify-center space-y-[5vw]">
                  <HeaderAnimation size={3} font={'Simonetta'} stroke={0} shadow={false} text={"Contact"} color="#FEF3B1" fontWeight={900} className="name-animation-instance h-[1px]"  />
                  <HeaderAnimation size={2} font={'Anaheim'} stroke={0} shadow={false} text={"coffello@gmail.com\n+48 345 293 842"} color="#FEF3B1" className="name-animation-instance h-[1px]"  />
                </div>
              </div>
              <div className="relative w-full h-auto flex top-5 justify-center">       
                <HeaderAnimation size={10} stroke={0} shadow={false} text="Coffello" color="#E0A03F" className="name-animation-instance"  />
              </div>
            </div>
    </div>
  )
}
