"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Temporary login
    // We will connect real account storage in the next step.
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

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
            Welcome Back
          </h1>

          <p className="text-gray-600 mt-2">
            Sign in to continue your ÉLANE journey.
          </p>
        </div>

        <div className="bg-white rounded-[32px] border border-[#ECE5DB] shadow-sm p-8">

          <form onSubmit={handleLogin} className="space-y-5">

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

            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-2xl border border-[#D8D0C5] px-4 py-3 text-black outline-none focus:border-[#A44A3F]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-[#A44A3F] transition text-white rounded-full py-4 font-semibold"
            >
              Login
            </button>

          </form>

          <div className="text-center mt-7 pt-6 border-t border-[#ECE5DB]">

            <p className="text-gray-600 text-sm">
              Don't have an account?
            </p>

            <Link
              href="/register"
              className="inline-block mt-2 text-[#A44A3F] font-semibold hover:text-black"
            >
              Create an Account
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}