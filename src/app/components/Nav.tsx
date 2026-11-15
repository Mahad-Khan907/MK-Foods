"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  IoIosSearch, 
  IoMdClose,
  IoMdFlame 
} from "react-icons/io";
import { 
  HiOutlineShoppingBag, 
  HiOutlineMenuAlt3, 
  HiOutlineX,
  HiOutlineSparkles 
} from "react-icons/hi";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Shop", href: "/shop" },
  { name: "Chefs", href: "/chefs" },
  { name: "About Us", href: "/about" },
  { name: "Help & FAQ", href: "/help" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { cartCount } = useCart();

  // Scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Search autocomplete
  useEffect(() => {
    if (!search.trim()) {
      setSuggestions([]);
      return;
    }
    const timer = setTimeout(async () => {
      setIsSearching(true);
      try {
        const query = `*[_type == "food" && name match $search + "*"][0...5]{
          _id,
          name,
          price,
          category,
          slug,
          "image_url": image.asset->url
        }`;
        const res = await client.fetch(query, { search });
        setSuggestions(res || []);
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setIsSearching(false);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [search]);

  // Click outside to close search suggestions
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080c14]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-2xl shadow-black/50"
          : "bg-[#080c14]/75 backdrop-blur-sm border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform duration-300">
              <IoMdFlame className="text-2xl" />
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-2xl font-black tracking-tight text-white">MK</span>
                <span className="text-2xl font-black tracking-tight text-amber-400 ml-1">Foods</span>
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 ml-1 mt-2 animate-ping" />
              </div>
              <p className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 -mt-1 flex items-center gap-1">
                Gourmet Dining <HiOutlineSparkles className="text-amber-400 text-[10px]" />
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-amber-400 bg-amber-500/10 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Search, Cart & Actions */}
          <div className="flex items-center gap-3">
            
            {/* Search Bar with live autocomplete */}
            <div ref={searchRef} className="relative hidden md:block w-48 lg:w-60">
              <div className="relative flex items-center">
                <IoIosSearch className="absolute left-3.5 text-slate-400 text-lg pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search delicious food..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-9 pr-8 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/50 transition-all duration-200"
                />
                {search && (
                  <button
                    onClick={() => {
                      setSearch("");
                      setSuggestions([]);
                    }}
                    className="absolute right-2.5 text-slate-400 hover:text-white text-sm"
                  >
                    <IoMdClose />
                  </button>
                )}
              </div>

              {/* Autocomplete Dropdown */}
              {suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[#0e1422] border border-amber-500/20 rounded-2xl shadow-2xl p-2 z-50 backdrop-blur-xl">
                  <div className="text-[11px] font-semibold text-slate-400 px-3 py-1 uppercase tracking-wider">
                    Quick Results
                  </div>
                  {suggestions.map((item) => (
                    <Link
                      key={item._id}
                      href={`/product-details/${item.slug?.current || item._id}`}
                      onClick={() => setSuggestions([])}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      {item.image_url ? (
                        <Image
                          src={item.image_url}
                          alt={item.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xs">🍔</div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-slate-200 group-hover:text-amber-400 truncate">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-slate-400 capitalize">{item.category || "Special"}</p>
                      </div>
                      <span className="text-xs font-bold text-amber-400">${item.price}</span>
                    </Link>
                  ))}
                  <Link
                    href={`/shop`}
                    onClick={() => setSuggestions([])}
                    className="block text-center text-xs text-amber-400 hover:text-amber-300 font-medium py-1.5 mt-1 border-t border-white/5"
                  >
                    View all in Shop →
                  </Link>
                </div>
              )}
            </div>

            {/* Cart Icon with Live Badge */}
            <Link
              href="/cart"
              className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all duration-200 hover:scale-105 group"
              title="View Cart"
            >
              <HiOutlineShoppingBag className="text-xl group-hover:text-amber-400 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-[10px] min-w-[20px] h-[20px] rounded-full flex items-center justify-center px-1 shadow-md shadow-orange-500/50 animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Order Now / Sign In CTA */}
            <Link
              href="/shop"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Order Online
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <HiOutlineX className="text-2xl text-amber-400" />
              ) : (
                <HiOutlineMenuAlt3 className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d]/98 border-b border-amber-500/20 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-top-4 duration-200">
          {/* Mobile Search */}
          <div className="relative mb-3">
            <IoIosSearch className="absolute left-3 top-2.5 text-slate-400 text-lg" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-9 pr-4 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-500/30"
                      : "bg-white/5 text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-white/10">
            <Link
              href="/signin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs text-slate-400 hover:text-amber-400 font-medium py-2"
            >
              Customer Sign In
            </Link>
            <Link
              href="/cart"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold"
            >
              <HiOutlineShoppingBag /> Cart ({cartCount})
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
