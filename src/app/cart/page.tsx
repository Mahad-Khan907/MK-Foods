"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useCart } from "@/context/CartContext";
import { 
  HiOutlineTrash, 
  HiOutlineShoppingBag, 
  HiOutlineArrowRight, 
  HiOutlineShieldCheck,
  HiOutlineTicket,
  HiOutlineCheck,
  HiOutlineArrowLeft
} from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa6";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === "MKFOODS20") {
      setDiscountPercent(20);
      setCouponApplied(true);
      setCouponError("");
    } else {
      setCouponError("Invalid coupon code. Try 'MKFOODS20'");
    }
  };

  const deliveryFee = cartTotal > 30 || cartTotal === 0 ? 0 : 4.99;
  const discountAmount = (cartTotal * discountPercent) / 100;
  const estimatedTax = (cartTotal - discountAmount) * 0.05;
  const finalTotal = Math.max(0, cartTotal - discountAmount + estimatedTax + deliveryFee);

  return (
    <div className="bg-[#080c14] min-h-screen text-slate-100 flex flex-col justify-between">
      <div>
        <Nav />

        {/* Header Breadcrumb */}
        <div className="py-12 bg-gradient-to-b from-[#0f172a] to-[#080c14] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium mb-2">
              <Link href="/" className="hover:text-amber-400">Home</Link>
              <FaAngleRight className="text-[10px] text-amber-500" />
              <Link href="/shop" className="hover:text-amber-400">Shop</Link>
              <FaAngleRight className="text-[10px] text-amber-500" />
              <span className="text-amber-400 font-semibold">Your Cart</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              Your Culinary <span className="text-amber-400">Order Cart</span>
            </h1>
          </div>
        </div>

        {/* Cart Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          {cart.length === 0 ? (
            /* Empty Cart View */
            <div className="py-20 text-center max-w-md mx-auto bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="w-20 h-20 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-4xl mx-auto mb-4">
                <HiOutlineShoppingBag />
              </div>
              <h2 className="text-2xl font-bold text-white">Your Cart is Hungry</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                You haven't added any dishes to your cart yet. Explore our handcrafted menu and order your favorite meal!
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/shop"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-xs shadow-lg shadow-orange-600/30 transition hover:scale-105"
                >
                  Explore Food Shop
                </Link>
                <Link
                  href="/menu"
                  className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition"
                >
                  View Full Menu
                </Link>
              </div>
            </div>
          ) : (
            /* Active Cart Grid */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Cart Items List */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-sm font-bold text-white">
                    Order Items ({cart.length})
                  </span>
                  <button
                    onClick={clearCart}
                    className="text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1 transition"
                  >
                    <HiOutlineTrash /> Clear Cart
                  </button>
                </div>

                {cart.map((item, index) => {
                  const itemTotal = item.price * item.quantity;
                  return (
                    <div
                      key={index}
                      className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      {/* Image & Title */}
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-black/40 border border-white/10 relative flex-shrink-0 flex items-center justify-center p-1">
                          <Image
                            src={item.image_url || "/food1.png"}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                            {item.category || "Signature Dish"}
                          </span>
                          <h3 className="text-base font-bold text-white">{item.name}</h3>
                          <p className="text-xs text-slate-400">
                            Unit Price: <span className="text-amber-400 font-semibold">${item.price.toFixed(2)}</span>
                          </p>
                        </div>
                      </div>

                      {/* Quantity Stepper & Price */}
                      <div className="flex items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/5">
                        {/* Stepper */}
                        <div className="flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                          <button
                            onClick={() => updateQuantity(index, item.quantity - 1)}
                            className="px-3 py-1.5 text-slate-300 hover:text-white hover:bg-white/10 font-bold text-sm transition"
                            title="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="px-3 py-1.5 text-xs font-bold text-white min-w-[32px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(index, item.quantity + 1)}
                            className="px-3 py-1.5 text-slate-300 hover:text-white hover:bg-white/10 font-bold text-sm transition"
                            title="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        {/* Item Total */}
                        <div className="text-right min-w-[70px]">
                          <p className="text-base font-black text-amber-400">${itemTotal.toFixed(2)}</p>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeFromCart(index)}
                          className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition"
                          title="Remove item"
                        >
                          <HiOutlineTrash className="text-lg" />
                        </button>
                      </div>
                    </div>
                  );
                })}

                <div className="pt-4 flex items-center justify-between">
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition"
                  >
                    <HiOutlineArrowLeft /> Add more dishes from Shop
                  </Link>
                </div>
              </div>

              {/* Right Column: Order Summary Card */}
              <div className="lg:col-span-4 rounded-3xl bg-[#0f172a]/90 border border-white/10 p-6 sm:p-7 space-y-6 shadow-2xl backdrop-blur-xl sticky top-28">
                <h3 className="text-lg font-bold text-white border-b border-white/10 pb-4">
                  Order Summary
                </h3>

                {/* Subtotals */}
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Items Subtotal</span>
                    <span className="font-semibold text-white">${cartTotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>
                      {deliveryFee === 0 ? (
                        <span className="text-emerald-400 font-semibold">FREE (Over $30)</span>
                      ) : (
                        `$${deliveryFee.toFixed(2)}`
                      )}
                    </span>
                  </div>

                  {couponApplied && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Promo Discount ({discountPercent}%)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Estimated Tax (5%)</span>
                    <span>${estimatedTax.toFixed(2)}</span>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex justify-between text-base font-black text-white">
                    <span>Estimated Total</span>
                    <span className="text-2xl text-amber-400">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Promo Code Input */}
                <form onSubmit={handleApplyCoupon} className="pt-2">
                  <label className="text-[11px] font-semibold text-slate-400 block mb-1.5 flex items-center gap-1">
                    <HiOutlineTicket className="text-amber-400" /> Have a Promo Code?
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. MKFOODS20"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs uppercase font-mono text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition"
                    >
                      Apply
                    </button>
                  </div>
                  {couponApplied && (
                    <p className="text-[11px] text-emerald-400 mt-1.5 flex items-center gap-1 font-medium">
                      <HiOutlineCheck /> Promo code applied: 20% discount granted!
                    </p>
                  )}
                  {couponError && (
                    <p className="text-[11px] text-rose-400 mt-1.5 font-medium">{couponError}</p>
                  )}
                </form>

                {/* Checkout CTA */}
                <Link
                  href="/checkout"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-extrabold text-sm shadow-xl shadow-orange-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
                >
                  <span>Proceed to Checkout</span>
                  <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                  <HiOutlineShieldCheck className="text-emerald-400 text-base" />
                  <span>Secure 256-bit encrypted checkout</span>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
