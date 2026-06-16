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

      <Footer />

    </main>
  );
}