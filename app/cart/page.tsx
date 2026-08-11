"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum: number, item: any) => sum + item.price,
    0
  );

  // ================================
  // PROCEED TO CHECKOUT
  // ================================

  const handleProceedToCheckout = () => {
    const loggedIn = localStorage.getItem("elane_logged_in");

    if (loggedIn === "true") {
      // Customer is already logged in
      window.location.href = "/checkout";
    } else {
      // Customer is not logged in
      window.location.href = "/login";
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F4EE] px-10 py-20 text-black">

      {/* ================================
          PAGE TITLE
      ================================= */}

      <h1 className="text-5xl font-serif mb-12">
        Shopping Cart
      </h1>

      {/* ================================
          EMPTY CART
      ================================= */}

      {cartItems.length === 0 ? (

        <div className="bg-white rounded-3xl p-12 text-center">

          <h2 className="text-2xl font-serif">
            Your cart is empty
          </h2>

        </div>

      ) : (

        <>
          {/* ================================
              CART ITEMS
          ================================= */}

          <div className="space-y-6">

            {cartItems.map((item: any, index: number) => (

              <div
                key={index}
                className="bg-white rounded-3xl p-6 flex items-center justify-between"
              >

                {/* PRODUCT */}

                <div className="flex items-center gap-6">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-2xl"
                  />

                  <div>

                    <h2 className="text-2xl font-serif">
                      {item.name}
                    </h2>

                    <p className="text-[#A44A3F] mt-2">
                      ₹{item.price.toLocaleString()}
                    </p>

                  </div>

                </div>

                {/* REMOVE */}

                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-black text-white px-5 py-2 rounded-full hover:bg-[#A44A3F] transition"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          {/* ================================
              TOTAL + CHECKOUT
          ================================= */}

          <div className="mt-10 text-right">

            <h2 className="text-4xl font-serif mb-6">
              Total: ₹{total.toLocaleString()}
            </h2>

            {/* IMPORTANT:
                Do NOT use <Link> here.
                We check login first.
            */}

            <button
              onClick={handleProceedToCheckout}
              className="bg-black text-white px-8 py-4 rounded-full hover:bg-[#A44A3F] transition"
            >
              Proceed to Checkout →
            </button>

          </div>

        </>

      )}

    </div>
  );
}