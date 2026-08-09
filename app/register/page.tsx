
"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Temporary account storage.
    // We will improve this into a proper authentication system later.
    localStorage.setItem(
      "elane_user",
      JSON.stringify({
        name,
        email,
        password,
      })
    );

    localStorage.setItem("elane_logged_in", "true");
    localStorage.setItem("elane_user_email", email);

    window.location.href = "/checkout";
  };

  return (
    <div className="min-h-screen bg-[#F8F4EE] flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-md">

        <div className="text-center mb-8">

          <p className="tracking-[0.35em] text-sm text-[#A44A3F]">
            ÉLANE
          </p>

          <h1 className="text-4xl font-serif text-black mt-3">
            Create Your Account
          </h1>

          <p className="text-gray-600 mt-2">
            Join ÉLANE and make your shopping experience effortless.
          </p>

        </div>

        <div className="bg-white rounded-[32px] border border-[#ECE5DB] shadow-sm p-8">

          <form onSubmit={handleRegister} className="space-y-5">

            {/* NAME */}

            <div>

              <label className="block text-sm font-semibold text-black mb-2">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full rounded-2xl border border-[#D8D0C5] px-4 py-3 text-black outline-none focus:border-[#A44A3F]"
              />

            </div>

            {/* EMAIL */}

            <div>

              <label className="block text-sm font-semibold text-black mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-[#D8D0C5] px-4 py-3 text-black outline-none focus:border-[#A44A3F]"
              />

            </div>

            {/* PASSWORD */}

            <div>

              <label className="block text-sm font-semibold text-black mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="w-full rounded-2xl border border-[#D8D0C5] px-4 py-3 text-black outline-none focus:border-[#A44A3F]"
              />

            </div>

            {/* CONFIRM PASSWORD */}

            <div>

              <label className="block text-sm font-semibold text-black mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full rounded-2xl border border-[#D8D0C5] px-4 py-3 text-black outline-none focus:border-[#A44A3F]"
              />

            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-[#A44A3F] transition text-white rounded-full py-4 font-semibold"
            >
              Create Account
            </button>

          </form>

          <div className="text-center mt-7 pt-6 border-t border-[#ECE5DB]">

            <p className="text-gray-600 text-sm">
              Already have an account?
            </p>

            <Link
              href="/login"
              className="inline-block mt-2 text-[#A44A3F] font-semibold hover:text-black"
            >
              Login
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}