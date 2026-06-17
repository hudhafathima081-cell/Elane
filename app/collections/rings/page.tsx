export default function RingsPage() {
  const rings = [
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
      name: "Luxury Solitaire",
      image: "/ring4.jpg",
      price: "₹18,999",
    },
    {
      name: "Pearl Ring",
      image: "/ring5.jpg",
      price: "₹11,999",
    },
    {
      name: "Elite Diamond Ring",
      image: "/ring6.jpg",
      price: "₹24,999",
    },
  ];

  return (
    <div>
      <h1 className="text-6xl text-center font-serif mb-20">
        Luxury Rings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">

  {rings.map((ring, index) => (

    <div key={index} className="text-center">

      <img
        src={ring.image}
        alt={ring.name}
        className="w-full h-[350px] object-cover rounded-[30px]"
      />

      <h2 className="mt-5 text-3xl font-serif">
        {ring.name}
      </h2>

      <p className="mt-2 text-[#9E2F2F] text-xl">
        {ring.price}
      </p>

      <button className="mt-5 bg-black text-white px-8 py-4 rounded-full">
        ADD TO CART
      </button>

    </div>

  ))}

</div>
    </div>
  );
}