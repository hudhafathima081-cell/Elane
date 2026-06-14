export default function CollectionsPage() {

  const collections = [

    {
      name: "Watches",
      image: "/watch.jpg",
    },

    {
      name: "Rings",
      image: "/ring.jpg",
    },

    {
      name: "Bracelets",
      image: "/bracelet.jpg",
    },

    {
      name: "Bangles",
      image: "/bangle.jpg",
    },

    {
      name: "Sunglasses",
      image: "/sunglasses.jpg",
    },

    {
      name: "Chains",
      image: "/chain.jpg",
    },

    {
      name: "Earrings",
      image: "/earring.jpg",
    },

    {
      name: "Luxury Gifts",
      image: "/gift.jpg",
    },

  ];

  return (

    <section className="min-h-screen bg-[#F8F4EE] px-10 py-20">

      {/* HEADING */}
      <div className="text-center mb-20">

        <p className="tracking-[0.3em] uppercase text-[#9E2F2F] text-sm mb-6">
          Elane Collections
        </p>

        <h1 className="text-[70px] font-serif text-black">
          Explore Luxury
        </h1>

      </div>


      {/* COLLECTION GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {collections.map((item, index) => (

          <div
            key={index}
            className="group cursor-pointer"
          >

            {/* IMAGE */}
            <div className="overflow-hidden rounded-[30px] bg-white">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
              />

            </div>

            {/* TITLE */}
            <h2 className="mt-6 text-[28px] font-serif text-center text-black">

              {item.name}

            </h2>

          </div>

        ))}

      </div>

    </section>

  );
}