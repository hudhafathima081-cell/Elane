"use client";

import { createContext, useContext, useState } from "react";
import { useEffect } from "react";



const CartContext = createContext<any>(null);

export function CartProvider({ children }: any) {
  const [cartItems, setCartItems] = useState<any[]>([]);

useEffect(() => {
  const savedCart = localStorage.getItem("cart");

  if (savedCart) {
    setCartItems(JSON.parse(savedCart));
  }
}, []);

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}, [cartItems]);

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}, [cartItems]);
  const addToCart = (product: any) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (index: number) => {
    setCartItems((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);