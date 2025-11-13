"use client";
import React, { useState } from "react";
import { Outfit } from "next/font/google";
import { Plus, Minus } from "lucide-react";

const outfit = Outfit({ subsets: ["latin"] });

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are you bonded and insured?",
      answer:
        "Yes, our cleaners are fully bonded and insured for your peace of mind.",
    },
    {
      question: "What is the cost of my cleaning?",
      answer:
        "The cost depends on your home size and selected add-ons. Get an instant estimate on our booking page.",
    },
    {
      question: "Should I tip my cleaner?",
      answer:
        "Tipping is not required but always appreciated. You can tip in cash or add it to your payment.",
    },
    {
      question: "What if something in my home gets broken?",
      answer:
        "We take great care during every cleaning, but in the rare case of damage, we will make it right as quickly as possible.",
    },
  ];

  return (
    <div className="w-full py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div className="text-left">
          <p
            className={`${outfit.className} text-xs sm:text-sm uppercase tracking-wide text-gray-500 mb-4`}
          >
            FAQs
          </p>

          <h1
            className={`${outfit.className} text-3xl sm:text-4xl md:text-5xl font-medium text-[#111] leading-tight mb-8`}
          >
            Frequently Asked <br /> Questions
          </h1>

          <div className="bg-gradient-to-r from-[#f2d701] to-[#dff3c1] rounded-[2rem] p-10 max-w-md shadow-sm">
            <p
              className={`${outfit.className} text-lg font-medium text-[#111] mb-6 leading-snug`}
            >
              Do You Want to Learn More About Our Cleaning Process?
            </p>
            <button
              className={`${outfit.className} bg-white text-black text-sm font-medium px-8 py-3 rounded-full shadow hover:scale-105 transition-all duration-300`}
            >
              Cleaning Process
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#f7f8f4] rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span
                  className={`${outfit.className} text-[16px] font-normal text-[#111]`}
                >
                  {faq.question}
                </span>
                <span className="text-[#3ca200]">
                  {openIndex === index ? (
                    <Minus size={20} strokeWidth={2} />
                  ) : (
                    <Plus size={20} strokeWidth={2} />
                  )}
                </span>
              </button>

              {/* Accordion Answer */}
              {openIndex === index && (
                <p
                  className={`${outfit.className} text-gray-600 text-sm mt-3 leading-relaxed`}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
