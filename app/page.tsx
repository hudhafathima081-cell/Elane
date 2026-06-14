export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3EEE7] text-[#111111]">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6">

        <h1 className="text-3xl font-serif tracking-wide">
          <span className="text-[#B65A4A]">É</span>LANE
        </h1>

        <div className="flex gap-8 text-sm">
          <p>Shop</p>
          <p>Collections</p>
          <p>About</p>
          <p>Cart</p>
        </div>

      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-32 px-6">

        <p className="text-sm tracking-[0.3em] mb-6">
          NEW COLLECTION 2026
        </p>

        <h2 className="text-6xl md:text-8xl font-serif leading-tight max-w-4xl">
          Minimal fashion
          <br />
          deserves to be{" "}
          <span className="text-[#B65A4A]">worn.</span>
        </h2>

        <p className="mt-8 text-gray-600 max-w-xl text-lg">
          Timeless fashion crafted for modern elegance.
        </p>

        <button className="mt-10 border border-black rounded-full px-8 py-4 hover:bg-black hover:text-white transition duration-300">
          Explore Collection →
        </button>

      </section>

    </main>
  );
}