// import React from "react";
// import { Outfit } from "next/font/google";
// import { Calendar, SprayCan, HandHeart, ShieldCheck } from "lucide-react";

// const outfit = Outfit({ subsets: ["latin"] });

// const WhyChooseUs = () => {
//   return (
//     <div className="relative bg-[#3ca200] rounded-[2rem] flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 py-20 overflow-hidden z-10">
//       {/* Section Header */}
//       <div
//         className={`${outfit.className} container flex flex-col items-center justify-center text-center mb-12`}
//       >
//         <h3 className="text-sm uppercase text-white mb-3 tracking-widest">
//           Why Choose Us
//         </h3>
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white max-w-2xl leading-snug">
//           We Are Experienced & We Have Expert Teams
//         </h2>
//       </div>

//       {/* Feature Boxes */}
//       <div className=" container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full pt-20">
//         {/* Card 1 */}
//         <div
//           className="bg-[#e8f5d3] rounded-[1.5rem] p-6 text-start shadow-md hover:shadow-xl transition-all duration-300"
//           style={{
//             transform: "skewY(2deg) rotate(0.5deg)", // gives that angled look
//           }}
//         >
//           <div>
//             <div className="flex justify-start mb-4">
//               <div className="bg-white p-3 rounded-full shadow-sm">
//                 <ShieldCheck className="text-[#3ca200]" size={28} />
//               </div>
//             </div>
//             <h3 className="text-3xl text-[24px] mb-2 text-black">
//               Free Quote & Instant Pricing
//             </h3>
//             <p className="text-sm text-gray-700">
//               Get instant pricing and get your free quote cleaning all online.
//             </p>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div
//           className="bg-[#e8f5d3] rounded-[1.5rem] p-6 text-start shadow-md hover:shadow-xl transition-all duration-300"
//           style={{
//             transform: "skewY(2deg) rotate(0.5deg)", // gives that angled look
//           }}
//         >
//           <div>
//             <div className="flex justify-start mb-4">
//               <div className="bg-white p-3 rounded-full shadow-sm">
//                 <ShieldCheck className="text-[#3ca200]" size={28} />
//               </div>
//             </div>
//             <h3 className="text-3xl text-[24px] mb-2 text-black">
//               Equipment & Supplies Provided
//             </h3>
//             <p className="text-sm text-gray-700">
//               Our cleaners provide all the essential equipment & supplies.
//             </p>
//           </div>
//         </div>

//         {/* Card 3 */}

//         <div
//           className="bg-[#e8f5d3] rounded-[1.5rem] p-6 text-start shadow-md hover:shadow-xl transition-all duration-300"
//           style={{
//             transform: "skewY(-2deg) rotate(-0.5deg)", // gives that angled look
//           }}
//         >
//           <div style={{ transform: "skewY(2deg)" }}>
//             <div className="flex justify-start mb-4">
//               <div className="bg-white p-3 rounded-full shadow-sm">
//                 <ShieldCheck className="text-[#3ca200]" size={28} />
//               </div>
//             </div>
//             <h3 className="text-3xl text-[24px] mb-2 text-black">
//               100% Satisfaction Guarantee
//             </h3>
//             <p className="text-sm text-gray-700">
//               If you’re not happy with your cleaning, we’ll fix it for free.
//             </p>
//           </div>
//         </div>

//         {/* Card 4 */}
//         <div
//           className="bg-[#e8f5d3] rounded-[1.5rem] p-6 text-start shadow-md hover:shadow-xl transition-all duration-300"
//           style={{
//             transform: "skewY(-2deg) rotate(-0.5deg)", // gives that angled look
//           }}
//         >
//           <div style={{ transform: "skewY(2deg)" }}>
//             <div className="flex justify-start mb-4">
//               <div className="bg-white p-3 rounded-full shadow-sm">
//                 <ShieldCheck className="text-[#3ca200]" size={28} />
//               </div>
//             </div>
//             <h3 className="text-3xl text-[24px] mb-2 text-black">
//               Vetted & Background Checked Cleaners
//             </h3>
//             <p className="text-sm text-gray-700">
//               Our cleaners go through a rigorous process to ensure safety.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="container grid grid-cols-2 sm:grid-cols-4 gap-6 mt-18 text-white text-center pt-10">
//         <div
//           className={`${outfit.className} border-l border-[#ededed] text-left tracking-widest pl-6`}
//         >
//           <h3 className="text-4xl font-normal">15+</h3>
//           <p className="text-sm opacity-90">years experience</p>
//         </div>
//         <div
//           className={`${outfit.className} border-l border-[#ededed] text-left tracking-widest pl-6`}
//         >
//           <h3 className="text-4xl font-normal">10+</h3>
//           <p className="text-sm opacity-90">homes cleaned last year</p>
//         </div>
//         <div
//           className={`${outfit.className} border-l border-[#ededed] text-left tracking-widest pl-6`}
//         >
//           <h3 className="text-4xl font-normal">500+</h3>
//           <p className="text-sm opacity-90">hours saved for clients</p>
//         </div>
//         <div
//           className={`${outfit.className} border-l border-[#ededed] text-left tracking-widest pl-6`}
//         >
//           <h3 className="text-4xl font-normal">95%</h3>
//           <p className="text-sm opacity-90">repeat clients</p>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default WhyChooseUs;

import React from "react";
import { Outfit } from "next/font/google";
import { Calendar, SprayCan, HandHeart, ShieldCheck } from "lucide-react";

const outfit = Outfit({ subsets: ["latin"] });

const WhyChooseUs = () => {
  return (
    <div className="relative bg-[#3ca200] rounded-[2rem] flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 py-20 overflow-hidden z-10">
      {/* Section Header */}
      <div
        className={`${outfit.className} container flex flex-col items-center justify-center text-center mb-12`}
      >
        <h3 className="text-sm uppercase text-white mb-3 tracking-widest">
          Why Choose Us
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white max-w-2xl leading-snug">
          We Are Experienced & We Have Expert Teams
        </h2>
      </div>

      {/* Feature Boxes */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full pt-20">
        {/* Card 1 */}
        <div
          className="bg-[#e8f5d3] rounded-[1.5rem] p-6 text-start shadow-md hover:shadow-xl transition-all duration-300"
          style={{ transform: "skewY(2deg) rotate(0.5deg)" }}
        >
          <div style={{ transform: "skewY(-2deg)" }}>
            <div className="flex justify-start mb-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Calendar className="text-[#3ca200]" size={28} />
              </div>
            </div>
            <h3 className="text-3xl text-[24px] mb-2 text-black">
              Free Quote & Instant Pricing
            </h3>
            <p className="text-sm text-gray-700">
              Get instant pricing and get your free quote cleaning all online.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="bg-[#e8f5d3] rounded-[1.5rem] p-6 text-start shadow-md hover:shadow-xl transition-all duration-300"
          style={{ transform: "skewY(2deg) rotate(0.5deg)" }}
        >
          <div style={{ transform: "skewY(-2deg)" }}>
            <div className="flex justify-start mb-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <SprayCan className="text-[#3ca200]" size={28} />
              </div>
            </div>
            <h3 className="text-3xl text-[24px] mb-2 text-black">
              Equipment & Supplies Provided
            </h3>
            <p className="text-sm text-gray-700">
              Our cleaners provide all the essential equipment & supplies.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="bg-[#e8f5d3] rounded-[1.5rem] p-6 text-start shadow-md hover:shadow-xl transition-all duration-300"
          style={{ transform: "skewY(-2deg) rotate(-0.5deg)" }}
        >
          <div style={{ transform: "skewY(2deg)" }}>
            <div className="flex justify-start mb-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <HandHeart className="text-[#3ca200]" size={28} />
              </div>
            </div>
            <h3 className="text-3xl text-[24px] mb-2 text-black">
              100% Satisfaction Guarantee
            </h3>
            <p className="text-sm text-gray-700">
              If you’re not happy with your cleaning, we’ll fix it for free.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="bg-[#e8f5d3] rounded-[1.5rem] p-6 text-start shadow-md hover:shadow-xl transition-all duration-300"
          style={{ transform: "skewY(-2deg) rotate(-0.5deg)" }}
        >
          <div style={{ transform: "skewY(2deg)" }}>
            <div className="flex justify-start mb-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <ShieldCheck className="text-[#3ca200]" size={28} />
              </div>
            </div>
            <h3 className="text-3xl text-[24px] mb-2 text-black">
              Vetted & Background Checked Cleaners
            </h3>
            <p className="text-sm text-gray-700">
              Our cleaners go through a rigorous process to ensure safety.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container grid grid-cols-2 sm:grid-cols-4 gap-6 mt-18 text-white text-center pt-10">
        <div
          className={`${outfit.className} border-l border-[#ededed] text-left tracking-widest pl-6`}
        >
          <h3 className="text-4xl font-normal">15+</h3>
          <p className="text-sm opacity-90">years experience</p>
        </div>
        <div
          className={`${outfit.className} border-l border-[#ededed] text-left tracking-widest pl-6`}
        >
          <h3 className="text-4xl font-normal">10+</h3>
          <p className="text-sm opacity-90">homes cleaned last year</p>
        </div>
        <div
          className={`${outfit.className} border-l border-[#ededed] text-left tracking-widest pl-6`}
        >
          <h3 className="text-4xl font-normal">500+</h3>
          <p className="text-sm opacity-90">hours saved for clients</p>
        </div>
        <div
          className={`${outfit.className} border-l border-[#ededed] text-left tracking-widest pl-6`}
        >
          <h3 className="text-4xl font-normal">95%</h3>
          <p className="text-sm opacity-90">repeat clients</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
