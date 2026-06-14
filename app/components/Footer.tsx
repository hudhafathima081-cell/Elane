export default function Footer() {
  return (
    <footer className="bg-[#F5F1EA] px-10 py-20 mt-24">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-16">

          {/* LEFT */}
          <div className="max-w-sm">

            <h2 className="text-5xl font-serif tracking-[0.25em] text-black">
              <span className="text-black">É</span>LANE
            </h2>

            <div className="w-6 h-[2px] bg-[#8B2E2E] mt-1 mb-6"></div>

            <p className="text-[#5f5f5f] leading-8 text-[15px]">
              Timeless accessories crafted for modern elegance.
              Luxury rings, watches and bracelets designed with
              minimal sophistication.
            </p>

          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-3 gap-16">

            <div>
              <h3 className="uppercase tracking-[0.3em] text-sm mb-6">
                Shop
              </h3>

              <div className="space-y-4 text-[#5f5f5f]">
                <p>Rings</p>
                <p>Watches</p>
                <p>Bracelets</p>
                <p>Luxury Gifts</p>
              </div>
            </div>

            <div>
              <h3 className="uppercase tracking-[0.3em] text-sm mb-6">
                About
              </h3>

              <div className="space-y-4 text-[#5f5f5f]">
                <p>Our Story</p>
                <p>Contact</p>
                <p>Shipping</p>
                <p>Returns</p>
              </div>
            </div>

            <div>
              <h3 className="uppercase tracking-[0.3em] text-sm mb-6">
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

        </div>

        {/* BOTTOM */}
<div className="mt-20 border-t border-[#d8d1c7] pt-10 text-center">

  <h3 className="text-2xl font-semibold text-black">
    Built with ♡ by Huda
  </h3>

  <p className="mt-6 text-[#666] text-lg">
    © 2026 Huda Fathima. All rights reserved.
  </p>

</div>
      </div>

    </footer>
  );
}