"use client";
import React from "react";
import { Outfit } from "next/font/google";
import {
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const outfit = Outfit({ subsets: ["latin"] });

const Footer1 = () => {
  return (
    <footer className="w-full bg-[#e8f5d3] rounded-t-3xl py-14 px-5 sm:px-8 md:px-14 lg:px-20 max-w-7xl max-w-full">
      {/* ===== Top Section ===== */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-20 mb-16">
        {/* Left: Heading + Button */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2
            className={`${outfit.className} text-2xl sm:text-3xl md:text-4xl font-normal leading-snug mb-6 text-gray-900`}
          >
            Our Goal is to Wow <br /> You With Every Clean
          </h2>
          <button
            className={`${outfit.className} bg-yellow-400 text-black font-medium px-8 py-3 mb-10 rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-md`}
          >
            Get a Free Quote
          </button>
        </div>

        {/* Right: Newsletter */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h4
            className={`${outfit.className} uppercase text-sm font-semibold tracking-widest mb-4`}
          >
            Subscribe to Our Newsletter
          </h4>

          <form
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className={`${outfit.className} flex-1 px-6 py-3 rounded-full bg-white text-gray-700 text-sm md:text-base font-medium 
              focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-auto`}
              required
            />
            <button
              type="submit"
              className={`${outfit.className} bg-[#3ca200] text-white px-8 py-3 rounded-full hover:bg-green-600 transition-all duration-300 w-full sm:w-auto`}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* ===== Middle Section ===== */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-14 text-gray-700">
        {/* Services */}
        <div className="text-center sm:text-left">
          <h5 className="uppercase text-base font-semibold mb-5 tracking-wide">
            Services
          </h5>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm justify-items-center sm:justify-items-start">
            <span>House cleaning</span>
            <span>Deep cleaning</span>
            <span>Office cleaning</span>
            <span>Move in out cleaning</span>
            <span>Apartment cleaning</span>
            <span>Post construction cleaning</span>
            <span>Airbnb cleaning</span>
            <span>Recurring cleaning</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center sm:text-left">
          <h5 className="uppercase text-base font-semibold mb-5 tracking-wide">
            Contact Info
          </h5>
          <p className="mb-4 leading-relaxed text-sm">
            72 Kneeland St, Suite 305,
            <br />
            New York, MA 02111
          </p>

          <a
            href="tel:+11805678990"
            className="flex justify-center sm:justify-start items-center gap-3 bg-white rounded-full w-fit px-4 py-2 font-semibold text-gray-800 text-sm shadow-md mx-auto sm:mx-0"
          >
            <Phone
              size={20}
              className="bg-yellow-400 text-black rounded-full p-1.5 w-8 h-8 flex items-center justify-center"
            />
            <span>+1 (180) 567-8990</span>
          </a>

          <a
            href="mailto:contact@clanyeco.com"
            className="text-green-700 text-sm underline mt-4 block"
          >
            contact@clanyeco.com
          </a>
        </div>

        {/* Working Hours */}
        <div className="text-center sm:text-left">
          <h5 className="uppercase text-base font-semibold mb-5 tracking-wide">
            Working Hours
          </h5>
          <ul className="space-y-2 text-sm">
            <li>
              Mon – Fri: <span className="ml-2">9.00am – 8.00pm</span>
            </li>
            <li>
              Saturday: <span className="ml-2">10.00am – 8.00pm</span>
            </li>
            <li>
              Sunday: <span className="ml-2">10.00am – 4.00pm</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== Footer Bottom ===== */}
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 pt-8 mt-12 text-sm text-gray-600 text-center sm:text-left">
        <p>© 2025 VamTam. All Rights Reserved</p>

        {/* Social Links */}
        <div className="flex gap-3 justify-center sm:justify-end">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook
              size={22}
              className="text-[#3ca200] bg-white rounded-full p-1.5 w-8 h-8 shadow-sm hover:bg-[#3ca200] hover:text-white transition-all duration-300"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram
              size={22}
              className="text-[#3ca200] bg-white rounded-full p-1.5 w-8 h-8 shadow-sm hover:bg-[#3ca200] hover:text-white transition-all duration-300"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter
              size={22}
              className="text-[#3ca200] bg-white rounded-full p-1.5 w-8 h-8 shadow-sm hover:bg-[#3ca200] hover:text-white transition-all duration-300"
            />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Youtube
              size={22}
              className="text-[#3ca200] bg-white rounded-full p-1.5 w-8 h-8 shadow-sm hover:bg-[#3ca200] hover:text-white transition-all duration-300"
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin
              size={22}
              className="text-[#3ca200] bg-white rounded-full p-1.5 w-8 h-8 shadow-sm hover:bg-[#3ca200] hover:text-white transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
