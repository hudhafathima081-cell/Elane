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
     ADDRESS STATE
  ========================= */

  const [addresses, setAddresses] = useState<Address[]>([]);

  const [selectedAddress, setSelectedAddress] = useState(0);

  const [showAddressModal, setShowAddressModal] =
    useState(false);

  const [showAddressForm, setShowAddressForm] =
    useState(false);

  const [editingIndex, setEditingIndex] =
    useState<number | null>(null);

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
     COUPON STATE
  ========================= */

  const [selectedCoupon, setSelectedCoupon] =
    useState("");

  /* =========================
     LOAD SAVED ADDRESSES
  ========================= */

  useEffect(() => {
    const savedAddresses =
      localStorage.getItem("elane_addresses");

    if (savedAddresses) {
      try {
        const parsed = JSON.parse(savedAddresses);

        if (Array.isArray(parsed)) {
          setAddresses(parsed);
        }
      } catch {
        console.log("Unable to load addresses");
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

  const shipping = 0;

  const discount =
    selectedCoupon === "ELANE10"
      ? 500
      : selectedCoupon === "NEWUSER"
      ? 300
      : 0;

  const total = Math.max(
    subtotal + shipping - discount,
    0
  );

  /* =========================
     NEW ADDRESS
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

    setShowAddressModal(false);
    setShowAddressForm(true);
  };

  /* =========================
     EDIT ADDRESS
  ========================= */

  const openEditAddress = (index: number) => {
    setEditingIndex(index);

    setAddress(addresses[index]);

    setShowAddressModal(false);
    setShowAddressForm(true);
  };

  /* =========================
     SAVE ADDRESS
  ========================= */

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

      updatedAddresses[editingIndex] = address;

      setAddresses(updatedAddresses);

      setSelectedAddress(editingIndex);
    } else {
      const updatedAddresses = [
        ...addresses,
        address,
      ];

      setAddresses(updatedAddresses);

      setSelectedAddress(
        updatedAddresses.length - 1
      );
    }

    setShowAddressForm(false);
  };

  /* =========================
     APPLY COUPON
  ========================= */

  const applyCoupon = (code: string) => {
    if (selectedCoupon === code) {
      setSelectedCoupon("");
    } else {
      setSelectedCoupon(code);
    }
  };

  /* =========================
     SELECT ADDRESS
  ========================= */

  const selectAddress = (index: number) => {
    setSelectedAddress(index);
    setShowAddressModal(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F4EE] text-[#171313]">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="sticky top-0 z-40 border-b border-[#E5DDD3] bg-[#F8F4EE]/90 backdrop-blur-md">

        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-[10px] font-semibold tracking-[0.3em] text-[#A44A3F]">
                ÉLANE
              </p>

              <h1 className="font-serif text-2xl sm:text-3xl">
                Checkout
              </h1>

              <p className="mt-1 text-xs text-gray-600">
                Complete your order securely.
              </p>

            </div>

            <div className="hidden text-xs text-gray-600 sm:block">
              🔒 Secure checkout
            </div>

          </div>

          {/* PROGRESS */}

          <div className="mt-4 flex items-center gap-2 text-xs sm:gap-4 sm:text-sm">

            {/* CART */}

            <div className="flex items-center gap-2 font-semibold">

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs text-white">
                ✓
              </span>

              <span>Cart</span>

            </div>

            <div className="h-px flex-1 bg-black" />

            {/* CHECKOUT */}

            <div className="flex items-center gap-2 font-semibold">

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#A44A3F] text-xs text-white">
                2
              </span>

              <span>Checkout</span>

            </div>

            <div className="h-px flex-1 bg-[#CFC7BE]" />

            {/* PAYMENT */}

            <div className="flex items-center gap-2 text-gray-500">

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-400 text-xs">
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

      <main className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-7">

        <div className="grid gap-5 lg:grid-cols-[1fr_360px]">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="space-y-4">

            {/* =================================================
                DELIVERY ADDRESS
            ================================================= */}

            <section className="rounded-2xl border border-[#E5DDD3] bg-white p-4 shadow-sm sm:p-6">

              {/* HEADER */}

              <div className="flex items-center justify-between gap-3">

                <div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A44A3F]">
                    Step 1
                  </p>

                  <h2 className="mt-1 font-serif text-2xl sm:text-3xl">
                    Delivery Address
                  </h2>

                  <p className="mt-1 text-xs text-gray-600 sm:text-sm">
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

              {/* =================================================
                  NO ADDRESS
              ================================================== */}

              {addresses.length === 0 ? (

                <div className="mt-4 rounded-xl border border-dashed border-[#D7CEC4] bg-[#FCFAF7] px-4 py-7 text-center">

                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#F1E7E0] text-lg">
                    📍
                  </div>

                  <h3 className="mt-3 font-serif text-xl">
                    No saved address
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">
                    Add your delivery address to continue.
                  </p>

                  <button
                    onClick={openNewAddress}
                    className="mt-4 rounded-full bg-[#A44A3F] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
                  >
                    Add New Address
                  </button>

                </div>

              ) : (

                /* =================================================
                   ONLY SELECTED ADDRESS SHOWN
                ================================================== */

                <div className="mt-4 rounded-xl border border-[#DCD2C7] bg-[#FCFAF7] p-4">

                  <div className="flex items-start justify-between gap-4">

                    <div className="min-w-0">

                      <div className="flex items-center gap-2">

                        <span className="rounded-full bg-black px-3 py-1 text-[10px] font-semibold text-white">
                          {addresses[selectedAddress]?.type ||
                            "Home"}
                        </span>

                        <span className="text-[10px] font-semibold text-[#A44A3F]">
                          SELECTED
                        </span>

                      </div>

                      <h3 className="mt-2 text-sm font-bold sm:text-base">
                        {addresses[selectedAddress]?.name}
                      </h3>

                      <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                        {addresses[selectedAddress]?.phone}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-700 sm:text-sm">
                        {addresses[selectedAddress]?.house},{" "}
                        {addresses[selectedAddress]?.street},{" "}
                        {addresses[selectedAddress]?.city},{" "}
                        {addresses[selectedAddress]?.state} -{" "}
                        {addresses[selectedAddress]?.pincode}
                      </p>

                    </div>

                    {/* CHANGE */}

                    <button
                      onClick={() =>
                        setShowAddressModal(true)
                      }
                      className="shrink-0 text-sm font-semibold text-[#A44A3F] hover:text-black"
                    >
                      Change
                    </button>

                  </div>

                </div>

              )}

            </section>

            {/* =================================================
                OFFERS
            ================================================== */}

            <section className="rounded-2xl border border-[#E5DDD3] bg-white p-4 shadow-sm sm:p-6">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A44A3F]">
                    Step 2
                  </p>

                  <h2 className="mt-1 font-serif text-2xl sm:text-3xl">
                    Offers & Coupons
                  </h2>

                  <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                    Choose one offer to save on your order.
                  </p>

                </div>

                {selectedCoupon && (

                  <button
                    onClick={() =>
                      setSelectedCoupon("")
                    }
                    className="text-xs font-semibold text-gray-500 hover:text-[#A44A3F]"
                  >
                    Remove
                  </button>

                )}

              </div>

              <div className="mt-4 space-y-3">

                {/* =================================================
                    COUPON 1
                ================================================== */}

                <div
                  className={`flex items-center justify-between gap-4 rounded-xl border p-4 transition ${
                    selectedCoupon === "ELANE10"
                      ? "border-[#A44A3F] bg-[#FDF8F5]"
                      : "border-[#E5DDD3]"
                  }`}
                >

                  <div>

                    <div className="flex flex-wrap items-center gap-2">

                      <span className="rounded bg-[#F1E5DE] px-2.5 py-1 text-xs font-bold">
                        ELANE10
                      </span>

                      <span className="text-sm font-bold text-[#A44A3F]">
                        ₹500 OFF
                      </span>

                    </div>

                    <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                      Save ₹500 on orders above ₹5,000
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      applyCoupon("ELANE10")
                    }
                    className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold transition ${
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

                {/* =================================================
                    COUPON 2
                ================================================== */}

                <div
                  className={`flex items-center justify-between gap-4 rounded-xl border p-4 transition ${
                    selectedCoupon === "NEWUSER"
                      ? "border-[#A44A3F] bg-[#FDF8F5]"
                      : "border-[#E5DDD3]"
                  }`}
                >

                  <div>

                    <div className="flex flex-wrap items-center gap-2">

                      <span className="rounded bg-[#F1E5DE] px-2.5 py-1 text-xs font-bold">
                        NEWUSER
                      </span>

                      <span className="text-sm font-bold text-[#A44A3F]">
                        ₹300 OFF
                      </span>

                    </div>

                    <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                      Special offer for your first purchase
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      applyCoupon("NEWUSER")
                    }
                    className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold transition ${
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

              </div>

            </section>

          </div>

          {/* =================================================
              RIGHT SIDE — ORDER SUMMARY
          ================================================== */}

          <aside className="lg:sticky lg:top-24 lg:self-start">

            <section className="rounded-2xl border border-[#E5DDD3] bg-white p-4 shadow-sm sm:p-6">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A44A3F]">
                    Your Order
                  </p>

                  <h2 className="mt-1 font-serif text-2xl sm:text-3xl">
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

              <div className="mt-5 max-h-56 space-y-3 overflow-y-auto pr-1">

                {cartItems.map(
                  (item: any, index: number) => (

                    <div
                      key={index}
                      className="flex gap-3 border-b border-[#EEE7DE] pb-3"
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 shrink-0 rounded-xl object-cover"
                      />

                      <div className="min-w-0 flex-1">

                        <h3 className="truncate text-sm font-semibold">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-xs text-gray-500">
                          Qty: 1
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#A44A3F]">
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

              {/* DELIVERY ADDRESS */}

              {addresses.length > 0 &&
                addresses[selectedAddress] && (

                  <div className="mt-4 rounded-xl bg-[#F8F4EE] p-3">

                    <div className="flex items-center justify-between">

                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                        Delivering to
                      </p>

                      <button
                        onClick={() =>
                          setShowAddressModal(true)
                        }
                        className="text-[10px] font-semibold text-[#A44A3F]"
                      >
                        Change
                      </button>

                    </div>

                    <p className="mt-1 text-sm font-semibold">
                      {addresses[selectedAddress].name}
                    </p>

                    <p className="text-xs text-gray-600">
                      {addresses[selectedAddress].city},{" "}
                      {addresses[selectedAddress].state}
                    </p>

                  </div>

                )}

              {/* PRICE */}

              <div className="mt-5 space-y-3 text-sm">

                <div className="flex justify-between">

                  <span className="text-gray-600">
                    Subtotal
                  </span>

                  <span>
                    ₹{subtotal.toLocaleString()}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-600">
                    Delivery
                  </span>

                  <span className="font-semibold text-green-600">
                    FREE
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

                  <div className="flex items-center justify-between rounded-lg bg-[#FDF8F5] px-3 py-2 text-xs">

                    <span>
                      Coupon{" "}
                      <b>{selectedCoupon}</b>
                    </span>

                    <span className="font-semibold text-green-600">
                      Applied
                    </span>

                  </div>

                )}

              </div>

              <div className="my-5 border-t border-[#E5DDD3]" />

              {/* TOTAL */}

              <div className="flex items-end justify-between">

                <div>

                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Total
                  </p>

                  <p className="mt-1 font-serif text-3xl">
                    ₹{total.toLocaleString()}
                  </p>

                </div>

                <span className="text-xs text-gray-500">
                  INR
                </span>

              </div>

              {/* CONTINUE */}

              <Link
                href="/payment"
                className="mt-5 block"
              >

                <button className="w-full rounded-full bg-black py-3.5 text-sm font-semibold text-white transition hover:bg-[#A44A3F]">
                  Continue to Payment →
                </button>

              </Link>

              <p className="mt-3 text-center text-xs text-gray-500">
                🔒 Secure payment protected with SSL encryption.
              </p>

            </section>

          </aside>

        </div>

      </main>

      {/* =====================================================
          CHANGE ADDRESS MODAL
      ====================================================== */}

      {showAddressModal && (

        <div className="fixed inset-0 z-[90] flex items-end justify-center bg-black/55 sm:items-center sm:p-4">

          <div className="max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">

            {/* MODAL HEADER */}

            <div className="sticky top-0 z-10 border-b border-[#E5DDD3] bg-white px-5 py-4">

              <div className="flex items-center justify-between">

                <h2 className="font-serif text-2xl">
                  Change Delivery Address
                </h2>

                <button
                  onClick={() =>
                    setShowAddressModal(false)
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F1EC] text-xl hover:bg-black hover:text-white"
                >
                  ×
                </button>

              </div>

              <button
                onClick={openNewAddress}
                className="mt-4 w-full border-b border-[#E5DDD3] pb-3 text-left text-sm font-semibold text-[#A44A3F]"
              >
                + Add New Address
              </button>

            </div>

            {/* ADDRESSES */}

            <div className="p-4">

              {addresses.length === 0 ? (

                <div className="py-8 text-center">

                  <p className="text-gray-600">
                    No saved addresses.
                  </p>

                  <button
                    onClick={openNewAddress}
                    className="mt-4 rounded-full bg-black px-5 py-2.5 text-sm text-white"
                  >
                    Add Address
                  </button>

                </div>

              ) : (

                <div className="space-y-3">

                  {addresses.map(
                    (item, index) => (

                      <div
                        key={index}
                        className={`rounded-2xl border p-4 ${
                          selectedAddress === index
                            ? "border-[#A44A3F] bg-[#FDF8F5]"
                            : "border-[#E5DDD3]"
                        }`}
                      >

                        <div className="flex items-start gap-3">

                          {/* RADIO */}

                          <button
                            onClick={() =>
                              selectAddress(index)
                            }
                            className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                              selectedAddress === index
                                ? "border-[#A44A3F]"
                                : "border-gray-400"
                            }`}
                          >

                            {selectedAddress ===
                              index && (
                              <span className="h-2.5 w-2.5 rounded-full bg-[#A44A3F]" />
                            )}

                          </button>

                          <div className="min-w-0 flex-1">

                            <div className="flex items-center justify-between gap-3">

                              <h3 className="text-sm font-bold">
                                {item.name}
                              </h3>

                              <span className="rounded-full bg-black px-2.5 py-1 text-[9px] font-semibold text-white">
                                {item.type}
                              </span>

                            </div>

                            <p className="mt-1 text-xs text-gray-600">
                              {item.street}
                            </p>

                            <p className="text-xs text-gray-600">
                              {item.city}, {item.state},{" "}
                              {item.pincode}
                            </p>

                            <p className="mt-1 text-xs text-gray-600">
                              +91 {item.phone}
                            </p>

                            <div className="mt-3 flex items-center gap-4">

                              <button
                                onClick={() =>
                                  openEditAddress(index)
                                }
                                className="text-xs font-semibold text-[#A44A3F]"
                              >
                                EDIT
                              </button>

                              {selectedAddress ===
                                index && (

                                <button
                                  onClick={() =>
                                    selectAddress(index)
                                  }
                                  className="rounded-full bg-[#A44A3F] px-5 py-2 text-xs font-semibold text-white"
                                >
                                  Deliver to this Address
                                </button>

                              )}

                            </div>

                          </div>

                        </div>

                      </div>

                    )
                  )}

                </div>

              )}

            </div>

          </div>

        </div>

      )}

      {/* =====================================================
          ADD / EDIT ADDRESS FORM
      ====================================================== */}

      {showAddressForm && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-3 backdrop-blur-sm">

          <div className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl sm:p-7">

            {/* HEADER */}

            <div className="flex items-center justify-between">

              <div>

                <p className="text-[10px] font-semibold tracking-[0.25em] text-[#A44A3F]">
                  ÉLANE
                </p>

                <h2 className="mt-1 font-serif text-2xl">
                  {editingIndex !== null
                    ? "Edit Address"
                    : "Add New Address"}
                </h2>

              </div>

              <button
                onClick={() =>
                  setShowAddressForm(false)
                }
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F1EC] text-xl hover:bg-black hover:text-white"
              >
                ×
              </button>

            </div>

            {/* FORM */}

            <div className="mt-5 space-y-4">

              {/* NAME */}

              <div>

                <label className="mb-1 block text-sm font-semibold">
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
                  placeholder="Full name"
                  className="w-full rounded-xl border border-[#D8CFC5] px-4 py-3 text-sm text-black outline-none focus:border-[#A44A3F]"
                />

              </div>

              {/* PHONE */}

              <div>

                <label className="mb-1 block text-sm font-semibold">
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
                  placeholder="Phone number"
                  className="w-full rounded-xl border border-[#D8CFC5] px-4 py-3 text-sm text-black outline-none focus:border-[#A44A3F]"
                />

              </div>

              {/* HOUSE */}

              <div>

                <label className="mb-1 block text-sm font-semibold">
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
                  className="w-full rounded-xl border border-[#D8CFC5] px-4 py-3 text-sm text-black outline-none focus:border-[#A44A3F]"
                />

              </div>

              {/* STREET */}

              <div>

                <label className="mb-1 block text-sm font-semibold">
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
                  className="w-full resize-none rounded-xl border border-[#D8CFC5] px-4 py-3 text-sm text-black outline-none focus:border-[#A44A3F]"
                />

              </div>

              {/* CITY STATE */}

              <div className="grid grid-cols-2 gap-3">

                <div>

                  <label className="mb-1 block text-sm font-semibold">
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
                    className="w-full rounded-xl border border-[#D8CFC5] px-4 py-3 text-sm text-black outline-none focus:border-[#A44A3F]"
                  />

                </div>

                <div>

                  <label className="mb-1 block text-sm font-semibold">
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
                    className="w-full rounded-xl border border-[#D8CFC5] px-4 py-3 text-sm text-black outline-none focus:border-[#A44A3F]"
                  />

                </div>

              </div>

              {/* PIN */}

              <div>

                <label className="mb-1 block text-sm font-semibold">
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
                  className="w-full rounded-xl border border-[#D8CFC5] px-4 py-3 text-sm text-black outline-none focus:border-[#A44A3F]"
                />

              </div>

              {/* TYPE */}

              <div>

                <label className="mb-2 block text-sm font-semibold">
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
                        className={`rounded-xl border py-3 text-sm font-semibold transition ${
                          address.type === type
                            ? "border-[#A44A3F] bg-[#A44A3F] text-white"
                            : "border-[#D8CFC5] text-black hover:border-[#A44A3F]"
                        }`}
                      >
                        {type}
                      </button>

                    )
                  )}

                </div>

              </div>

            </div>

            {/* BUTTONS */}

            <div className="mt-6 grid grid-cols-2 gap-3">

              <button
                onClick={() =>
                  setShowAddressForm(false)
                }
                className="rounded-full border border-[#D8CFC5] py-3 text-sm font-semibold text-black hover:bg-[#F8F4EE]"
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