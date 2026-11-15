"use client";

import React, { useEffect, useState } from "react";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { 
  HiStar, 
  HiOutlineShoppingBag, 
  HiOutlineClock, 
  HiOutlineShieldCheck, 
  HiOutlineSparkles,
  HiOutlineCheck,
  HiOutlineArrowRight
} from "react-icons/hi2";
import { IoMdFlame } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";

const fallbackCatalog: Record<string, any> = {
  "wagyu-burger": {
    name: "Truffle Double Wagyu Burger",
    category: "Burger",
    price: 16.99,
    originalPrice: 21.00,
    image_url: "/1.png",
    description: "Two 100% Australian Wagyu beef patties smashed crisp on the flattop, layered with double French Gruyère and aged Cheddar, crowned with caramelized shallots, wild truffle aioli, and nestled in a fresh brioche bun toasted with clarified butter.",
    rating: 4.9,
    calories: "680 kcal",
    time: "18-22 mins",
    tags: ["Best Seller", "Signature", "Chef's Recommendation"],
  },
  "salmon-grill": {
    name: "Alder Wood Smoked Salmon",
    category: "Signature Grill",
    price: 24.50,
    originalPrice: 29.00,
    image_url: "/food1.png",
    description: "Fresh Norwegian Atlantic salmon slow-smoked over aromatic Pacific Northwest alder wood. Served alongside char-grilled asparagus, herb roasted fingerling potatoes, and a luscious Meyer lemon beurre blanc.",
    rating: 5.0,
    calories: "520 kcal",
    time: "20-25 mins",
    tags: ["Gluten-Free", "Rich in Omega-3", "Wild Caught"],
  },
  "woodfired-pizza": {
    name: "Artisanal Burrata & Wild Basil Pizza",
    category: "Wood-Fired Pizza",
    price: 19.99,
    originalPrice: 24.00,
    image_url: "/food2.png",
    description: "Neapolitan style crust fermented for 48 hours, fired in a 900°F oak-fired stone oven with San Marzano tomato sauce, fior di latte, creamy Italian burrata ball, fresh wild basil, and drizzled with organic cold-pressed Tuscan olive oil.",
    rating: 4.8,
    calories: "740 kcal",
    time: "15-18 mins",
    tags: ["Vegetarian", "Wood-Fired", "Imported Cheese"],
  },
};

export default function DetailsPage({ params }: any) {
  const unwrappedParams: any = React.use(params);
  const id = unwrappedParams?.id;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const query = `*[_type == "food" && (slug.current == $id || _id == $id)][0]{
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

        const fetchedProduct = await client.fetch(query, { id });
        if (fetchedProduct) {
          setProduct(fetchedProduct);
        } else if (fallbackCatalog[id]) {
          setProduct(fallbackCatalog[id]);
        } else {
          // General fallback
          setProduct({
            name: id ? id.replace(/-/g, " ").toUpperCase() : "Gourmet Chef Dish",
            category: "Special",
            price: 18.99,
            originalPrice: 23.00,
            image_url: "/food1.png",
            description: "Delicious culinary dish prepared fresh daily by executive chefs using authentic seasonings, organic produce, and premium ingredients.",
            rating: 4.9,
            calories: "580 kcal",
            time: "20 mins",
          });
        }
      } catch (error) {
        console.warn("Product fetch fallback note:", error);
        setProduct(
          fallbackCatalog[id] || {
            name: "MK Artisanal Chef Special",
            category: "Special",
            price: 19.50,
            image_url: "/food1.png",
            description: "Delicious culinary dish prepared fresh daily by executive chefs.",
            rating: 4.9,
          }
        );
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    if (!product) return;
    addToCart({
      name: product.name,
      price: Number(product.price),
      originalPrice: product.originalPrice ? Number(product.originalPrice) : undefined,
      image_url: product.image_url || "/food1.png",
      quantity,
      category: product.category,
      slug: id,
    });
  };

  return (
    <div className="bg-[#080c14] min-h-screen text-slate-100 flex flex-col justify-between">
      <div>
        <Nav />

        {/* Breadcrumb Header */}
        <div className="py-8 sm:py-12 bg-gradient-to-b from-[#0f172a] to-[#080c14] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <Link href="/" className="hover:text-amber-400">Home</Link>
              <FaAngleRight className="text-[10px] text-amber-500" />
              <Link href="/shop" className="hover:text-amber-400">Shop</Link>
              <FaAngleRight className="text-[10px] text-amber-500" />
              <span className="text-amber-400 font-semibold truncate max-w-xs">
                {product?.name || "Dish Details"}
              </span>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          {loading ? (
            <div className="py-24 text-center">
              <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-sm font-semibold text-slate-300">Loading culinary dish details...</p>
            </div>
          ) : !product ? (
            <div className="py-20 text-center max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-white">Dish Not Found</h2>
              <p className="text-xs text-slate-400 mt-2">The selected dish is currently unavailable.</p>
              <Link
                href="/shop"
                className="mt-6 inline-block px-6 py-2.5 rounded-xl bg-amber-500 text-black font-bold text-xs"
              >
                Back to Shop
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Product Visual */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-[480px] h-[360px] sm:h-[420px] rounded-3xl bg-[#0f172a]/80 border border-white/10 p-8 flex items-center justify-center overflow-hidden shadow-2xl shadow-black/80 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 z-10 text-[11px] font-extrabold uppercase tracking-wider text-amber-300 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30">
                    {product.category || "Chef Special"}
                  </span>

                  <Image
                    src={product.image_url || "/food1.png"}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(245,158,11,0.25)] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Product Meta & Actions */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Rating & Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold text-amber-400">
                    <HiStar className="text-amber-400 text-sm" />
                    <span>{product.rating || "4.9"} (340+ Reviews)</span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    ✓ 100% Fresh Guaranteed
                  </span>
                </div>

                {/* Name */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  {product.name}
                </h1>

                {/* Pricing */}
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-amber-400">
                    ${Number(product.price).toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-slate-500 line-through">
                      ${Number(product.originalPrice).toFixed(2)}
                    </span>
                  )}
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider bg-orange-500/10 px-2 py-0.5 rounded-md">
                    20% OFF with code MKFOODS20
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {product.description}
                </p>

                {/* Badges / Prep Details */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Preparation Time</span>
                    <strong className="text-white text-xs">{product.time || "20 Mins"}</strong>
                  </div>
                  <div className="border-x border-white/10">
                    <span className="text-slate-400 block text-[10px]">Calories</span>
                    <strong className="text-white text-xs">{product.calories || "580 kcal"}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Serving Size</span>
                    <strong className="text-white text-xs">1-2 Persons</strong>
                  </div>
                </div>

                {/* Quantity and Add to Cart Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  {/* Stepper */}
                  <div className="flex items-center justify-between sm:justify-center bg-white/5 border border-white/10 rounded-2xl p-1">
                    <button
                      onClick={decrement}
                      className="w-10 h-10 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 font-bold text-lg flex items-center justify-center transition"
                    >
                      -
                    </button>
                    <span className="px-5 font-black text-base text-white">{quantity}</span>
                    <button
                      onClick={increment}
                      className="w-10 h-10 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 font-bold text-lg flex items-center justify-center transition"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart CTA */}
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 py-4 px-8 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-black text-sm shadow-xl shadow-orange-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
                  >
                    <HiOutlineShoppingBag className="text-lg" />
                    <span>Add {quantity} to Cart • ${(Number(product.price) * quantity).toFixed(2)}</span>
                  </button>
                </div>

                {/* Trust list */}
                <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <HiOutlineCheck className="text-emerald-400 text-base" />
                    <span>Free express delivery on orders above $30</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiOutlineCheck className="text-emerald-400 text-base" />
                    <span>Thermal packaging ensures hot delivery under 30 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiOutlineCheck className="text-emerald-400 text-base" />
                    <span>100% Halal certified organic meat & dairy</span>
                  </div>
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
