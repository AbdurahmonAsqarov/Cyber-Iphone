import React from 'react'
import { FaTwitter,FaTiktok } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className='container'>
        <div className="flex w-[1515px] h-[500px] bg-[#000]">
            <div className="W-[1100px] h-[260px] ml-[200px]  space-x-24 flex mt-[120px]">
            <div>
                <img src="src/assets/Logo Vector.png" alt="" />
                <p className='w-[470px] text-[#CFCFCF]'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                <div className='flex gap-10 mt-[220px] text-[20px]'>
                <FaTwitter className='text-[#fff]'/>
                <CgFacebook className='text-[#fff]' />
                <FaTiktok className='text-[#fff]' />
                <RiInstagramFill className='text-[#fff]'/>
                </div>
            </div>
            <div className='flex space-x-44'>

                <div className='text-[#CFCFCF] leading-10'>
                    <h3 className='text-[#fff] font-bold'>Services</h3>
                    <p>Bonus program</p>
                    <p>Gift cards</p>
                    <p>Credit and payment</p>
                    <p>Service contracts</p>
                    <p>Non-cash account</p>
                    <p>Payment</p>
                </div>
                    
                <div className='text-[#cfcfcf] leading-10'>
                    <h3 className='text-[#fff] font-bold'>Assistance to the buyer</h3>
                        <p id='2'>Find an order</p>
                        <p>Terms of delivery</p>
                        <p>Exchange and return of goods</p>
                        <p>Guarantee</p>
                        <p>Frequently asked questions</p>
                        <p>Terms of use of the site</p>
                </div>

            </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer