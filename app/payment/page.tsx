"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function PaymentPage() {

  const [paymentMethod, setPaymentMethod] = useState("card");

  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum: number, item: any) => sum + item.price,
    0
  );
  return (
    <div className="min-h-screen bg-[#F8F4EE] py-12 px-6">

      <h1 className="text-5xl font-serif text-center text-black mb-12">
        Secure Payment
      </h1>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* Left Side */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-serif text-black mb-8">
            Payment Method
          </h2>

          <div className="space-y-4">

            <div className="border rounded-2xl p-5 cursor-pointer hover:border-black">
              💳 Credit / Debit Card
            </div>

            <div className="border rounded-2xl p-5 cursor-pointer hover:border-black">
              📱 UPI Payment
            </div>

            <div className="border rounded-2xl p-5 cursor-pointer hover:border-black">
              🏦 Net Banking
            </div>

            <div className="border rounded-2xl p-5 cursor-pointer hover:border-black">
              💵 Cash on Delivery
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-serif text-black mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between text-black text-lg mb-3">
            <span>Subtotal</span>
            <span>₹10,000</span>
          </div>

          <div className="flex justify-between text-black text-lg mb-3">
            <span>Shipping</span>
            <span className="text-green-600">FREE</span>
          </div>

          <hr className="my-5"/>

          <div className="flex justify-between text-2xl font-bold text-black">
            <span>Total</span>
            <span>₹10,000</span>
          </div>

          <Link href="/order-success">

            <button className="w-full mt-10 bg-black text-white py-4 rounded-full hover:bg-[#A44A3F] transition">

              Complete Order

            </button>

          </Link>

        </div>

      </div>

    </div>
  );
}