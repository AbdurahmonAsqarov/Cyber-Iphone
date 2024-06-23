import React from 'react'
import "./BigSale.css"
import { NavLink } from 'react-router-dom'
const BigSale = () => {
  return (
    <div className='af container flex space-x-44 w-[100%] h-[500px]'>
        <div className='reative'>
            <img className='absolute ml-[200px]' id='3' src="src/assets/image 6.png" alt="" />
            <img className='absolute ml-[40px] mt-[50px] z-10   '  src="src/assets/image 18.png" alt="" />
            <img className='absolute mt-[220px]'  src="src/assets/jbl_jr_310bt_blue 1.png" alt="" />
        </div>
        <div className=' absolute  text-center my-[150px]'>
            <h1 className='ml-[360px] text-[#fff] text-6xl font-thin'>Big Summer <span className='font-semibold'>Sale</span></h1>
            <p className='ml-[360px] text-[#787878]'>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
            <NavLink to="/category"  className='rounded-[8px] border-[2px] border-[#fff] text-[#fff] border hover:shadow-3xl py-[20px]  hover:transition duration-1000 hover:text-lg ml-[465px] mt-[50px] w-[200px]  block'>Shop Now</NavLink>
        </div>
        <div>
            <img className='absolute ml-[1158px]' src="src/assets/image 8.png" alt="" />
            <img className='absolute ml-[945px] mt-[299px]' src="src/assets/image 7.png" alt="" />
        </div>
    </div>
  )
}

export default BigSale