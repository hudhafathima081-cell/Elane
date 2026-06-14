export default function Hero() {
  return (

    <section className="grid md:grid-cols-2 min-h-screen bg-[#F5F1EA]">

      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center px-10 md:px-24 py-20">

        <p className="tracking-[0.35em] text-[#A44A3F] text-sm mb-8">
          NEW COLLECTION 2026
        </p>

        <h1 className="text-[70px] md:text-[110px] leading-[0.95] font-serif text-black">

          Luxury in
          <br />

          every{" "}

          <span className="text-[#8B2E2E]">
            detail.
          </span>

        </h1>

        <p className="mt-10 text-[24px] md:text-[32px] leading-relaxed text-[#2E2E2E] font-serif max-w-xl">

          Minimal accessories designed for timeless elegance.

        </p>

        <button className="mt-14 border border-black rounded-full px-10 py-5 w-fit tracking-[0.25em] uppercase text-sm hover:bg-black hover:text-white transition duration-300">

          Explore Collection →

        </button>

      </div>


      {/* RIGHT SIDE IMAGE */}
      <div className="h-screen">

        <img
          src="/model.jpg"
          alt="Luxury Watch"
          className="w-full h-full object-cover"
        />

      </div>

    </section>

  );
}