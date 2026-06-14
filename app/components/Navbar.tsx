export default function Navbar() {
  return (

    <nav className="flex items-center justify-between px-16 py-8 border-b border-[#D8D1C7] bg-[#F3EEE7]">

      <h1 className="text-5xl font-serif tracking-wide text-black">
        ÉLANE
      </h1>

      <div className="flex gap-14 text-[18px] text-black">

        <p>Watches</p>

        <p>Accessories</p>

        <p>About</p>

        <p>Cart (0)</p>

      </div>

    </nav>

  );
}