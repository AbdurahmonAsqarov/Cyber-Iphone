import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Css
import "./Main.css"
// Icons
import { GiSmartphone } from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";
import { LiaCameraSolid } from "react-icons/lia";
import { PiHeadphones } from "react-icons/pi";  
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
const Main = () => {
    const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };
  return (
    <div className='container'>
     <h1 id='5' className='text-4xl absolute mb-[50px] ml-[100px] font-semibold'>Browse By Category</h1>
    <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={true} 
        spaceBetween={100}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide> <div className='w-[100x] h-[100px] mb-[200px]' >
                    <NavLink to="/category">< GiSmartphone className='w-[52px] h-[52px] ' /></NavLink>
                    <NavLink to="/category">Phones</NavLink>
                </div></SwiperSlide>
        <SwiperSlide>  <div className='w-[150x] h-[150px] mb-[150px] ' >
                    <NavLink to="/category">< BsSmartwatch className='w-[48px] h-[48px] items-center text-center ml-[15px] mb-[10px]  '/></NavLink>
                    <NavLink to="/category">Smart Watches</NavLink>
                </div></SwiperSlide>
        <SwiperSlide><div className='w-[150x] h-[150px] mb-[150px]' >
                    <NavLink to="/category">< LiaCameraSolid className='w-[48px] h-[48px] items-center text-center ml-[15px] mb-[10px]'/></NavLink>
                    <NavLink to="/category">Cameras</NavLink>
                </div></SwiperSlide>
        <SwiperSlide>  <div className='w-[150x] h-[150px] mb-[140px]' >
                   <NavLink to="/category"> < PiHeadphones className='w-[48px] h-[48px] items-center text-center ml-[15px] mb-[10px]'/></NavLink>
                    <NavLink to="/category">Headphones</NavLink>
                </div></SwiperSlide>
        <SwiperSlide>
        <div className='w-[150x] h-[150px] mb-[130px]' >
                    <NavLink to="/category">< HiOutlineDesktopComputer className='w-[48px] h-[48px] items-center text-center ml-[15px] mb-[10px] '/></NavLink>
                    <NavLink to="/category">Computers</NavLink>
                </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[150x] h-[150px] mb-[140px] ' >
                    < SiYoutubegaming className='w-[48px] h-[48px] mb-[10px]' />
                    <h1>Gaming</h1>
                    </div>
        </SwiperSlide>
      </Swiper>
        {/* <div className="mx-[200px] my-[100px]">
            <div className='flex space-x-[770px] '>
                <h1 className='text-2xl font-semibold'>Browse By Category</h1> */}
            {/* <div className='flex'>
                < IoIosArrowBack className='w-[32px] h-[32px] mr-[15px] ' />
                < IoIosArrowForward  className='w-[32px] h-[32px] ' />
            </div> */}
            {/* </div> */}
            {/* <div className="flex gap-[100px] mx-[30px] mt-[50px]">
                </div> */}
        {/* </div> */}
    </div>
  )
}

export default Main