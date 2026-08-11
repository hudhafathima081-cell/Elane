"use client";

import { useCart } from "@/app/context/CartContext";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const { cartItems } = useCart();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const products = [
    { name: "Watch", href: "/collections/watches" },
    { name: "Ring", href: "/collections/rings" },
    { name: "Bracelets", href: "/collections/bracelets" },
    { name: "Bangles", href: "/collections/bangles" },
    { name: "Chain", href: "/collections/chains" },
    { name: "Earrings", href: "/collections/earrings" },
    { name: "Sunglasses", href: "/collections/sunglasses" },
    { name: "Gifts", href: "/collections/gifts" },
  ];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  /* ================================
     CHECK LOGIN STATUS
  ================================= */

  useEffect(() => {
    const loggedIn =
      localStorage.getItem("elane_logged_in") === "true";

    setIsLoggedIn(loggedIn);
  }, []);

  /* ================================
     LOGOUT
  ================================= */

  const handleLogout = () => {
    localStorage.removeItem("elane_logged_in");
    localStorage.removeItem("elane_user");
    localStorage.removeItem("elane_user_email");

    setIsLoggedIn(false);
    setShowAccountMenu(false);

    window.location.href = "/";
  };

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

          <h1 className="text-5xl font-serif tracking-wide text-black">
            ÉLANE
          </h1>

        </div>

        {/* RIGHT ICONS */}

        <div className="flex items-center gap-7">

          {/* SEARCH */}

          <button
            onClick={() => setShowSearch(!showSearch)}
            className="text-black hover:opacity-70 transition"
            aria-label="Search"
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

          {/* LOGIN / ACCOUNT */}

          <div className="relative">

            <button
              type="button"
              onClick={() => {

                if (isLoggedIn) {
                  setShowAccountMenu(!showAccountMenu);
                } else {
                  window.location.href = "/login";
                }

              }}
              className="flex items-center gap-2 text-black hover:text-[#A44A3F] transition"
              aria-label={isLoggedIn ? "Account" : "Login"}
            >

              {/* USER ICON */}

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
                  d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
                />
              </svg>

              <span className="hidden md:inline text-sm font-medium">
                {isLoggedIn ? "Account" : "Login"}
              </span>

            </button>

            {/* ACCOUNT DROPDOWN */}

            {isLoggedIn && showAccountMenu && (

              <div className="absolute right-0 top-12 w-52 bg-white rounded-2xl shadow-xl border border-[#ECE5DB] p-3 z-[100]">

                <button
                  type="button"
                  onClick={() => {
                    window.location.href = "/account";
                  }}
                  className="w-full text-left px-4 py-3 rounded-xl text-black hover:bg-[#F8F4EE] transition"
                >
                  My Account
                </button>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 rounded-xl text-[#A44A3F] hover:bg-[#F8F4EE] transition"
                >
                  Logout
                </button>

              </div>

            )}

          </div>

          {/* CART */}

          <Link href="/cart">

            <button
              className="relative text-black hover:opacity-70 transition"
              aria-label="Shopping Cart"
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

            {/* CLOSE */}

            <button
              onClick={() => setMenuOpen(false)}
              className="text-4xl mb-10 text-black"
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

              <button
                onClick={() => {
                  setMenuOpen(false);

                  if (isLoggedIn) {
                    setShowAccountMenu(true);
                  } else {
                    window.location.href = "/login";
                  }
                }}
                className="text-left hover:translate-x-2 transition duration-300"
              >
                {isLoggedIn ? "My Account" : "Login / Account"}
              </button>

            </div>

          </div>

        </div>

      )}

      {/* SEARCH BOX */}

      {showSearch && (

        <div className="bg-[#F8F4EE] border-t border-[#ece4d8] p-4">

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

                <Link
                  key={index}
                  href={item.href}
                  className="block p-3 text-black hover:bg-gray-100 cursor-pointer"
                >
                  {item.name}
                </Link>

              ))}

              {filteredProducts.length === 0 && (

                <p className="p-3 text-gray-500">
                  No products found.
                </p>

              )}

            </div>

          )}

        </div>

      )}

    </nav>
  );
}