export default function Home() {
  return (
    <main className="bg-[#F3EEE7] min-h-screen">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-16 py-8 border-b border-[#D8D1C7]">

        {/* LOGO */}
        <h1 className="text-5xl font-serif tracking-wide text-black">
          ÉLANE
        </h1>

        {/* MENU */}
        <div className="flex gap-14 text-[18px] text-black">
          <p>Shop</p>
          <p>Accessories</p>
          <p>About</p>
          <p>Cart (0)</p>
        </div>

      </nav>


      {/* HERO SECTION */}
      <section className="grid grid-cols-2 min-h-screen">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center px-24">

          <p className="tracking-[0.3em] text-[#A44A3F] text-sm mb-8">
            NEW COLLECTION 2026
          </p>

          <h2 className="text-[110px] leading-[1] font-serif text-black">

           Luxury in


            <br />

            
every{" "}

            <span className="text-[#A44A3F]">
            detail.
            </span>

          </h2>

          <p className="mt-10 text-[32px] text-[#2E2E2E] font-serif">
            Timeless fashion crafted for modern elegance.
          </p>

          <button className="mt-14 border border-black rounded-full px-10 py-5 w-fit tracking-[0.2em] uppercase text-sm hover:bg-black hover:text-white transition">

            Explore Collection →

          </button>

        </div>


        {/* RIGHT SIDE IMAGE */}
        <div className="flex items-center justify-center">

          <img
            src="/model.jpg"
            alt="Fashion Model"
            className="w-full h-full object-cover"
          />

        </div>

      </section>

    </main>
  );
}