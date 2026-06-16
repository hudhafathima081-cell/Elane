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
    </div>
  );
}