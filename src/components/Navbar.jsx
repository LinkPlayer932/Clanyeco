"use client";
import React from "react";
import { Outfit } from "next/font/google";
import { Phone, Search } from "lucide-react";

const outfit = Outfit({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className="container mx-auto p-4 sm:p-6 md:p-8 w-full bg-white rounded-full">
      <div className=" flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-6">
        {/* ===== Logo ===== */}
        <div className="flex justify-center md:justify-start">
          <img src="/logo.svg" className="w-32 md:w-36" alt="Logo" />
        </div>

        {/* ===== Nav Links ===== */}
        <div
          className={`${outfit.className} flex flex-wrap justify-center md:justify-center gap-4 sm:gap-6 md:gap-10 font-semibold text-sm md:text-base`}
        >
          <a
            href="/"
            className="hover:underline hover:text-[#3CA100] transition"
          >
            Home
          </a>
          <a
            href="/services"
            className="hover:underline hover:text-[#3CA100] transition"
          >
            Services
          </a>
          <a
            href="/service-area"
            className="hover:underline hover:text-[#3CA100] transition"
          >
            Service Area
          </a>
          <a
            href="/about"
            className="hover:underline hover:text-[#3CA100] transition"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:underline hover:text-[#3CA100] transition"
          >
            Contact
          </a>
          <a
            href="/blog"
            className="hover:underline hover:text-[#3CA100] transition"
          >
            Blog
          </a>
        </div>

        {/* ===== Contact & Buttons ===== */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center gap-3 sm:gap-4">
          {/* Phone */}
          <a
            href="tel:1805678990"
            className={`${outfit.className} flex items-center gap-2 border border-[#c8c8c8da] rounded-full px-3 py-2 font-semibold text-sm md:text-base`}
          >
            <Phone
              size={20}
              className="bg-[#f2d701] rounded-full p-1.5 w-7 h-7"
            />
            <span>+1 (180) 567-8990</span>
          </a>

          {/* Search */}
          <a
            href="search"
            className="flex items-center gap-2 md:px-3 md:py-2 font-semibold"
          >
            <Search size={22} className="p-1 w-8 h-8" />
          </a>

          {/* Button */}
          <div className="bg-[#f2d701] rounded-full px-6 py-2 md:py-3">
            <button
              className={`${outfit.className} w-full md:w-auto text-sm md:text-base`}
            >
              Free Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
