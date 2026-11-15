"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  HiOutlineSparkles, 
  HiOutlineArrowRight, 
  HiOutlineClock, 
  HiStar,
  HiOutlineShieldCheck
} from "react-icons/hi";
import { IoMdFlame } from "react-icons/io";
import { useCart } from "@/context/CartContext";

export default function HomeHero() {
  const { addToCart } = useCart();

  const handleQuickAddHero = () => {
    addToCart({
      name: "MK Signature Wagyu Platter",
      price: 24.99,
      originalPrice: 32.00,
      image_url: "/main-image.png",
      quantity: 1,
      category: "Signature",
    });
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-orange-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold shadow-inner">
              <IoMdFlame className="text-orange-500 text-base animate-pulse" />
              <span>Premium Gourmet Dining Experience</span>
              <HiOutlineSparkles className="text-amber-400 text-xs" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Savor The Art Of{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Exceptional Taste
              </span>{" "}
              & Speed
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Every dish is masterfully prepared by world-class executive chefs using 100% fresh, locally-sourced organic ingredients. Delivered sizzling hot to your doorstep in under 30 minutes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/shop"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-base shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Order Food Now</span>
                <HiOutlineArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/menu"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/40 text-slate-200 hover:text-white font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>View Full Menu</span>
              </Link>
            </div>

            {/* Key Value Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <HiOutlineClock className="text-xl" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white leading-tight">30 Mins</p>
                  <p className="text-[11px] text-slate-400">Super Fast Delivery</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <HiOutlineShieldCheck className="text-xl" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white leading-tight">100% Halal</p>
                  <p className="text-[11px] text-slate-400">Fresh & Organic</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-amber-400">
                  <HiStar className="text-xl text-amber-400" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white leading-tight">4.9 / 5.0</p>
                  <p className="text-[11px] text-slate-400">18k+ Happy Diners</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Interactive Floating Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Glowing dish container */}
            <div className="relative w-[300px] sm:w-[420px] lg:w-[480px] h-[300px] sm:h-[420px] lg:h-[480px]">
              
              {/* Animated decorative ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-amber-500/30 animate-[spin_35s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-amber-500/20 via-orange-500/10 to-transparent blur-2xl pointer-events-none" />

              {/* Main Food Image */}
              <div className="relative w-full h-full p-4 flex items-center justify-center">
                <Image
                  src="/main-image.png"
                  alt="MK Signature Gourmet Dish"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(245,158,11,0.3)] animate-float"
                />
              </div>

              {/* Floating Card 1: Today's Chef Special */}
              <div className="absolute -top-2 -left-4 sm:-left-8 bg-[#0f172a]/90 border border-amber-500/30 backdrop-blur-xl p-3.5 rounded-2xl shadow-2xl shadow-black/80 flex items-center gap-3.5 max-w-[240px] transition-transform hover:scale-105 duration-200">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <Image src="/food1.png" alt="Special" width={50} height={50} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">Today's Pick</span>
                  <p className="text-xs font-bold text-white truncate">Artisanal Salmon</p>
                  <p className="text-xs font-semibold text-emerald-400">$18.99 <span className="text-[10px] text-slate-400 line-through">$24.00</span></p>
                </div>
              </div>

              {/* Floating Card 2: Quick Order Badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-6 bg-[#0f172a]/90 border border-white/10 backdrop-blur-xl p-3.5 rounded-2xl shadow-2xl shadow-black/80 flex items-center gap-3 max-w-[230px]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-white flex-shrink-0">
                  <IoMdFlame className="text-xl" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[11px] text-amber-400 font-bold">
                    <HiStar className="text-amber-400" />
                    <span>5.0 (450+ reviews)</span>
                  </div>
                  <button
                    onClick={handleQuickAddHero}
                    className="text-xs font-bold text-white hover:text-amber-300 underline underline-offset-2 mt-0.5"
                  >
                    + Quick Add Platter
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
