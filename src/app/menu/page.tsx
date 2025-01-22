import React from 'react'
import Nav from '../components/Nav'
import { FaAngleRight } from "react-icons/fa6";
import Footer from '../components/Footer';
import "../styles/other.css" 
import Image from 'next/image';


const page = () => {
  return (
    <div>
        <Nav/>
        
        <div className="relative">
  <Image 
    src="/nav.png" alt="bg"  width={700} height={700} className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover " 
  />
  

  <h1 className="absolute inset-0 flex justify-center items-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
    Our Menu
  </h1>
  

  <div className="absolute inset-0 flex justify-center items-center flex-col mt-20 sm:mt-32 lg:mt-36">
    <h2 className="flex items-center text-sm sm:text-base md:text-lg text-white gap-1">
      Home <FaAngleRight /> <span className="text-orange-400">Menu</span>
    </h2>
  </div>
</div>


{/* 1st */}

<div className="flex flex-col lg:flex-row items-center lg:items-start ">
  {/* Image Section */}
  <div className="flex justify-center lg:justify-start ">
    <Image 
      src="/food1.png" 
      alt="bg" 
      width={700} height={700}
      className="p-10 lg:p-20 w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] lg:w-[550px] lg:h-[700px] object-cover" 
    />
  </div>

  {/* Text Section */}
  <div className="pt-8 lg:pt-28 px-4 sm:px-8 lg:px-0">
    <h1 className="text-[24px] sm:text-[30px] lg:text-[35px] font-bold">
      Starter Menu <br />
    </h1>

    {/* Menu Items */}
    <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold mt-4">
      Alder Grilled Chinook Salmon <br />
    </div>
    <span className="text-[10px] sm:text-[12px] lg:text-[12px] text-slate-500">
      Toasted French bread topped with romano, cheddar <br />
      560 CAL <br />
    </span>

    <div className="text-[16px] sm:text-[18px] lg:text-[20px] text-orange-400 font-semibold mt-8">
      Berries and creme tart <br />
    </div>
    <span className="text-[10px] sm:text-[12px] lg:text-[12px] text-slate-500">
      Gorgonzola, ricotta, mozzarella, taleggio <br />
      700 CAL <br />
    </span>

    <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold mt-8">
      Tormentoso Bush Pizza Pintoage <br />
    </div>
    <span className="text-[10px] sm:text-[12px] lg:text-[12px] text-slate-500">
      Ground cumin, avocados, peeled and cubed <br />
      1000 CAL <br />
    </span>

    <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold mt-8">
      Spicy Vegan Potato Curry <br />
    </div>
    <span className="text-[10px] sm:text-[12px] lg:text-[12px] text-slate-500">
      Spreadable cream cheese, crumbled blue cheese <br />
      560 CAL <br />
    </span>
  </div>


  </div>



{/* 2nd */}

<div className="flex flex-col lg:flex-row items-center lg:items-start">

  <div className="pt-8 lg:pt-28 px-4 sm:px-8 lg:pl-28 lg:pr-8">
    <h1 className="text-[24px] sm:text-[30px] lg:text-[35px] font-bold border-t-4 border-green-500 md:border-none">
      Main Course<br />
    </h1>

    <div className="mt-4">
      <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold">
        Optic Big Breakfast Combo Menu <br />
      </div>
      <span className="text-[10px] sm:text-[12px] lg:text-[12px] text-slate-500">
        Toasted French bread topped with romano, cheddar <br />
        560 CAL <br />
      </span>

      <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold mt-8">
        Cashew Chicken With Stir-Fry <br />
      </div>
      <span className="text-[10px] sm:text-[12px] lg:text-[12px] text-slate-500">
        Gorgonzola, ricotta, mozzarella, taleggio <br />
        700 CAL <br />
      </span>

      <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold mt-8">
        Vegetables & Green Salad <br />
      </div>
      <span className="text-[10px] sm:text-[12px] lg:text-[12px] text-slate-500">
        Ground cumin, avocados, peeled and cubed <br />
        1000 CAL <br />
      </span>

      <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold mt-8">
        Spicy Vegan Potato Curry <br />
      </div>
      <span className="text-[10px] sm:text-[12px] lg:text-[12px] text-slate-500">
        Spreadable cream cheese, crumbled blue cheese <br />
        560 CAL <br />
      </span>

    </div>
  </div>

  {/* Image Section */}
  <div className="flex justify-center lg:justify-start">
    <Image 
      src="/food4.png" 
      alt="bg" 
      width={700} height={700}
      className="p-10 lg:p-20 w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] lg:w-[550px] lg:h-[700px] object-cover" 
    />
  </div>
</div>

{/* 3rd */}
<div className="flex flex-col lg:flex-row items-center lg:items-start">
  {/* Image Section */}
  <div className="flex justify-center lg:justify-start">
    <Image 
      src="/food2.png" 
      alt="bg" 
      width={700} height={700}
      className="p-10 lg:p-20 w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] lg:w-[550px] lg:h-[700px] object-cover" 
    />
  </div>

  {/* Text Section */}
  <div className="pt-8 lg:pt-28 px-4 sm:px-8 lg:pl-10 lg:pr-28">
    <h1 className="text-[24px] sm:text-[30px] lg:text-[35px] font-bold">
      Dessert<br />
    </h1>

    {/* Menu Items */}
    <div className="mt-4">
      <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold">
        Fig and lemon cake <br />
      </div>
      <span className="text-[10px] sm:text-[12px] lg:text-[12px] text-slate-500">
        Toasted French bread topped with romano, cheddar <br />
        560 CAL <br />
      </span>

      <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold mt-8">
        Creamy mascarpone cake <br />
      </div>
      <span className="text-[10px] sm:text-[12px] lg:text-[12px] text-slate-500">
        Gorgonzola, ricotta, mozzarella, taleggio <br />
        700 CAL <br />
      </span>

      <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold mt-8">
        Pastry, blueberries, lemon juice <br />
      </div>
      <span className="text-[10px] sm:text-[12px] lg:text-[12px] text-slate-500">
        Ground cumin, avocados, peeled and cubed <br />
        1000 CAL <br />
      </span>

      <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold mt-8">
        Pain au chocolat <br />
      </div>
      <span className="text-[10px] sm:text-[12px] lg:text-[12px] text-slate-500">
        Spreadable cream cheese, crumbled blue cheese <br />
        560 CAL <br />
      </span>
    </div>
  </div>
</div>

{/* 4nd */}

<div className="flex flex-col lg:flex-row items-center lg:items-start px-4 sm:px-8 lg:px-28">
  {/* Text Section */}
  <div className="pt-8 lg:pt-28 lg:pl-10">
    <h1 className="text-[24px] sm:text-[30px] lg:text-[35px] font-bold border-t-4 border-green-500 md:border-none">
      Drinks<br />
    </h1>

    {/* Drink Items */}
    <div className="mt-4">
      <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold">
        Caffè macchiato <br />
      </div>
      <span className="text-[10px] sm:text-[12px] lg:text-[12px] text-slate-500">
        Toasted French bread topped with romano, cheddar <br />
        560 CAL <br />
      </span>

      <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold mt-8">
        Aperol Spritz Capacianno <br />
      </div>
      <span className="text-[10px] sm:text-[12px] lg:text-[12px] text-slate-500">
        Gorgonzola, ricotta, mozzarella, taleggio <br />
        700 CAL <br />
      </span>

      <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold mt-8">
        Caffe Latte Campuri <br />
      </div>
      <span className="text-[10px] sm:text-[12px] lg:text-[12px] text-slate-500">
        Ground cumin, avocados, peeled and cubed <br />
        1000 CAL <br />
      </span>

      <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold mt-8">
        Tormentoso BushTea Pintoage <br />
      </div>
      <span className="text-[10px] sm:text-[12px] lg:text-[12px] text-slate-500">
        Spreadable cream cheese, crumbled blue cheese <br />
        560 CAL <br />
      </span>
    </div>
  </div>

  {/* Image Section */}
  <div className="flex justify-center lg:justify-start mt-8 lg:mt-0">
    <Image 
      src="/food3.png" 
      alt="bg" 
      width={700} height={700}
      className="p-10 lg:p-20 w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] lg:w-[550px] lg:h-[700px] object-cover"
    />
  </div>
</div>


<div className='mb-20 flex justify-center items-center'>
    <Image src="/menulast.png" alt="bg"  width={700} height={700} className='w-[800px] ' />
</div>

<Footer/>
    </div>
  )
}

export default page
