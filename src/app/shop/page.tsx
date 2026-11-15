"use client";

import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { 
  HiOutlineShoppingBag, 
  HiStar, 
  HiOutlineAdjustmentsHorizontal,
  HiOutlineSparkles,
  HiOutlineArrowRight
} from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";

// Fallback curated products if Sanity returns empty
const defaultProducts = [
  {
    name: "Truffle Double Wagyu Burger",
    category: "Burger",
    price: 16.99,
    originalPrice: 21.00,
    slug: { current: "wagyu-burger" },
    image_url: "/1.png",
    description: "Dual 100% Wagyu patties, black truffle aioli, aged cheddar on toasted brioche.",
    rating: 4.9,
  },
  {
    name: "Alder Wood Smoked Salmon",
    category: "Grill",
    price: 24.50,
    originalPrice: 29.00,
    slug: { current: "salmon-grill" },
    image_url: "/food1.png",
    description: "Fresh Atlantic salmon grilled over cedar wood with asparagus and herb lemon butter.",
    rating: 5.0,
  },
  {
    name: "Artisanal Burrata & Basil Pizza",
    category: "Pizza",
    price: 19.99,
    originalPrice: 24.00,
    slug: { current: "woodfired-pizza" },
    image_url: "/food2.png",
    description: "Creamy fresh burrata, heirloom cherry tomatoes, cold pressed EVOO & wild basil.",
    rating: 4.8,
  },
  {
    name: "Handmade Truffle Fettuccine",
    category: "Pasta",
    price: 18.50,
    originalPrice: 22.00,
    slug: { current: "gourmet-pasta" },
    image_url: "/food3.png",
    description: "Silky egg fettuccine with shaved summer truffles and 24-month Parmigiano Reggiano.",
    rating: 4.9,
  },
  {
    name: "Smoked Honey Glazed Cuts",
    category: "Appetizer",
    price: 14.00,
    originalPrice: 17.50,
    slug: { current: "spicy-wings" },
    image_url: "/food4.png",
    description: "Slow-smoked cuts tossed in fiery wildflower honey and toasted sesame.",
    rating: 4.7,
  },
  {
    name: "Belgian Molten Chocolate Cake",
    category: "Dessert",
    price: 11.99,
    originalPrice: 14.00,
    slug: { current: "chocolate-fondant" },
    image_url: "/5.png",
    description: "Warm 70% dark Belgian chocolate lava cake served with Madagascar vanilla gelato.",
    rating: 5.0,
  },
  {
    name: "Classic Smashed Cheeseburger",
    category: "Burger",
    price: 13.50,
    originalPrice: 16.00,
    slug: { current: "classic-smashed-cheeseburger" },
    image_url: "/2.png",
    description: "Crispy-edged beef patty, caramelized onions, house pickle relish & secret sauce.",
    rating: 4.8,
  },
  {
    name: "Cold Brew Artisan Espresso",
    category: "Drink",
    price: 6.50,
    originalPrice: 8.00,
    slug: { current: "cold-brew-espresso" },
    image_url: "/6.png",
    description: "Single-origin Ethiopian beans steeped for 18 hours with hints of cocoa and vanilla.",
    rating: 4.9,
  },
  {
    name: "Wood-Fired Pepperoni Hot Honey",
    category: "Pizza",
    price: 21.00,
    originalPrice: 25.00,
    slug: { current: "pepperoni-hot-honey" },
    image_url: "/food2.png",
    description: "Cupped pepperoni, creamy mozzarella, hot habanero honey drizzle and fresh oregano.",
    rating: 5.0,
  },
];

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const { addToCart } = useCart();

  useEffect(() => {
    async function loadProducts() {
      try {
        const query = `*[_type == "food"]{
          _id,
          name,
          category,
          price,
          originalPrice,
          slug,
          tags,
          "image_url": image.asset->url,
          description,
          available,
        }`;
        const data = await client.fetch(query);
        if (data && data.length > 0) {
          // Merge with fallback to ensure rich catalog
          setProducts(data);
        } else {
          setProducts(defaultProducts);
        }
      } catch (err) {
        console.error("Sanity fetch error:", err);
        setProducts(defaultProducts);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  // Filter & Search
  const filtered = products.filter((item) => {
    const matchesCat =
      selectedCategory === "All" ||
      (item.category && item.category.toLowerCase().includes(selectedCategory.toLowerCase()));
    const matchesSearch =
      !searchQuery ||
      (item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  // Sorting
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  const categories = ["All", "Burger", "Pizza", "Grill", "Pasta", "Appetizer", "Dessert", "Drink"];

  return (
    <div className="bg-[#080c14] min-h-screen text-slate-100">
      <Nav />

      {/* Header Banner */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-[#0f172a] via-[#090e1b] to-[#080c14] border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium mb-3">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <FaAngleRight className="text-[10px] text-amber-500" />
            <span className="text-amber-400 font-semibold">Gourmet Shop</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Artisanal <span className="text-amber-400">Food Menu & Shop</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Order your favorite gourmet creations directly. Made to order by master chefs and delivered sizzling hot.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Controls: Search, Filters, and Sorting */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-orange-600/30"
                    : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat === "All" ? "All Specialties" : cat}
              </button>
            ))}
          </div>

          {/* Search & Sort */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <IoIosSearch className="absolute left-3.5 top-3 text-slate-400 text-lg" />
              <input
                type="text"
                placeholder="Search food by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-400 transition"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative w-full sm:w-44">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-[#0e1422] border border-white/10 rounded-xl py-2.5 px-3 text-xs text-slate-200 focus:outline-none focus:border-amber-400 transition cursor-pointer"
              >
                <option value="default">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>

        </div>

        {/* Results Counter */}
        <div className="py-4 flex items-center justify-between text-xs text-slate-400 font-medium">
          <span>Showing <strong className="text-amber-400">{sorted.length}</strong> delicious dishes</span>
          {(selectedCategory !== "All" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-amber-400 hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="py-24 text-center">
            <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm font-semibold text-slate-300">Loading freshest culinary items...</p>
          </div>
        ) : sorted.length === 0 ? (
          /* Empty State */
          <div className="py-24 text-center max-w-md mx-auto">
            <div className="text-5xl mb-4">🍽️</div>
            <h3 className="text-xl font-bold text-white">No Dishes Found</h3>
            <p className="text-xs text-slate-400 mt-2">
              We couldn't find any dishes matching your search. Try adjusting the category or search keywords.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-6 px-6 py-2.5 rounded-xl bg-amber-500 text-black font-bold text-xs hover:bg-amber-400 transition"
            >
              View Full Menu
            </button>
          </div>
        ) : (
          /* Product Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
            {sorted.map((item: any, idx: number) => {
              const slugStr = item.slug?.current || item.slug || `dish-${idx}`;
              const imageSrc = item.image_url || "/food1.png";

              return (
                <div
                  key={slugStr}
                  className="group rounded-3xl bg-[#0f172a]/70 border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between overflow-hidden"
                >
                  {/* Image container */}
                  <div className="relative h-60 w-full overflow-hidden bg-[#162032] flex items-center justify-center p-4">
                    <span className="absolute top-3.5 left-3.5 z-10 text-[11px] font-extrabold uppercase tracking-wider text-amber-300 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30">
                      {item.category || "Special"}
                    </span>

                    <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-xs font-bold text-amber-400">
                      <HiStar className="text-amber-400" />
                      <span>{item.rating || 4.9}</span>
                    </div>

                    <Link href={`/product-details/${slugStr}`} className="w-full h-full flex items-center justify-center">
                      <Image
                        src={imageSrc}
                        alt={item.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-xl"
                      />
                    </Link>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <Link href={`/product-details/${slugStr}`}>
                        <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="mt-2 text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {item.description || "Crafted fresh with chef selected artisan ingredients and distinct culinary seasonings."}
                      </p>
                    </div>

                    {/* Price & Add to Cart */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-black text-amber-400">
                            ${Number(item.price).toFixed(2)}
                          </span>
                          {item.originalPrice && (
                            <span className="text-xs text-slate-500 line-through">
                              ${Number(item.originalPrice).toFixed(2)}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-emerald-400 font-semibold">Ready in 20 mins</span>
                      </div>

                      <button
                        onClick={() =>
                          addToCart({
                            name: item.name,
                            price: Number(item.price),
                            originalPrice: item.originalPrice ? Number(item.originalPrice) : undefined,
                            image_url: imageSrc,
                            quantity: 1,
                            category: item.category,
                            slug: slugStr,
                          })
                        }
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-xs shadow-lg shadow-orange-600/30 transition-all hover:scale-105 active:scale-95"
                      >
                        <HiOutlineShoppingBag className="text-base" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      <Footer />
    </div>
  );
}
