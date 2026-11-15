import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MK Foods | Artisanal Dining & Gourmet Fast Food",
  description: "Experience premium culinary masterpieces, handcrafted burgers, wood-fired pizzas, and gourmet dishes delivered hot and fresh in under 30 minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080c14] text-slate-100 min-h-screen selection:bg-amber-500 selection:text-black`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
