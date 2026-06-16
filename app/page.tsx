import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  
  return (
    <main>

      <Navbar />

      <Hero />
      <section className="relative h-screen overflow-hidden">

  {/* Background Image */}
  <img
    src="/front.jpg"
    alt="Elane Collection"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">

    <h2 className="text-6xl font-light mb-8">
      Browse Our Latest Products
    </h2>

    <a
      href="/collections"
      className="border border-white px-10 py-4 tracking-[0.2em] uppercase hover:bg-white hover:text-black transition"
    >
      Shop All
    </a>

  </div>

</section>
<section className="bg-[#F8F4EE] py-20">

  <div className="flex justify-between items-center px-10 mb-12">

    <h2 className="text-6xl text-black font-light">
      Collections
    </h2>

    <a
      href="/collections"
      className="text-black text-xl underline"
    >
      View All
    </a>

  </div>

  <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">

    {/* WATCHES */}
    <a href="/collections/watches" className="group cursor-pointer min-w-[320px] flex-shrink-0">
      <img
  src="/watch.jpg"
  className="rounded-[30px] h-[350px] w-full object-cover transition duration-500 group-hover:scale-105"
/>
      <h3 className="mt-5 text-black text-2xl">
        Watches →
      </h3>
    </a>

    {/* RINGS */}
    <a href="/collections/rings" className="group cursor-pointer min-w-[320px] flex-shrink-0">
      <img
  src="/ring.jpg"
  className="rounded-[30px] h-[350px] w-full object-cover transition duration-500 group-hover:scale-105"
/>
      <h3 className="mt-5 text-black text-2xl">
        Rings →
      </h3>
    </a>

    {/* BRACELETS */}
    <a href="/collections/bracelets" className="group cursor-pointer min-w-[320px] flex-shrink-0">
      <img
  src="/bracelet.jpg"
  className="rounded-[30px] h-[350px] w-full object-cover transition duration-500 group-hover:scale-105"
/>
      <h3 className="mt-5 text-black text-2xl">
        Bracelets →
      </h3>
    </a>

    {/* BANGLES */}
    <a href="/collections/bangles" className="group cursor-pointer min-w-[320px] flex-shrink-0">
      <img
  src="/bangle.jpg"
  className="rounded-[30px] h-[350px] w-full object-cover transition duration-500 group-hover:scale-105"
/>
      <h3 className="mt-5 text-black text-2xl">
        Bangles →
      </h3>
    </a>

{/* SUNGLASSES */}
<a href="/collections/sunglasses" className="group cursor-pointer min-w-[320px]">
  <img
    src="/sunglasses.jpg"
    className="rounded-[30px] h-[350px] w-full object-cover transition duration-500 group-hover:scale-105"
  />
  <h3 className="mt-5 text-black text-2xl group-hover:text-[#9E2F2F] transition">
    Sunglasses →
  </h3>
</a>

{/* CHAINS */}
<a href="/collections/chains" className="group cursor-pointer min-w-[320px]">
  <img
    src="/chain.jpg"
    className="rounded-[30px] h-[350px] w-full object-cover transition duration-500 group-hover:scale-105"
  />
  <h3 className="mt-5 text-black text-2xl group-hover:text-[#9E2F2F] transition">
    Chains →
  </h3>
</a>

{/* EARRINGS */}
<a href="/collections/earrings" className="group cursor-pointer min-w-[320px]">
  <img
    src="/earring.jpg"
    className="rounded-[30px] h-[350px] w-full object-cover transition duration-500 group-hover:scale-105"
  />
  <h3 className="mt-5 text-black text-2xl group-hover:text-[#9E2F2F] transition">
    Earrings →
  </h3>
</a>

{/* GIFTS */}
<a href="/collections/gifts" className="group cursor-pointer min-w-[320px]">
  <img
    src="/gift.jpg"
    className="rounded-[30px] h-[350px] w-full object-cover transition duration-500 group-hover:scale-105"
  />
  <h3 className="mt-5 text-black text-2xl group-hover:text-[#9E2F2F] transition">
    Luxury Gifts →
  </h3>
</a>
    

  </div>

</section>

      <Footer />

    </main>
  );
}