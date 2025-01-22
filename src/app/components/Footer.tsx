import React from 'react';
import { PiClockClockwise } from "react-icons/pi";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-black pt-3">
      <div className="flex flex-col md:flex-row justify-center items-center mt-12 px-4">
        <div className="text-center md:flex md:items-center">
          <h1 className="text-orange-500 font-bold text-lg sm:text-xl lg:text-2xl">
            Still You Need Our Support? <span className="text-white"><br />We are Here to Help!</span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 md:ml-8">
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="bg-yellow-600 placeholder-slate-50 text-black px-4 py-2 outline-none w-full sm:w-[250px] md:w-auto rounded-lg"
          />
          <button className="bg-white text-orange-600 text-[14px] mt-2 md:mt-0 px-4 py-2 md:ml-4 rounded-lg">
            Subscribe Now
          </button>
        </div>
      </div>

      <p className="text-sm text-white font-light text-center mt-6 px-4">
        Don't wait, make a smart & logical quote here. It's pretty easy.
      </p>

      <div className="border-b border-orange-600 mx-auto w-[90%] md:w-[80%] lg:w-[60%] mt-10"></div>

      <div className="w-full px-4 md:px-10 lg:px-20 py-10">
        <div className="flex flex-wrap justify-center gap-10 lg:gap-20">
          <div className="text-white max-w-sm">
            <h1 className="text-xl font-bold">About Us</h1>
            <p className="text-sm leading-6 mt-4">
              Corporate clients and leisure travelers have been relying on Groundlink for dependable,
              safe, and professional chauffeured car service in major cities across the world.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <div className="p-3 px-4 rounded-md bg-orange-500 flex items-center justify-center">
                <PiClockClockwise className="text-3xl" />
              </div>
              <div>
                <h1 className="text-sm">Opening Hours</h1>
                <span className="text-xs">Mon - Sat (8.00 - 6.00) <br /> Sunday - Closed</span>
              </div>
            </div>
          </div>

          <div className="flex gap-10">
            <ul className="text-white text-sm space-y-2">
              <li className="font-bold">Useful Links</li>
              <li>About</li>
              <li>News</li>
              <li>Partners</li>
              <li>Team</li>
              <li>Menu</li>
              <li>Contact</li>
            </ul>
            <ul className="text-white text-sm space-y-2">
              <li className="font-bold">Help?</li>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>

          {/* <div className="hidden lg:block max-w-sm">
            <h1 className="text-xl font-bold text-white">Recent Posts</h1>
            <div className="space-y-4 mt-4">
              <Image src="/card (1).png" alt="Post 1" width={300} height={300} className="w-full" />
              <Image src="/card (2).png" alt="Post 2" width={300} height={300} className="w-full" />
              <Image src="/card (3).png" alt="Post 3" width={300} height={300} className="w-full" />
            </div>
          </div> */}
        </div>

        <div className="bg-gray-500 w-full h-auto mt-10 px-4 sm:px-10 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-white text-sm text-center md:text-left">
              Copyright © 2022 by Mahad. All Rights Reserved.
            </h1>
            <Image src="/social.png" alt="Social Media" width={300} height={100} className="mt-4 md:mt-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
