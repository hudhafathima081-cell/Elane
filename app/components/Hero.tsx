export default function Hero() {
  return (

    <section className="grid md:grid-cols-2 bg-[#F5F1EA]">

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

        <button className="mt-14 bg-black text-white rounded-full px-10 py-5 w-fit tracking-[0.25em] uppercase text-sm hover:bg-[#2a2a2a] transition duration-300">

  Explore Collection →

</button>

      </div>


      {/* RIGHT SIDE IMAGE */}
      {/* RIGHT SIDE IMAGE */}
<div className="bg-[#F5F1EA] flex items-center justify-center px-10 pb-10">

  <img
    src="/model.jpg"
    alt="Luxury Model"
    className="w-full max-w-[520px] h-[700px] object-cover rounded-[20px]"
  />

</div>

    </section>

  );
}