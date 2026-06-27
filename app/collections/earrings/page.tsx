"use client";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
export default function SunglassesPage() {

  const { addToCart } = useCart();

  const earrings = [

    {
      name: "Aurora Blossom Pearl Earrings",
      image: "https://i.pinimg.com/736x/0a/2b/f7/0a2bf71ddb4ea43834892ca416e2dfeb.jpg",
      price: "₹18,999",
      slug: "saint-laurent-noir",
    },

    {
      name: "Celeste Pearl Cascade Earrings",
      image: "https://i.pinimg.com/1200x/99/17/1b/99171b030ac6859f3d0bf6d5664eb498.jpg",
      price: "₹22,999",
      slug: "gucci-riviera",
    },

    {
      name: "Crystal Wreath Stud Earrings",
      image: "https://i.pinimg.com/736x/cd/d0/67/cdd0673bce2e2156f77021dd72e68972.jpg",
      price: "₹25,999",
      slug: "prada-eclipse",
    },

    {
      name: "Celeste Pearl Ear Cuff",
      image: "https://amalfa.in/cdn/shop/files/pearl-crystal-ear-cuff-earrings_for_women.jpg?v=1776405010&width=800",
      price: "₹27,999",
      slug: "tom-ford-prestige",
    },

    {
      name: "Diamond Ear Stack",
      image: "https://i.pinimg.com/736x/ed/f2/cf/edf2cf564a3ac6d6339744384095b214.jpg",
      price: "₹24,999",
      slug: "versace-royale",
    },

    {
      name: "Aurelia Twist Earrings",
      image: "https://i.pinimg.com/736x/fd/79/59/fd7959e7080bd4b834a0814119f8feba.jpg",
      price: "₹31,999",
      slug: "cartier-lumiere",
    },

  ];

  return (

    <section className="min-h-screen bg-[#F8F5F0] text-black px-10 py-20">

      <h1 className="text-6xl font-serif text-center mb-20">
        Luxury Earrings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {earrings.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:scale-[1.02] transition duration-300"
          >

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[420px] object-cover rounded-[30px]"
            />

            <div className="p-8">

              <h2 className="text-3xl font-serif text-black mb-2">
                {item.name}
              </h2>

              <p className="text-[#A44A3F] text-xl mb-6">
                {item.price}
              </p>

              <Link href="/cart">

                <button
  onClick={() => {
    addToCart({
      name: item.name,
      price: Number(item.price.replace(/[₹,]/g, "")),
      image: item.image,
    });
  }}
  className="w-full bg-black text-white py-4 rounded-full tracking-[0.25em] uppercase text-sm hover:bg-[#9E2F2F] transition   "
>
  Add To Cart
</button>

              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}