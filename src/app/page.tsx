import Header from "./components/Header";
// import { FaCheck } from "react-icons/fa6";
import { PiHamburger } from "react-icons/pi";
import { FaCookieBite } from "react-icons/fa";
import { TbGlassFull } from "react-icons/tb";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";



export default function Home() {
  return (
    <div className="bg-black">

      {/* header */}
      <Header />

      {/* header close */}

      {/* 1st page */}
      <div className="bg-black w-full h-auto">
       
{/* </div> */}



 {/* 1st page close */}


    {/* 2nd page */}

    <h1 className="bg-black text-orange-500 font-bold text-[24px] md:text-[30px] flex justify-center items-center mt-12 md:mt-28">
  Ch<span className="text-white">oose Food Item</span>
</h1>

<div className="flex relative justify-center mt-8 rounded-md">
  <Image src="/Image-box.png" alt="bg"  width={700} height={700} className="w-full md:w-[1000px] h-auto" />
</div>

            
{/* 2nd page close */}


    {/* 3rd page */}

    <div className="flex justify-center items-center mt-16 md:mt-28 px-4 lg:px-0">
  <div className="flex flex-col items-center gap-6 md:gap-3">

    {/* First Row of Images */}
    <div className="flex flex-wrap justify-center gap-6 md:gap-3">
      <Image src="/4.png" alt="bg"  width={700} height={700} className="w-[220px] sm:w-[250px] md:w-[362px] h-auto" />
      <Image src="/2.png" alt="bg"  width={700} height={700} className="w-[180px] sm:w-[200px] md:w-[281px] h-auto lg:mt-16 md:mt-32" />
    </div>

    {/* Second Row of Images */}
    <div className="flex flex-wrap justify-center gap-6 md:gap-3 mt-4">
      <Image src="/1.png" alt="bg"  width={700} height={700} className="w-[180px] sm:w-[200px] md:w-[244px] h-auto" />
      <Image src="/3.png" alt="bg"  width={700} height={700} className="w-[180px] sm:w-[200px] md:w-[221px] h-auto" />
      <div className="flex flex-col items-center">
        <Image src="/6.png" alt="bg"  width={700} height={700} className="w-[130px] sm:w-[150px] md:w-[168px] h-auto" />
        <Image src="/5.png" alt="bg"  width={700} height={700} className="w-[130px] sm:w-[150px] md:w-[161px] h-auto mt-3" />
      </div>
    </div>
  </div>

  {/* Text Section */}
  <div className="ml-6 md:ml-10 text-center">
    <h1 className="text-orange-500 text-[20px] sm:text-[24px] md:text-[30px] font-bold flex justify-center">
      Ex
      <p className="text-white inline ">tra ordinary taste</p>
    </h1>

    <h1 className="text-white font-bold text-[22px] sm:text-[24px] md:text-[30px]">And Experienced</h1>
    <p className="text-white text-[12px] sm:text-[14px] text-center mt-6 px-4 sm:px-8">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
      Doloremque ad doloribus laborum itaque magni molestiae, <br />
      repellat ducimus laboriosam! Corporis eaque impedit labo <br />
      riosam velit optio nihil accusamus autem laborum itaque est!
    </p>

    {/* Icons Section */}
    <div className="text-white flex flex-wrap justify-center gap-8 mt-5">
      <div className="flex flex-col items-center">
        <div className="bg-orange-400 p-4 rounded-full">
          <PiHamburger className="text-white text-2xl" />
        </div>
        <div className="mt-2 text-[14px] sm:text-[15px]">Fast Food</div>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-orange-400 p-4 rounded-full">
          <FaCookieBite className="text-white text-2xl" />
        </div>
        <div className="mt-2 text-[14px] sm:text-[15px]">Lunch</div>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-orange-400 p-4 rounded-full">
          <TbGlassFull className="text-white text-2xl" />
        </div>
        <div className="mt-2 text-[14px] sm:text-[15px]">Dinner</div>
      </div>
    </div>

    {/* Experience Box */}
    <div className="bg-white w-[200px] sm:w-[220px] md:w-[250px] border-l-8 border-orange-500 rounded-md mt-6 py-2 flex items-center justify-center text-center">
      <h1 className="text-orange-500 font-bold text-2xl md:text-3xl">30+</h1>
      <div className="ml-4 sm:ml-6 md:ml-7">
        Years of <br />
        <p className="font-bold">Experience</p>
      </div>
    </div>
  </div>
</div>


{/* 3rd page close */}



    {/* 4th page */}
    <div className="mt-28">
      <Image src="/Clients.png"  width={1800} height={1800} alt="bg" className="w-screen h-auto" />
    </div>
    {/* 4th page close */}



    {/* 5th page */}
   


    {/* 5th page close */}

    {/* 6th page */}
    <div className="flex justify-center">
  <h1 className='text-orange-500 font-bold text-[24px] sm:text-[30px] md:text-[35px] flex justify-center items-center mt-16 sm:mt-28'>
    Me<p className='text-white'>et Our Chef</p>
  </h1>
</div>

<div className="flex justify-center gap-6 mt-10 flex-wrap">
  <Image src="/chef1 (1).png" alt="bgg"  width={700} height={700} className="w-[150px] sm:w-[180px] md:w-[200px] h-auto" />
  <Image src="/chef1 (2).png" alt="bgg"  width={700} height={700} className="w-[150px] sm:w-[180px] md:w-[200px] h-auto" />
  <Image src="/chef1 (3).png" alt="bgg"  width={700} height={700} className="w-[150px] sm:w-[180px] md:w-[200px] h-auto" />
  <Image src="/chef1 (4).png" alt="bgg"  width={700} height={700} className="w-[150px] sm:w-[180px] md:w-[200px] h-auto" />
</div>
<Link href="/chefs">
<button className="text-white border border-orange-500 flex justify-center m-auto mt-8 rounded-3xl p-[7px] px-6 text-[12px] sm:text-[14px] md:text-[16px]">
  See More
</button></Link>

    {/* 6th page close */}


    {/* 7th page */}
    {/* <div className="text-white flex justify-center sm:ml-12 md:ml-24 mt-16 sm:mt-20">
  <h1 className="text-[24px] sm:text-[30px] md:text-[35px] font-bold text-center">
    What our clients are saying
  </h1>
</div> */}

{/* <div className="flex justify-center mt-10 sm:mt-12">
  <Image 
    src="review.png"  alt="bg"  className="w-[300px] sm:w-[400px] md:w-[500px] h-auto" 
  />
</div> */}


    {/* 7th page close */}


    {/* 8th page */}

    <div className="mt-20">
  <Image 
    src="/bigimg.png" alt="bg"  width={1800} height={1800} className="w-full sm:w-[1000px] md:w-[1350px] h-auto" 
  />
</div>


    {/* 8th page close */}


    {/* 9th page */}

    <div className="flex justify-center">
  <h1 className="text-orange-500 font-bold text-[30px] flex justify-center items-center mt-28">
    La<p className="text-white ">test News & Blog</p>
  </h1>
</div>
<div className="flex flex-wrap justify-center gap-6 mt-10">
<Link href="/shop"> <Image src="/Blog Card 1.png" alt="bgg"  width={700} height={700} className="w-[300px] h-[420px] sm:w-[250px] md:w-[300px]" />
</Link><Link href="/shop">
  <Image src="/Blog Card 3.png" alt="bgg"  width={700} height={700} className="w-[300px] h-[420px] sm:w-[250px] md:w-[300px]" />
</Link><Link href="/shop">
  <Image src="/Blog Card 2.png" alt="bgg"  width={700} height={700} className="w-[300px] h-[420px] sm:w-[250px] md:w-[300px]" />
  </Link>
</div>


    {/* 9th page close */}




      <Footer/>
      </div>
      
    </div>
  );
}
