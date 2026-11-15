"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  IoMdFlame,
  IoLogoInstagram, 
  IoLogoFacebook, 
  IoLogoTwitter, 
  IoLogoYoutube 
} from "react-icons/io";
import { 
  HiOutlineLocationMarker, 
  HiOutlinePhone, 
  HiOutlineMail, 
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineSparkles
} from "react-icons/hi";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#05080f] text-slate-300 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

      {/* Newsletter & Club Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="relative rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5 border border-amber-500/20 p-8 sm:p-12 mb-16 overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
                <HiOutlineSparkles /> Join Our VIP Foodie Circle
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Get <span className="text-amber-400">20% Off</span> On Your Next Culinary Order
              </h2>
              <p className="mt-2 text-sm text-slate-300 max-w-xl">
                Subscribe to our secret menu releases, seasonal artisanal tastings, and exclusive weekly chef discounts delivered right to your inbox.
              </p>
            </div>
            <div className="lg:col-span-5">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-sm shadow-lg shadow-orange-600/30 transition hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
              {subscribed && (
                <p className="text-emerald-400 text-xs mt-2 font-medium animate-pulse">
                  🎉 Thank you for subscribing! Check your inbox for the 20% discount code.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/30">
                <IoMdFlame className="text-2xl" />
              </div>
              <span className="text-2xl font-black text-white">
                MK <span className="text-amber-400">Foods</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Crafting unforgettable culinary memories since 1994. Every recipe is hand-curated by certified executive chefs using organic farm-to-table ingredients.
            </p>
            
            {/* Opening Hours Card */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 max-w-sm">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-slate-300 font-semibold">
                  <HiOutlineClock className="text-amber-400 text-base" /> Kitchen Operating Hours
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Open Now
                </span>
              </div>
              <div className="text-xs text-slate-400 space-y-0.5 pl-6">
                <p>Monday - Friday: 09:00 AM - 11:30 PM</p>
                <p>Saturday - Sunday: 10:00 AM - 01:00 AM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Explore Menu
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/menu" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Artisanal Pizzas
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Gourmet Burgers
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Steaks & Sizzlers
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Fresh Pasta & Bowls
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Desserts & Beverages
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">
                  Today's Chef Specials →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-amber-400 transition-colors">
                  About MK Foods
                </Link>
              </li>
              <li>
                <Link href="/chefs" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Our Master Chefs
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Customer FAQ & Help
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Track Active Order
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Hygiene & Safety Standards
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <HiOutlineLocationMarker className="text-amber-400 text-lg flex-shrink-0 mt-0.5" />
                <span>MK Gourmet Plaza, Main Boulevard, Clifton Block 4, Karachi</span>
              </li>
              <li className="flex items-center gap-2.5">
                <HiOutlinePhone className="text-amber-400 text-base flex-shrink-0" />
                <a href="tel:+923001234567" className="hover:text-white transition-colors">
                  +92 300 1234567 / +92 21 3589000
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <HiOutlineMail className="text-amber-400 text-base flex-shrink-0" />
                <a href="mailto:contact@mkfoods.com" className="hover:text-white transition-colors">
                  support@mkfoods.com
                </a>
              </li>
              <li className="pt-2">
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <HiOutlineShieldCheck className="text-emerald-400 text-lg" />
                  <span>100% Halal & ISO-22000 Certified</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-white font-semibold">MK Foods International</span>. Handcrafted with passion. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 hidden sm:inline">Follow Our Kitchen:</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-orange-600 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="Instagram"
            >
              <IoLogoInstagram className="text-lg" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-orange-600 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="Facebook"
            >
              <IoLogoFacebook className="text-lg" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-orange-600 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="Twitter"
            >
              <IoLogoTwitter className="text-lg" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-orange-600 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="YouTube"
            >
              <IoLogoYoutube className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
