"use client";

import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {

  const { cartItems } = useCart();
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const products = [
  "Watch",
  "Ring",
  "Bracelet",
  "Chain",
  "Earrings",
  "Sunglasses",
  "Luxury Gift",
];

const filteredProducts = products.filter((item) =>
  item.toLowerCase().includes(search.toLowerCase())
);
  return (

    <nav className="sticky top-0 z-50 w-full bg-[#F8F4EE]/95 backdrop-blur-md border-b border-[#ece4d8]">

      {/* TOP BAR */}
      <div className="text-center py-3 text-[13px] tracking-[0.25em] uppercase text-black border-b border-[#ece4d8]">

        Free Shipping Across India

      </div>


      {/* MAIN NAVBAR */}
      <div className="flex items-center justify-between px-8 py-6">

        {/* LEFT MENU */}
        <button
  onClick={() => setMenuOpen(true)}
  className="flex flex-col gap-[6px]"
>

          <span className="w-7 h-[2px] bg-black"></span>
          <span className="w-7 h-[2px] bg-black"></span>
          <span className="w-7 h-[2px] bg-black"></span>

        </button>


        {/* CENTER LOGO */}
        <div className="relative">

          {/* RED ACCENT */}
          <span className="absolute -top-2 left-1 text-[#9E2F2F] text-[24px] rotate-[-25deg] font-serif">
            
          </span>

          {/* LOGO */}
          <h1 className="text-5xl font-serif tracking-wide text-black">
        ÉLANE
      </h1>

      <div className="flex gap-14 text-[18px] text-black"></div>

        </div>


        {/* RIGHT ICONS */}
       {/* RIGHT ICONS */}
{/* RIGHT ICONS */}
<div className="flex items-center gap-7">

  {/* SEARCH ICON */}
  
  <button
  onClick={() => setShowSearch(!showSearch)}
  className="text-black hover:opacity-70 transition"
>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.7}
      stroke="currentColor"
      className="w-7 h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      />
    </svg>
  </button>



  
  {/* CART ICON */}
  <Link href="/cart">
<button className="relative text-black hover:opacity-70 transition">

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.7}
    stroke="currentColor"
    className="w-7 h-7"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 6V5a4.5 4.5 0 0 0-9 0v1M3.75 8.25h16.5l-1.2 10.2a2.25 2.25 0 0 1-2.23 1.95H7.18a2.25 2.25 0 0 1-2.23-1.95L3.75 8.25Z"
    />
  </svg>

  <span className="absolute -top-2 -right-2 bg-[#9E2F2F] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
   {cartItems.length}
  </span>

</button>
</Link>
</div>

      </div>
{/* SIDEBAR MENU */}

{menuOpen && (

  <div className="fixed inset-0 z-50 flex">

    {/* DARK BACKGROUND */}
    <div
      className="w-full bg-black/40"
      onClick={() => setMenuOpen(false)}
    />

    {/* MENU BOX */}
    <div className="absolute left-0 top-0 w-[320px] h-screen bg-white p-10 shadow-2xl">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setMenuOpen(false)}
        className="text-4xl mb-10"
      >
        ×
      </button>

      {/* MENU LINKS */}
      <div className="flex flex-col gap-6 text-[18px] text-black font-light">

        <Link
          href="/"
          className="hover:translate-x-2 transition duration-300"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="hover:translate-x-2 transition duration-300"
        >
          About Us
        </Link>

        <Link
          href="/contact"
          className="hover:translate-x-2 transition duration-300"
        >
          Contact
        </Link>

        <Link
          href="/shipping"
          className="hover:translate-x-2 transition duration-300"
        >
          Shipping Policy
        </Link>

        <Link
          href="/returns"
          className="hover:translate-x-2 transition duration-300"
        >
          Return Policy
        </Link>

        <Link
          href="/track-order"
          className="hover:translate-x-2 transition duration-300"
        >
          Track Order
        </Link>

        <Link
          href="/currency"
          className="hover:translate-x-2 transition duration-300"
        >
          Currency Selector
        </Link>

        <Link
          href="/account"
          className="hover:translate-x-2 transition duration-300"
        >
          Login / Account
        </Link>

      </div>

    </div>

  </div>

)}
{showSearch && (
  <div className="bg-[#F8F4EE] border-t p-4">
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search products..."
      className="w-full border border-gray-300 rounded-lg p-3 bg-white text-black placeholder:text-gray-500 focus:outline-none"
    />

    {search && (
      <div className="mt-2 bg-white rounded shadow">
        {filteredProducts.map((item, index) => (
          <div
            key={index}
            className="p-3 hover:bg-gray-100 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    )}
  </div>
)}
    </nav>

  );
}