import Link from "next/link";

export default function SunglassesPage() {

  const sunglasses = [

    {
      name: "Saint Laurent Noir",
      image: "https://in.pinterest.com/pin/5770305766570884/",
      price: "₹18,999",
      slug: "saint-laurent-noir",
    },

    {
      name: "Gucci Riviera",
      image: "https://i.pinimg.com/736x/c6/d4/ad/c6d4adff9c60bbfa4a07c36b52d97e3f.jpg",
      price: "₹22,999",
      slug: "gucci-riviera",
    },

    {
      name: "Prada Eclipse",
      image: "https://in.pinterest.com/pin/1059964462299887008/",
      price: "₹25,999",
      slug: "prada-eclipse",
    },

    {
      name: "Tom Ford Prestige",
      image: "https://in.pinterest.com/pin/945755990516437366/",
      price: "₹27,999",
      slug: "tom-ford-prestige",
    },

    {
      name: "Versace Royale",
      image: "https://in.pinterest.com/pin/327425835418972264/",
      price: "₹24,999",
      slug: "versace-royale",
    },

    {
      name: "Cartier Lumière",
      image: "https://in.pinterest.com/pin/396105729739922993/",
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