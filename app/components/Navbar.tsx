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
            
          </span>

          {/* LOGO */}
          <h1 className="text-5xl font-serif tracking-wide text-black">
        ÉLANE
      </h1>

      <div className="flex gap-14 text-[18px] text-black"></div>

        </div>


        {/* RIGHT ICONS */}
       {/* RIGHT ICONS */}
{/* RIGHT ICONS */}
<div className="flex items-center gap-7">

  {/* SEARCH ICON */}
  <button className="text-black hover:opacity-70 transition">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.7}
      stroke="currentColor"
      className="w-7 h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      />
    </svg>

  </button>


  {/* CART ICON */}
  <button className="text-black hover:opacity-70 transition">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.7}
      stroke="currentColor"
      className="w-7 h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 6V5a4.5 4.5 0 0 0-9 0v1M3.75 8.25h16.5l-1.2 10.2a2.25 2.25 0 0 1-2.23 1.95H7.18a2.25 2.25 0 0 1-2.23-1.95L3.75 8.25Z"
      />
    </svg>

  </button>

</div>

      </div>

    </nav>

  );
}