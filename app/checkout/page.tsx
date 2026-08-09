"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { cartItems } = useCart();

  const [showAddressForm, setShowAddressForm] = useState(false);

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    house: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    type: "Home",
  });

  const [addresses, setAddresses] = useState<any[]>([]);
  const [selectedAddress, setSelectedAddress] = useState(0);

  const [deliveryMethod, setDeliveryMethod] =
    useState("standard");

  const [selectedCoupon, setSelectedCoupon] =
    useState("");

  const shipping =
    deliveryMethod === "express" ? 99 : 0;

  const discount =
    selectedCoupon === "ELANE10"
      ? 500
      : selectedCoupon === "NEWUSER"
      ? 300
      : selectedCoupon === "LUXURY15"
      ? 700
      : 0;

  const subtotal = cartItems.reduce(
    (sum: number, item: any) => sum + item.price,
    0
  );

  const total =
    subtotal + shipping - discount;

  return (
    <div className="min-h-screen bg-[#F8F4EE]">

      {/* HEADER */}

      <div className="bg-white border-b border-[#ece4d8] sticky top-0 z-40">

        <div className="max-w-7xl mx-auto px-6 py-8">

          <h1 className="text-5xl font-serif text-black">
            Checkout
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Secure Checkout • Estimated delivery in
            2–4 business days
          </p>

          {/* Progress */}

          <div className="flex items-center gap-6 mt-10">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
                ✓
              </div>

              <span className="font-semibold">
                Cart
              </span>

            </div>

            <div className="flex-1 h-[3px] bg-black rounded-full"></div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-[#A44A3F] text-white flex items-center justify-center font-bold">
                2
              </div>

              <span className="font-semibold">
                Checkout
              </span>

            </div>

            <div className="flex-1 h-[3px] bg-gray-300 rounded-full"></div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
                3
              </div>

              <span className="text-gray-500">
                Payment
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* MAIN */}

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 px-6 py-10">
        </div>

        {/* LEFT SIDE */}

        <div className="lg:col-span-2 space-y-8"></div>
        {/* DELIVERY ADDRESS */}

<div className="bg-white rounded-[32px] shadow-sm border border-[#ECE5DB] p-8">

  <div className="flex items-center justify-between">

    <div>

      <h2 className="text-3xl font-serif text-black">
        Delivery Address
      </h2>

      <p className="text-gray-500 mt-1">
        Select where you would like your order delivered.
      </p>

    </div>

    <button
      onClick={() => setShowAddressForm(true)}
      className="bg-[#A44A3F] hover:bg-black transition text-white px-6 py-3 rounded-full font-medium"
    >
      + Add Address
    </button>

  </div>

  {addresses.length === 0 ? (

    <div className="mt-8 border-2 border-dashed border-gray-300 rounded-3xl p-12 text-center">

      <div className="text-6xl mb-5">
        📍
      </div>

      <h3 className="text-2xl font-semibold text-black">
        No Saved Address
      </h3>

      <p className="text-gray-500 mt-3">
        Add your first delivery address to continue.
      </p>

      <button
        onClick={() => setShowAddressForm(true)}
        className="mt-8 bg-black hover:bg-[#A44A3F] transition text-white px-8 py-3 rounded-full"
      >
        Add New Address
      </button>

    </div>

  ) : (

    <div className="grid gap-5 mt-8">

      {addresses.map((item, index) => (

        <div
          key={index}
          onClick={() => setSelectedAddress(index)}
          className={`rounded-3xl border-2 cursor-pointer transition-all p-6 ${
            selectedAddress === index
              ? "border-[#A44A3F] bg-[#FDF8F5]"
              : "border-[#ECE5DB] bg-white hover:border-[#A44A3F]"
          }`}
        >

          <div className="flex justify-between items-start">

            <div>

              <span className="bg-black text-white px-4 py-1 rounded-full text-sm">

                {item.type}

              </span>

              <h3 className="text-2xl font-semibold mt-5 text-black">

                {item.name}

              </h3>

              <p className="text-gray-500 mt-1">

                {item.phone}

              </p>

              <p className="mt-3 text-black">

                {item.house}

              </p>

              <p>

                {item.street}

              </p>

              <p>

                {item.city}, {item.state}

              </p>

              <p>

                {item.pincode}

              </p>

            </div>

            <button
              className="text-[#A44A3F] font-semibold"
            >
              Edit
            </button>

          </div>

        </div>

      ))}

    </div>

  )}

</div>
{/* DELIVERY METHOD */}

<div className="bg-white rounded-[32px] shadow-sm border border-[#ECE5DB] p-8">

  <div>

    <h2 className="text-3xl font-serif text-black">
      Delivery Method
    </h2>

    <p className="text-gray-500 mt-1">
      Choose how you'd like your order delivered.
    </p>

  </div>

  <div className="space-y-5 mt-8">

    {/* Standard */}

    <div
      onClick={() => setDeliveryMethod("standard")}
      className={`cursor-pointer rounded-3xl border-2 p-6 transition-all ${
        deliveryMethod === "standard"
          ? "border-[#A44A3F] bg-[#FDF8F5]"
          : "border-[#ECE5DB] hover:border-[#A44A3F]"
      }`}
    >

      <div className="flex justify-between items-center">

        <div className="flex gap-5">

          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
            deliveryMethod === "standard"
              ? "border-[#A44A3F]"
              : "border-gray-300"
          }`}>

            {deliveryMethod === "standard" && (
              <div className="w-3 h-3 rounded-full bg-[#A44A3F]"></div>
            )}

          </div>

          <div>

            <h3 className="text-xl font-semibold text-black">
              Standard Delivery
            </h3>

            <p className="text-gray-500 mt-1">
              Delivered within 3–5 business days.
            </p>

          </div>

        </div>

        <span className="font-bold text-green-600">
          FREE
        </span>

      </div>

    </div>

    {/* Express */}

    <div
      onClick={() => setDeliveryMethod("express")}
      className={`cursor-pointer rounded-3xl border-2 p-6 transition-all ${
        deliveryMethod === "express"
          ? "border-[#A44A3F] bg-[#FDF8F5]"
          : "border-[#ECE5DB] hover:border-[#A44A3F]"
      }`}
    >

      <div className="flex justify-between items-center">

        <div className="flex gap-5">

          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
            deliveryMethod === "express"
              ? "border-[#A44A3F]"
              : "border-gray-300"
          }`}>

            {deliveryMethod === "express" && (
              <div className="w-3 h-3 rounded-full bg-[#A44A3F]"></div>
            )}

          </div>

          <div>

            <h3 className="text-xl font-semibold text-black">
              Express Delivery
            </h3>

            <p className="text-gray-500 mt-1">
              Delivered tomorrow before 8 PM.
            </p>

          </div>

        </div>

        <span className="font-bold text-[#A44A3F]">
          + ₹99
        </span>

      </div>

    </div>

  </div>

  <div className="mt-6 bg-[#F8F4EE] rounded-2xl p-5">

    <p className="text-black font-medium">
      🚚 Orders are carefully packed in premium ÉLANE packaging.
    </p>

    <p className="text-gray-500 text-sm mt-2">
      Delivery times may vary slightly based on your location.
    </p>

  </div>

</div>
{/* AVAILABLE COUPONS */}

<div className="bg-white rounded-[32px] shadow-sm border border-[#ECE5DB] p-8">

  <div className="flex justify-between items-center">

    <div>

      <h2 className="text-3xl font-serif text-black">
        Available Coupons
      </h2>

      <p className="text-gray-500 mt-1">
        Apply a coupon before proceeding to payment.
      </p>

    </div>

  </div>

  <div className="space-y-5 mt-8">

    {[
      {
        code: "ELANE10",
        title: "10% OFF",
        desc: "Save ₹500 on orders above ₹5,000",
      },
      {
        code: "NEWUSER",
        title: "₹300 OFF",
        desc: "Valid on your first purchase.",
      },
      {
        code: "LUXURY15",
        title: "15% OFF",
        desc: "Premium members exclusive.",
      },
    ].map((coupon) => (

      <div
        key={coupon.code}
        className={`border-2 rounded-3xl p-6 flex justify-between items-center transition-all ${
          selectedCoupon === coupon.code
            ? "border-[#A44A3F] bg-[#FDF8F5]"
            : "border-[#ECE5DB]"
        }`}
      >

        <div>

          <h3 className="text-xl font-semibold text-black">

            {coupon.code}

          </h3>

          <p className="text-[#A44A3F] font-medium mt-1">

            {coupon.title}

          </p>

          <p className="text-gray-500 text-sm mt-2">

            {coupon.desc}

          </p>

        </div>

        <button
          onClick={() => setSelectedCoupon(coupon.code)}
          className={`px-6 py-3 rounded-full font-semibold transition ${
            selectedCoupon === coupon.code
              ? "bg-green-600 text-white"
              : "bg-black text-white hover:bg-[#A44A3F]"
          }`}
        >

          {selectedCoupon === coupon.code
            ? "Applied ✓"
            : "Apply"}

        </button>

      </div>

    ))}

  </div>

</div>


{/* RIGHT SIDE */}

<div className="space-y-6 sticky top-32 h-fit">

  <div className="bg-white rounded-[32px] border border-[#ECE5DB] shadow-sm p-8">

    <h2 className="text-3xl font-serif text-black mb-8">
      Order Summary
    </h2>

    <div className="space-y-5">

      {cartItems.map((item: any, index: number) => (

        <div
          key={index}
          className="flex gap-4 border-b border-[#ECE5DB] pb-5"
        >

          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 rounded-2xl object-cover"
          />

          <div className="flex-1">

            <h3 className="font-semibold text-black">
              {item.name}
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Qty: 1
            </p>

            <p className="text-[#A44A3F] font-semibold mt-2">
              ₹{item.price.toLocaleString()}
            </p>

          </div>

        </div>

      ))}

    </div>

    <div className="space-y-4 mt-8">

      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>₹{subtotal.toLocaleString()}</span>
      </div>

      <div className="flex justify-between">
        <span>Shipping</span>

        <span>
          {shipping === 0 ? "FREE" : `₹${shipping}`}
        </span>

      </div>

      <div className="flex justify-between">

        <span>Discount</span>

        <span className="text-[#A44A3F] font-semibold">
          -₹{discount.toLocaleString()}
        </span>

      </div>

      <hr />

      <div className="flex justify-between text-2xl font-bold">

        <span>Total</span>

        <span>
          ₹{total.toLocaleString()}
        </span>

      </div>

    </div>

    <Link href="/payment">

      <button className="w-full mt-8 bg-black hover:bg-[#A44A3F] transition text-white rounded-full py-4 text-lg font-semibold">

        Continue to Payment →

      </button>

    </Link>

    <p className="text-center text-gray-500 text-sm mt-5">
      Secure payment protected with SSL encryption.
    </p>

  </div>

</div>

</div>
  );
}