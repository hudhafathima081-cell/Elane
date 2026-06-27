"use client";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
export default function SunglassesPage() {

  const { addToCart } = useCart();
  const sunglasses = [

    {
      name: "Saint Laurent Noir",
      image: "https://images.unsplash.com/photo-1719667456369-528013092d88?q=80&w=399&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₹18,999",
      slug: "saint-laurent-noir",
    },

    {
      name: "Gucci Riviera",
      image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₹22,999",
      slug: "gucci-riviera",
    },

    {
      name: "Prada Eclipse",
      image: "https://images.unsplash.com/photo-1626122718218-f83d293f8765?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₹25,999",
      slug: "prada-eclipse",
    },

    {
      name: "Tom Ford Prestige",
      image: "https://plus.unsplash.com/premium_photo-1755752692284-b2d8164901f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ3fHx8ZW58MHx8fHx8",
      price: "₹27,999",
      slug: "tom-ford-prestige",
    },

    {
      name: "Versace Royale",
      image: "https://images.unsplash.com/photo-1623071279541-3cdd462f4363?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₹24,999",
      slug: "versace-royale",
    },

    {
      name: "Cartier Lumière",
      image: "https://images.unsplash.com/photo-1519536884455-1a7a58a25322?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      price: "₹31,999",
      slug: "cartier-lumiere",
    },

  ];

  return (

    <section className="min-h-screen bg-[#F8F5F0] text-black px-10 py-20">

      <h1 className="text-6xl font-serif text-center mb-20">
        Luxury Sunglasses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {sunglasses.map((item, index) => (

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
  className="w-full bg-black text-white py-4 rounded-full tracking-[0.25em] uppercase text-sm hover:bg-[#9E2F2F] transition "
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