"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // To get the route dynamically
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';

const DetailsPage = () => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname(); // Get the current pathname
  const slug = pathname.split('/').pop(); // Extract the slug from the URL

  useEffect(() => {
    if (!slug) return; // Wait for the slug to be available

    async function fetchData() {
      try {
        const query = `
          *[_type == "chef" && slug.current == $slug][0]{
            name,
            position,
            experience,
            specialty,
            slug,
            "image_url": image.asset->url,
            description,
            available,
          }
        `;

        // Fetch data from Sanity
        const data = await client.fetch(query, { slug });
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div>
        <Nav />
        <div className="p-10 text-center">
          <h1 className="text-2xl font-bold">Loading...</h1>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div>
        <Nav />
        <div className="p-10 text-center">
          <h1 className="text-2xl font-bold text-red-600">Data Not Found</h1>
          <p className="text-gray-600 mt-4">We couldn't find the data you're looking for.</p>
          <a href="/chefs" className="mt-6 text-blue-500 underline">Back to Chefs page</a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <div className="p-6 md:p-10 lg:p-16">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="text-center py-6 bg-orange-600 text-white">
            <h1 className="text-2xl md:text-3xl font-bold">Chef Details</h1>
          </div>

          <div className="lg:flex-col p-6">
            <div className="lg:w-1/2 mb-6 lg:mb-0 flex justify-center items-center m-auto">
              <Image
                src={product.image_url}
                alt={product.name}
                width={700}
                height={700}
                className="w-full h-auto max-h-[350px] object-cover rounded-lg shadow-md"
              />
            </div>

            <div className="lg:w-1/2 lg:pl-8 m-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-6">{product.name}</h2>
              <p className="text-gray-600 mb-4 text-sm md:text-base">{product.description}</p>
              <p className="text-blue-600 mb-4 text-sm md:text-base underline">{product.position}</p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <h3 className="text-lg font-bold text-red-600 underline">
                  Experience: <span>{product.experience} Years</span>
                </h3>
              </div>
              <div className="mt-3">
                {product.available ? (
                  <p className="text-sm text-green-600 mt-2">Available Right Now</p>
                ) : (
                  <p className="text-sm text-red-600 mt-2">Not Available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailsPage;
