import Link from "next/link";

export default function WatchesPage() {

  const watches = [

    {
      name: "Nordgreen Unika",
      image: "/watch1.jpg",
      price: "₹24,999",
      slug: "watches",
    },

    {
      name: "Daniel Wellington",
      image: "/watch2.jpg",
      price: "₹18,999",
      slug: "silver-royal",
    },

    {
      name: "Swarovski Crysralline Glam Watch",
      image: "/watch3.jpg",
      price: "₹32,999",
      slug: "gold-watch",
    },

    {
      name: "Diamond Classic",
      image: "/watch4.jpg",
      price: "₹27,999",
      slug: "diamond-classic",
    },

    {
      name: "Midnight Elite",
      image: "/watch5.jpg",
      price: "₹21,999",
      slug: "midnight-elite",
    },

    {
      name: "Royal Titanium",
      image: "/watch.jpg",
      price: "₹29,999",
      slug: "royal-titanium",
    },

  ];

  return (

    <section className="min-h-screen bg-[#F8F5F0] text-black px-10 py-20">

      <h1 className="text-6xl font-serif text-center mb-20">

        Luxury Watches

      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {watches.map((watch, index) => (

          <div
            key={index}
            className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:scale-[1.02] transition duration-300"
          >

            <img
              src={watch.image}
              alt={watch.name}
              className="w-full h-[420px] object-cover"
            />

            <div className="p-8">

              <h2 className="text-3xl font-serif mb-4">

                {watch.name}

              </h2>

              <p className="text-[#A44A3F] text-xl mb-6">

                {watch.price}

              </p>

              <Link href={`/product/${watch.slug}`}>

                <button className="w-full bg-black text-white py-4 rounded-full tracking-[0.2em] uppercase text-sm">

                  View Product

                </button>

              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}