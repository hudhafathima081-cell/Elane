"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {

  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum: number, item: any) => sum + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-[#F8F4EE] px-10 py-20">

      <h1 className="text-5xl font-serif mb-12">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (

        <div className="bg-white rounded-3xl p-12 text-center">
          <h2 className="text-2xl font-serif">
            Your cart is empty
          </h2>
        </div>

      ) : (

        <>
          <div className="space-y-6">

            {cartItems.map((item: any, index: number) => (

              <div
                key={index}
                className="bg-white rounded-3xl p-6 flex items-center justify-between"
              >

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

                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-black text-white px-5 py-2 rounded-full"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          <div className="mt-10 text-right">

            <h2 className="text-4xl font-serif">
              Total: ₹{total.toLocaleString()}
            </h2>

          </div>
        </>
      )}

    </div>
  );
}