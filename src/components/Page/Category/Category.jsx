import React, { useContext,useRef, useState } from 'react'
import { UserContext } from '../../context/Context';
import { NavLink } from 'react-router-dom';
// Icons
import { IoIosArrowForward,IoIosArrowUp  } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
    import { IoIosHeartEmpty } from "react-icons/io";
    import { IoMdHeart } from "react-icons/io";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import './Category.css'
const Category = () => {
  const [likedItems, setLikedItems] = useState([]);

  const handleLikeToggle = (itemId) => {
      if (likedItems.includes(itemId)) {
          setLikedItems(likedItems.filter(id => id !== itemId));
      } else {
          setLikedItems([...likedItems, itemId]);
      }
  };
  const {product4,setCard} = useContext(UserContext);
  return (  
    <div className='mx-[200px]'>
       <div className=' h-[100px] flex items-center text-lg text-[#A4A4A4] gap-5'>
            <NavLink to='/' >Home</NavLink>
              {/* <IoIosArrowForward />
              <NavLink to='/' >Catalog</NavLink> */}
            <IoIosArrowForward />
            <h1 className='text-[#000]'>Smartphones</h1>
        </div> 

        <div className="flex">
          <div>
            <div>
            <h1 className='flex items-center text-xl font-bold border-b-[1px] mb-[10px] border-black'>Brand <IoIosArrowUp className=' ml-[170px] mb-[10px]'/></h1>
            <div className='flex items-center w-[256px] h-[40px] mt-[20px]'>
            <CiSearch className='w-[20px] h-[20px] text-[#656565]'/>
            <input type="text" placeholder='Search...' className='text-lg outline-none' />
            </div>
            <div className='remember gap-[10px] mt-[20px] items-center'>
              <label htmlFor=""><input type="checkbox" />Apple <span className='text-[#A4A4A4]'>110</span></label>
            </div>
            <div className='remember gap-[10px] mt-[20px] items-center'>
              <label htmlFor=""><input type="checkbox" />Redmi <span className='text-[#A4A4A4]'>110</span></label>
            </div>
            <div className='remember gap-[10px] mt-[20px] items-center'>
              <label htmlFor=""><input type="checkbox" />Xiomi <span className='text-[#A4A4A4]'>110</span></label>
            </div>
            <div className='remember gap-[10px] mt-[20px] items-center'>
              <label htmlFor=""><input type="checkbox" />Samsung <span className='text-[#A4A4A4]'>110</span></label>
            </div>
            <div className='remember gap-[10px] mt-[20px] items-center'>
              <label htmlFor=""><input type="checkbox" />Motorola <span className='text-[#A4A4A4]'>110</span></label>
            </div>
            <div div className='remember gap-[10px] mt-[20px] items-center'>
              <label htmlFor=""><input type="checkbox" />Nokia <span className='text-[#A4A4A4]'>110</span></label>
            </div>


            <h1 className='flex items-center text-xl font-bold border-b-[1px] border-[#D4D4D4] mt-[30px]'>Battery capacity <SlArrowDown className=' ml-[80px]  mb-[20px]'/></h1>
            <h1 className='flex items-center text-xl font-bold border-b-[1px] border-[#D4D4D4] mt-[30px]'>Screen type <SlArrowDown className=' ml-[120px]  mb-[20px]'/></h1>
            <h1 className='flex items-center text-xl font-bold border-b-[1px] border-[#D4D4D4] mt-[30px]'>Screen diagonal <SlArrowDown className=' ml-[80px]  mb-[20px]'/></h1>
            <h1 className='flex items-center text-xl font-bold border-b-[1px] border-[#D4D4D4] mt-[30px]'>Protection class <SlArrowDown className=' ml-[80px]  mb-[20px]'/></h1>
            <h1 className='flex items-center text-xl font-bold border-b-[1px] border-[#D4D4D4] mt-[30px]'>Built-in memory <SlArrowDown className=' ml-[75px]  mb-[20px]'/></h1>
            </div>

          </div>
          <div>
            <div className='mx-[30px] flex space-x-[460px] '>
              <h1 className='text-lg text-[#6C6C6C]'>Selected Products: <span className='text-xl text-black'>27</span></h1>
              <h1 className='flex items-center text-lg font-semibold border-b-[1px] border-[#D4D4D4]'>By rating <SlArrowDown className=' ml-[75px]  mb-[10px] text-[#9F9F9F]'/></h1>
            </div>

            <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="okay h-[200vh] w-[1050px] "
      >
        <SwiperSlide className='mt-[380px]'>
        <div className=' p-7 cards gap-x-[120px]  grid grid-cols-3 '>
        {
            product4?.map((item)=>(
                <div className=" mt-[50px] w-[268px] h-[432px] text-center border-none card bg-[#D3D3D3] p-3 border-2 rounded-xl overflow-hidden">
                    <div key={item.id} className="card_img">
                    {likedItems.includes(item.id) ? (
                                <IoMdHeart className='ml-[200px]  text-4xl text-[#FF0000]' onClick={() => handleLikeToggle(item.id)}/>
                                ) : (
                                <IoIosHeartEmpty className=' ml-[200px] text-4xl  cursor-pointer' onClick={() => handleLikeToggle(item.id)}/>
                            )}
                        <img className='w-[160px]  h-[160px] mt-[40px] ml-[40px] mb-[10px]rounded-xl' src={item.img} alt="" />
                    </div>
                    <div className="card_body px-[20px] py-[10px]">
                        <h2 className='my-2 + text-2xl mt-[15px] font-bold'>{item.price} </h2>
                        <h1 className='text-[15px]  mt-[15px] font-bold'>{item.title.slice(0,25)}</h1>
                      
                    </div>
                    <div className='  mr-[130px] '><NavLink to='/ProductPage' onClick={()=>setCard(item)} className='text-white bg-[#000] hover:bg-[#222933] py-[15px] px-[30px] rounded-lg absolute  '
                    >Shop now</NavLink></div>
                </div>
            ))  
        }
    </div>
        </SwiperSlide>
        <SwiperSlide className='mt-[380px]'>
        <div className=' p-7 cards gap-x-[120px]  grid grid-cols-3 '>
        {
            product4?.map((item)=>(
                <div className=" mt-[50px] w-[268px] h-[432px] text-center border-none card bg-[#D3D3D3] p-3 border-2 rounded-xl overflow-hidden">
                    <div key={item.id} className="card_img">
                    {likedItems.includes(item.id) ? (
                                <IoMdHeart className='ml-[200px]  text-4xl text-[#FF0000]' onClick={() => handleLikeToggle(item.id)}/>
                                ) : (
                                <IoIosHeartEmpty className=' ml-[200px] text-4xl  cursor-pointer' onClick={() => handleLikeToggle(item.id)}/>
                            )}
                        <img className='w-[160px]  h-[160px] mt-[40px] ml-[40px] mb-[10px]rounded-xl' src={item.img} alt="" />
                    </div>
                    <div className="card_body px-[20px] py-[10px]">
                        <h1 className='text-[15px]  mt-[15px] font-bold'>{item.price.slice(0,25)}</h1>
                        <h2 className='my-2 + text-2xl mt-[15px] font-bold'>{item.title} </h2>
                      
                    </div>
                    <div className='  mr-[130px] '><NavLink  className='text-white bg-[#000] hover:bg-[#222933] py-[15px] px-[30px] rounded-lg absolute  '
                    >Shop now</NavLink></div>
                </div>
            ))  
        }
    </div>
        </SwiperSlide>
        <SwiperSlide className='mt-[380px]'> 
        <div className=' p-7 cards gap-x-[120px]  grid grid-cols-3 '>
        {
            product4?.map((item)=>(
                <div className=" mt-[50px] w-[268px] h-[432px] text-center border-none card bg-[#D3D3D3] p-3 border-2 rounded-xl overflow-hidden">
                    <div key={item.id} className="card_img">
                    {likedItems.includes(item.id) ? (
                                <IoMdHeart className='ml-[200px]  text-4xl text-[#FF0000]' onClick={() => handleLikeToggle(item.id)}/>
                                ) : (
                                <IoIosHeartEmpty className=' ml-[200px] text-4xl  cursor-pointer' onClick={() => handleLikeToggle(item.id)}/>
                            )}
                        <img className='w-[160px]  h-[160px] mt-[40px] ml-[40px] mb-[10px]rounded-xl' src={item.img} alt="" />
                    </div>
                    <div className="card_body px-[20px] py-[10px]">
                        <h1 className='text-[15px]  mt-[15px] font-bold'>{item.price.slice(0,25)}</h1>
                        <h2 className='my-2 + text-2xl mt-[15px] font-bold'>{item.title} </h2>
                      
                    </div>
                    <div className='  mr-[130px] '><NavLink  className='text-white bg-[#000] hover:bg-[#222933] py-[15px] px-[30px] rounded-lg absolute  '
                    >Shop now</NavLink></div>
                </div>
            ))  
        }
    </div>
        </SwiperSlide>
      </Swiper>
            
    </div>
    <div/>
          </div>
           
        </div>
       
  )
}

export default Category