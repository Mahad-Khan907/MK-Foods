"use client";

import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { 
  HiStar, 
  HiOutlineShoppingBag, 
  HiOutlineClock,
  HiOutlineSparkles,
  HiOutlineArrowRight,
  HiOutlineFire
} from "react-icons/hi2";
import { IoMdFlame } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  calories: string;
  prepTime: string;
  image: string;
  description: string;
  badge?: string;
  spicy?: boolean;
}

const menuData: MenuItem[] = [
  // Starters
  {
    id: "salmon-starter",
    name: "Alder Grilled Chinook Salmon Skewers",
    category: "Starters",
    price: 14.50,
    originalPrice: 18.00,
    calories: "380 CAL",
    prepTime: "12 mins",
    image: "/food1.png",
    description: "Toasted French artisan bread topped with aged romano, cheddar crust, wild dill cream.",
    badge: "Chef Starter",
  },
  {
    id: "spicy-wings-starter",
    name: "Crispy Hot Honey Chicken Drumettes",
    category: "Starters",
    price: 12.00,
    originalPrice: 15.00,
    calories: "450 CAL",
    prepTime: "10 mins",
    image: "/food4.png",
    description: "Double fried crispy cuts drenched in smoked wildflower habanero honey and toasted sesame.",
    badge: "Popular",
    spicy: true,
  },
  {
    id: "burrata-bruschetta",
    name: "Heirloom Tomato & Burrata Toast",
    category: "Starters",
    price: 11.50,
    calories: "320 CAL",
    prepTime: "8 mins",
    image: "/3.png",
    description: "Charred sourdough, roasted garlic rub, creamy pugliese burrata, wild basil leaves.",
  },

  // Main Course
  {
    id: "wagyu-ribeye",
    name: "Prime Black Angus Ribeye Steak",
    category: "Main Course",
    price: 34.00,
    originalPrice: 42.00,
    calories: "780 CAL",
    prepTime: "25 mins",
    image: "/food1.png",
    description: "12oz aged USDA prime cut char-grilled over white oak, herb bone marrow butter, truffled fries.",
    badge: "Masterpiece",
  },
  {
    id: "truffle-pasta",
    name: "Handmade Tagliatelle al Tartufo",
    category: "Main Course",
    price: 22.50,
    originalPrice: 27.00,
    calories: "640 CAL",
    prepTime: "18 mins",
    image: "/food3.png",
    description: "Fresh farm-egg pasta tossed in cultured French butter, 24-month Parmigiano, shaved black truffles.",
    badge: "Handmade",
  },
  {
    id: "grilled-salmon-main",
    name: "Pan-Seared Pacific Salmon Fillet",
    category: "Main Course",
    price: 26.50,
    calories: "540 CAL",
    prepTime: "20 mins",
    image: "/food1.png",
    description: "Crispy skin Atlantic salmon over asparagus puree, roasted heirloom carrots, saffron citrus emulsion.",
  },

  // Gourmet Burgers
  {
    id: "truffle-wagyu-burger",
    name: "Double Truffle Wagyu Burger",
    category: "Burgers",
    price: 16.99,
    originalPrice: 21.00,
    calories: "680 CAL",
    prepTime: "15 mins",
    image: "/1.png",
    description: "Double smashed Wagyu beef, melted Gruyere, caramelized shallot jam, black garlic aioli, brioche.",
    badge: "Top Seller",
  },
  {
    id: "classic-cheeseburger",
    name: "Artisan Smashed Cheeseburger",
    category: "Burgers",
    price: 13.50,
    calories: "610 CAL",
    prepTime: "12 mins",
    image: "/2.png",
    description: "Crispy crust Angus beef, sharp Wisconsin cheddar, dill pickle spears, secret diner relish.",
  },

  // Pizzas
  {
    id: "burrata-pizza",
    name: "Artisanal Burrata & Wild Basil Pizza",
    category: "Pizzas",
    price: 19.99,
    originalPrice: 24.00,
    calories: "720 CAL",
    prepTime: "15 mins",
    image: "/food2.png",
    description: "48-hour fermented crust, San Marzano D.O.P tomatoes, fresh burrata sphere, wild basil, Tuscan EVOO.",
    badge: "Wood Fired",
  },
  {
    id: "pepperoni-honey",
    name: "Hot Honey & Smoked Pepperoni",
    category: "Pizzas",
    price: 21.00,
    calories: "790 CAL",
    prepTime: "15 mins",
    image: "/food2.png",
    description: "Crispy cup pepperoni, fior di latte, hot chili infused honey drizzle, Sicilian oregano.",
    spicy: true,
  },

  // Desserts
  {
    id: "belgian-fondant",
    name: "Molten Belgian Dark Chocolate Cake",
    category: "Desserts",
    price: 11.99,
    calories: "450 CAL",
    prepTime: "10 mins",
    image: "/5.png",
    description: "Warm 70% Valrhona chocolate molten center served with Tahitian vanilla bean gelato.",
    badge: "Sweet Indulgence",
  },

  // Drinks
  {
    id: "cold-brew-mocktail",
    name: "Single Origin Cold Brew Espresso",
    category: "Drinks",
    price: 6.50,
    calories: "60 CAL",
    prepTime: "5 mins",
    image: "/6.png",
    description: "Slow dripped Ethiopian Yirgacheffe coffee, hints of Madagascar vanilla and salted caramel.",
  },
];

const menuCategories = ["All", "Starters", "Main Course", "Burgers", "Pizzas", "Desserts", "Drinks"];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart } = useCart();

  const filteredItems = activeCategory === "All"
    ? menuData
    : menuData.filter((i) => i.category === activeCategory);

  return (
    <div className="bg-[#080c14] min-h-screen text-slate-100 flex flex-col justify-between">
      <div>
        <Nav />

        {/* Hero Header */}
        <div className="relative py-16 sm:py-24 bg-gradient-to-b from-[#0f172a] via-[#090e1b] to-[#080c14] border-b border-white/5 text-center overflow-hidden">
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium mb-3">
              <Link href="/" className="hover:text-amber-400">Home</Link>
              <FaAngleRight className="text-[10px] text-amber-500" />
              <span className="text-amber-400 font-semibold">Gourmet Menu</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Our Artisanal <span className="text-amber-400">Culinary Menu</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Prepared to perfection by master executive chefs using 100% organic farm-to-table ingredients.
            </p>
          </div>
        </div>

        {/* Menu Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-600/30 scale-105"
                    : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between"
              >
                {/* Food Image */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-black/40 border border-white/10 flex-shrink-0 flex items-center justify-center p-1.5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  {item.badge && (
                    <span className="absolute top-1.5 left-1.5 text-[9px] font-bold text-amber-300 bg-black/80 px-1.5 py-0.5 rounded-full border border-amber-500/30">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-[10px] text-slate-400">• {item.calories}</span>
                    <span className="text-[10px] text-slate-400">• {item.prepTime}</span>
                    {item.spicy && <span title="Spicy">🌶️</span>}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-amber-400">
                        ${item.price.toFixed(2)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-xs text-slate-500 line-through">
                          ${item.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() =>
                        addToCart({
                          name: item.name,
                          price: item.price,
                          originalPrice: item.originalPrice,
                          image_url: item.image,
                          quantity: 1,
                          category: item.category,
                          slug: item.id,
                        })
                      }
                      className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-xs shadow-md shadow-orange-600/30 transition hover:scale-105 active:scale-95 flex items-center gap-1.5"
                    >
                      <HiOutlineShoppingBag className="text-sm" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Need Custom Catering / Table Booking Banner */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5 border border-amber-500/20 p-8 sm:p-12 text-center backdrop-blur-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
              <HiOutlineSparkles /> Special Events & Private Dining
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Planning a Gathering or Private Dinner?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              MK Foods caters birthdays, corporate banquets, and family celebrations with bespoke personalized tasting menus.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+923001234567"
                className="px-6 py-3 rounded-xl bg-amber-500 text-black font-bold text-xs hover:bg-amber-400 transition"
              >
                Call For Table Reservations
              </a>
              <Link
                href="/shop"
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition"
              >
                Order Direct Online Delivery
              </Link>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
