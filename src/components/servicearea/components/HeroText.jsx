import React from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

const HeroText = () => {
  return (
    <div className="mx-auto w-full bg-gradient-to-b from-[#f5f6f1] to-[#fefffc] rounded-4xl p-15 mb-20 text-center">
      <p
        className={`${outfit.className} text-xs sm:text-sm uppercase tracking-wide text-gray-600 mb-3`}
      >
        Free Quote
      </p>
      <h1
        className={`${outfit.className} text-3xl sm:text-4xl md:text-5xl font-normal text-[#111] leading-tight`}
      >
        Get a Free Estimate
      </h1>
      <div className="flex items-center justify-center rotate-45 w-full h-40">
        <img src="/image14.png" alt="Leaf" className="w-28 h-auto" />
      </div>
    </div>
  );
};

export default HeroText;
