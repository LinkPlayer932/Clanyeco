"use client";
import React, { useState } from "react";
import { Outfit } from "next/font/google";
import { Phone, Search, Menu, X } from "lucide-react";

const outfit = Outfit({ subsets: ["latin"] });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto p-4 sm:p-6 md:p-8 w-full bg-white rounded-full shadow-sm">
      <div className="flex justify-between items-center">
        {/* ===== Logo ===== */}
        <div className="flex items-center">
          <a href="/"></a>

          <img src="/logo.svg" className="w-28 md:w-36" alt="Logo" />
        </div>

        {/* ===== Hamburger for Mobile ===== */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* ===== Nav Links (Desktop) ===== */}
        <div
          className={`${outfit.className} hidden md:flex flex-wrap justify-center items-center gap-8 font-semibold text-sm lg:text-base`}
        >
          <a href="/" className="hover:text-[#3CA100] transition">
            Home
          </a>
          <a href="/services" className="hover:text-[#3CA100] transition">
            Services
          </a>
          <a href="/servicearea" className="hover:text-[#3CA100] transition">
            Service Area
          </a>
          <a href="/about" className="hover:text-[#3CA100] transition">
            About
          </a>
          <a href="/contact" className="hover:text-[#3CA100] transition">
            Contact
          </a>
          <a href="/blog" className="hover:text-[#3CA100] transition">
            Blog
          </a>
        </div>

        {/* ===== Contact & Quote Button (Desktop) ===== */}
        <div className="hidden md:flex items-center gap-4">
          {/* Phone */}
          <a
            href="tel:1805678990"
            className={`${outfit.className} flex items-center gap-2 border border-[#c8c8c8da] rounded-full px-3 py-2 font-semibold text-sm`}
          >
            <Phone
              size={20}
              className="bg-[#f2d701] rounded-full p-1.5 w-7 h-7"
            />
            <span className="text-ellipsisn">+1 (180) 567-8990</span>
          </a>
          {/* Search */}
          <a
            href="/search"
            className="flex items-center justify-center p-2 hover:text-[#3CA100] transition"
          >
            <Search size={22} />
          </a>
          {/* Button */}
          <a
            href="/servicearea"
            className={`${outfit.className} bg-[#f2d701] rounded-full px-6 py-2 font-medium hover:scale-105 transition`}
          >
            Free Quote
          </a>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-[#f9faf7] rounded-3xl p-6 shadow-inner flex flex-col items-center gap-5 transition-all duration-300">
          <a href="/" className="hover:text-[#3CA100] transition">
            Home
          </a>
          <a href="/services" className="hover:text-[#3CA100] transition">
            Services
          </a>
          <a href="/service-area" className="hover:text-[#3CA100] transition">
            Service Area
          </a>
          <a href="/about" className="hover:text-[#3CA100] transition">
            About
          </a>
          <a href="/contact" className="hover:text-[#3CA100] transition">
            Contact
          </a>
          <a href="/blog" className="hover:text-[#3CA100] transition">
            Blog
          </a>

          {/* Mobile Contact */}
          <a
            href="tel:1805678990"
            className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm font-semibold"
          >
            <Phone size={18} className="text-[#3CA100]" />
            <span>+1 (180) 567-8990</span>
          </a>

          {/* Mobile Button */}
          <button className="bg-[#f2d701] w-full rounded-full py-2 font-medium hover:scale-105 transition">
            Free Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
