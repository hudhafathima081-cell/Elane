"use client";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
export default function ChainsPage() {

  const { addToCart } = useCart();

  const chains = [

    {
      name: "Celeste Pearl Medallion",
      image: "https://i.pinimg.com/1200x/59/38/4a/59384afca7cc8c24382634032d6dcfcc.jpg",
      price: "₹18,999",
      slug: "saint-laurent-noir",
    },

    {
      name: "Monaco Link Pendant",
      image: "https://i.pinimg.com/736x/c6/d4/ad/c6d4adff9c60bbfa4a07c36b52d97e3f.jpg",
      price: "₹14,999",
      slug: "gucci-riviera",
    },

    {
      name: "Aurelia Gold Chain",
      image: "https://i.pinimg.com/1200x/80/33/80/803380d085c2676d37919623f660422c.jpg",
      price: "₹16,999",
      slug: "prada-eclipse",
    },

    {
      name: "Aurora Pearl Pendan",
      image: "https://i.pinimg.com/736x/38/43/90/384390664d7fc3a488e226c6665ab48d.jpg",
      price: "₹18,999",
      slug: "tom-ford-prestige",
    },

    {
      name: "Monaco Layered Gold",
      image: "https://i.pinimg.com/736x/9d/2e/a1/9d2ea17cc27a835962523e5cff78c547.jpg",
      price: "₹24,999",
      slug: "versace-royale",
    },

    {
      name: "Crystal Royale Pendant",
      image: "https://i.pinimg.com/736x/91/0a/f8/910af8c14336ec7be4964064abba98ae.jpg",
      price: "₹14,999",
      slug: "Crystal",
    },

  ];

  return (

    <section className="min-h-screen bg-[#F8F5F0] text-black px-10 py-20">

      <h1 className="text-6xl font-serif text-center mb-20">
        Luxury Chains
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {chains.map((item, index) => (

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