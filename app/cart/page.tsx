export default function CartPage() {
  return (
    <div className="min-h-screen p-20 bg-[#F8F4EE] text-black">

      <h1 className="text-5xl font-serif mb-10">
        Shopping Cart
      </h1>

      <div className="bg-white p-8 rounded-3xl">

        <h2 className="text-2xl font-serif">
          Nordgreen Unika
        </h2>

        <p className="mt-3 text-xl">
          ₹24,999
        </p>

      </div>

      <div className="mt-10 text-right">

        <h2 className="text-3xl font-serif">
          Total: ₹24,999
        </h2>

      </div>

    </div>
  );
}