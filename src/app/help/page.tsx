"use client";

import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ReportForm from "@/components/Report";
import Link from "next/link";
import { 
  HiOutlineQuestionMarkCircle, 
  HiOutlinePhone, 
  HiOutlineMail, 
  HiOutlineLocationMarker,
  HiOutlineChevronDown,
  HiOutlineShieldCheck
} from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa6";

const faqs = [
  {
    q: "How fast is MK Foods delivery?",
    a: "We guarantee delivery within 25 to 35 minutes for all orders within our primary service zones. Our specialized thermal-insulated carriers ensure your pizzas, burgers, and steaks arrive hot and fresh.",
  },
  {
    q: "Are all meat and poultry items 100% Halal?",
    a: "Yes, without exception. All beef, chicken, and lamb cuts are 100% certified Halal, sourced strictly from audited organic local farmers with zero hormonal additives.",
  },
  {
    q: "Can I customize dietary preferences (Gluten-Free, Less Spicy, No Dairy)?",
    a: "Absolutely! When checking out, use the 'Chef & Delivery Instructions' field to indicate any allergies or customizations. Our kitchen team reads every note before starting prep.",
  },
  {
    q: "What payment methods are supported?",
    a: "We accept Cash on Delivery (COD), Visa, MasterCard, UnionPay, and QR Mobile payments upon delivery.",
  },
  {
    q: "What if my food arrives delayed or cold?",
    a: "We stand behind our 100% Hot Food Guarantee. If your order arrives delayed beyond 40 minutes or below temperature, contact us immediately for a free replacement meal or instant refund credit.",
  },
];

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
              <span className="text-amber-400 font-semibold">Support & FAQ</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Help Center & <span className="text-amber-400">Frequently Asked Questions</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Got a question about our kitchen, delivery tracking, or ingredients? We are always here to assist you.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Contact Support Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 text-center hover:border-amber-500/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mx-auto mb-3">
                <HiOutlinePhone />
              </div>
              <h4 className="text-sm font-bold text-white">Call Kitchen Helpline</h4>
              <p className="text-xs text-slate-400 mt-1">Available 09:00 AM - 01:00 AM</p>
              <a href="tel:+923001234567" className="text-xs text-amber-400 font-bold block mt-3 hover:underline">
                +92 300 1234567
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 text-center hover:border-amber-500/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center text-2xl mx-auto mb-3">
                <HiOutlineMail />
              </div>
              <h4 className="text-sm font-bold text-white">Email Culinary Support</h4>
              <p className="text-xs text-slate-400 mt-1">Response within 2 hours</p>
              <a href="mailto:support@mkfoods.com" className="text-xs text-amber-400 font-bold block mt-3 hover:underline">
                support@mkfoods.com
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 text-center hover:border-amber-500/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl mx-auto mb-3">
                <HiOutlineLocationMarker />
              </div>
              <h4 className="text-sm font-bold text-white">Main Dining Flagship</h4>
              <p className="text-xs text-slate-400 mt-1">Open 7 days a week</p>
              <span className="text-xs text-amber-400 font-bold block mt-3">
                Clifton Block 4, Karachi
              </span>
            </div>
          </div>

          {/* Interactive FAQs Accordion */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-white hover:text-amber-400 transition"
                    >
                      <span>{faq.q}</span>
                      <HiOutlineChevronDown
                        className={`text-lg text-amber-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Issue Reporting Form */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
            <div className="text-center max-w-md mx-auto mb-6">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                Direct Feedback
              </span>
              <h3 className="text-2xl font-bold text-white">Have a Special Request or Feedback?</h3>
              <p className="text-xs text-slate-400 mt-1">
                Send a direct note to our kitchen management team and we will respond promptly.
              </p>
            </div>
            <ReportForm />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
