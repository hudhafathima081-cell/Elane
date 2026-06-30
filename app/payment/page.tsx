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

           

  {paymentMethod === "card" && (

<div className="mt-8 space-y-5">

  <input
    type="text"
    placeholder="Card Number"
    className="w-full border rounded-xl p-4 text-black"
  />

  <input
    type="text"
    placeholder="Card Holder Name"
    className="w-full border rounded-xl p-4 text-black"
  />

  <div className="grid grid-cols-2 gap-4">

    <input
      type="text"
      placeholder="MM / YY"
      className="border rounded-xl p-4 text-black"
    />

    <input
      type="password"
      placeholder="CVV"
      className="border rounded-xl p-4 text-black"
    />

  </div>

</div>

)}

            <div
  onClick={() => setPaymentMethod("upi")}
  className={`border rounded-2xl p-5 cursor-pointer transition ${
    paymentMethod === "upi"
      ? "border-black bg-[#F8F4EE]"
      : "border-gray-300"
  }`}
>
  <h3 className="text-xl font-semibold text-black">
    📱 UPI Payment
  </h3>
  

  <p className="text-black">
    Google Pay • PhonePe • Paytm
  </p>
</div>

           <div
  onClick={() => setPaymentMethod("bank")}
  className={`border rounded-2xl p-5 cursor-pointer transition ${
    paymentMethod === "bank"
      ? "border-black bg-[#F8F4EE]"
      : "border-gray-300"
  }`}
>
  <h3 className="text-xl font-semibold text-black">
    🏦 Net Banking
  </h3>

  <p className="text-gray-500">
    SBI • HDFC • ICICI • Axis
  </p>
</div>

{paymentMethod === "bank" && (

<div className="mt-5">

  <select className="w-full border rounded-xl p-4 text-black bg-white">

    <option>Select Your Bank</option>

    <option>State Bank of India</option>

    <option>HDFC Bank</option>

    <option>ICICI Bank</option>

    <option>Axis Bank</option>

    <option>Canara Bank</option>

  </select>

</div>

)}
        <div
  onClick={() => setPaymentMethod("cod")}
  className={`border rounded-2xl p-5 cursor-pointer transition ${
    paymentMethod === "cod"
      ? "border-black bg-[#F8F4EE]"
      : "border-gray-300"
  }`}
>
  <h3 className="text-xl font-semibold text-black">
    💵 Cash on Delivery
  </h3>

  <p className="text-gray-500">
    Pay when your order is delivered
  </p>
</div>

{paymentMethod === "cod" && (

<div className="mt-5 p-5 bg-yellow-50 border border-yellow-200 rounded-xl">

  <p className="text-black font-medium">
    Cash on Delivery Selected
  </p>

  <p className="text-gray-600 mt-2">
    Please keep the exact amount ready at the time of delivery.
  </p>

</div>

)}
          </div>

        </div>
        {paymentMethod === "upi" && (

<div className="mt-8">

  <input
    type="text"
    placeholder="Enter your UPI ID"
    className="w-full border rounded-xl p-4 text-black"
  />

</div>

)}

        {/* Right Side */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-serif text-black mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between text-black text-lg mb-3">
            <span>Subtotal</span>
            <span>{total.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-black text-lg mb-3">
            <span>Shipping</span>
            <span className="text-green-600">FREE</span>
          </div>

          <hr className="my-5"/>

          <div className="flex justify-between text-2xl font-bold text-black">
            <span>Total</span>
            <span>{total}</span>
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