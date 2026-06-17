import Link from "next/link";

export default function SunglassesPage() {

  const sunglasses = [

    {
      name: "Saint Laurent Noir",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
      price: "₹18,999",
      slug: "saint-laurent-noir",
    },

    {
      name: "Gucci Riviera",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      price: "₹22,999",
      slug: "gucci-riviera",
    },

    {
      name: "Prada Eclipse",
      image: "https://images.unsplash.com/photo-1577803645773-f96470509666",
      price: "₹25,999",
      slug: "prada-eclipse",
    },

    {
      name: "Tom Ford Prestige",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
      price: "₹27,999",
      slug: "tom-ford-prestige",
    },

    {
      name: "Versace Royale",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
      price: "₹24,999",
      slug: "versace-royale",
    },

    {
      name: "Cartier Lumière",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
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

                <button className="w-full bg-black text-white py-4 rounded-full tracking-[0.25em] uppercase text-sm hover:bg-[#9E2F2F] transition">
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