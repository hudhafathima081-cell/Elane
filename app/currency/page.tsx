export default function CurrencyPage() {
  return (

    <div className="min-h-screen bg-[#F8F4EE] p-20 text-black">

      <h1 className="text-6xl font-serif mb-10">
        Currency Selector
      </h1>

      <select className="border p-4 rounded-xl">

        <option>India - INR ₹</option>

        <option>Europe - EUR €</option>

        <option>USA - USD $</option>

        <option>UK - GBP £</option>

      </select>

    </div>

  );
}