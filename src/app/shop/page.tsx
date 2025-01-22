import React from 'react';
import Nav from '../components/Nav';
import { FaAngleRight } from 'react-icons/fa6';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import Footer from '../components/Footer';
import Image from 'next/image';

// Server Component to fetch product data directly
export default async function ProductDetails() {
  const query = `
    *[_type == "food"]{
      name,
      category,
      price,
      originalPrice,
      slug,
      tags,
      "image_url": image.asset->url,
      description,
      available,
    }
  `;
  
  const products = await client.fetch(query);

  return (
    <div>
      <Nav />
      <div className="relative">
        <Image
          src="/nav.png"
          alt="bg"
          width={1300} height={1300}
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
        />
        <h1 className="absolute inset-0 flex justify-center items-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Our Shop
        </h1>
        <div className="absolute inset-0 flex justify-center items-center flex-col mt-20 sm:mt-32 lg:mt-36">
          <h2 className="flex items-center text-sm sm:text-base md:text-lg text-white gap-1">
            Home <FaAngleRight /> <span className="text-orange-400">Shop</span>
          </h2>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((item: any) => (
          <div
            key={item.slug.current}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/product-details/${item.slug.current}`}>
              <Image
                src={item.image_url}
                alt={item.name}
                width={700} height={700}
                className="w-full h-64 object-cover rounded-md mb-4 hover:opacity-80 hover:duration-300"
              />
            </Link>
            <h1 className="text-lg font-semibold text-gray-800">{item.name}</h1>
            <p className="text-sm text-gray-600">{item.description}</p>
            <div className="mt-4">
              <h2 className="text-lg text-orange-600 font-semibold">${item.price}</h2>
              {item.originalPrice && (
                <h3 className="text-sm text-gray-400 line-through">${item.originalPrice}</h3>
              )}
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
