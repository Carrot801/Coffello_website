import React, { useRef, useEffect } from "react";
import '../style.css';
import overlay from "../images/overlay.png";
import taste from "../images/taste-sweet.png"; 
import bs_bcg from "../images/best-sales-bcg.png";
import cupcakes from "../images/cupcakes.png";
import sweetEscape from "../images/sweet-escape.png";
import wakeUp from "../images/wake-up.png";
import coffee from "../images/coffee.png";
import strawberry from "../images/strawbery-menu.png";
import cookies from "../images/Best Sales/cookies.png";
import ice_shake from "../images/Best Sales/ice-shake.png";
import cake from "../images/Best Sales/cake.png";
import { HeaderAnimation } from '../components/HeaderAnimation';
import { Box } from '../components/Box';
import { Carousel } from '../components/Carousel';

const Home = () => {
  const images = [taste, cupcakes, sweetEscape, wakeUp, coffee, strawberry];
  const bestSalesImages = [ice_shake,cake,cookies];
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  // Mouse drag
  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollStart.current = containerRef.current.scrollLeft;
    containerRef.current.classList.add("cursor-grabbing");
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const walk = e.pageX - startX.current;
    containerRef.current.scrollLeft = scrollStart.current - walk;
  };

  const stopDrag = () => {
    isDragging.current = false;
    containerRef.current.classList.remove("cursor-grabbing");
  };

  // Touch drag
  const onTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX;
    scrollStart.current = containerRef.current.scrollLeft;
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    const walk = e.touches[0].pageX - startX.current;
    containerRef.current.scrollLeft = scrollStart.current - walk;
  };

  const onTouchEnd = () => {
    isDragging.current = false;
  };

  // Wheel scroll (vertical scroll moves horizontal)
  useEffect(() => {
    const container = containerRef.current;
    const onWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };
    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div id="/" className='bg-[#FEF3B1] w-full h-full'>
    <div
      className="fixed top-0 left-0 w-full min-h-screen pointer-events-none z-9"
      style={{
        backgroundImage: `url(${overlay})`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'top left',
        backgroundSize: 'auto',
      }}
    ></div>

      <div className="background relative w-full h-screen flex items-center justify-center">
        
        <HeaderAnimation stroke={0.3} text="Coffello" className="name-animation-instance" />
      </div>

      <Box className="box" />
       {/* Image Grid */}
      <div className="h-screen w-full flex items-center justify-center">
        <div className=" h-screen w-full flex items-center justify-center p-4">
  <div 
    className=" w-full h-full max-w-[1240px] max-h-[812px] grid gap-3"
    style={{
      gridTemplateColumns: "repeat(18, 1fr)",
      gridTemplateRows: "repeat(20, 1fr)"
    }}
  >
    <div className="col-span-6 row-span-14 rounded-2xl overflow-hidden flex items-center justify-center">
      <img src={taste} alt="" className="object-cover w-full h-full"/>
    </div>

    <div className="col-span-7 row-span-6 rounded-2xl overflow-hidden flex items-center justify-center">
      <img src={wakeUp} alt="" className="object-cover w-full h-full"/>
    </div>

    <div className="col-span-5 row-span-20 rounded-2xl overflow-hidden flex items-center justify-center">
      <img src={sweetEscape} alt="" className="object-cover w-full h-full"/>
    </div>

    <div className="col-span-7 row-span-6 rounded-2xl overflow-hidden flex items-center justify-center">
      <img src={coffee} alt="" className="object-cover w-full h-full"/>
    </div>

    <div className="col-span-9 row-span-7 rounded-2xl overflow-hidden flex items-center justify-center">
      <img src={cupcakes} alt="" className="object-cover w-full h-full"/>
    </div>

    <div className="col-span-4 row-span-6 rounded-2xl overflow-hidden flex items-center justify-center">
      <img src={strawberry} alt="" className="object-cover w-full h-full"/>
    </div>
  </div>
</div>

      </div>

      <Box className="box" />

      {/* Best Sales Carousel */}
      <div className="relative flex w-full h-screen flex-col items-center pt-10 z-10">
        <div className="relative w-full justify-center flex h-[140px]">
          <HeaderAnimation
            text="Best Sales"
            size="7"
            stroke={0.3}
            shadow={false}
            className="name-animation-instance"
          />
        </div>

        <div
          ref={containerRef}
          className='relative flex flex-row gap-[90px] w-[1320px] h-[500px] overflow-x-auto top-5 scroll-smooth cursor-grab no-scrollbar select-none px-10'
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {bestSalesImages.map((img, index) => (
            <Carousel key={index} image={img} background={bs_bcg} />
          ))}
        </div>
      </div>
      <div className="bg-[#9F2B2C] w-full h-[413px] relative justify-center">
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
  );
};

export default Home;
