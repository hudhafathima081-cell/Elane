import Link from "next/link";

export default function CollectionsPage() {

  const collections = [

    {
      name: "Watches",
      image: "watch1.jpg",
      slug: "watches",
    },

    {
      name: "Rings",
      image: "/ring.jpg",
      slug: "rings",
    },

    {
      name: "Bracelets",
      image: "/bracelet.jpg",
      slug: "bracelets",
    },

    {
      name: "Bangles",
      image: "/bangle.jpg",
      slug: "bangles",
    },

    {
      name: "Sunglasses",
      image: "/sunglasses.jpg",
      slug: "sunglasses",
    },

    {
      name: "Chains",
      image: "/chain.jpg",
      slug: "chains",
    },

    {
      name: "Earrings",
      image: "/earring.jpg",
      slug: "earrings",
    },

    {
      name: "Luxury Gifts",
      image: "/gift.jpg",
      slug: "gifts",
    },

  ];

  return (

    <section className="min-h-screen bg-[#F8F4EE] px-10 py-20">

      <div className="text-center mb-20">

        <p className="tracking-[0.3em] uppercase text-[#9E2F2F] text-sm mb-6">
          Elane Collections
        </p>

        <h1 className="text-[70px] font-serif text-black">
          Explore Luxury
        </h1>

      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {collections.map((item, index) => (

          <Link
            href={`/collections/${item.slug}`}
            key={index}
          >

            <div className="group cursor-pointer">

              <div className="overflow-hidden rounded-[30px] bg-white">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              <h2 className="mt-6 text-[28px] font-serif text-center text-black">

                {item.name}

              </h2>

            </div>

          </Link>

        ))}

      </div>

    </section>

  );
}