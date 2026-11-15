"use client";

import React, { useEffect, useState } from "react";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { HiStar, HiOutlineSparkles, HiOutlineArrowRight } from "react-icons/hi2";

const fallbackChefs: Record<string, any> = {
  "marcus-vance": {
    name: "Chef Marcus Vance",
    position: "Executive Head Chef",
    experience: "15+ Years in Fine Dining",
    specialty: "French & Modern Italian Gastronomy",
    image_url: "/chef1 (1).png",
    description: "Trained under Michelin-starred kitchens in Lyon and Florence. Marcus brings refined European culinary disciplines and precision techniques to MK Foods, constantly innovating our seasonal menu.",
    awards: "Michelin Star Alum • Golden Spoon Award",
  },
  "elena-rostova": {
    name: "Chef Elena Rostova",
    position: "Master Pastry & Bakery Artisan",
    experience: "12+ Years Experience",
    specialty: "Sourdough Fermentation & European Desserts",
    image_url: "/chef1 (2).png",
    description: "Elena oversees our 48-hour sourdough pizza fermentation and handcrafts our legendary Belgian molten chocolate cakes and gelatos.",
    awards: "Pastry Champion 2024 • Master Chocolatier",
  },
  "tariq-mehmood": {
    name: "Chef Tariq Mehmood",
    position: "Master Pitmaster & Grill Head",
    experience: "18+ Years Experience",
    specialty: "Smoked Cuts & Artisanal BBQ",
    image_url: "/chef1 (3).png",
    description: "Specializing in Texas white oak smoking and prime cut butchery. Tariq guarantees that every ribeye, wagyu burger, and salmon fillet is grilled to absolute perfection.",
    awards: "National Grill Champion • Certified Pitmaster",
  },
  "chloe-nguyen": {
    name: "Chef Chloe Nguyen",
    position: "Artisan Burger & Fusion Stylist",
    experience: "10+ Years Experience",
    specialty: "Gourmet Street Food & Modern Sauces",
    image_url: "/chef1 (4).png",
    description: "Chloe innovates our signature sauce formulations, from black garlic aioli to habanero hot honey glazes, ensuring bold, unforgettable flavor profiles.",
    awards: "Burger Cup Winner 2025 • Sauce Master",
  },
};

export default function ChefDetailsPage({ params }: any) {
  const unwrappedParams: any = React.use(params);
  const id = unwrappedParams?.id;

  const [chef, setChef] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchChef() {
      try {
        const query = `*[_type == "chef" && slug.current == $id][0]{
          name,
          position,
          experience,
          specialty,
          slug,
          "image_url": image.asset->url,
          description,
          available,
        }`;
        const data = await client.fetch(query, { id });
        if (data) {
          setChef(data);
        } else {
          setChef(fallbackChefs[id] || fallbackChefs["marcus-vance"]);
        }
      } catch (err) {
        setChef(fallbackChefs[id] || fallbackChefs["marcus-vance"]);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchChef();
  }, [id]);

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
              <Link href="/chefs" className="hover:text-amber-400">Chefs</Link>
              <FaAngleRight className="text-[10px] text-amber-500" />
              <span className="text-amber-400 font-semibold">{chef?.name || "Chef Profile"}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {loading ? (
            <div className="py-24 text-center">
              <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-sm font-semibold text-slate-300">Loading chef profile...</p>
            </div>
          ) : !chef ? (
            <div className="py-20 text-center">
              <h2 className="text-2xl font-bold text-white">Chef Not Found</h2>
              <Link href="/chefs" className="mt-4 inline-block text-amber-400 hover:underline">
                Back to Chefs
              </Link>
            </div>
          ) : (
            <div className="rounded-3xl bg-[#0f172a]/80 border border-white/10 p-8 sm:p-12 shadow-2xl backdrop-blur-xl grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              
              <div className="md:col-span-5 rounded-2xl overflow-hidden bg-black/40 border border-white/10 h-80 sm:h-96 relative">
                <Image
                  src={chef.image_url || "/chef1 (1).png"}
                  alt={chef.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  <HiOutlineSparkles /> {chef.position || "Executive Chef"}
                </span>

                <h1 className="text-3xl sm:text-4xl font-black text-white">{chef.name}</h1>
                <p className="text-sm text-amber-400 font-semibold">{chef.specialty}</p>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {chef.description}
                </p>

                <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-400">
                  <p><strong>Culinary Background:</strong> {chef.experience}</p>
                  <p><strong>Accolades:</strong> {chef.awards || "Master Culinary Guild Member"}</p>
                </div>

                <div className="pt-4">
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-xs shadow-lg shadow-orange-600/30 transition hover:scale-105"
                  >
                    <span>Taste This Chef's Dishes</span>
                    <HiOutlineArrowRight />
                  </Link>
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
