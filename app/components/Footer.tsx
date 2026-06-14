export default function Footer() {
  return (
    <footer className="bg-[#F5F1EA] border-t border-[#d8d1c7] px-8 py-16 mt-20">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        
        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-serif tracking-[0.25em] text-black">
            ÉLANE
          </h2>

          <p className="mt-6 text-[#5c5c5c] leading-7 text-sm">
            Timeless accessories crafted for modern elegance.
            Luxury rings, watches and bracelets designed with
            minimal sophistication.
          </p>
        </div>

        {/* SHOP */}
        <div>
          <h3 className="text-sm tracking-[0.25em] uppercase mb-6 text-black">
            Shop
          </h3>

          <ul className="space-y-4 text-[#5c5c5c]">
            <li>Rings</li>
            <li>Watches</li>
            <li>Bracelets</li>
            <li>New Collection</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="text-sm tracking-[0.25em] uppercase mb-6 text-black">
            About
          </h3>

          <ul className="space-y-4 text-[#5c5c5c]">
            <li>Our Story</li>
            <li>Contact</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-sm tracking-[0.25em] uppercase mb-6 text-black">
            Join The Club
          </h3>

          <p className="text-[#5c5c5c] text-sm mb-5 leading-7">
            Get updates on new luxury collections and exclusive releases.
          </p>

          <div className="flex border border-black overflow-hidden rounded-full">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent px-5 py-3 outline-none w-full text-sm"
            />

            <button className="bg-[#8B2E2E] text-white px-6 text-sm tracking-widest">
              JOIN
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-[#d8d1c7] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#777]">
        
        <p>© 2026 ÉLANE. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0 tracking-wide">
          <p>Instagram</p>
          <p>Pinterest</p>
          <p>TikTok</p>
        </div>

      </div>

    </footer>
  );
}