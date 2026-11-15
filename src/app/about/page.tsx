"use client";

import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { 
  HiOutlineSparkles, 
  HiOutlineShieldCheck, 
  HiOutlineHeart, 
  HiOutlineClock,
  HiStar,
  HiOutlineArrowRight
} from "react-icons/hi2";
import { PiForkKnife, PiHamburger, PiCookingPot } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";

const milestones = [
  { year: "1994", title: "The Humble Beginning", desc: "Started as a family artisanal bistro with 6 tables and a wood-fired brick oven." },
  { year: "2006", title: "Gourmet Expansion", desc: "Awarded Best Artisanal Burger & Grill in the city, expanding to 4 culinary flagships." },
  { year: "2018", title: "Farm-to-Fork Pledge", desc: "Partnered with 100% certified organic dairy & herb producers for zero-preservative cooking." },
  { year: "2026", title: "Digital Kitchen Delivery", desc: "Serving over 120,000 delighted diners with under-30-minute thermal insulated delivery." },
];

export default function AboutPage() {
  return (
    <div className="bg-[#080c14] min-h-screen text-slate-100 flex flex-col justify-between">
      <div>
        <Nav />

        {/* Header Breadcrumb */}
        <div className="relative py-16 sm:py-24 bg-gradient-to-b from-[#0f172a] via-[#090e1b] to-[#080c14] border-b border-white/5 text-center overflow-hidden">
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium mb-3">
              <Link href="/" className="hover:text-amber-400">Home</Link>
              <FaAngleRight className="text-[10px] text-amber-500" />
              <span className="text-amber-400 font-semibold">About MK Foods</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Our Culinary <span className="text-amber-400">Story & Legacy</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Three decades of relentless dedication to artisanal food craftsmanship, exquisite flavors, and diner satisfaction.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visuals */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0f172a] p-4">
                <Image
                  src="/main-image.png"
                  alt="MK Foods Kitchen Platter"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl drop-shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#090e1a]/95 border border-amber-500/40 p-5 rounded-3xl shadow-2xl backdrop-blur-xl">
                <p className="text-2xl font-black text-amber-400">30+ Years</p>
                <p className="text-xs text-white font-semibold">Fine Dining Excellence</p>
              </div>
            </div>

            {/* Story text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <HiOutlineSparkles /> Crafting Flavor Since 1994
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Food Is Not Just Sustenance, It Is An <span className="text-amber-400">Emotional Experience</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                At MK Foods, we believe that true gourmet dining begins with genuine respect for the ingredients. From our 48-hour fermented sourdough Neapolitan pizzas to our double-smashed 100% Wagyu burgers, every recipe has been refined across decades of culinary experimentation.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                We refuse to cut corners: our kitchens operate without frozen pre-cooked meats, artificial preservatives, or chemical thickeners. When you order from MK Foods, you taste real, honest food crafted by passionate chefs who treat cooking as an art form.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                  <span className="text-2xl font-black text-amber-400">100%</span>
                  <p className="text-xs font-semibold text-white mt-0.5">Organic & Halal Produce</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                  <span className="text-2xl font-black text-amber-400">&lt; 30 Min</span>
                  <p className="text-xs font-semibold text-white mt-0.5">Average Warm Delivery</p>
                </div>
              </div>
            </div>

          </div>

          {/* Pillars of Quality */}
          <div className="mt-24">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
                Our Core Pillars
              </span>
              <h3 className="text-3xl font-black text-white">Why Diners Choose MK Foods</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mb-4">
                  <PiCookingPot />
                </div>
                <h4 className="text-lg font-bold text-white">Master Chef Formulations</h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Every sauce, dough, and spice marinade is produced in-house from scratch by executive chefs trained in French, Italian, and Continental cooking.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl mb-4">
                  <HiOutlineShieldCheck />
                </div>
                <h4 className="text-lg font-bold text-white">Zero Compromise Hygiene</h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Certified ISO-22000 state-of-the-art kitchens equipped with stainless steel prep stations, UV sanitizers, and temperature-controlled storage.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center text-2xl mb-4">
                  <HiOutlineClock />
                </div>
                <h4 className="text-lg font-bold text-white">Heat-Retaining Delivery</h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Custom thermal insulated boxes prevent moisture buildup while preserving cheese pull, crispy burger buns, and sizzling steak warmth.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline / Milestones */}
          <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 backdrop-blur-xl">
            <h3 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
              Our Journey Through The Decades
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((m, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                  <span className="text-2xl font-black text-amber-400">{m.year}</span>
                  <h5 className="text-sm font-bold text-white">{m.title}</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
