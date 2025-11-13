import React from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

const MainText = () => {
  return (
    <div
      className={`${outfit.className} container flex flex-col bg-gradient-to-b from-[#f4f3f3] to-[#fcfff8] rounded-4xl items-center justify-center text-center mb-8 p-12`}
    >
      <h3 className="text-sm font-normal uppercase text-[#111] tracking-tight">
        About Us
      </h3>
      <h2 className="text-[46px] sm:text-5xl font-normal mb-4 text-black leading-relaxed">
        Who We Are
      </h2>
      <div className="w-full flex items-center justify-center my-10">
        <img
          src="/newimage.webp"
          alt="Our Team"
          className="rounded-3xl w-full max-w-6xl object-cover object-center shadow-md transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default MainText;
