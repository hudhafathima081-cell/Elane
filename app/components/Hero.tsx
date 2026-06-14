export default function Hero() {
  return (

    <section className="grid grid-cols-2 min-h-screen bg-[#F3EEE7]">

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

          Minimal accessories designed for timeless elegance.

        </p>

        <button className="mt-14 border rounded-full px-10 py-5 w-fit tracking-[0.2em] uppercase text-sm hover:text-white transition">

          Explore Collection →

        </button>

      </div>


      {/* RIGHT SIDE IMAGE */}
      <div>

        <img
          src="/model.jpg"
          alt="Luxury Watch"
          className="w-full h-full object-cover"
        />

      </div>

    </section>

  );
}