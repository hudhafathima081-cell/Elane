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
    <div className="min-h-screen bg-[#F8F4EE] py-10">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-serif text-black">
          Checkout
        </h1>

        <p className="text-gray-600 mt-2">
          Complete your order securely.
        </p>

        {/* Progress */}
        <div className="flex items-center justify-center gap-5 mt-10 mb-12">

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
              1
            </div>
            <span className="text-black font-medium">
              Review
            </span>
          </div>

          <div className="w-20 h-[2px] bg-black"></div>

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center">
              2
            </div>
            <span className="text-black">
              Payment
            </span>
          </div>

          <div className="w-20 h-[2px] bg-gray-300"></div>

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
              3
            </div>
            <span className="text-gray-500">
              Confirmation
            </span>
          </div>

        </div>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Billing Section */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-serif text-black mb-8">
              Billing Details
            </h2>

            {/* PART 2 WILL START HERE */}

          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-serif text-black mb-8">
              Order Summary
            </h2>

            {/* PART 3 WILL START HERE */}

          </div>

        </div>

      </div>

    </div>
  );
}