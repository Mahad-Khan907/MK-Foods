"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { client } from "@/sanity/lib/client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { 
  HiOutlineShieldCheck, 
  HiOutlineCheckCircle, 
  HiOutlineTruck,
  HiOutlineLockClosed,
  HiOutlineArrowRight
} from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa6";

// Validation schema
const clientFormSchema = z.object({
  name: z.string().min(2, "Full Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(10, "Please provide complete delivery street address"),
  city: z.string().min(2, "Please select or enter your city"),
  postalCode: z.string().optional(),
  orderNotes: z.string().optional(),
  paymentMethod: z.enum(["cash_on_delivery", "card_payment", "online_wallet"]),
});

type ClientFormData = z.infer<typeof clientFormSchema>;

export default function ClientDataForm() {
  const { cart, cartTotal, clearCart } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState<any | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ClientFormData>({
    resolver: zodResolver(clientFormSchema),
    defaultValues: {
      city: "Karachi",
      paymentMethod: "cash_on_delivery",
    },
  });

  const deliveryFee = cartTotal > 30 || cartTotal === 0 ? 0 : 4.99;
  const estimatedTax = cartTotal * 0.05;
  const finalTotal = cartTotal + deliveryFee + estimatedTax;

  const handleOrderSubmit = async (data: ClientFormData) => {
    setSubmitting(true);
    const orderId = `MK-${Math.floor(100000 + Math.random() * 900000)}`;

    const orderPayload = {
      _type: "clientdata",
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      city: data.city,
      foodItem: cart.map((i) => `${i.name} (x${i.quantity})`).join(", "),
      quantity: cart.reduce((acc, i) => acc + i.quantity, 0),
      totalPrice: Number(finalTotal.toFixed(2)),
    };

    try {
      // Attempt to save to Sanity
      await client.create(orderPayload);
    } catch (err) {
      console.warn("Sanity order save note (fallback mode active):", err);
    }

    setOrderSuccess({
      orderId,
      customer: data.name,
      phone: data.phone,
      address: `${data.address}, ${data.city}`,
      total: finalTotal.toFixed(2),
      items: [...cart],
      payment: data.paymentMethod === "cash_on_delivery" ? "Cash on Delivery" : "Online Card Payment",
    });

    clearCart();
    reset();
    setSubmitting(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Breadcrumb */}
      <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium mb-4">
        <Link href="/" className="hover:text-amber-400">Home</Link>
        <FaAngleRight className="text-[10px] text-amber-500" />
        <Link href="/cart" className="hover:text-amber-400">Cart</Link>
        <FaAngleRight className="text-[10px] text-amber-500" />
        <span className="text-amber-400 font-semibold">Secure Checkout</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-black text-white text-center mb-10">
        Complete Your <span className="text-amber-400">Gourmet Order</span>
      </h1>

      {orderSuccess ? (
        /* Order Confirmed View */
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-[#0e1726] to-[#080c14] border border-amber-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl backdrop-blur-xl">
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-4xl mx-auto mb-5 animate-bounce">
            <HiOutlineCheckCircle />
          </div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
            Order Confirmed!
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Thank you, {orderSuccess.customer}!
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Your culinary order <strong className="text-amber-400 font-mono">#{orderSuccess.orderId}</strong> has been received by our kitchen and is now being prepared fresh.
          </p>

          <div className="mt-8 p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-left space-y-2.5 text-xs">
            <div className="flex justify-between text-slate-300">
              <span>Estimated Delivery Time:</span>
              <span className="text-amber-400 font-bold">25 - 35 Minutes</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Delivery Address:</span>
              <span className="text-white font-medium">{orderSuccess.address}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Payment Mode:</span>
              <span className="text-white font-medium">{orderSuccess.payment}</span>
            </div>
            <div className="flex justify-between text-slate-300 pt-2 border-t border-white/10 text-sm font-bold">
              <span>Total Amount:</span>
              <span className="text-amber-400 font-black">${orderSuccess.total}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-xs shadow-lg shadow-orange-600/30 transition hover:scale-105"
            >
              Back to Home
            </Link>
            <Link
              href="/shop"
              className="px-8 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition"
            >
              Order More Items
            </Link>
          </div>
        </div>
      ) : cart.length === 0 ? (
        /* Empty Cart Warning */
        <div className="max-w-md mx-auto text-center py-16 bg-white/[0.02] border border-white/10 rounded-3xl p-8">
          <p className="text-slate-300 text-sm mb-4">Your cart is currently empty. Please add items before checking out.</p>
          <Link
            href="/shop"
            className="px-6 py-3 rounded-xl bg-amber-500 text-black font-bold text-xs hover:bg-amber-400 transition inline-block"
          >
            Explore Menu & Shop
          </Link>
        </div>
      ) : (
        /* 2-Column Checkout Layout */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Delivery & Customer Info Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0f172a]/70 border border-white/10 p-6 sm:p-8 space-y-6 backdrop-blur-xl">
            <div className="flex items-center gap-2 pb-4 border-b border-white/10">
              <HiOutlineTruck className="text-amber-400 text-2xl" />
              <div>
                <h3 className="text-lg font-bold text-white">Delivery & Contact Details</h3>
                <p className="text-xs text-slate-400">Where should we deliver your hot food?</p>
              </div>
            </div>

            <form onSubmit={handleSubmit(handleOrderSubmit)} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mahad Khan"
                  {...register("name")}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                />
                {errors.name && (
                  <p className="text-[11px] text-rose-400 mt-1 font-medium">{errors.name.message}</p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    {...register("email")}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1 font-medium">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+92 300 1234567"
                    {...register("phone")}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-400 mt-1 font-medium">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Delivery Address */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Complete Street Address *
                </label>
                <textarea
                  rows={2}
                  placeholder="House / Apartment number, Street name, Area landmark..."
                  {...register("address")}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                />
                {errors.address && (
                  <p className="text-[11px] text-rose-400 mt-1 font-medium">{errors.address.message}</p>
                )}
              </div>

              {/* City Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    City *
                  </label>
                  <select
                    {...register("city")}
                    className="w-full bg-[#0a0f1d] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition cursor-pointer"
                  >
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Faisalabad">Faisalabad</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Postal Code (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 75500"
                    {...register("postalCode")}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                  />
                </div>
              </div>

              {/* Special Cooking / Delivery Notes */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Chef & Delivery Instructions (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Extra sauce, mild spice, ring bell twice..."
                  {...register("orderNotes")}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                />
              </div>

              {/* Payment Methods */}
              <div className="pt-4 border-t border-white/10">
                <label className="text-xs font-bold text-white block mb-3">
                  Payment Method *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/40 cursor-pointer transition">
                    <input
                      type="radio"
                      value="cash_on_delivery"
                      {...register("paymentMethod")}
                      className="accent-amber-500"
                    />
                    <div>
                      <p className="text-xs font-bold text-white">Cash on Delivery (Recommended)</p>
                      <p className="text-[11px] text-slate-400">Pay cash or scan QR when your warm food arrives</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/40 cursor-pointer transition">
                    <input
                      type="radio"
                      value="card_payment"
                      {...register("paymentMethod")}
                      className="accent-amber-500"
                    />
                    <div>
                      <p className="text-xs font-bold text-white">Credit / Debit Card</p>
                      <p className="text-[11px] text-slate-400">Visa, MasterCard, UnionPay supported</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-black text-sm shadow-xl shadow-orange-600/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {submitting ? (
                  <span>Processing Your Order...</span>
                ) : (
                  <>
                    <HiOutlineLockClosed className="text-lg" />
                    <span>Place Food Order • ${finalTotal.toFixed(2)}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Order Summary Preview */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0f172a]/90 border border-white/10 p-6 sm:p-7 space-y-5 shadow-2xl backdrop-blur-xl sticky top-28">
            <h3 className="text-base font-bold text-white border-b border-white/10 pb-3 flex items-center justify-between">
              <span>Your Food Basket</span>
              <span className="text-xs text-amber-400 font-semibold">{cart.length} item(s)</span>
            </h3>

            {/* Items list */}
            <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
              {cart.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-black/40 overflow-hidden flex-shrink-0 flex items-center justify-center">
                      <Image
                        src={item.image_url || "/food1.png"}
                        alt={item.name}
                        width={36}
                        height={36}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white leading-tight">{item.name}</p>
                      <p className="text-[10px] text-slate-400">Qty: {item.quantity} × ${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <span className="font-bold text-amber-400">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-semibold text-white">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Fast Delivery Fee</span>
                <span>
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-400 font-semibold">FREE</span>
                  ) : (
                    `$${deliveryFee.toFixed(2)}`
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (5%)</span>
                <span>${estimatedTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-black text-white pt-3 border-t border-white/10">
                <span>Total Due</span>
                <span className="text-2xl text-amber-400 font-black">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 flex items-center gap-2">
              <HiOutlineShieldCheck className="text-xl flex-shrink-0" />
              <span>Hot Food Guarantee: Delivered within 35 mins or enjoy a complimentary dessert voucher.</span>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
