import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Clientdata from "@/components/ui/Clientdata";

export default function CheckoutPage() {
  return (
    <div className="bg-[#080c14] min-h-screen text-slate-100 flex flex-col justify-between">
      <div>
        <Nav />
        <Clientdata />
      </div>
      <Footer />
    </div>
  );
}
