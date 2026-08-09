"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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

  /* =========================
     ADDRESS
  ========================= */

  const [showAddressForm, setShowAddressForm] = useState(false);

  const [addresses, setAddresses] = useState<Address[]>([]);

  const [selectedAddress, setSelectedAddress] = useState(0);

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [address, setAddress] = useState<Address>({
    name: "",
    phone: "",
    house: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    type: "Home",
  });

  /* =========================
     DELIVERY
  ========================= */

  const [deliveryMethod, setDeliveryMethod] =
    useState<"standard" | "express">("standard");

  /* =========================
     COUPON
  ========================= */

  const [selectedCoupon, setSelectedCoupon] = useState("");

  /* =========================
     LOAD SAVED ADDRESSES
  ========================= */

  useEffect(() => {
    const saved = localStorage.getItem("elane_addresses");

    if (saved) {
      try {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          setAddresses(parsed);
        }
      } catch {
        console.log("Could not load saved addresses");
      }
    }
  }, []);

  /* =========================
     SAVE ADDRESSES
  ========================= */

  useEffect(() => {
    localStorage.setItem(
      "elane_addresses",
      JSON.stringify(addresses)
    );
  }, [addresses]);

  /* =========================
     PRICE CALCULATION
  ========================= */

  const subtotal = cartItems.reduce(
    (sum: number, item: any) =>
      sum + Number(item.price || 0),
    0
  );

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

  const total = Math.max(
    subtotal + shipping - discount,
    0
  );

  /* =========================
     ADDRESS FORM
  ========================= */

  const openNewAddress = () => {
    setEditingIndex(null);

    setAddress({
      name: "",
      phone: "",
      house: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
      type: "Home",
    });

    setShowAddressForm(true);
  };

  const openEditAddress = (index: number) => {
    setEditingIndex(index);
    setAddress(addresses[index]);
    setShowAddressForm(true);
  };

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
      const updated = [...addresses];

      updated[editingIndex] = address;

      setAddresses(updated);
      setSelectedAddress(editingIndex);
    } else {
      const updated = [...addresses, address];

      setAddresses(updated);
      setSelectedAddress(updated.length - 1);
    }

    setShowAddressForm(false);
  };

  /* =========================
     COUPON
  ========================= */

  const applyCoupon = (code: string) => {
    if (selectedCoupon === code) {
      setSelectedCoupon("");
    } else {
      setSelectedCoupon(code);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F4EE] text-[#171313]">

      {/* =====================================================
          TOP HEADER
      ====================================================== */}

      <header className="sticky top-0 z-40 border-b border-[#E7DED3] bg-[#F8F4EE]/95 backdrop-blur-md">

        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-[10px] font-semibold tracking-[0.3em] text-[#A44A3F]">
                ÉLANE
              </p>

              <h1 className="font-serif text-2xl sm:text-3xl">
                Checkout
              </h1>
            </div>

            <div className="hidden items-center gap-2 text-xs text-gray-600 sm:flex">
              <span>Secure checkout</span>
            </div>

          </div>

          {/* COMPACT PROGRESS */}

          <div className="mt-4 flex items-center gap-2 text-xs sm:gap-4 sm:text-sm">

            <div className="flex items-center gap-1.5 font-semibold">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[10px] text-white">
                ✓
              </span>

              <span>Cart</span>
            </div>

            <div className="h-px flex-1 bg-black" />

            <div className="flex items-center gap-1.5 font-semibold">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#A44A3F] text-[10px] text-white">
                2
              </span>

              <span>Checkout</span>
            </div>

            <div className="h-px flex-1 bg-[#CFC7BE]" />

            <div className="flex items-center gap-1.5 text-gray-500">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-400 text-[10px]">
                3
              </span>

              <span>Payment</span>
            </div>

          </div>

        </div>

      </header>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-8">

        <div className="grid gap-5 lg:grid-cols-[1fr_360px] lg:items-start">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="space-y-4">

            {/* ================= ADDRESS ================= */}

            <section className="rounded-2xl border border-[#E6DDD2] bg-white p-4 shadow-sm sm:p-6">

              <div className="flex items-center justify-between gap-3">

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A44A3F]">
                    Step 1
                  </p>

                  <h2 className="mt-1 font-serif text-2xl sm:text-3xl">
                    Delivery Address
                  </h2>

                  <p className="mt-1 text-xs text-gray-600">
                    Where should we deliver your ÉLANE order?
                  </p>
                </div>

                <button
                  onClick={openNewAddress}
                  className="shrink-0 rounded-full bg-black px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#A44A3F] sm:px-5"
                >
                  + Add Address
                </button>

              </div>

              {addresses.length === 0 ? (

                <div className="mt-4 rounded-xl border border-dashed border-[#D8CEC3] bg-[#FCFAF7] px-4 py-6 text-center">

                  <p className="font-serif text-xl">
                    No saved address
                  </p>

                  <p className="mt-1 text-xs text-gray-600">
                    Add your delivery address to continue.
                  </p>

                  <button
                    onClick={openNewAddress}
                    className="mt-4 rounded-full bg-[#A44A3F] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-black"
                  >
                    Add New Address
                  </button>

                </div>

              ) : (

                <div className="mt-4 space-y-3">

                  {addresses.map((item, index) => (

                    <div
                      key={index}
                      onClick={() => setSelectedAddress(index)}
                      className={`cursor-pointer rounded-xl border p-4 transition ${
                        selectedAddress === index
                          ? "border-[#A44A3F] bg-[#FDF8F5]"
                          : "border-[#E5DDD4] bg-white hover:border-[#A44A3F]"
                      }`}
                    >

                      <div className="flex items-start justify-between gap-3">

                        <div className="min-w-0">

                          <div className="flex flex-wrap items-center gap-2">

                            <span className="rounded-full bg-black px-2.5 py-1 text-[10px] font-semibold text-white">
                              {item.type}
                            </span>

                            {selectedAddress === index && (
                              <span className="text-[10px] font-semibold text-[#A44A3F]">
                                SELECTED
                              </span>
                            )}

                          </div>

                          <h3 className="mt-2 text-sm font-bold">
                            {item.name}
                          </h3>

                          <p className="text-xs text-gray-600">
                            {item.phone}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-gray-800">
                            {item.house}, {item.street},{" "}
                            {item.city}, {item.state} -{" "}
                            {item.pincode}
                          </p>

                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openEditAddress(index);
                          }}
                          className="shrink-0 text-xs font-semibold text-[#A44A3F] hover:text-black"
                        >
                          Edit
                        </button>

                      </div>

                    </div>

                  ))}

                </div>

              )}

            </section>

            {/* ================= DELIVERY ================= */}

            <section className="rounded-2xl border border-[#E6DDD2] bg-white p-4 shadow-sm sm:p-6">

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A44A3F]">
                  Step 2
                </p>

                <h2 className="mt-1 font-serif text-2xl">
                  Delivery Method
                </h2>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">

                {/* STANDARD */}

                <button
                  onClick={() =>
                    setDeliveryMethod("standard")
                  }
                  className={`rounded-xl border p-3 text-left transition sm:p-4 ${
                    deliveryMethod === "standard"
                      ? "border-[#A44A3F] bg-[#FDF8F5]"
                      : "border-[#E5DDD4] hover:border-[#A44A3F]"
                  }`}
                >

                  <div className="flex items-center justify-between">

                    <span
                      className={`h-4 w-4 rounded-full border-2 ${
                        deliveryMethod === "standard"
                          ? "border-[#A44A3F] bg-[#A44A3F]"
                          : "border-gray-400"
                      }`}
                    />

                    <span className="text-[10px] font-bold text-green-600">
                      FREE
                    </span>

                  </div>

                  <h3 className="mt-3 text-sm font-semibold">
                    Standard
                  </h3>

                  <p className="mt-1 text-[11px] text-gray-600">
                    3–5 business days
                  </p>

                </button>

                {/* EXPRESS */}

                <button
                  onClick={() =>
                    setDeliveryMethod("express")
                  }
                  className={`rounded-xl border p-3 text-left transition sm:p-4 ${
                    deliveryMethod === "express"
                      ? "border-[#A44A3F] bg-[#FDF8F5]"
                      : "border-[#E5DDD4] hover:border-[#A44A3F]"
                  }`}
                >

                  <div className="flex items-center justify-between">

                    <span
                      className={`h-4 w-4 rounded-full border-2 ${
                        deliveryMethod === "express"
                          ? "border-[#A44A3F] bg-[#A44A3F]"
                          : "border-gray-400"
                      }`}
                    />

                    <span className="text-[10px] font-bold text-[#A44A3F]">
                      ₹99
                    </span>

                  </div>

                  <h3 className="mt-3 text-sm font-semibold">
                    Express
                  </h3>

                  <p className="mt-1 text-[11px] text-gray-600">
                    Delivery by tomorrow
                  </p>

                </button>

              </div>

            </section>

            {/* ================= COUPONS ================= */}

            <section className="rounded-2xl border border-[#E6DDD2] bg-white p-4 shadow-sm sm:p-6">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A44A3F]">
                    Step 3
                  </p>

                  <h2 className="mt-1 font-serif text-2xl">
                    Offers & Coupons
                  </h2>
                </div>

                {selectedCoupon && (
                  <button
                    onClick={() => setSelectedCoupon("")}
                    className="text-xs font-semibold text-gray-500 hover:text-[#A44A3F]"
                  >
                    Remove
                  </button>
                )}

              </div>

              <div className="mt-4 space-y-2">

                {/* ELANE10 */}

                <div
                  className={`flex items-center justify-between gap-3 rounded-xl border px-3 py-3 transition ${
                    selectedCoupon === "ELANE10"
                      ? "border-[#A44A3F] bg-[#FDF8F5]"
                      : "border-[#E5DDD4]"
                  }`}
                >

                  <div className="min-w-0">

                    <div className="flex items-center gap-2">

                      <span className="rounded bg-[#F1E5DE] px-2 py-1 text-[10px] font-bold">
                        ELANE10
                      </span>

                      <span className="text-xs font-bold text-[#A44A3F]">
                        ₹500 OFF
                      </span>

                    </div>

                    <p className="mt-1 text-[10px] text-gray-600">
                      On orders above ₹5,000
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      applyCoupon("ELANE10")
                    }
                    className={`shrink-0 rounded-full px-4 py-2 text-[10px] font-bold transition ${
                      selectedCoupon === "ELANE10"
                        ? "bg-green-600 text-white"
                        : "bg-black text-white hover:bg-[#A44A3F]"
                    }`}
                  >
                    {selectedCoupon === "ELANE10"
                      ? "Applied ✓"
                      : "Apply"}
                  </button>

                </div>

                {/* NEWUSER */}

                <div
                  className={`flex items-center justify-between gap-3 rounded-xl border px-3 py-3 transition ${
                    selectedCoupon === "NEWUSER"
                      ? "border-[#A44A3F] bg-[#FDF8F5]"
                      : "border-[#E5DDD4]"
                  }`}
                >

                  <div className="min-w-0">

                    <div className="flex items-center gap-2">

                      <span className="rounded bg-[#F1E5DE] px-2 py-1 text-[10px] font-bold">
                        NEWUSER
                      </span>

                      <span className="text-xs font-bold text-[#A44A3F]">
                        ₹300 OFF
                      </span>

                    </div>

                    <p className="mt-1 text-[10px] text-gray-600">
                      First purchase offer
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      applyCoupon("NEWUSER")
                    }
                    className={`shrink-0 rounded-full px-4 py-2 text-[10px] font-bold transition ${
                      selectedCoupon === "NEWUSER"
                        ? "bg-green-600 text-white"
                        : "bg-black text-white hover:bg-[#A44A3F]"
                    }`}
                  >
                    {selectedCoupon === "NEWUSER"
                      ? "Applied ✓"
                      : "Apply"}
                  </button>

                </div>

                {/* LUXURY15 */}

                <div
                  className={`flex items-center justify-between gap-3 rounded-xl border px-3 py-3 transition ${
                    selectedCoupon === "LUXURY15"
                      ? "border-[#A44A3F] bg-[#FDF8F5]"
                      : "border-[#E5DDD4]"
                  }`}
                >

                  <div className="min-w-0">

                    <div className="flex items-center gap-2">

                      <span className="rounded bg-[#F1E5DE] px-2 py-1 text-[10px] font-bold">
                        LUXURY15
                      </span>

                      <span className="text-xs font-bold text-[#A44A3F]">
                        ₹700 OFF
                      </span>

                    </div>

                    <p className="mt-1 text-[10px] text-gray-600">
                      Exclusive ÉLANE offer
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      applyCoupon("LUXURY15")
                    }
                    className={`shrink-0 rounded-full px-4 py-2 text-[10px] font-bold transition ${
                      selectedCoupon === "LUXURY15"
                        ? "bg-green-600 text-white"
                        : "bg-black text-white hover:bg-[#A44A3F]"
                    }`}
                  >
                    {selectedCoupon === "LUXURY15"
                      ? "Applied ✓"
                      : "Apply"}
                  </button>

                </div>

              </div>

            </section>

          </div>

          {/* =================================================
              RIGHT SIDE — ORDER SUMMARY
          ================================================= */}

          <aside className="lg:sticky lg:top-24">

            <section className="rounded-2xl border border-[#E6DDD2] bg-white p-4 shadow-sm sm:p-6">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A44A3F]">
                    Your Order
                  </p>

                  <h2 className="mt-1 font-serif text-2xl">
                    Order Summary
                  </h2>
                </div>

                <span className="text-xs text-gray-500">
                  {cartItems.length}{" "}
                  {cartItems.length === 1
                    ? "item"
                    : "items"}
                </span>

              </div>

              {/* PRODUCTS */}

              <div className="mt-5 max-h-60 space-y-3 overflow-y-auto pr-1">

                {cartItems.map(
                  (item: any, index: number) => (

                    <div
                      key={index}
                      className="flex gap-3 border-b border-[#EEE7DE] pb-3"
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-14 w-14 shrink-0 rounded-xl object-cover"
                      />

                      <div className="min-w-0 flex-1">

                        <h3 className="truncate text-xs font-semibold">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-[10px] text-gray-500">
                          Qty: 1
                        </p>

                        <p className="mt-1 text-xs font-semibold text-[#A44A3F]">
                          ₹
                          {Number(
                            item.price || 0
                          ).toLocaleString()}
                        </p>

                      </div>

                    </div>

                  )
                )}

              </div>

              {/* SELECTED ADDRESS */}

              {addresses.length > 0 &&
                addresses[selectedAddress] && (

                  <div className="mt-4 rounded-xl bg-[#F8F4EE] p-3">

                    <p className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                      Delivering to
                    </p>

                    <p className="mt-1 text-xs font-semibold">
                      {addresses[selectedAddress].name}
                    </p>

                    <p className="text-[10px] text-gray-600">
                      {addresses[selectedAddress].city},{" "}
                      {addresses[selectedAddress].state}
                    </p>

                  </div>

                )}

              {/* PRICE */}

              <div className="mt-5 space-y-2.5 text-xs">

                <div className="flex justify-between">

                  <span className="text-gray-600">
                    Subtotal
                  </span>

                  <span className="font-medium">
                    ₹{subtotal.toLocaleString()}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-600">
                    Delivery
                  </span>

                  <span
                    className={
                      shipping === 0
                        ? "font-semibold text-green-600"
                        : "font-medium"
                    }
                  >
                    {shipping === 0
                      ? "FREE"
                      : `₹${shipping}`}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-600">
                    Discount
                  </span>

                  <span className="font-semibold text-[#A44A3F]">
                    -₹{discount.toLocaleString()}
                  </span>

                </div>

                {selectedCoupon && (

                  <div className="flex justify-between rounded-lg bg-[#FDF8F5] px-2 py-1.5 text-[10px]">

                    <span>
                      Coupon:{" "}
                      <b>{selectedCoupon}</b>
                    </span>

                    <span className="font-semibold text-green-600">
                      Applied
                    </span>

                  </div>

                )}

              </div>

              <div className="my-4 border-t border-[#E6DDD2]" />

              {/* TOTAL */}

              <div className="flex items-end justify-between">

                <div>

                  <p className="text-[10px] uppercase tracking-wider text-gray-500">
                    Total
                  </p>

                  <p className="mt-1 font-serif text-3xl">
                    ₹{total.toLocaleString()}
                  </p>

                </div>

                <span className="text-[10px] text-gray-500">
                  INR
                </span>

              </div>

              {/* PAYMENT BUTTON */}

              <Link
                href="/payment"
                className="mt-5 block"
              >

                <button className="w-full rounded-full bg-black py-3.5 text-sm font-semibold text-white transition hover:bg-[#A44A3F]">
                  Continue to Payment →
                </button>

              </Link>

              <p className="mt-3 text-center text-[9px] text-gray-500">
                Secure checkout · SSL encrypted
              </p>

            </section>

          </aside>

        </div>

      </main>

      {/* =====================================================
          ADDRESS MODAL
      ====================================================== */}

      {showAddressForm && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm">

          <div className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A44A3F]">
                  ÉLANE
                </p>

                <h2 className="mt-1 font-serif text-2xl">
                  {editingIndex !== null
                    ? "Edit Address"
                    : "Add Address"}
                </h2>

              </div>

              <button
                onClick={() =>
                  setShowAddressForm(false)
                }
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F1EC] text-lg hover:bg-black hover:text-white"
              >
                ×
              </button>

            </div>

            <div className="mt-5 space-y-3">

              {/* NAME */}

              <div>

                <label className="mb-1 block text-xs font-semibold">
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
                  placeholder="Enter full name"
                  className="w-full rounded-xl border border-[#DCD3C9] bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-[#A44A3F]"
                />

              </div>

              {/* PHONE */}

              <div>

                <label className="mb-1 block text-xs font-semibold">
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
                  className="w-full rounded-xl border border-[#DCD3C9] bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-[#A44A3F]"
                />

              </div>

              {/* HOUSE */}

              <div>

                <label className="mb-1 block text-xs font-semibold">
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
                  placeholder="House / Flat number"
                  className="w-full rounded-xl border border-[#DCD3C9] bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-[#A44A3F]"
                />

              </div>

              {/* STREET */}

              <div>

                <label className="mb-1 block text-xs font-semibold">
                  Street / Area
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
                  rows={2}
                  className="w-full resize-none rounded-xl border border-[#DCD3C9] bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-[#A44A3F]"
                />

              </div>

              {/* CITY + STATE */}

              <div className="grid grid-cols-2 gap-3">

                <div>

                  <label className="mb-1 block text-xs font-semibold">
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
                    className="w-full rounded-xl border border-[#DCD3C9] bg-white px-4 py-3 text-sm text-black outline-none focus:border-[#A44A3F]"
                  />

                </div>

                <div>

                  <label className="mb-1 block text-xs font-semibold">
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
                    className="w-full rounded-xl border border-[#DCD3C9] bg-white px-4 py-3 text-sm text-black outline-none focus:border-[#A44A3F]"
                  />

                </div>

              </div>

              {/* PIN */}

              <div>

                <label className="mb-1 block text-xs font-semibold">
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
                  maxLength={6}
                  className="w-full rounded-xl border border-[#DCD3C9] bg-white px-4 py-3 text-sm text-black outline-none focus:border-[#A44A3F]"
                />

              </div>

              {/* ADDRESS TYPE */}

              <div>

                <label className="mb-2 block text-xs font-semibold">
                  Address Type
                </label>

                <div className="grid grid-cols-3 gap-2">

                  {["Home", "Work", "Other"].map(
                    (type) => (

                      <button
                        key={type}
                        type="button"
                        onClick={() =>
                          setAddress({
                            ...address,
                            type,
                          })
                        }
                        className={`rounded-xl border py-2.5 text-xs font-semibold transition ${
                          address.type === type
                            ? "border-[#A44A3F] bg-[#A44A3F] text-white"
                            : "border-[#DCD3C9] bg-white text-black hover:border-[#A44A3F]"
                        }`}
                      >
                        {type}
                      </button>

                    )
                  )}

                </div>

              </div>

            </div>

            {/* MODAL BUTTONS */}

            <div className="mt-6 grid grid-cols-2 gap-3">

              <button
                onClick={() =>
                  setShowAddressForm(false)
                }
                className="rounded-full border border-[#DCD3C9] py-3 text-sm font-semibold text-black hover:bg-[#F8F4EE]"
              >
                Cancel
              </button>

              <button
                onClick={saveAddress}
                className="rounded-full bg-black py-3 text-sm font-semibold text-white transition hover:bg-[#A44A3F]"
              >
                {editingIndex !== null
                  ? "Update Address"
                  : "Save Address"}
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}