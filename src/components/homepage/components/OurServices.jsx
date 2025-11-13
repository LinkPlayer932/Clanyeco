import React from "react";
import { Outfit } from "next/font/google";
import { ChevronRight } from "lucide-react";

const outfit = Outfit({ subsets: ["latin"] });

const OurServices = () => {
  return (
    <div className="container mx-auto bg-[#ffffff] text-black py-10 px-5 md:px-10 text-center mt-20">
      {/* Section Header */}
      <div className="w-full md:pr-10 text-center md:text-left">
        <p
          className={`${outfit.className} text-xs sm:text-sm uppercase tracking-wide text-gray-600 mb-2`}
        >
          Our Services
        </p>
        <div className="w-full">
          <h1
            className={`${outfit.className} text-3xl sm:text-4xl md:text-5xl font-normal text-[#111] mb-5`}
          >
            Here’s What We Can{" "}
            <span className="flex w-full sm:w-[60%] md:w-[50%] items-center justify-between mx-auto md:mx-0">
              Do for You
            </span>
          </h1>
        </div>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full pt-10">
        {[
          {
            title: "House Cleaning",
            image: "/image2.webp",
          },
          {
            title: "Office Cleaning",
            image: "/image11.png",
          },
          {
            title: "Move In Out Cleaning",
            image: "/image9.png",
          },
          {
            title: "Deep Cleaning",
            image: "/image10.png",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#f1d80c] via-[#e8f5d3] to-[#eaefab] rounded-[1.5rem] p-5 flex flex-col items-center  transition-all duration-300"
          >
            {/* Image with bottom-right trim */}
            <div
              className="w-full overflow-hidden mb-4 rounded-[1.5rem]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 90%, 85% 100%, 0 100%)",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 sm:h-56 md:h-60 object-cover"
              />
            </div>

            {/* Title */}
            <h3
              className={`${outfit.className} text-[26px] sm:text-[26px] md:text-[26px] font-light text-black text-left w-full px-2 mt-4 mb-8`}
            >
              {service.title}
            </h3>

            {/* Button */}
            <div className="w-full flex justify-start mt-auto">
              <a
                href="/"
                className={`${outfit.className} flex items-center justify-center gap-3 bg-gray-100 text-black px-6 sm:px-8 py-2 rounded-full font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300`}
              >
                Learn more
                <span className="flex items-center justify-center bg-[#e8f5d3] text-[#3ca200] rounded-full p-1">
                  <ChevronRight size={20} strokeWidth={2.5} />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
