import React from 'react'
import "./Product.css"
import { NavLink } from 'react-router-dom';


// Icons

import { IoPhonePortrait } from "react-icons/io5";
// Css
import { IoIosArrowForward  } from "react-icons/io";

const ProductPage = ({card}) => {
  return (
    <>

        <div className='mx-[200px] h-[100px] flex items-center text-lg text-[#A4A4A4] gap-5'>
            <NavLink to='/' >Home</NavLink>
            <IoIosArrowForward />
            {/* <NavLink to='/' >Catalog</NavLink>
            <IoIosArrowForward /> */}
            <h1 className=''>Smartphones</h1>
            <IoIosArrowForward />
            <NavLink to="/category">Apple</NavLink>
            <IoIosArrowForward />
            <h1 className='text-black'>{card.price}</h1>
        </div> 

        <div key={card.id} className="container flex pb-[200px]">

<div className="container">
   <img src={card.img} className='w-[470px] mt-[40px] ml-[170px]'  alt="" />
   
</div>

<div className="container">

<h1   className='text-[40px] font-bold'>{card.title}</h1>

<h2 className='text-[30px] font-semibold'>{card.price}<span className='text-[gray] line-through text-[25px]'>$1499</span></h2>
<div className='flex gap-[10px] mt-[15px]'>
 <h4 className='mt-[15px]'>Set color:</h4>
 <button className='bg-[red] w-[60px] h-[60px] rounded-[30px]'> red </button>
 <button className='bg-[blue]  w-[60px] h-[60px] rounded-[30px]'> blue</button>
 <button className='bg-[black] text-[white]  w-[60px] h-[60px] rounded-[30px]'> black </button>
 <button className='bg-[aqua]  w-[60px] h-[60px] rounded-[30px]'> aqua </button>
 <button className='bg-[orange]  w-[60px] h-[60px] rounded-[30px]'> orange </button>

</div>

<div className="container mt-[20px]">
 <button className='border w-[140px] rounded-[7px]  h-[40px] border-[#EDEDED] text-[#a9a9a9] hover:border-[#000]  hover:text-[#000]'>128GB</button>
 <button className='border ml-[20px] rounded-[7px]  w-[140px] h-[40px] border-[#EDEDED] text-[#a9a9a9] hover:border-[#000]  hover:text-[#000]'>256GB</button>
 <button className='border ml-[20px] rounded-[7px]  w-[140px] h-[40px] border-[#EDEDED] text-[#a9a9a9] hover:border-[#000]  hover:text-[#000]'>512GB</button>
 <button className='border ml-[20px] rounded-[7px] w-[140px] h-[40px] border-[#EDEDED] text-[#a9a9a9] hover:border-[#000]  hover:text-[#000]'>1TB</button>
</div>

<div className="container mt-[20px]">

<div className="container flex mb-[10px] gap-[10px]">
<div className="container bg-[#EDEDED] flex w-[200px] py-[5px] px-[15px]  rounded-[6px]">

<div>
<IoPhonePortrait className=' mt-[15px] ' />
</div>
<div className="container ">

<div className='ml-[40px]'>
<h2 className='text-[gray]'>Screen Size</h2>
<h1>6,7"</h1>
</div>
</div>

</div>
<div className="container bg-[#EDEDED] flex w-[200px] py-[5px] px-[15px] rounded-[6px]">

<div>
<IoPhonePortrait className=' mt-[15px] ' />
</div>

<div className='ml-[40px]'>
<h2 className='text-[gray]'>Screen Size</h2>
<h1>6,7"</h1>
</div>

</div>

<div className="container bg-[#EDEDED] flex w-[200px] py-[5px] px-[15px] rounded-[6px]">

<div>
<IoPhonePortrait className=' mt-[15px] ' />
</div>

<div className='ml-[40px]'>
<h2 className='text-[gray]'>Screen Size</h2>
<h1>6,7"</h1>
</div>

</div>
</div>


<div className="container flex gap-[10px]">
<div className="container bg-[#EDEDED] flex w-[200px] py-[5px] px-[15px] rounded-[6px]">

<div>
<IoPhonePortrait className=' mt-[15px] ' />
</div>

<div className='ml-[40px]'>
<h2 className='text-[gray]'>Screen Size</h2>
<h1>6,7"</h1>
</div>

</div>

<div className="container bg-[#EDEDED] flex w-[200px] py-[5px] px-[15px] rounded-[6px]">

<div>
<IoPhonePortrait className=' mt-[15px] ' />
</div>

<div className='ml-[40px]'>
<h2 className='text-[gray]'>Screen Size</h2>
<h1>6,7"</h1>
</div>

</div>

<div className="container bg-[#EDEDED] w-[200px] py-[5px] px-[15px] flex rounded-[6px]">

<div>
<IoPhonePortrait className=' mt-[15px] ' />
</div>

<div className='ml-[40px]'>
<h2 className='text-[gray]'>Screen Size</h2>
<h1>6,7"</h1>
</div>

</div>
</div>

</div>

<p className='text-[gray] mt-[20px]'>Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...</p>
</div>
</div>

    </>
  )
}

export default ProductPage