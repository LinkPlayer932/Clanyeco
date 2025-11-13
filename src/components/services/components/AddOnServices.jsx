import React from "react";
import { Outfit } from "next/font/google";
import { PiTowelBold } from "react-icons/pi";
import { TbFridge } from "react-icons/tb";
import { BiSolidCabinet } from "react-icons/bi";
import { LiaWindowMaximizeSolid } from "react-icons/lia";
import { PiOvenLight } from "react-icons/pi";
import { VscAzureDevops } from "react-icons/vsc";
import { SlCalender, SlFeed } from "react-icons/sl";

const outfit = Outfit({ subsets: ["latin"] });

const AddOnServices = () => {
  const addOns = [
    {
      icon: <PiTowelBold className="text-[#3ca200]" size={28} />,
      price: "$35 extra",
      title: "Inside empty refrigerator / freezer",
    },
    {
      icon: <TbFridge className="text-[#3ca200]" size={28} />,
      price: "$35 extra",
      title: "Inside occupied refrigerator / freezer",
    },
    {
      icon: <BiSolidCabinet className="text-[#3ca200]" size={28} />,
      price: "$35 extra",
      title: "Clean exterior of kitchen cabinets",
    },
    {
      icon: <LiaWindowMaximizeSolid className="text-[#3ca200]" size={28} />,
      price: "$35 extra",
      title: "Interior window cleaning",
    },
    {
      icon: <PiOvenLight className="text-[#3ca200]" size={28} />,
      price: "$35 extra",
      title: "Oven deep cleaning",
    },
    {
      icon: <VscAzureDevops className="text-[#3ca200]" size={28} />,
      price: "$35 extra",
      title: "Laundry folding service",
    },
    {
      icon: <SlCalender className="text-[#3ca200]" size={28} />,
      price: "$35 extra",
      title: "Scheduled maintenance cleaning",
    },
    {
      icon: <SlFeed className="text-[#3ca200]" size={28} />,
      price: "$35 extra",
      title: "Pet hair removal & deodorizing",
    },
  ];

  return (
    <div className="mx-auto mb-20 text-center">
      {/* Section Heading */}
      <p
        className={`${outfit.className} text-xs sm:text-sm uppercase tracking-wide text-gray-600 mb-3`}
      >
        Our Services
      </p>
      <h1
        className={`${outfit.className} text-3xl sm:text-4xl md:text-5xl font-normal text-[#111] leading-tight`}
      >
        Add-on Services for a <br /> Deeper Clean
      </h1>
      <p
        className={`${outfit.className} text-sm font-normal text-[#111] mt-6 mb-8 leading-snug`}
      >
        Our services go beyond a basic cleaning. Before each visit, you can
        choose <br /> the add-ons that will make your life simpler.
      </p>

      {/* Cards Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        {addOns.map((item, index) => (
          <div
            key={index}
            className="bg-[#f7f8f4] rounded-[2rem] p-8 flex flex-col items-start shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            {/* Icon */}
            <div className="bg-white rounded-2xl p-3 shadow-sm mb-4">
              {item.icon}
            </div>

            {/* Price */}
            <p
              className={`${outfit.className} text-[#3ca200] text-sm font-medium mb-2`}
            >
              {item.price}
            </p>

            {/* Title */}
            <h3
              className={`${outfit.className} text-[#111] text-[15px] font-normal leading-snug text-left`}
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Button at the bottom */}
      <div className="mt-8">
        <button
          className={`${outfit.className} bg-[#f2d701] text-black px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300`}
        >
          Get a Free Quote
        </button>
      </div>
    </div>
  );
};

export default AddOnServices;
