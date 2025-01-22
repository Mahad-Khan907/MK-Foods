import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { FaAngleRight } from "react-icons/fa6";
import { FaGoogle, FaApple } from "react-icons/fa";
import "../styles/other.css"
import Image from 'next/image';

const page = () => {
  return (
    <div>

        <Nav/>
              <div className="relative">
           <Image 
             src="/nav.png" alt="bg"   width={700} height={700} className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover " />
           <h1 className="absolute inset-0 flex justify-center items-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
             Sign In
           </h1>
           <div className="absolute inset-0 flex justify-center items-center flex-col mt-20 sm:mt-32 lg:mt-36">
             <h2 className="flex items-center text-sm sm:text-base md:text-lg text-white gap-1">
               Home <FaAngleRight /> <span className="text-orange-400">Sign In</span>
             </h2>
           </div>
         </div>



    <div className='flex justify-center items-center m-auto w-full h-screen'>
        <div className='bg-white shadow-md shadow-slate-300 m-auto p-4'>
        <h1 className='text-[25px] font-bold'>Sign In</h1>
        <div className='border border-slate-200 w-[300px] h-[35px] mt-6'>
        <input type="email" name='Email' placeholder='Email' /><br /></div>
        <div className='border border-slate-200 w-[300px] h-[35px] mt-3'>
        <input type="password" name='password' placeholder='Password' />
        </div>
        <div className='flex gap-2 mt-4'>
        <input type="checkbox" name="checkbox" /> <p className='text-[13px]'>Remember me?</p> 
        </div>
        <div className='bg-yellow-500 mt-6 text-white w-[300px] h-[35px] flex justify-center items-center m-auto'>
        <button className=''>Sign In</button></div>
        <div className='flex justify-end mt-3'>
            <h1 className='text-[13px] text-slate-500'>Forger Password?</h1>
        </div>
        <div className='flex justify-center border border-slate-300 w-8 h-6 m-auto'>
            <h1 className='text-[13px] text-slate-600'>OR
            </h1></div>

            <button className="flex mt-6 items-center justify-center w-full bg-orange-600 text-white py-2 px-4 rounded-md mb-4 hover:bg-red-600 transition duration-300">
          <FaGoogle className="mr-2 text-lg" />
          Sign up with Google
        </button>
        <button className="flex items-center justify-center w-full bg-black text-white py-2 px-4 rounded-md mb-6 hover:bg-gray-800 transition duration-300">
          <FaApple className="mr-2 text-lg" />
          Sign up with Apple
        </button>
    </div></div>
    <Footer/>

    </div>
  )
}

export default page
