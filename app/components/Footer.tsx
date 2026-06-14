export default function Footer() {
  return (
    <footer className="bg-[#F5F1EA] px-8 md:px-16 py-20 mt-24">

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
            <div className="flex border border-black rounded-full overflow-hidden">

              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent px-5 py-4 outline-none w-full text-sm"
              />

              <button className="bg-[#8B2E2E] text-white px-8 text-sm tracking-[0.25em]">
                JOIN
              </button>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-[#ddd6cc] mt-20 pt-10 text-center">

          <p className="text-[#8B2E2E] text-[22px] mb-3 font-light">
            Built with ♡ by Huda
          </p>

          <p className="text-[#8B2E2E] text-[15px]">
            © 2026 Hudha Fathima. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}