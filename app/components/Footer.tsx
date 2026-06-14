export default function Footer() {
  return (
    <footer className="bg-[#F5F1EA] px-10 py-20 ">

      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* LEFT */}
          <div>

            {/* LOGO */}
            <div className="mb-8">

              <div className="relative inline-block">

                

                {/* LOGO TEXT */}
               <h1 className="text-5xl font-serif tracking-wide text-black">
        ÉLANE
      </h1>

      <div className="flex gap-14 text-[18px] text-black">

</div>

              </div>

              

            </div>

            {/* DESCRIPTION */}
            <p className="text-[#5f5f5f] text-[15px] leading-8 max-w-xs">
              Timeless accessories crafted for modern elegance.
              Luxury rings, watches and bracelets designed
              with minimal sophistication.
            </p>

          </div>

          {/* SHOP */}
          <div>

            <h3 className="uppercase tracking-[0.35em] text-[13px] mb-8 text-black">
              Shop
            </h3>

            <div className="space-y-5 text-[#5f5f5f] text-[15px]">
              <p>Rings</p>
              <p>Watches</p>
              <p>Bracelets</p>
              <p>Luxury Gifts</p>
            </div>

          </div>

          {/* ABOUT */}
          <div>

            <h3 className="uppercase tracking-[0.35em] text-[13px] mb-8 text-black">
              About
            </h3>

            <div className="space-y-5 text-[#5f5f5f] text-[15px]">
              <p>Our Story</p>
              <p>Contact</p>
              <p>Shipping</p>
              <p>Returns</p>
            </div>

          </div>

          {/* RIGHT */}
          <div>

            <h3 className="uppercase tracking-[0.35em] text-[13px] mb-8 text-black">
              Join The Club
            </h3>

            <p className="text-[#5f5f5f] text-[15px] leading-8 mb-8">
              Get updates on new luxury collections
              and exclusive releases.
            </p>

            {/* EMAIL */}
            <div className="flex border border-[#d8d1c7] rounded-full overflow-hidden bg-white">

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-5 py-4 outline-none w-full text-sm"
              />

              <button className="bg-[#8B2E2E] text-white px-8 text-sm tracking-[0.25em]">
                JOIN
              </button>

            </div>

          </div>

        </div>

        {/* COUNTRY / REGION */}
<div className="mt-24 border-t border-[#e5ddd2] pt-14">

  <p className="uppercase tracking-[0.2em] text-[12px] text-[#777] mb-5">
    Country / Region
  </p>

  <div className="w-[260px] border border-[#d8d1c7] rounded-full px-6 py-4 flex items-center justify-between text-[#444]">

    <span>India | INR ₹</span>

    <span>⌄</span>

  </div>

</div>


{/* BOTTOM LEGAL */}
<div className="border-t border-[#e5ddd2] mt-16 pt-10 pb-10 flex flex-col md:flex-row justify-between items-center gap-6">

  <div className="flex flex-col gap-2">

  <p className="text-[#b0b0b0] text-[13px]">
    Built with ♡ by Huda
  </p>

  <p className="text-[#b0b0b0] text-[13px]">
    © 2026 ELANE. All rights reserved.
  </p>

</div>

  <div className="flex gap-8 text-[14px] text-[#9a9a9a]">

    <p className="hover:text-black cursor-pointer transition">
      Privacy Policy
    </p>

    <p className="hover:text-black cursor-pointer transition">
      Refund Policy
    </p>

    <p className="hover:text-black cursor-pointer transition">
      Terms of Service
    </p>

    <p className="hover:text-black cursor-pointer transition">
      Shipping Policy
    </p>

  </div>

</div>
      </div>

    </footer>
  );
}