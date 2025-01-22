"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { client } from "@/sanity/lib/client";
import { FaHeartCirclePlus } from "react-icons/fa6";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const fetchSearchResults = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);

    const queryString = `*[_type == "food" && name match $data]{
      name,
      category,
      price,
      originalPrice,
      slug,
      tags,
      "image_url": image.asset->url,
      description,
      available
    }`;

    try {
      const results = await client.fetch(queryString, {
        data: `*${query}*`,
      });
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    fetchSearchResults(query);
  };

  return (
    <div className="bg-black p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex justify-start mb-4 lg:mb-0">
          <h1 className="text-orange-400 text-2xl sm:text-3xl md:text-4xl font-bold">
            MK <span className="text-white">Foods</span>
          </h1>
        </div>

        {/* Hamburger Icon (Mobile Menu) */}
        <div className="lg:hidden flex justify-end" onClick={toggleMenu}>
          {menuOpen ? (
            <HiX className="text-white text-3xl" />
          ) : (
            <HiMenu className="text-white text-3xl" />
          )}
        </div>
      </div>

      {/* Navbar Links */}
      <div
        className={`${
          menuOpen ? "flex flex-col justify-center text-center gap-4 space-y-4" : "hidden"
        } lg:flex lg:flex-row lg:space-x-6 lg:justify-center text-white text-[12px] sm:text-base font-semibold`}
      >
        <Link href="/" className="hover:text-orange-400">
          Home
        </Link>
        <Link href="/menu" className="hover:text-orange-400">
          Menu
        </Link>
        <Link href="/about" className="hover:text-orange-400">
          About
        </Link>
        <Link href="/shop" className="hover:text-orange-400">
          Shop
        </Link>
        <Link href="/chefs" className="hover:text-orange-400">
          Chefs
        </Link>
        <Link href="/signup" className="hover:text-orange-400">
          Sign Up
        </Link>
        <Link href="/signin" className="hover:text-orange-400">
          Sign In
        </Link>
        <Link href="/help" className="hover:text-orange-400">
          Help & FAQs
        </Link>
      </div>

      {/* Search and Icons */}
      <div className="flex justify-center lg:justify-end space-x-4 mt-4 lg:mt-0 text-white text-2xl">
        <div className="relative">
          <IoIosSearch className="absolute left-4 top-2.5 text-black" />
          <input
            type="text"
            placeholder="Search"
            className="p-2 w-[200px] h-[40px] text-sm border border-gray-300 text-black rounded-2xl pl-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchResults.length > 0 && (
            <div className="absolute z-50 bg-white border border-gray-300 rounded-md mt-1 w-[180px] max-h-[200px] overflow-y-auto shadow-md">
              {searchResults.map((result: any) => (
                <Link
                  key={result.slug.current}
                  href={`/product-details/${result.slug.current}`}
                  onClick={() => setSearchQuery("")}
                >
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-100">
                    <img
                      src={result.image_url}
                      alt={result.name}
                      width={40}
                      height={40}
                      className="rounded-sm"
                    />
                    <div>
                      <p className="text-sm font-medium text-black">{result.name}</p>
                      <p className="text-xs text-black">${result.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/cart">
          <FaShoppingCart className="hover:text-orange-400 cursor-pointer mt-2 text-xl" />
        </Link>
       
      </div>
    </div>
  );
};

export default Nav;
