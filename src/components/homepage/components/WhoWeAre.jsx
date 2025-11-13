
import React from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { CheckCircle } from "lucide-react";

const outfit = Outfit({ subsets: ["latin"] });

const WhoWeAre = () => {
  return (
    <div className="container mx-auto relative bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <section
        className="w-full relative mb-[-7rem] z-30 max-w-8xl bg-[#f4f6f0] rounded-[2rem] flex flex-col md:flex-row items-center justify-between 
        px-6 sm:px-10 md:px-16 py-10 md:py-16 overflow-hidden shadow-sm"
      >
        {/* ===== Left Content ===== */}
        <div className="w-full md:w-1/2 md:pr-10 text-center md:text-left">
          <p
            className={`${outfit.className} text-xs sm:text-sm uppercase tracking-wide text-gray-600 mb-2`}
          >
            Who We Are
          </p>

          <h1
            className={`${outfit.className} text-2xl sm:text-3xl md:text-4xl font-normal text-[#111] leading-snug mb-5`}
          >
            We Are the Best Option
            <br /> for a Sparkling Home
          </h1>

          <p
            className={`${outfit.className} text-gray-600 text-sm sm:text-base mb-6 max-w-md mx-auto md:mx-0`}
          >
            At Clany Eco, our mission is to provide the most convenient platform
            for connecting you with exceptional, professional cleaners who
            deliver outstanding results.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3 text-sm sm:text-base text-black justify-center md:justify-start">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              <span>We always keep you up to date on your cleaning</span>
            </li>
            <li className="flex items-start gap-3 text-sm sm:text-base text-black justify-center md:justify-start">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
              <span>The cleaners treat your home like their own home</span>
            </li>
          </ul>

          <button
            className={`${outfit.className} bg-[#f2d701] hover:bg-[#f5df3d] text-black 
            rounded-full font-medium px-8 py-3 transition-all shadow-md hover:shadow-lg`}
          >
            Learn More
          </button>
        </div>

        {/* ===== Right Image ===== */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="relative w-full max-w-[480px] md:max-w-[580px]">
            <Image
              src="/image1.png"
              alt="Cleaning Team at Work"
              width={480}
              height={400}
              className="rounded-[2rem] shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;