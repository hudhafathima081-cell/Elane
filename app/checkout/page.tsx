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
const [savedAddress, setSavedAddress] = useState<any>(null);
  const total = cartItems.reduce(
    (sum: number, item: any) => sum + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-[#F7F3EE]">

      {/* Header */}

      <div className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 py-8">

          <h1 className="text-4xl font-serif text-black">
            Secure Checkout
          </h1>

          <p className="text-gray-500 mt-2">
            Complete your purchase securely.
          </p>

          {/* Progress */}

          <div className="flex items-center gap-5 mt-8">

            <div className="flex items-center gap-2">

              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                ✓
              </div>

              <span className="font-semibold text-black">
                Cart
              </span>

            </div>

            <div className="flex-1 h-1 bg-black rounded-full"></div>

            <div className="flex items-center gap-2">

              <div className="w-10 h-10 rounded-full bg-[#A44A3F] text-white flex items-center justify-center">
                2
              </div>

              <span className="font-semibold text-black">
                Checkout
              </span>

            </div>

            <div className="flex-1 h-1 bg-gray-300 rounded-full"></div>

            <div className="flex items-center gap-2">

              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                3
              </div>

              <span className="text-gray-500">
                Payment
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Main Layout */}

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 px-6 py-10">

        {/* LEFT */}

        <div className="lg:col-span-2 space-y-6">

          {/* Address card starts here in Part 2 */}

{/* Delivery Address */}

<div className="bg-white rounded-3xl shadow-md p-8">

  <div className="flex justify-between items-center">

    <h2 className="text-3xl font-serif text-black">
      📍 Delivery Address
    </h2>

    <button
  onClick={() => setShowAddressForm(true)}
  className="bg-black text-white px-5 py-2 rounded-full hover:bg-[#A44A3F] transition"
>
  + Add New
</button>

  </div>

  <div className="mt-4">

  <p className="text-black font-medium mb-3">
    Address Type
  </p>

  <div className="flex gap-3">

    <button
      onClick={() => setAddress({ ...address, type: "Home" })}
      className={`px-5 py-2 rounded-full ${
        address.type === "Home"
          ? "bg-black text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      🏠 Home
    </button>

    <button
      onClick={() => setAddress({ ...address, type: "Work" })}
      className={`px-5 py-2 rounded-full ${
        address.type === "Work"
          ? "bg-black text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      💼 Work
    </button>

    <button
      onClick={() => setAddress({ ...address, type: "Other" })}
      className={`px-5 py-2 rounded-full ${
        address.type === "Other"
          ? "bg-black text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      📍 Other
    </button>

  </div>

</div>
</div>

{/* Delivery */}

<div className="bg-white rounded-3xl shadow-md p-8">

  <h2 className="text-3xl font-serif text-black mb-6">
    🚚 Delivery
  </h2>

  <div className="border rounded-2xl p-5 flex justify-between items-center">

    <div>

      <h3 className="text-black font-semibold">
        Standard Delivery
      </h3>

      <p className="text-gray-500">
        Delivered in 3–5 Business Days
      </p>

    </div>

    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
      FREE
    </span>

  </div>

</div>
<div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-3xl p-6 shadow-md">

  <h2 className="text-2xl font-serif text-black">
    🎁 Exclusive Offer
  </h2>

  <p className="text-gray-700 mt-2">
    Use code <span className="font-bold text-[#A44A3F]">ELANE10</span> and save ₹500 on orders above ₹5,000.
  </p>

  <button className="mt-5 bg-[#A44A3F] text-white px-6 py-3 rounded-full hover:bg-black transition">
    Apply Offer
  </button>

</div>
{/* Offer */}

<div className="bg-gradient-to-r from-[#A44A3F] to-[#D38A76] rounded-3xl p-6 text-white">

  <h2 className="text-2xl font-serif">
    🎉 Special Offer
  </h2>

  <p className="mt-2">
    Apply coupon <b>ELANE10</b> and get 10% OFF on your order.
  </p>

  <button className="mt-5 bg-white text-black px-6 py-3 rounded-full font-semibold">
    Apply Coupon
  </button>

</div>
        </div>
<div className="bg-white rounded-3xl shadow-md p-6">

  <div className="grid grid-cols-2 gap-4">

    <div className="text-center">
      🔒
      <p className="text-black font-semibold mt-2">
        Secure Payment
      </p>
    </div>

    <div className="text-center">
      🚚
      <p className="text-black font-semibold mt-2">
        Fast Delivery
      </p>
    </div>

    <div className="text-center">
      ↩️
      <p className="text-black font-semibold mt-2">
        Easy Returns
      </p>
    </div>

    <div className="text-center">
      ⭐
      <p className="text-black font-semibold mt-2">
        Premium Quality
      </p>
    </div>

  </div>

</div>
        {/* RIGHT */}

        <div>

          {/* Order Summary starts here in Part 3 */}
          <div className="sticky top-8">

  <div className="bg-white rounded-3xl shadow-lg p-8">

    <h2 className="text-3xl font-serif text-black mb-8">
      Order Summary
    </h2>

    <div className="space-y-6">

      {cartItems.map((item: any, index: number) => (

        <div
          key={index}
          className="flex gap-4 border-b pb-5"
        >

          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 rounded-2xl object-cover"
          />

          <div className="flex-1">

            <h3 className="text-black font-semibold">
              {item.name}
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Qty : 1
            </p>

            <p className="text-[#A44A3F] font-bold mt-2">
              ₹{item.price.toLocaleString()}
            </p>

          </div>

        </div>

      ))}

    </div>

    {/* Coupon */}

    <div className="mt-8">

      <div className="flex gap-2">

        <input
          type="text"
          placeholder="Coupon Code"
          className="flex-1 border rounded-xl p-3 text-black"
        />

        <button className="bg-black text-white px-5 rounded-xl hover:bg-[#A44A3F]">
          Apply
        </button>

      </div>

    </div>

    {/* Price */}

    <div className="mt-8 space-y-4">

      <div className="flex justify-between text-black">

        <span>Subtotal</span>

        <span>₹{total.toLocaleString()}</span>

      </div>

      <div className="flex justify-between">

        <span className="text-black">
          Shipping
        </span>

        <span className="text-green-600 font-semibold">
          FREE
        </span>

      </div>

      <div className="flex justify-between">

        <span className="text-black">
          Discount
        </span>

        <span className="text-[#A44A3F]">
          -₹0
        </span>

      </div>

      <hr />

      <div className="flex justify-between text-2xl font-bold text-black">

        <span>Total</span>

        <span>
          ₹{total.toLocaleString()}
        </span>

      </div>

    </div>

    {/* Trust */}

    <div className="mt-8 bg-[#F8F4EE] rounded-2xl p-5">

      <p className="text-black font-semibold">
        🔒 Secure SSL Checkout
      </p>

      <p className="text-gray-500 text-sm mt-2">
        Easy Returns • Secure Payments • Trusted Delivery
      </p>

    </div>

    <Link href="/payment">

      <button className="w-full mt-8 bg-black text-white py-4 rounded-full text-lg hover:bg-[#A44A3F] transition">

        Continue to Payment →

      </button>

    </Link>

  </div>

</div>

        </div>

      </div>
{showAddressForm && (

<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

  <div className="bg-white rounded-3xl p-8 w-[90%] max-w-xl">

    <h2 className="text-3xl font-serif text-black mb-6">
      Add New Address
    </h2>

    {/* Step 4 will go here */}
<div className="space-y-4">

  <input
    type="text"
    placeholder="Full Name"
    value={address.name}
    onChange={(e) =>
      setAddress({ ...address, name: e.target.value })
    }
    className="w-full border rounded-xl p-4 text-black"
  />

  <input
    type="tel"
    placeholder="Phone Number"
    value={address.phone}
    onChange={(e) =>
      setAddress({ ...address, phone: e.target.value })
    }
    className="w-full border rounded-xl p-4 text-black"
  />

  <input
    type="text"
    placeholder="House / Flat No."
    value={address.house}
    onChange={(e) =>
      setAddress({ ...address, house: e.target.value })
    }
    className="w-full border rounded-xl p-4 text-black"
  />

  <textarea
    placeholder="Street Address"
    value={address.street}
    onChange={(e) =>
      setAddress({ ...address, street: e.target.value })
    }
    className="w-full border rounded-xl p-4 text-black h-24"
  />

  <div className="grid grid-cols-2 gap-4">

    <input
      type="text"
      placeholder="City"
      value={address.city}
      onChange={(e) =>
        setAddress({ ...address, city: e.target.value })
      }
      className="border rounded-xl p-4 text-black"
    />

    <input
      type="text"
      placeholder="State"
      value={address.state}
      onChange={(e) =>
        setAddress({ ...address, state: e.target.value })
      }
      className="border rounded-xl p-4 text-black"
    />

  </div>

  <input
    type="text"
    placeholder="PIN Code"
    value={address.pincode}
    onChange={(e) =>
      setAddress({ ...address, pincode: e.target.value })
    }
    className="w-full border rounded-xl p-4 text-black"
  />
<div className="mt-4">

  <p className="text-black font-medium mb-3">
    Address Type
  </p>

  <div className="flex gap-3">

    <button
      onClick={() => setAddress({ ...address, type: "Home" })}
      className={`px-5 py-2 rounded-full ${
        address.type === "Home"
          ? "bg-black text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      🏠 Home
    </button>

    <button
      onClick={() => setAddress({ ...address, type: "Work" })}
      className={`px-5 py-2 rounded-full ${
        address.type === "Work"
          ? "bg-black text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      💼 Work
    </button>

    <button
      onClick={() => setAddress({ ...address, type: "Other" })}
      className={`px-5 py-2 rounded-full ${
        address.type === "Other"
          ? "bg-black text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      📍 Other
    </button>

  </div>

</div>
</div>

<div className="flex justify-end gap-4 mt-8">

  <button
    onClick={() => setShowAddressForm(false)}
    className="px-6 py-3 rounded-xl border"
  >
    Cancel
  </button>

 <button
  onClick={() => {
    setSavedAddress(address);
    setShowAddressForm(false);
  }}
  className="bg-black text-white px-8 py-3 rounded-xl hover:bg-[#A44A3F]"
>
  Save Address
</button>

</div>
  </div>

</div>

)}
    </div>
  );
}