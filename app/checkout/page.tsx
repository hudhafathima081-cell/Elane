"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum: number, item: any) => sum + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-[#F8F4EE] py-12 px-6">

      <h1 className="text-5xl font-serif text-center mb-12 text-black">
        Checkout
      </h1>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* Billing Form */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-serif mb-6 text-black">
            Billing Details
          </h2>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-xl p-4 text-black"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl p-4 text-black"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-xl p-4 text-black"
            />

            <input
              type="text"
              placeholder="House / Flat No."
              className="w-full border rounded-xl p-4 text-black"
            />

            <textarea
              placeholder="Street Address"
              className="w-full border rounded-xl p-4 text-black h-28"
            />

            <div className="grid grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="City"
                className="border rounded-xl p-4 text-black"
              />

              <input
                type="text"
                placeholder="State"
                className="border rounded-xl p-4 text-black"
              />

            </div>

            <input
              type="text"
              placeholder="PIN Code"
              className="w-full border rounded-xl p-4 text-black"
            />

          </div>

        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-serif mb-6 text-black">
            Order Summary
          </h2>

          <div className="space-y-5">

           {cartItems.map((item: any, index: number) => (

  <div
    key={index}
    className="flex items-center justify-between border-b pb-4"
  >

    <div className="flex items-center gap-4">

      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 rounded-xl object-cover"
      />

      <div>
        <h3 className="text-black font-medium">
          {item.name}
        </h3>

        <p className="text-[#A44A3F]">
          ₹{item.price.toLocaleString()}
        </p>
      </div>

    </div>

  </div>

))}

          </div>

          <div className="mt-8 space-y-3">

            <div className="flex justify-between text-black">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>

            <div className="flex justify-between text-black">
              <span>Shipping</span>
              <span>FREE</span>
            </div>

            <hr />

            <div className="flex justify-between text-2xl font-bold text-[#953c30]">

              <span>Total</span>

              <span>₹{total}</span>

            </div>

          </div>

          <Link href="/payment">

            <button className="w-full mt-8 bg-black text-white py-4 rounded-full hover:bg-[#A44A3F] transition">

              Proceed to Payment

            </button>

          </Link>

        </div>

      </div>

    </div>
  );
}