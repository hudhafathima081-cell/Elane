export default function CollectionsPage() {

  const collections = [

    {
      name: "Luxury Watches",
      image: "/watch.jpg",
      price: "₹12,999",
    },

    {
      name: "Diamond Rings",
      image: "/ring.jpg",
      price: "₹8,499",
    },

    {
      name: "Elegant Bracelets",
      image: "/bracelet.jpg",
      price: "₹5,999",
    },

    {
      name: "Premium Bangles",
      image: "/bangle.jpg",
      price: "₹7,999",
    },

    {
      name: "Luxury Sunglasses",
      image: "/sunglasses.jpg",
      price: "₹6,499",
    },

    {
      name: "Gold Chains",
      image: "/chain.jpg",
      price: "₹9,999",
    },

    {
      name: "Elegant Earrings",
      image: "/earring.jpg",
      price: "₹4,999",
    },

    {
      name: "Luxury Gifts",
      image: "/gift.jpg",
      price: "₹14,999",
    },

  ];

  return (

    <section className="min-h-screen bg-[#F8F5F0] px-10 py-20">

      <h1 className="text-6xl font-serif text-center mb-20">

        Explore Collections

      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {collections.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:scale-[1.02] transition duration-300"
          >

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[350px] object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-serif mb-3">

                {item.name}

              </h2>

              <p className="text-[#A44A3F] text-lg mb-6">

                {item.price}

              </p>

              <button className="w-full bg-black text-white py-4 rounded-full tracking-[0.2em] uppercase text-sm hover:bg-[#A44A3F] transition">

                View Collection

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}