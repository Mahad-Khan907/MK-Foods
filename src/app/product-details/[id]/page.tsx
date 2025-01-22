"use client";

import Nav from "@/app/components/Nav";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function DetailsPage({ params }: any) {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const { id }: any = React.use(params);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const query = `*[_type == "food" && slug.current == $id][0]{
          name,
          category,
          price,
          originalPrice,
          slug,
          tags,
          "image_url": image.asset->url,
          description,
          available,
        }`;

        const fetchedProduct = await client.fetch(query, { id });
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const addToCart = () => {
    const cartItem = { ...product, quantity };
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart! Please click on cart icon.');
  };
  
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
          <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
          <p className="text-gray-600 mt-4">We could not find the product you are looking for.</p>
          <a href="/shop" className="mt-6 text-blue-500 underline">Back to Shop</a>
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
            <h1 className="text-2xl md:text-3xl font-bold">Product Details</h1>
          </div>

          <div className="lg:flex p-6">
            <div className="lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
              <Image
                src={product.image_url}
                alt={product.name}
                width={700} height={700}
                className="w-full h-auto max-h-[350px] object-cover rounded-lg shadow-md"
              />
            </div>

            <div className="lg:w-1/2 lg:pl-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-4 text-sm md:text-base">{product.description}</p>
              <p className="text-sm text-gray-500">
                Category: <span className="font-semibold">{product.category}</span>
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-4">
                <h3 className="text-lg font-bold text-orange-600">
                  Price: <span>&#36;{product.price}</span>
                </h3>
                {product.originalPrice && (
                  <h3 className="text-lg text-gray-500 line-through">
                    &#36;{product.originalPrice}
                  </h3>
                )}
              </div>

              <div className="mt-6">
                {product.available ? (
                  <p className="text-sm text-green-600 font-medium mt-2">In Stock</p>
                ) : (
                  <p className="text-sm text-red-600 font-medium mt-2">Out of Stock</p>
                )}
              </div>

              <div className="flex items-center gap-2 mt-4">
                <button
                  onClick={decrement}
                  className="bg-gray-200 px-4 py-2 rounded shadow hover:bg-gray-300"
                >
                  - 
                </button>
                <span className="font-bold">{quantity}</span>
                <button
                  onClick={increment}
                  className="bg-gray-200 px-4 py-2 rounded shadow hover:bg-gray-300"
                >
                  + 
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={addToCart}
                className="mt-8 w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-md font-bold shadow-md transition-all duration-300"
              >
                Add to Cart
              </button>

        
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
