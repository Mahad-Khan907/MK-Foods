"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomeHero from "./components/HomeHero";
import { useCart } from "@/context/CartContext";
import { 
  HiOutlineSparkles, 
  HiOutlineArrowRight, 
  HiStar, 
  HiOutlineShoppingBag,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineFire,
  HiOutlineCheckBadge,
  HiOutlineHeart
} from "react-icons/hi2";
import { 
  PiHamburger, 
  PiPizza, 
  PiCookie, 
  PiCoffee,
  PiBowlFood,
  PiForkKnife
} from "react-icons/pi";
import { IoMdFlame } from "react-icons/io";

// Interactive Food Categories
const foodCategories = [
  {
    name: "Gourmet Burgers",
    icon: PiHamburger,
    count: "14 Varieties",
    description: "Smashed Black Angus & Crispy Chicken with artisanal brioche",
    image: "/1.png",
    tag: "Most Popular",
  },
  {
    name: "Wood-Fired Pizza",
    icon: PiPizza,
    count: "10 Varieties",
    description: "48-hr slow fermented sourdough with San Marzano tomatoes",
    image: "/2.png",
    tag: "Chef Special",
  },
  {
    name: "Artisan Pasta & Bowls",
    icon: PiBowlFood,
    count: "12 Varieties",
    description: "Hand-rolled tagliatelle, truffles & creamy Alfredo sauce",
    image: "/3.png",
    tag: "Fresh Daily",
  },
  {
    name: "Signature Grills",
    icon: PiForkKnife,
    count: "8 Varieties",
    description: "Tender ribeye steaks, grilled salmon & smoky BBQ platters",
    image: "/4.png",
    tag: "Premium",
  },
  {
    name: "Decadent Desserts",
    icon: PiCookie,
    count: "9 Varieties",
    description: "Belgian chocolate lava cake, artisan cheesecakes & gelatos",
    image: "/5.png",
    tag: "Sweet Delight",
  },
  {
    name: "Artisan Beverages",
    icon: PiCoffee,
    count: "15 Varieties",
    description: "Cold-brew coffees, organic fruit coolers & fresh mocktails",
    image: "/6.png",
    tag: "Refreshing",
  },
];

// Curated Signature Dishes
const featuredDishes = [
  {
    id: "wagyu-burger",
    name: "Truffle Double Wagyu Burger",
    category: "Burger",
    price: 16.99,
    originalPrice: 21.00,
    rating: 4.9,
    reviews: 320,
    calories: "680 kcal",
    time: "20 min",
    image: "/1.png",
    badge: "Bestseller",
    description: "Dual 100% Wagyu patties, black truffle aioli, aged cheddar on toasted brioche.",
  },
  {
    id: "salmon-grill",
    name: "Alder Wood Smoked Salmon",
    category: "Signature Grill",
    price: 24.50,
    originalPrice: 29.00,
    rating: 5.0,
    reviews: 185,
    calories: "520 kcal",
    time: "25 min",
    image: "/food1.png",
    badge: "Chef Choice",
    description: "Fresh Atlantic salmon grilled over cedar wood with asparagus and herb lemon butter.",
  },
  {
    id: "woodfired-pizza",
    name: "Artisanal Burrata & Basil Pizza",
    category: "Pizza",
    price: 19.99,
    originalPrice: 24.00,
    rating: 4.8,
    reviews: 240,
    calories: "740 kcal",
    time: "18 min",
    image: "/food2.png",
    badge: "Wood Fired",
    description: "Creamy fresh burrata, heirloom cherry tomatoes, cold pressed EVOO & wild basil.",
  },
  {
    id: "gourmet-pasta",
    name: "Handmade Truffle Fettuccine",
    category: "Pasta",
    price: 18.50,
    originalPrice: 22.00,
    rating: 4.9,
    reviews: 190,
    calories: "610 kcal",
    time: "22 min",
    image: "/food3.png",
    badge: "Handmade",
    description: "Silky egg fettuccine with shaved summer truffles and 24-month Parmigiano Reggiano.",
  },
  {
    id: "spicy-wings",
    name: "Smoked Honey Glazed Platter",
    category: "Appetizer",
    price: 14.00,
    originalPrice: 17.50,
    rating: 4.7,
    reviews: 145,
    calories: "490 kcal",
    time: "15 min",
    image: "/food4.png",
    badge: "Crispy",
    description: "Slow-smoked chicken cuts tossed in fiery wildflower honey and toasted sesame.",
  },
  {
    id: "chocolate-fondant",
    name: "Belgian Molten Chocolate Cake",
    category: "Dessert",
    price: 11.99,
    originalPrice: 14.00,
    rating: 5.0,
    reviews: 410,
    calories: "450 kcal",
    time: "12 min",
    image: "/5.png",
    badge: "Sweet Indulgence",
    description: "Warm 70% dark Belgian chocolate lava cake served with Madagascar vanilla gelato.",
  },
];

// Chefs Team
const chefs = [
  {
    name: "Chef Marcus Vance",
    role: "Executive Head Chef",
    experience: "15+ Years Experience",
    specialty: "French & Italian Gastronomy",
    image: "/chef1 (1).png",
    award: "Michelin Trained",
  },
  {
    name: "Chef Elena Rostova",
    role: "Master Pastry Artisan",
    experience: "12+ Years Experience",
    specialty: "European Desserts & Sourdough",
    image: "/chef1 (2).png",
    award: "Pastry Champion 2024",
  },
  {
    name: "Chef Tariq Mehmood",
    role: "Head of Grill & Steaks",
    experience: "18+ Years Experience",
    specialty: "Smoked Cuts & Artisanal BBQ",
    image: "/chef1 (3).png",
    award: "Master Pitmaster",
  },
  {
    name: "Chef Chloe Nguyen",
    role: "Artisan Burger Stylist",
    experience: "10+ Years Experience",
    specialty: "Gourmet Street Food Fusion",
    image: "/chef1 (4).png",
    award: "Burger Cup Winner",
  },
];

// Verified Diner Testimonials
const reviews = [
  {
    name: "Sarah Jenkins",
    location: "Food Critic & Journalist",
    comment: "The Truffle Double Wagyu Burger is quite simply the best burger I've had in years. The brioche is cloud-soft and the delivery arrived steaming hot in 22 minutes!",
    rating: 5,
    dish: "Ordered Wagyu Burger",
    avatar: "👩‍💼",
  },
  {
    name: "Dr. Hamza Siddiqui",
    location: "Loyal Diner since 2021",
    comment: "MK Foods has set a standard that other restaurants fail to match. Their Burrata pizza and fresh salmon steaks are consistent, fresh, and exceptionally flavorful.",
    rating: 5,
    dish: "Ordered Salmon & Pizza",
    avatar: "👨‍⚕️",
  },
  {
    name: "Ayesha Noor",
    location: "Verified Local Resident",
    comment: "The presentation, packaging, and attention to detail are world-class. You can genuinely taste the fresh, organic ingredients in every bite. Highly recommended!",
    rating: 5,
    dish: "Ordered Handmade Pasta",
    avatar: "👩‍🎨",
  },
];

// Culinary Blog Articles
const blogPosts = [
  {
    title: "The Art of Slow-Fermented Neapolitan Pizza Crust",
    category: "Culinary Secrets",
    date: "November 2026",
    readTime: "4 min read",
    image: "/food2.png",
    excerpt: "Discover why our dough rests for 48 hours to develop rich air pockets and a light, crispy crust.",
  },
  {
    title: "Selecting the Perfect Marble Score for Wagyu Steaks",
    category: "Meat & Grills",
    date: "October 2026",
    readTime: "5 min read",
    image: "/food1.png",
    excerpt: "Executive Chef Tariq breaks down the differences between Australian A5 Wagyu and prime Black Angus.",
  },
  {
    title: "Farm to Fork: Sourcing 100% Organic Local Herbs",
    category: "Sustainability",
    date: "September 2026",
    readTime: "3 min read",
    image: "/food3.png",
    excerpt: "How our culinary team partners with eco-friendly local organic farms to guarantee absolute freshness.",
  },
];

export default function Home() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredDishes = activeCategory === "All"
    ? featuredDishes
    : featuredDishes.filter((d) => d.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="bg-[#080c14] min-h-screen text-slate-100">
      
      {/* Modern Glass Navbar */}
      <Nav />

      {/* Hero Section */}
      <HomeHero />

      {/* SECTION 1: Interactive Food Categories (Replaces static Image-box.png) */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <HiOutlineSparkles /> Curated Collections
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Explore Our <span className="text-amber-400">Culinary Creations</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Each category is prepared with authentic culinary methods, premium ingredients, and chef-level perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <Link
                  key={idx}
                  href="/shop"
                  className="group relative rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 p-6 hover:border-amber-500/40 hover:bg-white/[0.09] transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle corner badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                      {category.tag}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {category.count}
                    </span>
                  </div>

                  {/* Icon & Category Title */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                      <Icon className="text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Thumbnail and action */}
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-amber-400 group-hover:text-white flex items-center gap-1 transition-colors">
                      Explore Dishes <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-black/40 border border-white/10 relative">
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={60}
                        height={60}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 2: Featured Chef's Signature Dishes */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-transparent via-[#0c1322] to-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase mb-2">
                <IoMdFlame /> Sizzling Favorites
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Chef's <span className="text-amber-400">Signature Selections</span>
              </h2>
              <p className="mt-2 text-sm text-slate-400 max-w-xl">
                Ordered by thousands of happy diners daily. Prepared hot to order with guaranteed satisfaction.
              </p>
            </div>

            {/* Category filter pills */}
            <div className="flex flex-wrap items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10">
              {["All", "Burger", "Pizza", "Grill", "Pasta", "Dessert"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-orange-600/30"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat === "All" ? "All Items" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Food Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                className="group rounded-3xl bg-[#0f172a]/80 border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/15 flex flex-col justify-between overflow-hidden"
              >
                {/* Image & Badges */}
                <div className="relative h-60 w-full overflow-hidden bg-[#162032] flex items-center justify-center p-4">
                  <span className="absolute top-3.5 left-3.5 z-10 text-[11px] font-extrabold uppercase tracking-wider text-amber-300 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30">
                    {dish.badge}
                  </span>
                  
                  <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-xs font-bold text-amber-400">
                    <HiStar className="text-amber-400" />
                    <span>{dish.rating}</span>
                    <span className="text-slate-400 font-normal">({dish.reviews})</span>
                  </div>

                  <Image
                    src={dish.image}
                    alt={dish.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-xl"
                  />
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-2 font-medium">
                      <span className="flex items-center gap-1">
                        <HiOutlineClock className="text-amber-400" /> {dish.time}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <HiOutlineFire className="text-orange-400" /> {dish.calories}
                      </span>
                      <span>•</span>
                      <span className="text-amber-400 font-semibold">{dish.category}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {dish.name}
                    </h3>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {dish.description}
                    </p>
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-amber-400">${dish.price.toFixed(2)}</span>
                        {dish.originalPrice && (
                          <span className="text-xs text-slate-500 line-through">
                            ${dish.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-emerald-400 font-semibold">In Stock • Fresh Prep</span>
                    </div>

                    <button
                      onClick={() =>
                        addToCart({
                          name: dish.name,
                          price: dish.price,
                          originalPrice: dish.originalPrice,
                          image_url: dish.image,
                          quantity: 1,
                          category: dish.category,
                        })
                      }
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-xs shadow-lg shadow-orange-600/30 transition-all hover:scale-105 active:scale-95"
                    >
                      <HiOutlineShoppingBag className="text-base" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-sm transition hover:border-amber-400/50 hover:scale-105"
            >
              <span>Explore All 40+ Shop Dishes</span>
              <HiOutlineArrowRight />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 3: Why Choose Us & The Experience (Replaces Clients.png & static text) */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Visual Collage */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                  <Image src="/food1.png" alt="Dishes" width={300} height={350} className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                  <Image src="/4.png" alt="Dishes" width={300} height={250} className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                  <Image src="/2.png" alt="Dishes" width={300} height={250} className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                  <Image src="/food4.png" alt="Dishes" width={300} height={350} className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

              {/* Center Floating Trophy Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#090e1a]/95 border border-amber-500/40 p-5 rounded-3xl shadow-2xl shadow-black backdrop-blur-xl text-center">
                <span className="text-3xl font-black text-amber-400 block">30+</span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">Years of Culinary Excellence</span>
              </div>
            </div>

            {/* Right Column: Values & Key Metrics */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
                <HiOutlineCheckBadge /> Why Diners Trust MK Foods
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Extraordinary Taste Crafted With{" "}
                <span className="text-amber-400">Passion & Precision</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Founded with a mission to bring world-class restaurant dining into every home, MK Foods combines time-honored artisanal culinary techniques with lightning-fast delivery logistics.
              </p>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-500/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl mb-3">
                    <PiHamburger />
                  </div>
                  <h4 className="text-sm font-bold text-white">100% Organic Ingredients</h4>
                  <p className="text-xs text-slate-400 mt-1">Farm-fresh herbs, prime cuts, and zero artificial preservatives.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-500/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center text-xl mb-3">
                    <HiOutlineClock />
                  </div>
                  <h4 className="text-sm font-bold text-white">Under 30 Min Delivery</h4>
                  <p className="text-xs text-slate-400 mt-1">Thermal-sealed heat insulation boxes keep every meal kitchen-fresh.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-500/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl mb-3">
                    <HiOutlineShieldCheck />
                  </div>
                  <h4 className="text-sm font-bold text-white">Certified Halal Kitchens</h4>
                  <p className="text-xs text-slate-400 mt-1">Stringent ISO-22000 hygiene and cleanliness protocols followed daily.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-500/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl mb-3">
                    <HiStar />
                  </div>
                  <h4 className="text-sm font-bold text-white">Award-Winning Chefs</h4>
                  <p className="text-xs text-slate-400 mt-1">Over 50 seasoned culinary masters crafting signature global recipes.</p>
                </div>
              </div>

            </div>

          </div>

          {/* Metrics Counter Bar (Replaces Clients.png banner) */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5 border border-amber-500/20 p-8 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center backdrop-blur-xl">
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-400">30+</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Years of Culinary Experience</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">50+</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Certified Executive Chefs</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-400">120K+</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Delighted Diners Served</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-400">4.9 ★</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Average Customer Rating</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: Meet Our Executive Chefs (Replaces static row) */}
      <section className="py-16 sm:py-20 bg-[#060a12] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <HiOutlineSparkles /> Master Craftsmen
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Meet Our <span className="text-amber-400">Executive Chefs</span>
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Passionate culinary artists bringing decades of fine-dining craftsmanship to your table.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {chefs.map((chef, index) => (
              <div
                key={index}
                className="group rounded-3xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
              >
                <div className="rounded-2xl overflow-hidden bg-black/40 h-64 relative mb-4">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md text-[10px] font-bold text-amber-400 px-2.5 py-1 rounded-full border border-amber-500/30">
                    {chef.award}
                  </span>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {chef.name}
                  </h3>
                  <p className="text-xs text-amber-400 font-medium">{chef.role}</p>
                  <p className="text-[11px] text-slate-400 mt-1">{chef.specialty}</p>
                  <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-slate-400">
                    {chef.experience}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/chefs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-amber-500/40 hover:bg-amber-500/10 text-amber-400 font-bold text-xs transition hover:scale-105"
            >
              <span>View All Kitchen Masters</span>
              <HiOutlineArrowRight />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 5: Special Offer & App Promo Banner (Replaces bigimg.png) */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-orange-600 via-amber-600 to-amber-500 p-8 sm:p-14 overflow-hidden shadow-2xl shadow-orange-500/20">
            {/* Background elements */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/30 text-white text-xs font-bold tracking-wider uppercase">
                  🔥 Limited Time Feast
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  Get Free Delivery & 20% Off <br className="hidden sm:inline" />
                  On Your First Online Order!
                </h2>
                <p className="text-sm sm:text-base text-white/90 max-w-xl">
                  Use coupon code <span className="bg-black/40 font-mono font-bold px-2.5 py-1 rounded-lg text-amber-300">MKFOODS20</span> at checkout to enjoy premium chef dishes delivered hot to your doorstep.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/shop"
                    className="px-8 py-3.5 rounded-2xl bg-black hover:bg-slate-900 text-white font-bold text-sm shadow-xl transition hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <span>Claim Your Discount Now</span>
                    <HiOutlineArrowRight />
                  </Link>
                  <Link
                    href="/menu"
                    className="px-8 py-3.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-bold text-sm transition flex items-center justify-center"
                  >
                    <span>View Today's Specials</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                  <Image
                    src="/food1.png"
                    alt="Delicious food"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Customer Reviews & Testimonials */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <HiStar /> Diner Stories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              What Our Diners <span className="text-amber-400">Say About Us</span>
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Thousands of genuine five-star reviews from foodies, critics, and culinary enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <HiStar key={i} className="text-lg" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{rev.avatar}</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                      <p className="text-[11px] text-slate-400">{rev.location}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: Latest Culinary News & Blog (Replaces Blog Card 1/2/3.png) */}
      <section className="py-16 sm:py-20 bg-[#060a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-2">
                <HiOutlineSparkles /> Food Culture
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Latest Culinary <span className="text-amber-400">Stories & Recipes</span>
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
            >
              Browse All Stories →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
              >
                <div className="h-52 w-full overflow-hidden bg-black/40 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-[10px] font-bold text-amber-400 px-3 py-1 rounded-full border border-amber-500/30">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href="/shop"
                      className="text-xs font-bold text-amber-400 group-hover:text-amber-300 flex items-center gap-1"
                    >
                      <span>Read Story</span>
                      <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Modern Luxury Footer */}
      <Footer />

    </div>
  );
}
