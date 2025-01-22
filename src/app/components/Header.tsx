import React from 'react';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa6';
import Image from 'next/image';
import Nav from './Nav';

const Header = () => {
  return (
    <div className="bg-black w-full h-auto">
    
      <Nav/>

      <div className="mb-36">
        <div className="mt-16 md:mt-32 flex flex-col-reverse md:flex-row items-center md:items-start">
          {/* Hero Text */}
          <div className="text-center md:text-left px-6 md:ml-40 md:w-1/2">
            <div className="flex justify-center md:justify-start">
              <h1 className="text-orange-500 font-bold text-3xl md:text-5xl">
                Th<span className="text-white">e</span>
              </h1>
              <h1 className="text-white font-bold ml-3 text-3xl md:text-5xl">
                Art of Speed
              </h1>
            </div>
            <h1 className="text-white font-bold text-3xl md:text-5xl mt-2">
              food Quality
            </h1>
            <p className="text-white text-sm md:text-base mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Temporibus placeat, nostrum tempora dicta.
            </p>
          <Link href="/shop"> <button className="bg-yellow-500 text-white text-xs md:text-sm mt-6 px-6 py-2 rounded-3xl">
              See Shop
            </button></Link> 
          </div>

          {/* Hero Image */}
          <div className="flex justify-center md:justify-end md:w-1/2 mt-6 md:mt-0">
            <Image
              src="/main-image.png"
              alt="bg"
              width={700} height={700}
              className="w-80 md:w-[600px] h-auto"
            />
          </div>
        </div>
      </div>
      <div className="lg:pt-20">
  <div className="relative xl:absolute xl:mb-10 ml-14 md:ml-28 text-[30px] md:text-[40px] mt-[-60px] lg:mt-10 md:mt-32 mr-4">
    <h1 className="text-orange-500 font-bold text-2xl md:text-4xl">
      We<span className="text-white ml-2">Create the best</span>
    </h1>
    <h1 className="text-white font-bold text-xl md:text-3xl">Food Products</h1>
    <p className="text-white text-sm md:text-base mt-4 md:mt-6">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      <br />
      Doloremque ad doloribus laborum itaque magni molestiae, 
      <br />
      repellat ducimus laboriosam! Corporis eaque impedit laboriosam velit optio nihil.
    </p>
    <div className="text-white text-sm md:text-base mt-7 leading-8 flex flex-col space-y-3">
      <span className="flex items-center"> 
        <FaCheck className="mr-2 text-lg" />
        Lacus nisi, et ac dapibus sit eu velit in consequat.
      </span>
      <span className="flex items-center">
        <FaCheck className="mr-2 text-lg" />
        Quisque diam pellentesque bibendum non dui volutpat fringilla
      </span>
      <span className="flex items-center">
        <FaCheck className="mr-2 text-lg" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </span>
    </div>
  
  </div>

  <div className="mt-10 lg:mt-[-100px]"> 
    <div className="flex relative justify-center md:justify-end rounded-md m-auto">
      <Image src="/top.png" alt="bg"  width={700} height={700} className="w-full md:w-[660px] h-auto" />
    </div>

    <div className="flex relative pl-24 pr-24 justify-center md:justify-end mt-4 gap-3 rounded-md">
      <Image src="/left.png" alt="bg"  width={700} height={700} className="w-full md:w-[322px] h-auto" />
      <Image src="/right.png" alt="bg"  width={700} height={700} className="w-full md:w-[322px] h-auto" />
    </div>
  </div>
</div>

    </div>
  );
};

export default Header;
