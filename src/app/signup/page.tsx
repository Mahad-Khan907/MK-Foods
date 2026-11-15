"use client";

import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import { FaGoogle, FaApple } from "react-icons/fa6";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi";
import { IoMdFlame } from "react-icons/io";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Welcome to the MK Foods VIP Foodie Club! Account created.");
  };

  return (
    <div className="bg-[#080c14] min-h-screen text-slate-100 flex flex-col justify-between">
      <div>
        <Nav />

        <div className="max-w-md mx-auto px-4 py-16 sm:py-24">
          <div className="rounded-3xl bg-[#0f172a]/90 border border-white/10 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
            
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-white mx-auto mb-3 shadow-lg shadow-amber-500/30">
                <IoMdFlame className="text-2xl" />
              </div>
              <h1 className="text-2xl font-black text-white">Create an Account</h1>
              <p className="text-xs text-slate-400 mt-1">
                Join MK Foods & claim your 20% welcome discount voucher
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <HiOutlineUser className="absolute left-3.5 top-3 text-slate-400 text-base" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mahad Khan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <HiOutlineMail className="absolute left-3.5 top-3 text-slate-400 text-base" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Create Password
                </label>
                <div className="relative">
                  <HiOutlineLockClosed className="absolute left-3.5 top-3 text-slate-400 text-base" />
                  <input
                    type="password"
                    required
                    placeholder="At least 6 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
                  />
                </div>
              </div>

              <div className="text-[11px] text-slate-400">
                By creating an account, you agree to MK Foods'{" "}
                <a href="#" className="text-amber-400 hover:underline">Terms of Service</a> &{" "}
                <a href="#" className="text-amber-400 hover:underline">Privacy Policy</a>.
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-xs shadow-lg shadow-orange-600/30 transition hover:scale-[1.01] active:scale-[0.99] mt-2"
              >
                Sign Up & Claim 20% Off
              </button>
            </form>

            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <span className="relative bg-[#0f172a] px-3 text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                Or join with
              </span>
            </div>

            <div className="space-y-2.5">
              <button
                type="button"
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs flex items-center justify-center gap-2 transition"
              >
                <FaGoogle className="text-amber-400 text-sm" />
                <span>Sign up with Google</span>
              </button>
              <button
                type="button"
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs flex items-center justify-center gap-2 transition"
              >
                <FaApple className="text-white text-base" />
                <span>Sign up with Apple</span>
              </button>
            </div>

            <p className="text-xs text-slate-400 text-center mt-6">
              Already registered?{" "}
              <Link href="/signin" className="text-amber-400 font-bold hover:underline">
                Sign In
              </Link>
            </p>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
