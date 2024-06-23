import React from 'react'
import Home from '../home/Home'
import { NavLink } from 'react-router-dom'
const Hader = () => {
  return (
    <>
        <div className="container flex px-[200px]  bg-[#211C24] items-center max-sm:block">
            <div className=' w-[700px] h-[250px] max-sm:w-[320px] max-sm:h-[770px] max-sm:block'>
                <h2 className='text-xl text-[#909090] sm:block max-sm:text-center'>Pro.Beyond.</h2>
                <h1 className='text-8xl text-[#fff]'>IPhone 14 <span className='font-bold'>Pro</span></h1>
                <h4 className='my-[24px] mb-[50px] text-[#909090]'>Created to change everything for the better. For everyone</h4>
                <NavLink to="/category" className='rounded-[8px] text-[#fff] py-[20px] px-[60px] w-[180px] h-[55px] border hover:shadow-3xl hover:transition duration-1000 hover:text-lg'>Shop Now</NavLink>
            </div>
            <div className='max-sm:block'>
                <img src="src/assets/Iphone Image.png" alt="" />
            </div>
        </div>


        <div className="container flex">
            <div >
                <img className='w-[720px] h-[600px]' src="src/assets/Left Banners.png" alt="" />
            </div>
            <div className='flex  items-center'>
                <div className='ml-[130px] '>
                    <h1 id='1' className='text-6xl'>Macbook <span className='font-bold'>Air</span></h1>
                    <h4 className='text-[#909090] w-[360px] my-[24px] mb-[40px]'>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</h4>
                    <NavLink  to="/category" className='rounded-[8px] border-[2px] border-[#000] w-[180px] h-[55px] py-[20px] px-[60px]  border hover:shadow-2xl hover:transition duration-1000 hover:text-lg'>Shop Now</NavLink>
                </div>
                <img className='w-[290px] h-[500px]' src="src/assets/MacBook Pro 14.png" alt="" />
            </div>
        </div> 
        <Home/>
    </>
  )
  
}

export default Hader