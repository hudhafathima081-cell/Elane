import Link from "next/link"
export default function WatchesPage() {

  const ring = [

    {
  name: "Diamond Halo Ring",
  image: "/ring1.jpg",
  price: "₹12,999",
},
{
  name: "Rose Gold Ring",
  image: "/ring2.jpg",
  price: "₹15,999",
},
{
  name: "Crystal Ring",
  image: "/ring3.jpg",
  price: "₹9,999",
},
{
  name: "Luxury Diamond Ring",
  image: "/ring4.jpg",
  price: "₹19,999",
},
{
  name: "Pearl Ring",
  image: "/ring5.jpg",
  price: "₹13,999",
},
{
  name: "Elite Diamond Ring",
  image: "/ring6.jpg",
  price: "₹24,999",
},
  ];

  return (

    <section className="min-h-screen bg-[#F8F5F0] text-black px-10 py-20">

      <h1 className="text-6xl font-serif text-center mb-20">

        Luxury Rings

      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {ring.map((ring, index) => (

          <div
            key={index}
            className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:scale-[1.02] transition duration-300"
          >

            <img
              src={ring.image}
              alt={ring.name}
className="w-full h-[420px] object-cover rounded-[30px]"
            />

            <div className="p-8">

              <h2 className="text-3xl font-serif text-black mb-2">
  {ring.name}
</h2>

              <p className="text-[#A44A3F] text-xl mb-6">

                {ring.price}

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