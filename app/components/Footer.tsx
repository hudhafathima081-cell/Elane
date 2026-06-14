export default function Footer() {
  return (
    <footer className="bg-[#F5F1EA] px-10 py-20 mt-24">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-16">

          {/* LEFT */}
          <div className="max-w-sm">

            <h2 className="text-5xl font-serif tracking-[0.25em] text-black">
              ÉLANE
            </h2>

            {/* RED ACCENT */}
            <div className="w-6 h-[2px] bg-[#8B2E2E] mt-2 mb-6"></div>

            <p className="text-[#5f5f5f] leading-8 text-[15px]">
              Timeless accessories crafted for
              modern elegance. Luxury rings,
              watches and bracelets designed
              with minimal sophistication.
            </p>

          </div>

          {/* CENTER */}
          <div className="grid grid-cols-3 gap-20">

            {/* SHOP */}
            <div>
              <h3 className="uppercase tracking-[0.3em] text-sm mb-6 text-black">
                Shop
              </h3>

              <div className="space-y-4 text-[#5f5f5f]">
                <p>Rings</p>
                <p>Watches</p>
                <p>Bracelets</p>
                <p>Luxury Gifts</p>
              </div>
            </div>

            {/* ABOUT */}
            <div>
              <h3 className="uppercase tracking-[0.3em] text-sm mb-6 text-black">
                About
              </h3>

              <div className="space-y-4 text-[#5f5f5f]">
                <p>Our Story</p>
                <p>Contact</p>
                <p>Shipping</p>
                <p>Returns</p>
              </div>
            </div>

            {/* FOLLOW */}
            <div>
              <h3 className="uppercase tracking-[0.3em] text-sm mb-6 text-black">
                Follow
              </h3>

              <div className="space-y-4 text-[#5f5f5f]">
                <p>Instagram</p>
                <p>Pinterest</p>
                <p>TikTok</p>
                <p>Facebook</p>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="max-w-xs">

            <h3 className="uppercase tracking-[0.3em] text-sm mb-6 text-black">
              Join The Club
            </h3>

            <p className="text-[#5f5f5f] leading-8 text-[15px] mb-8">
              Get updates on new luxury collections
              and exclusive releases.
            </p>

            <div className="flex border border-black rounded-full overflow-hidden">

              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent px-5 py-4 outline-none w-full text-sm"
              />

              <button className="bg-[#8B2E2E] text-white px-8 tracking-[0.2em] text-sm">
                JOIN
              </button>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-[#d8d1c7] mt-20 pt-10 text-center">

          <p className="text-[#8B2E2E] text-[20px] mb-3">
            Built with ♡ by Huda
          </p>

          <p className="text-[#8B2E2E] text-[15px]">
            © 2026 Huda Fathima. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}