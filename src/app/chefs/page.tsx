"use client";

import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { 
  HiStar, 
  HiOutlineSparkles, 
  HiOutlineArrowRight,
  HiOutlineCheckBadge 
} from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa6";

const defaultChefs = [
  {
    name: "Chef Marcus Vance",
    position: "Executive Head Chef",
    experience: "15+ Years in Fine Dining",
    specialty: "French & Modern Italian Gastronomy",
    slug: { current: "marcus-vance" },
    image_url: "/chef1 (1).png",
    description: "Trained under Michelin-starred kitchens in Lyon and Florence. Marcus brings refined European culinary disciplines and precision techniques to MK Foods.",
    awards: "Michelin Star Alum • Golden Spoon Award",
  },
  {
    name: "Chef Elena Rostova",
    position: "Master Pastry & Bakery Artisan",
    experience: "12+ Years Experience",
    specialty: "Sourdough Fermentation & European Desserts",
    slug: { current: "elena-rostova" },
    image_url: "/chef1 (2).png",
    description: "Elena oversees our 48-hour sourdough pizza fermentation and handcrafts our legendary Belgian molten chocolate cakes and gelatos.",
    awards: "Pastry Champion 2024 • Master Chocolatier",
  },
  {
    name: "Chef Tariq Mehmood",
    position: "Master Pitmaster & Grill Head",
    experience: "18+ Years Experience",
    specialty: "Smoked Cuts & Artisanal BBQ",
    slug: { current: "tariq-mehmood" },
    image_url: "/chef1 (3).png",
    description: "Specializing in Texas white oak smoking and prime cut butchery. Tariq guarantees that every ribeye, wagyu burger, and salmon fillet is grilled to absolute perfection.",
    awards: "National Grill Champion • Certified Pitmaster",
  },
  {
    name: "Chef Chloe Nguyen",
    position: "Artisan Burger & Fusion Stylist",
    experience: "10+ Years Experience",
    specialty: "Gourmet Street Food & Modern Sauces",
    slug: { current: "chloe-nguyen" },
    image_url: "/chef1 (4).png",
    description: "Chloe innovates our signature sauce formulations, from black garlic aioli to habanero hot honey glazes, ensuring bold, unforgettable flavor profiles.",
    awards: "Burger Cup Winner 2025 • Sauce Master",
  },
];

export default function ChefsPage() {
  const [chefs, setChefs] = useState<any[]>(defaultChefs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadChefs() {
      try {
        const query = `*[_type == "chef"]{
          name,
          position,
          experience,
          specialty,
          slug,
          "image_url": image.asset->url,
          description,
          available,
        }`;
        const data = await client.fetch(query);
        if (data && data.length > 0) {
          setChefs(data);
        }
      } catch (e) {
        console.warn("Chef fetch fallback:", e);
      } finally {
        setLoading(false);
      }
    }
    loadChefs();
  }, []);

  return (
    <div className="bg-[#080c14] min-h-screen text-slate-100 flex flex-col justify-between">
      <div>
        <Nav />

        {/* Hero Header */}
        <div className="relative py-16 sm:py-24 bg-gradient-to-b from-[#0f172a] via-[#090e1b] to-[#080c14] border-b border-white/5 text-center overflow-hidden">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium mb-3">
              <Link href="/" className="hover:text-amber-400">Home</Link>
              <FaAngleRight className="text-[10px] text-amber-500" />
              <span className="text-amber-400 font-semibold">Our Kitchen Masters</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Meet Our <span className="text-amber-400">Executive Chefs</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Behind every recipe at MK Foods is an acclaimed culinary master committed to gastronomic innovation and perfection.
            </p>
          </div>
        </div>

        {/* Chefs Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {chefs.map((chef, idx) => {
              const slugStr = chef.slug?.current || `chef-${idx}`;
              return (
                <div
                  key={slugStr}
                  className="group rounded-3xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
                >
                  <div className="rounded-2xl overflow-hidden bg-black/40 h-72 relative mb-4">
                    <Image
                      src={chef.image_url || "/chef1 (1).png"}
                      alt={chef.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md text-[10px] font-bold text-amber-400 px-3 py-1 rounded-full border border-amber-500/30">
                      {chef.position || "Executive Chef"}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {chef.name}
                    </h3>
                    <p className="text-xs text-amber-400 font-medium mt-0.5">{chef.specialty}</p>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {chef.description}
                    </p>
                    
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                      <span>{chef.experience}</span>
                      <span className="text-emerald-400 font-semibold">Active In Kitchen</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Join Our Kitchen Banner */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5 border border-amber-500/20 text-center backdrop-blur-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Passionate About Gourmet Gastronomy?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
              MK Foods is always seeking talented sous-chefs, pastry cooks, and grill masters to join our culinary family.
            </p>
            <div className="mt-6">
              <a
                href="mailto:careers@mkfoods.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-black font-bold text-xs hover:bg-amber-400 transition"
              >
                <span>Apply to Join Kitchen Team</span>
                <HiOutlineArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
