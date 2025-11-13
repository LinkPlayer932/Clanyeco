// import React from "react";
// import { Outfit } from "next/font/google";
// import { MessageSquareQuote } from "lucide-react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import Image from "next/image";

// const outfit = Outfit({ subsets: ["latin"] });

// const Testimonials = () => {
//   return (
//     <div className="container mx-auto bg-[#f8faf3] rounded-4xl py-16 px-4 md:px-10 text-center relative overflow-hidden">
//       <div>
//         <p
//           className={`${outfit.className} text-xs sm:text-sm uppercase tracking-wide text-gray-600 mb-2`}
//         >
//           Testimonials
//         </p>
//         <h2
//           className={`${outfit.className} text-3xl sm:text-4xl md:text-5xl font-normal text-[#111] mb-12`}
//         >
//           Empowering Thousands of
//           <br /> Users and Enterprises
//         </h2>
//       </div>

//       {/* Scrollable Container */}
//       <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 p-10 bg-[#f7f9f3] scrollbar-hide ">
//         {/* Card 1 */}
//         <div className="bg-white rounded-2xl w-full md:w-[45%] flex-shrink-0 p-12 flex flex-col text-left shadow-sm hover:shadow-md transition-all duration-300 snap-center">
//           <MessageSquareQuote color="#000000" size={28} className="mb-4" />
//           <p className="text-gray-800 leading-relaxed mb-6">
//             Amazing and highly efficient, met all my expectations and more, they
//             were there on time and left my duplex in pristine conditions. Thank
//             Clany Eco.
//           </p>
//           <div className="flex items-center gap-3">
//             <img
//               src="/image4.png"
//               alt="Jessica Clark"
//               className="w-10 h-10 rounded-full"
//             />
//             <div>
//               <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
//                 Jessica Clark
//               </h4>
//               <p className="text-xs text-gray-500">Customer</p>
//             </div>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-white rounded-2xl w-full md:w-[45%] flex-shrink-0 p-12 flex flex-col text-left shadow-sm hover:shadow-md transition-all duration-300 snap-center">
//           <MessageSquareQuote color="#000000" size={28} className="mb-4" />
//           <p className="text-gray-800 leading-relaxed mb-6">
//             Amazing and highly efficient, met all my expectations and more, they
//             were there on time and left my duplex in pristine conditions. Thank
//             Clany Eco.
//           </p>

//           <div className="flex items-center gap-3">
//             <img
//               src="/image3.png"
//               alt="Carlos Moya"
//               className="w-10 h-10 rounded-full"
//             />
//             <div>
//               <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
//                 Carlos Moya
//               </h4>
//               <p className="text-xs text-gray-500">Customer</p>
//             </div>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-white rounded-2xl w-full md:w-[45%] flex-shrink-0 p-12 flex flex-col text-left shadow-sm hover:shadow-md transition-all duration-300 snap-center">
//           <MessageSquareQuote color="#000000" size={28} className="mb-4" />
//           <p className="text-gray-800 leading-relaxed mb-6">
//             Fantastic service! The team exceeded expectations and provided
//             outstanding results every time. Highly recommend Clany Eco.
//           </p>
//           <div className="flex items-center gap-3">
//             <img
//               src="/image5.png"
//               alt="Emily Watson"
//               className="w-10 h-10 rounded-full"
//             />
//             <div>
//               <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
//                 Emily Watson
//               </h4>
//               <p className="text-xs text-gray-500">Customer</p>
//             </div>
//           </div>
//         </div>

//         {/* Card 4 */}
//         <div className="bg-white rounded-2xl w-full md:w-[45%] flex-shrink-0 p-12 flex flex-col text-left shadow-sm hover:shadow-md transition-all duration-300 snap-center">
//           <MessageSquareQuote color="#000000" size={28} className="mb-4" />
//           <p className="text-gray-800 leading-relaxed mb-6">
//             Clany Eco provided an amazing experience. Their staff was punctual,
//             polite, and very professional. My house looks brand new!
//           </p>
//           <div className="flex items-center gap-3">
//             <img
//               src="/image6.png"
//               alt="John Carter"
//               className="w-10 h-10 rounded-full"
//             />
//             <div>
//               <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
//                 John Carter
//               </h4>
//               <p className="text-xs text-gray-500">Customer</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
"use client";

import React from "react";
import { Outfit } from "next/font/google";
import { motion } from "framer-motion";
import { MessageSquareQuote } from "lucide-react";

const outfit = Outfit({ subsets: ["latin"] });

const testimonials = [
  {
    quote:
      "Amazing and highly efficient, met all my expectations and more, they were there on time and left my duplex in pristine conditions. Thank Clany Eco.",
    name: "Jessica Clark",
    image: "/image4.png",
  },
  {
    quote:
      "Fantastic service! The team exceeded expectations and provided outstanding results every time. Highly recommend Clany Eco.",
    name: "Carlos Moya",
    image: "/image3.png",
  },
  {
    quote:
      "Clany Eco provided an amazing experience. Their staff was punctual, polite, and very professional. My house looks brand new!",
    name: "Emily Watson",
    image: "/image5.png",
  },
  {
    quote:
      "Superb and professional — they made the entire process smooth and enjoyable. Definitely coming back again!",
    name: "John Carter",
    image: "/image6.png",
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto bg-[#f8faf3] rounded-4xl py-16 px-4 md:px-10 text-center relative overflow-hidden">
      <div>
        <p
          className={`${outfit.className} text-xs sm:text-sm uppercase tracking-wide text-gray-600 mb-2`}
        >
          Testimonials
        </p>
        <h2
          className={`${outfit.className} text-3xl sm:text-4xl md:text-5xl font-normal text-[#111] mb-12`}
        >
          Empowering Thousands of
          <br /> Users and Enterprises
        </h2>
      </div>

      {/* Auto-scrolling container */}
      <div className="overflow-hidden relative bg-[#f7f9f3] p-6 sm:p-10 rounded-3xl">
        <motion.div
          className="flex gap-6"
          animate={{
            x: ["0%", "-90%"], // smooth infinite scroll
          }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {/* Duplicate list for seamless looping */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl w-[90%] sm:w-[60%] md:w-[45%] flex-shrink-0 p-6 sm:p-10 md:p-12 flex flex-col text-left shadow-sm hover:shadow-md transition-all duration-300"
            >
              <MessageSquareQuote color="#000000" size={28} className="mb-4" />
              <p className="text-gray-800 leading-relaxed mb-6 text-sm sm:text-base">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-500">Customer</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
