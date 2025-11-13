// "use client";
// import React from "react";
// import Image from "next/image";
// import { CheckCircle } from "lucide-react";
// import { Outfit } from "next/font/google";

// const outfit = Outfit({ subsets: ["latin"] });

// const HeroSection = () => {
//   return (
//     <div className="relative w-full bg-white py-12 md:py-20 overflow-hidden">
//       {/* ===== Background Image ===== */}
//       <div className="absolute inset-0 w-full h-full z-z-10">
//         <img src="/image.webp" className="p-6 rounded-4xl" alt="" />
//       </div>

//       <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between z-20">
//         {/* ===== Left Content ===== */}
//         <div className="bg-[#f4f9e9]/90 rounded-3xl p-10 md:p-14 lg:p-16 justify-center w-full max-w-2xl shadow-sm backdrop-blur-sm">
//           <h1
//             className={`${outfit.className} text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6`}
//           >
//             Sparkly Residential <br /> and Commercial <br /> Cleaning Services
//           </h1>

//           <p
//             className={`${outfit.className} text-gray-600 text-base md:text-lg mb-8`}
//           >
//             Stop wasting your precious free time cleaning, relax while we make
//             your home sparkle!
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-wrap gap-4 mb-10">
//             <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-medium hover:bg-yellow-300 transition-all">
//               Free Quote
//             </button>
//             <button className="border border-green-600 text-green-700 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-all">
//               Our Services
//             </button>
//           </div>

//           {/* Features */}
//           <div className="flex flex-wrap gap-6">
//             <div className="flex items-center gap-2 text-gray-700">
//               <CheckCircle size={22} className="text-green-600" />
//               <span>Professional</span>
//             </div>
//             <div className="flex items-center gap-2 text-gray-700">
//               <CheckCircle size={22} className="text-green-600" />
//               <span>Friendly</span>
//             </div>
//             <div className="flex items-center gap-2 text-gray-700">
//               <CheckCircle size={22} className="text-green-600" />
//               <span>Convenient</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import React from "react";
import { CheckCircle } from "lucide-react";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

const HeroSection = () => {
  return (
    <section className="container mx-auto relative bg-white py-16 md:py-24 overflow-hidden">
      {/* ===== Background Image ===== */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/image.webp"
          alt="Background"
          loading="lazy"
          className="w-full h-full object-cover rounded-4xl"
        />
      </div>

      {/* ===== Light Overlay for Better Text Visibility ===== */}
      <div className="absolute inset-0 bg-black/5 rounded-4xl z-10"></div>

      {/* ===== Content Wrapper ===== */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-start px-6 md:px-10 lg:px-18">
        {/* ===== Left Content Box ===== */}
        <div
          className={`relative bg-[#f4f6f0] rounded-3xl p-8 md:p-12 lg:p-14 mt-6 md:mt-0
            w-full max-w-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)]
            hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]
            transition-transform duration-700 ease-in-out hover:-translate-y-1`}
          style={{
            transform: "perspective(1000px) rotateY(2deg) rotateX(-2deg)",
          }}
        >
          {/* ===== Decorative Leaf ===== */}
          <img
            src="/leaf.png"
            alt="Leaf Decoration"
            loading="lazy"
            className="absolute -top-6 -right-4 w-14 md:w-20 rotate-6"
          />

          {/* ===== Headline ===== */}
          <h1
            className={`${outfit.className} text-3xl md:text-4xl font-normal text-black leading-tight mb-6`}
          >
            Sparkly Residential <br /> and Commercial <br /> Cleaning Services
          </h1>

          {/* ===== Subtext ===== */}
          <p
            className={`${outfit.className} text-gray-600 text-base md:text-lg mb-8`}
          >
            Stop wasting your precious free time cleaning — relax while we make
            your home sparkle!
          </p>

          {/* ===== Buttons ===== */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button
              className={`${outfit.className} bg-yellow-400 text-black px-8 py-3 rounded-full text-sm hover:bg-yellow-300 transition-all`}
            >
              Free Quote
            </button>
            <button
              className={`${outfit.className} border border-green-600 text-green-700 px-8 py-3 rounded-full text-sm hover:bg-green-50 transition-all`}
            >
              Our Services
            </button>
          </div>

          {/* ===== Features ===== */}
          <div className="flex flex-wrap gap-6">
            {["Professional", "Friendly", "Convenient"].map((item) => (
              <div
                key={item}
                className={`${outfit.className} flex items-center gap-2 text-gray-700`}
              >
                <CheckCircle size={22} className="text-green-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;