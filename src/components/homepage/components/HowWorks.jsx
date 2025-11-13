
import React from "react";
import { Outfit } from "next/font/google";
import { FaCalendarAlt, FaBroom, FaSmile } from "react-icons/fa";

const outfit = Outfit({ subsets: ["latin"] });

const HowWorks = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center py-10 bg-white">
      <h3
        className={`${outfit.className} text-sm uppercase tracking-[4px] text-green-700 mb-3`}
      >
        How it Works
      </h3>

      <h1
        className={`${outfit.className} text-3xl md:text-4xl font-normal text-black leading-tight`}
      >
        Quick and Easy
      </h1>

      <div className="container mx-auto relative mt-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-12">

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center max-w-xs bg-white p-10 rounded-4xl">
            <div className="relative bg-[#e7f9e7] p-10 rounded-full border border-[#43a50a]">
              <FaCalendarAlt className="text-[#43a50a] text-5xl" />
            </div>
            <h2
              className={`${outfit.className} text-2xl font-normal mt-6 text-black`}
            >
              Free Quote
            </h2>
            <p className={`${outfit.className} text-gray-600 mt-2 text-sm`}>
              Tell us about your home and choose the date you want.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center max-w-xs bg-white p-6 rounded-3xl">
            <div className="relative bg-[#e7f9e7] p-10 rounded-full border border-[#43a50a]">
              <FaBroom className="text-[#43a50a] text-5xl" />
            </div>
            <h2
              className={`${outfit.className} text-2xl font-normal mt-6 text-black`}
            >
              Clean
            </h2>
            <p className={`${outfit.className} text-gray-600 mt-2 text-sm`}>
              Our seasoned team of full-time cleaners will transform your home.
            </p>
          </div>


          {/* Step 3 */}
          <div className="flex flex-col items-center text-center max-w-xs bg-white p-6 rounded-3xl">
            <div className="relative bg-[#e7f9e7] p-10 rounded-full border border-[#43a50a]">
              <FaSmile className="text-[#43a50a] text-5xl" />
            </div>
            <h2
              className={`${outfit.className} text-2xl font-normal mt-6 text-black`}
            >
              Relax
            </h2>
            <p className={`${outfit.className} text-gray-600 mt-2 text-sm`}>
              Sit back and enjoy how amazing your home or business looks now.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowWorks;
