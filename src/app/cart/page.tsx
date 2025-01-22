"use client";
import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Image from 'next/image';


export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(cartItems);
  }, []);

  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <Nav />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
        <div className='mt-2 mb-4'>
          <a href="/shop" className='text-blue-600 underline'>Go Back to Shop</a>
        </div>
        {cart.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
                <div>
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    width={700} height={700}
                    className="w-[80px] h-[60px] object-cover "
                  />
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between mt-6 bg-gray-200 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">Total</h2>
              <p className="text-lg font-bold">${getTotal()}</p>
            
           </div> 
           <a href="/checkout">
            <div className="mt-6 flex justify-center">
              <button  className="bg-orange-600 text-white py-2 px-6 rounded-lg hover:bg-orange-700 transition">
                Proceed to Checkout
              </button>
            </div>
              </a>
          </div>
        )}
      </div>
    </div>
  );
}
