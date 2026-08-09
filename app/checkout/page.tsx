"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";

type Address = {
  name: string;
  phone: string;
  house: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  type: string;
};

export default function CheckoutPage() {
  const { cartItems } = useCart();

  // ADDRESS
  const [showAddressForm, setShowAddressForm] = useState(false);

  const emptyAddress: Address = {
    name: "",
    phone: "",
    house: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    type: "Home",
  };

  const [address, setAddress] = useState<Address>(emptyAddress);

  const [addresses, setAddresses] = useState<Address[]>([]);

  const [selectedAddress, setSelectedAddress] = useState<number | null>(
    null
  );

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // DELIVERY
  const [deliveryMethod, setDeliveryMethod] =
    useState<"standard" | "express">("standard");

  // COUPON
  const [selectedCoupon, setSelectedCoupon] = useState("");

  // TOTAL
  const subtotal = cartItems.reduce(
    (sum: number, item: any) => sum + Number(item.price || 0),
    0
  );

  const shipping = deliveryMethod === "express" ? 99 : 0;

  const discount =
    selectedCoupon === "ELANE10"
      ? 500
      : selectedCoupon === "NEWUSER"
      ? 300
      : selectedCoupon === "LUXURY15"
      ? 700
      : 0;

  const total = Math.max(0, subtotal + shipping - discount);

  // OPEN NEW ADDRESS
  const openNewAddress = () => {
    setEditingIndex(null);
    setAddress({
      ...emptyAddress,
      type: "Home",
    });
    setShowAddressForm(true);
  };

  // OPEN EDIT ADDRESS
  const editAddress = (index: number) => {
    setEditingIndex(index);
    setAddress({ ...addresses[index] });
    setShowAddressForm(true);
  };

  // SAVE ADDRESS
  const saveAddress = () => {
    if (
      !address.name.trim() ||
      !address.phone.trim() ||
      !address.house.trim() ||
      !address.street.trim() ||
      !address.city.trim() ||
      !address.state.trim() ||
      !address.pincode.trim()
    ) {
      alert("Please fill in all address details.");
      return;
    }

    if (editingIndex !== null) {
      const updatedAddresses = [...addresses];
      updatedAddresses[editingIndex] = { ...address };

      setAddresses(updatedAddresses);
      setSelectedAddress(editingIndex);
    } else {
      const newAddresses = [...addresses, { ...address }];

      setAddresses(newAddresses);
      setSelectedAddress(newAddresses.length - 1);
    }

    setShowAddressForm(false);
    setEditingIndex(null);
    setAddress({ ...emptyAddress });
  };

  return (
    <div className="min-h-screen bg-[#F8F4EE] text-[#1C1C1C]">

      {/* ================= HEADER ================= */}

      <header className="bg-white border-b border-[#E8DED2] sticky top-0 z-40">

        <div className="max-w-7xl mx-auto px-6 py-7">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">

            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-[#A44A3F] font-semibold">
                ÉLANE
              </p>

              <h1 className="text-4xl md:text-5xl font-serif text-[#171717] mt-1">
                Checkout
              </h1>

              <p className="text-[#4A4540] mt-2">
                Complete your order securely.
              </p>
            </div>

            <div className="text-sm text-[#4A4540]">
              🔒 Secure checkout
            </div>

          </div>

          {/* PROGRESS */}

          <div className="flex items-center gap-3 md:gap-5 mt-8">

            {/* CART */}

            <div className="flex items-center gap-2">

              <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                ✓
              </div>

              <span className="font-semibold text-[#1C1C1C] hidden sm:block">
                Cart
              </span>

            </div>

            <div className="flex-1 h-[2px] bg-black rounded-full" />

            {/* CHECKOUT */}

            <div className="flex items-center gap-2">

              <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#A44A3F] text-white flex items-center justify-center font-semibold">
                2
              </div>

              <span className="font-semibold text-[#1C1C1C] hidden sm:block">
                Checkout
              </span>

            </div>

            <div className="flex-1 h-[2px] bg-[#D7D0C8] rounded-full" />

            {/* PAYMENT */}

            <div className="flex items-center gap-2">

              <div className="w-9 h-9 md:w-11 md:h-11 rounded-full border-2 border-[#CFC7BE] bg-white text-[#4A4540] flex items-center justify-center">
                3
              </div>

              <span className="text-[#4A4540] hidden sm:block">
                Payment
              </span>

            </div>

          </div>

        </div>

      </header>

      {/* ================= MAIN ================= */}

      <main className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 px-6 py-10">

        {/* ================= LEFT SIDE ================= */}

        <div className="lg:col-span-2 space-y-7">

          {/* DELIVERY ADDRESS */}

          <section className="bg-white rounded-[28px] border border-[#E8DED2] shadow-sm p-7 md:p-8">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

              <div>

                <p className="text-xs tracking-[0.2em] uppercase text-[#A44A3F] font-semibold">
                  Step 1
                </p>

                <h2 className="text-3xl font-serif text-[#171717] mt-1">
                  Delivery Address
                </h2>

                <p className="text-[#4A4540] mt-2">
                  Where should we deliver your ÉLANE order?
                </p>

              </div>

              <button
                type="button"
                onClick={openNewAddress}
                className="bg-black hover:bg-[#A44A3F] text-white px-6 py-3 rounded-full font-semibold transition"
              >
                + Add Address
              </button>

            </div>

            {/* NO ADDRESS */}

            {addresses.length === 0 && (

              <div className="mt-7 border-2 border-dashed border-[#D8CFC5] rounded-3xl p-8 md:p-10 text-center">

                <div className="w-14 h-14 mx-auto rounded-full bg-[#F8F4EE] flex items-center justify-center text-2xl">
                  📍
                </div>

                <h3 className="text-xl font-semibold text-[#171717] mt-4">
                  No saved address
                </h3>

                <p className="text-[#4A4540] mt-2">
                  Add your delivery address to continue.
                </p>

                <button
                  type="button"
                  onClick={openNewAddress}
                  className="mt-6 bg-[#A44A3F] hover:bg-black text-white px-7 py-3 rounded-full font-semibold transition"
                >
                  Add New Address
                </button>

              </div>

            )}

            {/* SAVED ADDRESSES */}

            {addresses.length > 0 && (

              <div className="space-y-4 mt-7">

                {addresses.map((item, index) => (

                  <div
                    key={index}
                    onClick={() => setSelectedAddress(index)}
                    className={`cursor-pointer rounded-2xl border-2 p-5 transition ${
                      selectedAddress === index
                        ? "border-[#A44A3F] bg-[#FDF8F5]"
                        : "border-[#E8DED2] bg-white hover:border-[#A44A3F]"
                    }`}
                  >

                    <div className="flex justify-between items-start gap-4">

                      <div className="flex gap-4">

                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
                            selectedAddress === index
                              ? "border-[#A44A3F]"
                              : "border-[#BDB5AC]"
                          }`}
                        >

                          {selectedAddress === index && (
                            <div className="w-3 h-3 rounded-full bg-[#A44A3F]" />
                          )}

                        </div>

                        <div>

                          <div className="flex flex-wrap items-center gap-2">

                            <h3 className="font-semibold text-lg text-[#171717]">
                              {item.name}
                            </h3>

                            <span className="bg-[#F0E6DF] text-[#7F372F] px-3 py-1 rounded-full text-xs font-semibold">
                              {item.type}
                            </span>

                          </div>

                          <p className="text-[#3F3A35] mt-1">
                            {item.phone}
                          </p>

                          <p className="text-[#3F3A35] mt-3">
                            {item.house}, {item.street}
                          </p>

                          <p className="text-[#3F3A35]">
                            {item.city}, {item.state} - {item.pincode}
                          </p>

                        </div>

                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          editAddress(index);
                        }}
                        className="text-[#A44A3F] font-semibold hover:text-black transition"
                      >
                        Edit
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </section>

          {/* DELIVERY METHOD */}

          <section className="bg-white rounded-[28px] border border-[#E8DED2] shadow-sm p-7 md:p-8">

            <p className="text-xs tracking-[0.2em] uppercase text-[#A44A3F] font-semibold">
              Step 2
            </p>

            <h2 className="text-3xl font-serif text-[#171717] mt-1">
              Delivery Method
            </h2>

            <p className="text-[#4A4540] mt-2">
              Choose the delivery speed that works for you.
            </p>

            <div className="space-y-4 mt-7">

              {/* STANDARD */}

              <button
                type="button"
                onClick={() => setDeliveryMethod("standard")}
                className={`w-full text-left rounded-2xl border-2 p-5 transition ${
                  deliveryMethod === "standard"
                    ? "border-[#A44A3F] bg-[#FDF8F5]"
                    : "border-[#E8DED2] hover:border-[#A44A3F]"
                }`}
              >

                <div className="flex justify-between items-center gap-4">

                  <div className="flex gap-4">

                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
                        deliveryMethod === "standard"
                          ? "border-[#A44A3F]"
                          : "border-[#BDB5AC]"
                      }`}
                    >

                      {deliveryMethod === "standard" && (
                        <div className="w-3 h-3 rounded-full bg-[#A44A3F]" />
                      )}

                    </div>

                    <div>

                      <h3 className="font-semibold text-lg text-[#171717]">
                        Standard Delivery
                      </h3>

                      <p className="text-[#4A4540] text-sm mt-1">
                        Delivered within 3–5 business days
                      </p>

                    </div>

                  </div>

                  <span className="text-green-700 font-bold">
                    FREE
                  </span>

                </div>

              </button>

              {/* EXPRESS */}

              <button
                type="button"
                onClick={() => setDeliveryMethod("express")}
                className={`w-full text-left rounded-2xl border-2 p-5 transition ${
                  deliveryMethod === "express"
                    ? "border-[#A44A3F] bg-[#FDF8F5]"
                    : "border-[#E8DED2] hover:border-[#A44A3F]"
                }`}
              >

                <div className="flex justify-between items-center gap-4">

                  <div className="flex gap-4">

                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
                        deliveryMethod === "express"
                          ? "border-[#A44A3F]"
                          : "border-[#BDB5AC]"
                      }`}
                    >

                      {deliveryMethod === "express" && (
                        <div className="w-3 h-3 rounded-full bg-[#A44A3F]" />
                      )}

                    </div>

                    <div>

                      <h3 className="font-semibold text-lg text-[#171717]">
                        Express Delivery
                      </h3>

                      <p className="text-[#4A4540] text-sm mt-1">
                        Delivered tomorrow before 8 PM
                      </p>

                    </div>

                  </div>

                  <span className="text-[#A44A3F] font-bold">
                    + ₹99
                  </span>

                </div>

              </button>

            </div>

            <div className="mt-5 bg-[#F8F4EE] border border-[#E8DED2] rounded-2xl p-4">

              <p className="text-[#292521] font-medium">
                🚚 Premium ÉLANE packaging included
              </p>

              <p className="text-[#5A544E] text-sm mt-1">
                Delivery time may vary slightly depending on your location.
              </p>

            </div>

          </section>

          {/* COUPONS */}

          <section className="bg-white rounded-[28px] border border-[#E8DED2] shadow-sm p-7 md:p-8">

            <p className="text-xs tracking-[0.2em] uppercase text-[#A44A3F] font-semibold">
              Step 3
            </p>

            <h2 className="text-3xl font-serif text-[#171717] mt-1">
              Offers & Coupons
            </h2>

            <p className="text-[#4A4540] mt-2">
              Choose one offer and save on your order.
            </p>

            <div className="space-y-4 mt-7">

              {[
                {
                  code: "ELANE10",
                  title: "₹500 OFF",
                  desc: "Save ₹500 on orders above ₹5,000",
                },
                {
                  code: "NEWUSER",
                  title: "₹300 OFF",
                  desc: "Special offer for your first purchase",
                },
                {
                  code: "LUXURY15",
                  title: "₹700 OFF",
                  desc: "Exclusive ÉLANE premium offer",
                },
              ].map((coupon) => (

                <div
                  key={coupon.code}
                  className={`rounded-2xl border-2 p-5 flex items-center justify-between gap-5 transition ${
                    selectedCoupon === coupon.code
                      ? "border-[#A44A3F] bg-[#FDF8F5]"
                      : "border-[#E8DED2]"
                  }`}
                >

                  <div>

                    <div className="flex items-center gap-3">

                      <span className="bg-[#F0E6DF] text-[#7F372F] px-3 py-1 rounded-lg text-sm font-bold">
                        {coupon.code}
                      </span>

                      {selectedCoupon === coupon.code && (
                        <span className="text-green-700 text-sm font-semibold">
                          Applied
                        </span>
                      )}

                    </div>

                    <p className="text-[#A44A3F] font-bold mt-2">
                      {coupon.title}
                    </p>

                    <p className="text-[#4A4540] text-sm mt-1">
                      {coupon.desc}
                    </p>

                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedCoupon(
                        selectedCoupon === coupon.code
                          ? ""
                          : coupon.code
                      )
                    }
                    className={`shrink-0 px-5 py-2.5 rounded-full font-semibold transition ${
                      selectedCoupon === coupon.code
                        ? "bg-green-700 text-white"
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

          </section>

        </div>

        {/* ================= RIGHT SIDE ================= */}

        <aside className="space-y-6 lg:sticky lg:top-32 h-fit">

          <div className="bg-white rounded-[28px] border border-[#E8DED2] shadow-sm p-7">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-xs tracking-[0.2em] uppercase text-[#A44A3F] font-semibold">
                  Your Order
                </p>

                <h2 className="text-3xl font-serif text-[#171717] mt-1">
                  Order Summary
                </h2>

              </div>

              <span className="bg-[#F8F4EE] text-[#3D3833] px-3 py-1 rounded-full text-sm">
                {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
              </span>

            </div>

            {/* PRODUCTS */}

            <div className="space-y-4 mt-7">

              {cartItems.length === 0 ? (

                <p className="text-[#4A4540]">
                  Your cart is empty.
                </p>

              ) : (

                cartItems.map((item: any, index: number) => (

                  <div
                    key={index}
                    className="flex gap-4 pb-4 border-b border-[#E8DED2]"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-2xl object-cover border border-[#E8DED2]"
                    />

                    <div className="flex-1">

                      <h3 className="font-semibold text-[#171717]">
                        {item.name}
                      </h3>

                      <p className="text-[#4A4540] text-sm mt-1">
                        Qty: 1
                      </p>

                      <p className="text-[#A44A3F] font-bold mt-2">
                        ₹{Number(item.price || 0).toLocaleString()}
                      </p>

                    </div>

                  </div>

                ))

              )}

            </div>

            {/* PRICE */}

            <div className="space-y-4 mt-7 text-[#27231F]">

              <div className="flex justify-between">

                <span>Subtotal</span>

                <span className="font-medium">
                  ₹{subtotal.toLocaleString()}
                </span>

              </div>

              <div className="flex justify-between">

                <span>Shipping</span>

                <span className="font-semibold text-green-700">
                  {shipping === 0
                    ? "FREE"
                    : `₹${shipping}`}
                </span>

              </div>

              <div className="flex justify-between">

                <span>
                  Discount
                  {selectedCoupon && (
                    <span className="text-xs text-[#A44A3F] ml-2">
                      {selectedCoupon}
                    </span>
                  )}
                </span>

                <span className="font-semibold text-[#A44A3F]">
                  -₹{discount.toLocaleString()}
                </span>

              </div>

              <hr className="border-[#E8DED2]" />

              <div className="flex justify-between items-end">

                <span className="text-xl font-semibold text-[#171717]">
                  Total
                </span>

                <span className="text-3xl font-bold text-[#171717]">
                  ₹{total.toLocaleString()}
                </span>

              </div>

            </div>

            {/* ADDRESS STATUS */}

            <div className="mt-6 rounded-2xl bg-[#F8F4EE] border border-[#E8DED2] p-4">

              {selectedAddress !== null &&
              addresses[selectedAddress] ? (

                <>

                  <p className="text-xs uppercase tracking-wider text-[#7F372F] font-bold">
                    Delivering to
                  </p>

                  <p className="text-[#171717] font-semibold mt-1">
                    {addresses[selectedAddress].name}
                  </p>

                  <p className="text-[#4A4540] text-sm mt-1">
                    {addresses[selectedAddress].city},{" "}
                    {addresses[selectedAddress].state}
                  </p>

                </>

              ) : (

                <p className="text-[#3F3A35] text-sm">
                  Please add a delivery address before payment.
                </p>

              )}

            </div>

            {/* PAYMENT BUTTON */}

            <Link
              href={
                addresses.length > 0 &&
                selectedAddress !== null
                  ? "/payment"
                  : "#"
              }
              onClick={(e) => {
                if (
                  addresses.length === 0 ||
                  selectedAddress === null
                ) {
                  e.preventDefault();
                  alert("Please add and select a delivery address first.");
                }
              }}
            >

              <button
                type="button"
                className="w-full mt-6 bg-black hover:bg-[#A44A3F] text-white rounded-full py-4 text-lg font-semibold transition"
              >
                Continue to Payment →
              </button>

            </Link>

            <p className="text-center text-[#4A4540] text-xs mt-4">
              🔒 Secure payment protected with SSL encryption.
            </p>

          </div>

          {/* TRUST BOX */}

          <div className="bg-[#171717] rounded-[28px] p-6 text-white">

            <div className="grid grid-cols-2 gap-5">

              <div>
                <p className="text-xl">🔒</p>
                <p className="font-semibold mt-2">
                  Secure Payment
                </p>
                <p className="text-white/70 text-xs mt-1">
                  Protected checkout
                </p>
              </div>

              <div>
                <p className="text-xl">🚚</p>
                <p className="font-semibold mt-2">
                  Fast Delivery
                </p>
                <p className="text-white/70 text-xs mt-1">
                  Carefully packed
                </p>
              </div>

              <div>
                <p className="text-xl">↩</p>
                <p className="font-semibold mt-2">
                  Easy Returns
                </p>
                <p className="text-white/70 text-xs mt-1">
                  Simple return process
                </p>
              </div>

              <div>
                <p className="text-xl">✦</p>
                <p className="font-semibold mt-2">
                  ÉLANE Quality
                </p>
                <p className="text-white/70 text-xs mt-1">
                  Premium accessories
                </p>
              </div>

            </div>

          </div>

        </aside>

      </main>

      {/* ================= ADDRESS MODAL ================= */}

      {showAddressForm && (

        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[30px] shadow-2xl">

            {/* MODAL HEADER */}

            <div className="sticky top-0 bg-white border-b border-[#E8DED2] px-7 py-5 flex items-center justify-between z-10">

              <div>

                <p className="text-xs uppercase tracking-[0.2em] text-[#A44A3F] font-bold">
                  ÉLANE
                </p>

                <h2 className="text-2xl font-serif text-[#171717]">
                  {editingIndex !== null
                    ? "Edit Address"
                    : "Add New Address"}
                </h2>

              </div>

              <button
                type="button"
                onClick={() => setShowAddressForm(false)}
                className="w-10 h-10 rounded-full bg-[#F8F4EE] text-[#171717] hover:bg-[#EDE4DA] transition"
              >
                ✕
              </button>

            </div>

            {/* FORM */}

            <div className="p-7 space-y-5">

              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm font-semibold text-[#27231F] mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={address.name}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        name: e.target.value,
                      })
                    }
                    placeholder="Enter your full name"
                    className="w-full border border-[#D8CFC5] rounded-xl px-4 py-3 text-[#171717] placeholder:text-[#77706A] outline-none focus:border-[#A44A3F]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#27231F] mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    value={address.phone}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        phone: e.target.value,
                      })
                    }
                    placeholder="Enter phone number"
                    className="w-full border border-[#D8CFC5] rounded-xl px-4 py-3 text-[#171717] placeholder:text-[#77706A] outline-none focus:border-[#A44A3F]"
                  />
                </div>

              </div>

              <div>

                <label className="block text-sm font-semibold text-[#27231F] mb-2">
                  House / Flat / Building
                </label>

                <input
                  type="text"
                  value={address.house}
                  onChange={(e) =>
                    setAddress({
                      ...address,
                      house: e.target.value,
                    })
                  }
                  placeholder="House number, flat number, building"
                  className="w-full border border-[#D8CFC5] rounded-xl px-4 py-3 text-[#171717] placeholder:text-[#77706A] outline-none focus:border-[#A44A3F]"
                />

              </div>

              <div>

                <label className="block text-sm font-semibold text-[#27231F] mb-2">
                  Street Address
                </label>

                <textarea
                  value={address.street}
                  onChange={(e) =>
                    setAddress({
                      ...address,
                      street: e.target.value,
                    })
                  }
                  placeholder="Street, area, landmark"
                  rows={3}
                  className="w-full border border-[#D8CFC5] rounded-xl px-4 py-3 text-[#171717] placeholder:text-[#77706A] outline-none focus:border-[#A44A3F] resize-none"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-4">

                <div>

                  <label className="block text-sm font-semibold text-[#27231F] mb-2">
                    City
                  </label>

                  <input
                    type="text"
                    value={address.city}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        city: e.target.value,
                      })
                    }
                    placeholder="City"
                    className="w-full border border-[#D8CFC5] rounded-xl px-4 py-3 text-[#171717] placeholder:text-[#77706A] outline-none focus:border-[#A44A3F]"
                  />

                </div>

                <div>

                  <label className="block text-sm font-semibold text-[#27231F] mb-2">
                    State
                  </label>

                  <input
                    type="text"
                    value={address.state}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        state: e.target.value,
                      })
                    }
                    placeholder="State"
                    className="w-full border border-[#D8CFC5] rounded-xl px-4 py-3 text-[#171717] placeholder:text-[#77706A] outline-none focus:border-[#A44A3F]"
                  />

                </div>

              </div>

              <div>

                <label className="block text-sm font-semibold text-[#27231F] mb-2">
                  PIN Code
                </label>

                <input
                  type="text"
                  value={address.pincode}
                  onChange={(e) =>
                    setAddress({
                      ...address,
                      pincode: e.target.value,
                    })
                  }
                  placeholder="6-digit PIN code"
                  className="w-full border border-[#D8CFC5] rounded-xl px-4 py-3 text-[#171717] placeholder:text-[#77706A] outline-none focus:border-[#A44A3F]"
                />

              </div>

              {/* ADDRESS TYPE */}

              <div>

                <label className="block text-sm font-semibold text-[#27231F] mb-3">
                  Address Type
                </label>

                <div className="flex flex-wrap gap-3">

                  {["Home", "Work", "Other"].map((type) => (

                    <button
                      key={type}
                      type="button"
                      onClick={() =>
                        setAddress({
                          ...address,
                          type,
                        })
                      }
                      className={`px-5 py-2.5 rounded-full border-2 font-semibold transition ${
                        address.type === type
                          ? "bg-black text-white border-black"
                          : "bg-white text-[#27231F] border-[#D8CFC5] hover:border-[#A44A3F]"
                      }`}
                    >
                      {type}
                    </button>

                  ))}

                </div>

              </div>

              {/* BUTTONS */}

              <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-4 border-t border-[#E8DED2]">

                <button
                  type="button"
                  onClick={() => setShowAddressForm(false)}
                  className="px-7 py-3 rounded-full border border-[#D8CFC5] text-[#27231F] font-semibold hover:bg-[#F8F4EE]"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={saveAddress}
                  className="px-8 py-3 rounded-full bg-[#A44A3F] hover:bg-black text-white font-semibold transition"
                >
                  {editingIndex !== null
                    ? "Update Address"
                    : "Save Address"}
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}