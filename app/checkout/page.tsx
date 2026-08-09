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

export default function CheckoutPage() {
  const { cartItems } = useCart();

  /* ================= ADDRESS ================= */

  const [showAddressForm, setShowAddressForm] = useState(false);

  const [address, setAddress] =
    useState<Address>(emptyAddress);

  const [addresses, setAddresses] =
    useState<Address[]>([]);

  const [selectedAddress, setSelectedAddress] =
    useState<number | null>(null);

  const [editingIndex, setEditingIndex] =
    useState<number | null>(null);

  /* ================= DELIVERY ================= */

  const [deliveryMethod, setDeliveryMethod] =
    useState<"standard" | "express">("standard");

  /* ================= COUPON ================= */

  const [selectedCoupon, setSelectedCoupon] =
    useState("");

  /* ================= LOAD SAVED ADDRESS ================= */

  useEffect(() => {
    const savedAddresses =
      localStorage.getItem("elane_addresses");

    const savedSelected =
      localStorage.getItem("elane_selected_address");

    if (savedAddresses) {
      try {
        const parsed = JSON.parse(savedAddresses);

        if (Array.isArray(parsed)) {
          setAddresses(parsed);
        }
      } catch {
        console.log("Could not load saved addresses.");
      }
    }

    if (savedSelected !== null) {
      const index = Number(savedSelected);

      if (!Number.isNaN(index)) {
        setSelectedAddress(index);
      }
    }
  }, []);

  /* ================= SAVE ADDRESS DATA ================= */

  useEffect(() => {
    localStorage.setItem(
      "elane_addresses",
      JSON.stringify(addresses)
    );
  }, [addresses]);

  useEffect(() => {
    if (selectedAddress !== null) {
      localStorage.setItem(
        "elane_selected_address",
        String(selectedAddress)
      );
    }
  }, [selectedAddress]);

  /* ================= PRICE ================= */

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
    0,
    subtotal + shipping - discount
  );

  /* ================= OPEN NEW ADDRESS ================= */

  const openNewAddress = () => {
    setEditingIndex(null);
    setAddress({
      ...emptyAddress,
      type: "Home",
    });
    setShowAddressForm(true);
  };

  /* ================= EDIT ADDRESS ================= */

  const editAddress = (index: number) => {
    setEditingIndex(index);
    setAddress({
      ...addresses[index],
    });
    setShowAddressForm(true);
  };

  /* ================= SAVE ADDRESS ================= */

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

      updated[editingIndex] = {
        ...address,
      };

      setAddresses(updated);
      setSelectedAddress(editingIndex);
    } else {
      const updated = [
        ...addresses,
        {
          ...address,
        },
      ];

      setAddresses(updated);

      setSelectedAddress(
        updated.length - 1
      );
    }

    setAddress({
      ...emptyAddress,
    });

    setEditingIndex(null);
    setShowAddressForm(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F4EE] text-[#171717]">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <header className="bg-white/80 backdrop-blur-xl border-b border-[#E8DED2]">

        <div className="max-w-7xl mx-auto px-5 md:px-6 py-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-[10px] tracking-[0.3em] uppercase text-[#A44A3F] font-bold">
                ÉLANE
              </p>

              <h1 className="text-3xl md:text-4xl font-serif text-[#171717]">
                Checkout
              </h1>

            </div>

            <p className="hidden sm:block text-sm text-[#4A4540]">
              🔒 Secure checkout
            </p>

          </div>

          {/* PROGRESS */}

          <div className="flex items-center gap-3 md:gap-5 mt-5">

            {/* CART */}

            <div className="flex items-center gap-2">

              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
                ✓
              </div>

              <span className="text-sm font-semibold text-[#171717]">
                Cart
              </span>

            </div>

            <div className="flex-1 h-[2px] bg-black" />

            {/* CHECKOUT */}

            <div className="flex items-center gap-2">

              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#A44A3F] text-white flex items-center justify-center text-sm font-bold">
                2
              </div>

              <span className="text-sm font-semibold text-[#171717]">
                Checkout
              </span>

            </div>

            <div className="flex-1 h-[2px] bg-[#D6CEC5]" />

            {/* PAYMENT */}

            <div className="flex items-center gap-2">

              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#C8BFB6] bg-white text-[#4A4540] flex items-center justify-center text-sm">
                3
              </div>

              <span className="text-sm text-[#4A4540]">
                Payment
              </span>

            </div>

          </div>

        </div>

      </header>

      {/* ================================================= */}
      {/* MAIN */}
      {/* ================================================= */}

      <main className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 px-5 md:px-6 py-8">

        {/* ================================================= */}
        {/* LEFT */}
        {/* ================================================= */}

        <div className="lg:col-span-2 space-y-7">

          {/* ================= DELIVERY ADDRESS ================= */}

          <section className="bg-white rounded-[28px] border border-[#E8DED2] shadow-sm p-7">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

              <div>

                <p className="text-[10px] tracking-[0.25em] uppercase text-[#A44A3F] font-bold">
                  Step 1
                </p>

                <h2 className="text-3xl font-serif text-[#171717] mt-1">
                  Delivery Address
                </h2>

                <p className="text-[#4A4540] mt-1">
                  Choose where your order should be delivered.
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

              <div className="mt-7 border border-dashed border-[#CEC4B9] rounded-3xl p-9 text-center">

                <div className="text-4xl">
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
                    onClick={() =>
                      setSelectedAddress(index)
                    }
                    className={`cursor-pointer rounded-2xl border-2 p-5 transition ${
                      selectedAddress === index
                        ? "border-[#A44A3F] bg-[#FDF8F5]"
                        : "border-[#E8DED2] hover:border-[#A44A3F]"
                    }`}
                  >

                    <div className="flex justify-between gap-4">

                      <div className="flex gap-4">

                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
                            selectedAddress === index
                              ? "border-[#A44A3F]"
                              : "border-[#BEB5AB]"
                          }`}
                        >

                          {selectedAddress === index && (
                            <div className="w-3 h-3 rounded-full bg-[#A44A3F]" />
                          )}

                        </div>

                        <div>

                          <div className="flex flex-wrap gap-2 items-center">

                            <h3 className="font-semibold text-lg text-[#171717]">
                              {item.name}
                            </h3>

                            <span className="text-xs bg-[#F0E5DE] text-[#7D372F] px-3 py-1 rounded-full font-semibold">
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
                            {item.city}, {item.state} -{" "}
                            {item.pincode}
                          </p>

                        </div>

                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          editAddress(index);
                        }}
                        className="text-[#A44A3F] font-semibold"
                      >
                        Edit
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </section>

          {/* ================= DELIVERY METHOD ================= */}

          <section className="bg-white rounded-[28px] border border-[#E8DED2] shadow-sm p-7">

            <p className="text-[10px] tracking-[0.25em] uppercase text-[#A44A3F] font-bold">
              Step 2
            </p>

            <h2 className="text-3xl font-serif text-[#171717] mt-1">
              Delivery Method
            </h2>

            <p className="text-[#4A4540] mt-1">
              Select your preferred delivery option.
            </p>

            <div className="space-y-4 mt-7">

              {/* STANDARD */}

              <button
                type="button"
                onClick={() =>
                  setDeliveryMethod("standard")
                }
                className={`w-full text-left rounded-2xl border-2 p-5 transition ${
                  deliveryMethod === "standard"
                    ? "border-[#A44A3F] bg-[#FDF8F5]"
                    : "border-[#E8DED2]"
                }`}
              >

                <div className="flex justify-between items-center">

                  <div className="flex gap-4">

                    <div className="w-6 h-6 rounded-full border-2 border-[#A44A3F] flex items-center justify-center">

                      {deliveryMethod === "standard" && (
                        <div className="w-3 h-3 rounded-full bg-[#A44A3F]" />
                      )}

                    </div>

                    <div>

                      <h3 className="font-semibold text-[#171717]">
                        Standard Delivery
                      </h3>

                      <p className="text-[#4A4540] text-sm mt-1">
                        Delivered within 3–5 business days.
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
                onClick={() =>
                  setDeliveryMethod("express")
                }
                className={`w-full text-left rounded-2xl border-2 p-5 transition ${
                  deliveryMethod === "express"
                    ? "border-[#A44A3F] bg-[#FDF8F5]"
                    : "border-[#E8DED2]"
                }`}
              >

                <div className="flex justify-between items-center">

                  <div className="flex gap-4">

                    <div className="w-6 h-6 rounded-full border-2 border-[#A44A3F] flex items-center justify-center">

                      {deliveryMethod === "express" && (
                        <div className="w-3 h-3 rounded-full bg-[#A44A3F]" />
                      )}

                    </div>

                    <div>

                      <h3 className="font-semibold text-[#171717]">
                        Express Delivery
                      </h3>

                      <p className="text-[#4A4540] text-sm mt-1">
                        Delivered tomorrow before 8 PM.
                      </p>

                    </div>

                  </div>

                  <span className="text-[#A44A3F] font-bold">
                    + ₹99
                  </span>

                </div>

              </button>

            </div>

          </section>

          {/* ================= COUPONS ================= */}

          <section className="bg-white rounded-[28px] border border-[#E8DED2] shadow-sm p-7">

            <p className="text-[10px] tracking-[0.25em] uppercase text-[#A44A3F] font-bold">
              Step 3
            </p>

            <h2 className="text-3xl font-serif text-[#171717] mt-1">
              Offers & Coupons
            </h2>

            <p className="text-[#4A4540] mt-1">
              Choose one offer to save on your order.
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
                  desc: "Special offer for first purchase",
                },
                {
                  code: "LUXURY15",
                  title: "₹700 OFF",
                  desc: "Exclusive ÉLANE premium offer",
                },
              ].map((coupon) => (

                <div
                  key={coupon.code}
                  className={`rounded-2xl border-2 p-5 flex items-center justify-between gap-5 ${
                    selectedCoupon === coupon.code
                      ? "border-[#A44A3F] bg-[#FDF8F5]"
                      : "border-[#E8DED2]"
                  }`}
                >

                  <div>

                    <span className="bg-[#F0E5DE] text-[#7D372F] px-3 py-1 rounded-lg text-sm font-bold">
                      {coupon.code}
                    </span>

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
                    className={`px-5 py-2.5 rounded-full font-semibold ${
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

        {/* ================================================= */}
        {/* RIGHT SIDE */}
        {/* IMPORTANT: NO STICKY HERE */}
        {/* ================================================= */}

        <aside className="h-fit">

          <div className="bg-white rounded-[28px] border border-[#E8DED2] shadow-sm p-7">

            <p className="text-[10px] tracking-[0.25em] uppercase text-[#A44A3F] font-bold">
              Your Order
            </p>

            <div className="flex justify-between items-center">

              <h2 className="text-3xl font-serif text-[#171717]">
                Order Summary
              </h2>

              <span className="bg-[#F8F4EE] text-[#3D3833] px-3 py-1 rounded-full text-xs">
                {cartItems.length} items
              </span>

            </div>

            {/* PRODUCTS */}

            <div className="space-y-4 mt-7">

              {cartItems.map(
                (item: any, index: number) => (

                  <div
                    key={index}
                    className="flex gap-4 pb-4 border-b border-[#E8DED2]"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-2xl object-cover"
                    />

                    <div>

                      <h3 className="font-semibold text-[#171717]">
                        {item.name}
                      </h3>

                      <p className="text-[#4A4540] text-sm mt-1">
                        Qty: 1
                      </p>

                      <p className="text-[#A44A3F] font-bold mt-2">
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

            {/* PRICE */}

            <div className="space-y-4 mt-7 text-[#27231F]">

              <div className="flex justify-between">

                <span>Subtotal</span>

                <span>
                  ₹{subtotal.toLocaleString()}
                </span>

              </div>

              <div className="flex justify-between">

                <span>Shipping</span>

                <span className="text-green-700 font-semibold">
                  {shipping === 0
                    ? "FREE"
                    : `₹${shipping}`}
                </span>

              </div>

              <div className="flex justify-between">

                <span>Discount</span>

                <span className="text-[#A44A3F] font-semibold">
                  -₹{discount.toLocaleString()}
                </span>

              </div>

              <hr className="border-[#E8DED2]" />

              <div className="flex justify-between items-center">

                <span className="text-xl font-semibold">
                  Total
                </span>

                <span className="text-3xl font-bold">
                  ₹{total.toLocaleString()}
                </span>

              </div>

            </div>

            {/* SAVED ADDRESS */}

            <div className="mt-6 bg-[#F8F4EE] rounded-2xl p-4">

              {selectedAddress !== null &&
              addresses[selectedAddress] ? (

                <>

                  <p className="text-xs uppercase tracking-wider text-[#7D372F] font-bold">
                    Delivering to
                  </p>

                  <p className="font-semibold text-[#171717] mt-1">
                    {addresses[selectedAddress].name}
                  </p>

                  <p className="text-sm text-[#4A4540] mt-1">
                    {addresses[selectedAddress].city},{" "}
                    {addresses[selectedAddress].state}
                  </p>

                </>

              ) : (

                <p className="text-sm text-[#3F3A35]">
                  Please add a delivery address before payment.
                </p>

              )}

            </div>

            {/* CONTINUE */}

            <Link
              href={
                selectedAddress !== null
                  ? "/payment"
                  : "#"
              }
              onClick={(e) => {

                if (selectedAddress === null) {

                  e.preventDefault();

                  alert(
                    "Please add and select a delivery address first."
                  );

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

        </aside>

      </main>

      {/* ================================================= */}
      {/* ADDRESS MODAL */}
      {/* ================================================= */}

      {showAddressForm && (

        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[30px] shadow-2xl">

            {/* MODAL HEADER */}

            <div className="sticky top-0 bg-white border-b border-[#E8DED2] px-7 py-5 flex justify-between items-center">

              <div>

                <p className="text-[10px] tracking-[0.25em] uppercase text-[#A44A3F] font-bold">
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
                onClick={() =>
                  setShowAddressForm(false)
                }
                className="w-10 h-10 rounded-full bg-[#F8F4EE] text-[#171717]"
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
                    value={address.phone}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        phone: e.target.value,
                      })
                    }
                    placeholder="Phone number"
                    className="w-full border border-[#D8CFC5] rounded-xl px-4 py-3 text-[#171717] placeholder:text-[#77706A] outline-none focus:border-[#A44A3F]"
                  />

                </div>

              </div>

              <div>

                <label className="block text-sm font-semibold text-[#27231F] mb-2">
                  House / Flat / Building
                </label>

                <input
                  value={address.house}
                  onChange={(e) =>
                    setAddress({
                      ...address,
                      house: e.target.value,
                    })
                  }
                  placeholder="House / Flat / Building"
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
                  value={address.pincode}
                  onChange={(e) =>
                    setAddress({
                      ...address,
                      pincode: e.target.value,
                    })
                  }
                  placeholder="PIN Code"
                  className="w-full border border-[#D8CFC5] rounded-xl px-4 py-3 text-[#171717] placeholder:text-[#77706A] outline-none focus:border-[#A44A3F]"
                />

              </div>

              {/* TYPE */}

              <div>

                <label className="block text-sm font-semibold text-[#27231F] mb-3">
                  Address Type
                </label>

                <div className="flex gap-3 flex-wrap">

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
                        className={`px-5 py-2.5 rounded-full border-2 font-semibold ${
                          address.type === type
                            ? "bg-black text-white border-black"
                            : "border-[#D8CFC5] text-[#27231F]"
                        }`}
                      >
                        {type}
                      </button>

                    )
                  )}

                </div>

              </div>

              {/* ACTIONS */}

              <div className="flex justify-end gap-3 pt-4 border-t border-[#E8DED2]">

                <button
                  type="button"
                  onClick={() =>
                    setShowAddressForm(false)
                  }
                  className="px-7 py-3 rounded-full border border-[#D8CFC5] text-[#27231F] font-semibold"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={saveAddress}
                  className="px-8 py-3 rounded-full bg-[#A44A3F] hover:bg-black text-white font-semibold"
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