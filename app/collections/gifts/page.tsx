import Link from "next/link";

export default function SunglassesPage() {

  const sunglasses = [

    {
      name: "Saint Laurent Noir",
      image: "https://i.pinimg.com/736x/5d/7b/56/5d7b5649c970a3e47cc52e145bca40d5.jpg",
      price: "₹18,999",
      slug: "saint-laurent-noir",
    },

    {
      name: "Gucci Riviera",
      image: "https://i.pinimg.com/736x/76/e5/a6/76e5a6077abcaf01218a81982883637e.jpg",
      price: "₹22,999",
      slug: "gucci-riviera",
    },

    {
      name: "Prada Eclipse",
      image: "https://i.pinimg.com/736x/2f/c2/31/2fc2319cd5eeef87b53e97e3b52bbe30.jpg",
      price: "₹25,999",
      slug: "prada-eclipse",
    },

    {
      name: "Tom Ford Prestige",
      image: "https://i.pinimg.com/736x/0a/f1/a2/0af1a29891361b366e3923d0a4fbbc6e.jpg",
      price: "₹27,999",
      slug: "tom-ford-prestige",
    },

    {
      name: "Versace Royale",
      image: "https://i.pinimg.com/736x/50/01/89/50018988d1858c21829316658663e8c1.jpg",
      price: "₹24,999",
      slug: "versace-royale",
    },

    {
      name: "Cartier Lumière",
      image: "https://i.pinimg.com/736x/77/10/33/771033c59545e94b965d029173eccff0.jpg",
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