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
            <div className="grid md:grid-cols-2 gap-5">

  <div>
    <label className="block text-black font-medium mb-2">
      Full Name
    </label>

    <input
      type="text"
      placeholder="John Doe"
      className="w-full border border-gray-300 rounded-xl p-4 text-black focus:outline-none focus:border-black"
    />
  </div>

  <div>
    <label className="block text-black font-medium mb-2">
      Email Address
    </label>

    <input
      type="email"
      placeholder="john@email.com"
      className="w-full border border-gray-300 rounded-xl p-4 text-black focus:outline-none focus:border-black"
    />
  </div>

  <div>
    <label className="block text-black font-medium mb-2">
      Phone Number
    </label>

    <input
      type="tel"
      placeholder="+91 XXXXX XXXXX"
      className="w-full border border-gray-300 rounded-xl p-4 text-black focus:outline-none focus:border-black"
    />
  </div>

  <div>
    <label className="block text-black font-medium mb-2">
      PIN Code
    </label>

    <input
      type="text"
      placeholder="671121"
      className="w-full border border-gray-300 rounded-xl p-4 text-black focus:outline-none focus:border-black"
    />
  </div>

</div>

<div className="mt-6">

  <label className="block text-black font-medium mb-2">
    Street Address
  </label>

  <textarea
    rows={4}
    placeholder="House No, Street, Area"
    className="w-full border border-gray-300 rounded-xl p-4 text-black focus:outline-none focus:border-black"
  />

</div>

<div className="grid md:grid-cols-2 gap-5 mt-6">

  <div>
    <label className="block text-black font-medium mb-2">
      City
    </label>

    <input
      type="text"
      placeholder="Kasaragod"
      className="w-full border border-gray-300 rounded-xl p-4 text-black"
    />
  </div>

  <div>
    <label className="block text-black font-medium mb-2">
      State
    </label>

    <select className="w-full border border-gray-300 rounded-xl p-4 text-black">
      <option>Kerala</option>
      <option>Karnataka</option>
      <option>Tamil Nadu</option>
      <option>Maharashtra</option>
      <option>Goa</option>
    </select>
  </div>

</div>

<h2 className="text-3xl font-serif text-black mt-10 mb-6">
  Shipping Method
</h2>

<div className="space-y-4">

  <div className="border-2 border-black rounded-2xl p-5 cursor-pointer">
    <div className="flex justify-between">

      <div>
        <h3 className="text-black font-semibold">
          Standard Delivery
        </h3>

        <p className="text-gray-600">
          Delivery in 3–5 business days
        </p>
      </div>

      <span className="font-bold text-green-600">
        FREE
      </span>

    </div>
  </div>

  <div className="border rounded-2xl p-5 cursor-pointer">

    <div className="flex justify-between">

      <div>
        <h3 className="text-black font-semibold">
          Express Delivery
        </h3>

        <p className="text-gray-600">
          Delivery in 1–2 business days
        </p>
      </div>

      <span className="font-bold text-black">
        ₹149
      </span>

    </div>

  </div>

</div>

          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-serif text-black mb-8">
              Order Summary
            </h2>

            {/* PART 3 WILL START HERE */}
            <div className="space-y-5">

  {cartItems.map((item: any, index: number) => (

    <div
      key={index}
      className="flex items-center justify-between border-b pb-5"
    >

      <div className="flex gap-4">

        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 rounded-xl object-cover"
        />

        <div>

          <h3 className="text-black font-semibold">
            {item.name}
          </h3>

          <p className="text-gray-500">
            Qty: 1
          </p>

          <p className="text-[#A44A3F] font-semibold mt-1">
            ₹{item.price.toLocaleString()}
          </p>

        </div>

      </div>

    </div>

  ))}

</div>

<div className="mt-8 space-y-4">

  <div className="flex justify-between text-black">
    <span>Subtotal</span>
    <span>₹{total.toLocaleString()}</span>
  </div>

  <div className="flex justify-between text-black">
    <span>Shipping</span>
    <span className="text-green-600 font-semibold">
      FREE
    </span>
  </div>

  <div className="flex justify-between text-black">
    <span>GST (18%)</span>
    <span>
      ₹{Math.round(total * 0.18).toLocaleString()}
    </span>
  </div>

  <hr />

  <div className="flex justify-between text-2xl font-bold text-black">

    <span>Total</span>

    <span>
      ₹{(total + Math.round(total * 0.18)).toLocaleString()}
    </span>

  </div>

</div>
<div className="mt-8">

  <h3 className="text-xl font-semibold text-black mb-3">
    Have a Coupon?
  </h3>

  <div className="flex gap-3">

    <input
      type="text"
      placeholder="Enter coupon code"
      className="flex-1 border border-gray-300 rounded-xl p-4 text-black"
    />

    <button className="bg-black text-white px-6 rounded-xl hover:bg-[#A44A3F] transition">
      Apply
    </button>

  </div>

</div>
<div className="mt-8 border rounded-2xl p-5">

  <label className="flex items-center gap-3 cursor-pointer">

    <input type="checkbox" />

    <div>

      <h3 className="text-black font-semibold">
        Premium Gift Wrapping
      </h3>

      <p className="text-gray-500">
        Elegant luxury gift box + personalized message (₹199)
      </p>

    </div>

  </label>

</div>

<div className="mt-8">

  <h3 className="text-xl font-semibold text-black mb-3">
    Order Notes
  </h3>

  <textarea
    rows={4}
    placeholder="Add delivery instructions..."
    className="w-full border border-gray-300 rounded-xl p-4 text-black"
  />

</div>
<div className="mt-8">

  <Link href="/payment">

    <button className="w-full bg-black text-white py-4 rounded-full hover:bg-[#A44A3F] transition duration-300">

      Proceed to Payment →

    </button>

  </Link>

</div>

<p className="text-center text-gray-500 text-sm mt-5">

  🔒 Your payment is secured with SSL encryption.

</p>

          </div>

        </div>

      </div>

    </div>
  );
}