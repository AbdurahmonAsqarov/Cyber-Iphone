import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
// Css
import "./Navbar.css"
// react icons
import { IoMenuSharp } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";   
import { PiShoppingCartLight } from "react-icons/pi";
import { FaTimes } from "react-icons/fa";


import { UserContext } from '../context/Context';


const Navbar = ({setLoginn,loginn}) => {

    const {product} = useContext(UserContext)
    const [SearchQuery,setSearchQuery] = useState('')   
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = product?.filter((item) => {
        return item.title.toLowerCase().includes(SearchQuery.toLowerCase())
    });

    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <nav className='mx-[200px] my-[30px]'>
        <div className="container flex space-x-28">
            <div>
                <NavLink to="/"><img className='z-10 max-md:absolute absolute md:h-[23px]   max-md:left-[20px] mr-[20px]  ' src="src/assets/Logo.png" alt="" /></NavLink>
            </div>
            <div className='flex w-[300px] h-[30px] outline-none'>
            <CiSearch className='mt-[5px] mr-[10px] text-xl text-[#656565] max-md:absolute  max-md:translate-y-[50px]' />
                <input 
                value={SearchQuery}
                onChange={handleSearchInputChange}
                className=' rounded-[8px] text-[#656565] outline-none pl-[30px]  max-md:absolute max-md:translate-y-[50px]'placeholder='Search...' type="text" />
                {SearchQuery && (
                    <div className='container my-[60px] mx-[-590px] ' >
                        <div className=' w-full  z-20 grid grid-cols-4 gap-x-[350px] relative'>
                            {
                                filteredData?.map((item) => (
                                    <div key={item.id} className='w-[450px] h-[650px]  text-center absoulte  bg-[#fff]  border-[#36454F] border-[80px]'>
                                        <img className='w-[160px] h-[160px] rounded-xl ml-[40px]' src={item.img} alt="" /> 
                                        <div className="  py-[10px] text-center">
                                        <h2 className='my-2 mt-[15%] text-xl font-bold'>{item.title.slice(0,30)} </h2>
                                        <h1 className='text-[15px] text-[30px] mt-[15%] mb-[20px] font-bold'>{item.price}</h1>   
                                </div>
                        <NavLink to="category" className='text-white bg-[#000] hover:bg-[#A9A9A9] hover:text-[20px] py-5 px-[50px] rounded-lg mt-[20px]'>Shop now</NavLink>
                                    </div>
                            ))
                        }
                    </div>
                </div>
            )}
            </div>
            
            <div className='md:static md:min-h-fit absolute bg-white min-h-[60vh] left-[-111px] top-[59px] w-full flex items-center px-5 '>
            <ul className='flex md:flex-row md:items-center flex-col text-xl  gap-[20px] md:gap-8 '>
                <NavLink to="/" className=' text-lg gap-[10px]  hover:shadow-5xl text-[#000] hover:text-[#656565] hover:text-xl hover:ml-[-5px] font-semibold '><a href="#">Home</a></NavLink>
                <li className='text-lg gap-[10px] hover:border-b-2 border-[#000] hover:text-[#000000] hover:leading-5  text-[#656565] font-semibold '><a href="#1">About</a></li>
                <li className='text-lg gap-[10px] hover:border-b-2 border-[#000] hover:text-[#000000] hover:leading-5 text-[#656565] font-semibold '><a href="#2">Contact </a></li>
                <li className='text-lg gap-[10px] hover:border-b-2 border-[#000] hover:text-[#000000] hover:leading-5 text-[#656565] font-semibold '><a href="#3">Blog</a></li>
            </ul>
            </div>
            <button className='text-3xl cursor-pointer md:hidden  max-md:translate-y-[0px] translate-x-[-100px]' onClick={handleClick}>
                {click ? <IoMenuSharp/> : <FaTimes/>}
            </button>   
            


            <div>   
                <ul className='flex gap-[15px] items-center '>
                    <NavLink to="/like" className=' text-3xl hover:animate-ping '><IoIosHeartEmpty /></NavLink>
                    <NavLink to="/category" className=' text-3xl hover:animate-pulse '><PiShoppingCartLight /></NavLink>
                   
                    <IoPersonOutline className='text-2xl' onClick={()=> setLoginn(!loginn)} />
                    

                </ul>
            </div>
        </div>
       
    </nav>

  )
}

export default Navbar