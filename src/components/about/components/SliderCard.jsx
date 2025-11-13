// import React from "react";
// import { Outfit } from "next/font/google";
// import { CheckCircle } from "lucide-react";

// const outfit = Outfit({ subsets: ["latin"] }); // ✅ must be top-level and unconditional

// const WhyUs = () => {
//   return (
//     <div
//       className={`${outfit.className} container mx-auto py-14 px-4 gap-8 text-center`}
//     >
//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#111] leading-tight mb-6">
//         Cleaning with Integrity and <br /> Respect
//       </h2>

//       <div className=" flex flex-row  items-center justify-between gap-8 p-20">
//         <div className="flex flex-col bg-[#ffffff] w-full max-w-md rounded-2xl p-10 items-start justify-start shadow-md">
//           <h4 className="text-gray-800 text-[26px] font-normal text-start mb-4">
//             Affordable, Transparent Pricing
//           </h4>
//           <p className="text-gray-700 text-[16px] text-start  leading-relaxed">
//             You can shop around, but you won’t find better value for the level
//             of service we provide. At Clany Eco, we offer competitive rates with
//             no hidden fees—ever. Plus, we stand behind our work with a
//             satisfaction guarantee. If you’re not completely happy with the job,
//             we’ll make it right.
//           </p>
//         </div>

//         <div className="flex flex-col bg-[#ffffff] w-full max-w-md rounded-2xl p-10 items-start justify-start shadow-md">
//           <h4 className="text-gray-800 text-[26px] font-normal text-start mb-4">
//             Commitment to Quality
//           </h4>
//           <p className="text-gray-700 text-[16px] text-start  leading-relaxed">
//             We’re dedicated to providing exceptional care every time. Our team
//             holds itself to the highest standards of cleanliness, ensuring your
//             home receives the same level of attention we’d give our own. We’re
//             constantly striving to exceed your expectations, using the best
//             cleaning methods and eco-friendly products to ensure your home is
//             spotless and safe.
//           </p>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default WhyUs;


"use client";
import React, { useRef } from "react";
import { Outfit } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";

const outfit = Outfit({ subsets: ["latin"] });

const WhyUsTimeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  // Line color transition (white → green)
  const background = useTransform(scrollYProgress, [0, 1], ["#ffffff", "#3ca200"]);

  // Moving green dot position (top → bottom)
  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const cards = [
    {
      title: "Affordable, Transparent Pricing",
      text: "You can shop around, but you won’t find better value for the level of service we provide. At Clany Eco, we offer competitive rates with no hidden fees—ever. Plus, we stand behind our work with a satisfaction guarantee. If you’re not completely happy with the job, we’ll make it right.",
    },
    {
      title: "Commitment to Quality",
      text: "We’re dedicated to providing exceptional care every time. Our team holds itself to the highest standards of cleanliness, ensuring your home receives the same level of attention we’d give our own. We’re constantly striving to exceed your expectations, using eco-friendly products to ensure your home is spotless and safe.",
    },
    {
      title: "Personalized Cleaning Service",
      text: "Your home is unique, and so are your cleaning needs. That’s why we offer customized cleaning plans for your specific requirements. Whether you need a regular clean, deep clean, or move-in service, our team is adaptable to your schedule, ensuring you’re comfortable with our methods.",
    },
    {
      title: "Dependable, Professional Team",
      text: "Our team is the heart of Clany Eco, and we take pride in hiring only the most reliable, trustworthy, and detail-focused cleaners. Our professionals are friendly, efficient, and dedicated to exceeding your expectations. They take pride in delivering spotless results—leaving your home shining and fresh every time.",
    },
  ];

  return (
    <div
      ref={ref}
      className={`${outfit.className} relative flex flex-col items-center justify-center bg-[#f9faf6] py-20 px-4 sm:px-8 md:px-16 overflow-hidden`}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
          Why Us
        </p>
        <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-snug">
          Cleaning with Integrity and Respect
        </h2>
      </div>

      {/* Scroll Timeline */}
      <div className="relative w-full max-w-6xl">
        {/* Vertical line */}
        <motion.div
          style={{ background }}
          className="absolute left-1/2 top-0 bottom-0 w-[3px] rounded-full"
        />

        {/* Moving dot */}
        <motion.div
          style={{ y: dotY }}
          className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#3ca200] rounded-full border-[6px] border-white shadow-lg z-10"
        />

        {/* Cards */}
        <div className="flex flex-col space-y-24 relative z-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                className={`bg-white shadow-md rounded-2xl p-8 md:w-[45%] w-full ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                  {card.title}
                </h4>
                <p className="text-gray-700 text-[16px] leading-relaxed">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUsTimeline;
