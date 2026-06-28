"use client";

import Link from "next/link";

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-[#F8F4EE] flex items-center justify-center px-6">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-lg">

        <h1 className="text-4xl font-serif text-center text-black mb-8">
          Payment
        </h1>

        <div className="space-y-4">

          <label className="flex items-center gap-3 text-black">
            <input type="radio" name="payment" />
            UPI
          </label>

          <label className="flex items-center gap-3 text-black">
            <input type="radio" name="payment" />
            Credit / Debit Card
          </label>

          <label className="flex items-center gap-3 text-black">
            <input type="radio" name="payment" />
            Net Banking
          </label>

          <label className="flex items-center gap-3 text-black">
            <input type="radio" name="payment" />
            Cash on Delivery
          </label>

        </div>

        <Link href="/order-success">

          <button className="w-full mt-10 bg-black text-white py-4 rounded-full hover:bg-[#A44A3F] transition">
            Pay Now
          </button>

        </Link>

      </div>

    </div>
  );
}