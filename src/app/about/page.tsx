import React from 'react';
import Nav from '../components/Nav';
import { FaAngleRight } from "react-icons/fa6";
import Footer from '../components/Footer';
import { CiPlay1 } from "react-icons/ci";
import "../styles/other.css"
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      <Nav />
        <div className="relative">
   <Image 
     src="/nav.png" alt="bg" width={700} height={700} className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover " 
   />
   <h1 className="absolute inset-0 flex justify-center items-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
     About Us
   </h1>
   <div className="absolute inset-0 flex justify-center items-center flex-col mt-20 sm:mt-32 lg:mt-36">
     <h2 className="flex items-center text-sm sm:text-base md:text-lg text-white gap-1">
       Home <FaAngleRight /> <span className="text-orange-400">About</span>
     </h2>
   </div>
 </div>



      <div className="flex flex-col lg:flex-row p-8 lg:p-20 gap-8 lg:gap-20">
        <Image src="/img.png" alt="bgggg" width={700} height={700} className="w-full lg:w-[550px] h-auto" />
        <div className="mt-8 lg:mt-48">
          <h1 className="text-[24px] sm:text-[30px] lg:text-[35px] font-bold">Food is an important part Of a balanced Diet</h1>
          <h2 className="text-[13px] sm:text-[14px] lg:text-[16px] text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </h2>
          <div className="flex gap-6 mt-6">
            <Link href="/shop">
            <button className="bg-yellow-500 text-white px-4 py-1 rounded">Show More</button></Link>
            <div className="bg-yellow-500 rounded-3xl px-2 py-2 flex items-center justify-center">
              <CiPlay1 className="text-white text-[24px]" />
            </div>
            <h1 className='mt-3 text-[11px] font-semibold ml-[-12px]'>Watch Video</h1>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-[24px] sm:text-[30px] font-bold">Why Choose Us</h1>
        <p className="text-[12px] sm:text-[14px] text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>
        <div className="flex justify-center items-center p-10">
          <Image src="/toplayer.png" alt="bg" width={700} height={700} className="w-[400px] sm:w-[600px] lg:w-[900px] h-auto" />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/layer.png" alt="bg" width={700} height={700} className="w-[400px] sm:w-[600px] lg:w-[800px] h-auto" />
        </div>
      </div>

      <div className="mt-20">
        <Image src="/Team Member.png" alt="bg" width={700} height={700} className="w-full h-auto" />
      </div>

      <div className="text-black flex justify-center mt-10">
        <h1 className="text-[24px] sm:text-[30px] font-bold">What our client are saying</h1>
      </div>
      <div className="flex justify-center">
        <Image src="/review.png" alt="bg"  width={700} height={700} className="w-[300px] sm:w-[500px] h-auto" />
      </div>

      <div className="text-center mt-20">
        <h1 className="text-[24px] sm:text-[30px] font-bold">Our Food Menu</h1>
        <p className="mt-2 text-slate-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
        <ul className="flex md:justify-center gap-4 ml-1 md:gap-8 mt-10 text-slate-800 text-sm border-b border-slate-300 w-[600px] sm:w-[700px] lg:w-[800px] md:m-auto">
          <li className="text-orange-500">Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
          <li>Dessert</li>
          <li>Drink</li>
          <li>Snack</li>
        </ul>

        <div className="w-full max-w-6xl mx-auto px-4 py-8 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex justify-between items-start pb-4">
              <div>
                <h3 className="text-orange-500 font-bold">Alder Grilled Chinook Salmon</h3>
                <p className="text-gray-500 text-sm">Toasted French bread topped with romano, cheddar</p>
                <p className="text-gray-400 text-xs">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">32$</p>
            </div>
            <div className="flex justify-between items-start pb-4">
              <div>
                <h3 className="text-gray-900 font-bold">Alder Grilled Chinook Salmon</h3>
                <p className="text-gray-500 text-sm">Toasted French bread topped with romano, cheddar</p>
                <p className="text-gray-400 text-xs">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">32$</p>
            </div>
            <div className="flex justify-between items-start pb-4">
              <div>
                <h3 className="text-gray-900 font-bold">Alder Grilled Chinook Salmon</h3>
                <p className="text-gray-500 text-sm">Toasted French bread topped with romano, cheddar</p>
                <p className="text-gray-400 text-xs">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">32$</p>
            </div>
            <div className="flex justify-between items-start pb-4">
              <div>
                <h3 className="text-gray-900 font-bold">Alder Grilled Chinook Salmon</h3>
                <p className="text-gray-500 text-sm">Toasted French bread topped with romano, cheddar</p>
                <p className="text-gray-400 text-xs">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">32$</p>
            </div>
            <div className="flex justify-between items-start pb-4">
              <div>
                <h3 className="text-gray-900 font-bold">Alder Grilled Chinook Salmon</h3>
                <p className="text-gray-500 text-sm">Toasted French bread topped with romano, cheddar</p>
                <p className="text-gray-400 text-xs">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">32$</p>
            </div>
            <div className="flex justify-between items-start pb-4">
              <div>
                <h3 className="text-gray-900 font-bold">Alder Grilled Chinook Salmon</h3>
                <p className="text-gray-500 text-sm">Toasted French bread topped with romano, cheddar</p>
                <p className="text-gray-400 text-xs">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">32$</p>
            </div>
          </div>

          <div className="flex justify-center mt-8 mb-10">
            <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded">
              View menu
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;

