export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#F8F4EE] px-8 py-20">
      <h1 className="text-4xl font-serif mb-8">Search</h1>

      <input
        type="text"
        placeholder="Search products..."
        className="w-full max-w-xl border border-gray-300 p-4 rounded-lg bg-white"
      />

      <p className="mt-6 text-gray-600">
        Search feature coming soon...
      </p>
    </div>
  );
}