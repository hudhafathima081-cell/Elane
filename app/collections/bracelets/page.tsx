"use client";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
export default function ChainsPage() {

  const { addToCart } = useCart();


    const bracelets = [
  {
    name: "Aurora Chain Bracelet",
    image: "/bracelet1.jpg",
    price: "₹8,999",
  },

  {
    name: "Sapphire Royal Bracelet",
    image: "/bracelet2.jpg",
    price: "₹12,999",
  },

  {
    name: "Crystal Grace Bracelet",
    image: "/bracelet3.jpg",
    price: "₹10,999",
  },

  {
    name: "Royal Charm Bracelet",
    image: "/bracelet4.jpg",
    price: "₹14,999",
  },

  {
    name: "Celeste Stack Bracelet",
    image: "/bracelet5.jpg",
    price: "₹11,999",
  },

  {
    name: "Noir Élégance Bracelet",
    image: "/bracelet6.jpg",
    price: "₹16,999",
  },
];


  return (

    <section className="min-h-screen bg-[#F8F5F0] text-black px-10 py-20">

      <h1 className="text-6xl font-serif text-center mb-20">

        Luxury Bracelets

      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {bracelets.map((bracelets, index) => (

          <div
            key={index}
            className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:scale-[1.02] transition duration-300"
          >

            <img
              src={bracelets.image}
              alt={bracelets.name}
className="w-full h-[420px] object-cover rounded-[30px]"
            />

            <div className="p-8">

              <h2 className="text-3xl font-serif text-black mb-2">
  {bracelets.name}
</h2>

              <p className="text-[#A44A3F] text-xl mb-6">

                {bracelets.price}

              </p>

              <Link href="/cart">

<button
  onClick={() => {
    addToCart({
      name: bracelets.name,
      price: Number(bracelets.price.replace(/[₹,]/g, "")),
      image: bracelets.image,
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