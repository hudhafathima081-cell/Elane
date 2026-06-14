export default function Navbar() {
  return (

    <nav className="w-full bg-[#F8F4EE] border-b border-[#ece4d8]">

      {/* TOP BAR */}
      <div className="text-center py-3 text-[13px] tracking-[0.25em] uppercase text-black border-b border-[#ece4d8]">

        Free Shipping Across India

      </div>


      {/* MAIN NAVBAR */}
      <div className="flex items-center justify-between px-8 py-6">

        {/* LEFT MENU */}
        <button className="flex flex-col gap-[6px]">

          <span className="w-7 h-[2px] bg-black"></span>
          <span className="w-7 h-[2px] bg-black"></span>
          <span className="w-7 h-[2px] bg-black"></span>

        </button>


        {/* CENTER LOGO */}
        <div className="relative">

          {/* RED ACCENT */}
          <span className="absolute -top-2 left-1 text-[#9E2F2F] text-[24px] rotate-[-25deg] font-serif">
            ´
          </span>

          {/* LOGO */}
          <h1 className="text-[55px] leading-none tracking-[0.18em] font-serif text-black">

            ELANE

          </h1>

        </div>


        {/* RIGHT ICONS */}
       {/* RIGHT ICONS */}
<div className="flex items-center gap-6">

  {/* SEARCH */}
  <button className="text-black text-[26px] hover:opacity-70 transition">

    🔍

  </button>

  {/* CART */}
  <button className="text-black text-[24px] hover:opacity-70 transition">

    🛍️

  </button>

</div>

      </div>

    </nav>

  );
}