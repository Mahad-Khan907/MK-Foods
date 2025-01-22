"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { client } from "@/sanity/lib/client";

// Validation schema
const clientFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(15, "Address must be at least 15 characters"),
  city: z.string().refine((val) => val === "Karachi", "Only Karachi is allowed"),
  paymentMethod: z.string().refine(
    (val) => val === "cash_on_delivery",
    "Invalid payment method"
  ),
});

type ClientFormData = z.infer<typeof clientFormSchema>;

const ClientDataForm = () => {
  const [cart, setCart] = useState<any[]>([]);

  const {
    register,
    handleSubmit,
    reset, // Reset function to clear form fields
    formState: { errors },
  } = useForm<ClientFormData>({
    resolver: zodResolver(clientFormSchema),
    defaultValues: {
      city: "Karachi",
      paymentMethod: "cash_on_delivery",
    },
  });

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartItems);
  }, []);

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleFormSubmit = async (data: ClientFormData) => {
    const formData = {
      ...data,
      cartItems: cart.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice: getTotalPrice(),
    };

    try {
      // Save data to Sanity
      await client.create({
        _type: "clientdata",
        ...formData,
      });

      // Clear form fields and cart
      reset(); // Reset form fields
      setCart([]); // Clear cart state
      localStorage.removeItem("cart"); // Clear cart from localStorage

      alert("Purchase successfully!");
    } catch (error) {
      console.error("Failed to purchase:", error);
      alert("Failed to purchase. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-xl flex flex-col md:flex-row space-y-6 md:space-y-0">
        {/* Left side: Form inputs */}
        <div className="flex-1 space-y-6">
          <h1 className="text-2xl font-bold text-center mb-6">Checkout Information</h1>
          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                {...register("name")}
                className={`w-full border-2 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-400 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                {...register("email")}
                className={`w-full border-2 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-400 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                {...register("phone")}
                className={`w-full border-2 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-400 ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700">Address</label>
              <textarea
                {...register("address")}
                className={`w-full border-2 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-400 ${
                  errors.address ? "border-red-500" : "border-gray-300"
                }`}
                rows={3}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 font-bold rounded-lg hover:bg-blue-700 transition"
            >
              Checkout
            </button>
          </form>
        </div>

        {/* Right side: Cart items, City, and Payment Method */}
        <div className="flex-1 md:ml-8 space-y-6">
          {/* Selected Cart Items */}
          <h2 className="text-lg font-bold mb-4">Selected Items</h2>
          {cart.length > 0 ? (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md"
                >
                  <div>
                    <p className="font-bold text-gray-700">{item.name}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-600">Price: ${item.price}</p>
                  </div>
                </div>
              ))}
              <div className="text-right font-bold text-gray-800 mt-4">
                Total Price: ${getTotalPrice()}
              </div>
            </div>
          ) : (
            <p className="text-gray-500">No items selected.</p>
          )}

          {/* City */}
          <div>
            <label className="block text-gray-700">City</label>
            <select
              {...register("city")}
              className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-400"
            >
              <option value="Karachi">Karachi</option>
            </select>
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )}
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-gray-700">Payment Method</label>
            <select
              {...register("paymentMethod")}
              className="w-full border-2 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-400"
            >
              <option value="cash_on_delivery">Cash on Delivery</option>
            </select>
            {errors.paymentMethod && (
              <p className="text-red-500 text-sm mt-1">{errors.paymentMethod.message}</p>
            )}
            
          </div>
          <p className="text-sm text-gray-600 font-bold italic">Your food will be delivered soon.</p>
        </div>
      </div>
    </div>
  );
};

export default ClientDataForm;
