import React from 'react'
import { Outfit } from 'next/font/google'
import { ChevronRight, Calendar, SprayCan, HandHeart, ShieldCheck } from 'lucide-react'

const outfit = Outfit({ subsets: ['latin'] })

const WhatWeDo = () => {
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
          The Clany Eco Difference
        </h2>
      </div>


      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full pt-20">

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
            <h3 className="text-3xl text-[18px] mb-2 text-black">
              Flat Rate Pricing and No Hidden Fees
            </h3>
          </div>
        </div>

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
            <h3 className="text-3xl text-[18px] mb-2 text-black">
              Flexible Times for Recurring Cleanings

            </h3>
          </div>
        </div>


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
            <h3 className="text-3xl text-[18px] mb-2 text-black">
              Our Staff Members Are All Employees (not contractors)

            </h3>
          </div>
        </div>


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
            <h3 className="text-3xl text-[18px] mb-2 text-black">
              Our Cleaning Specialists Are Bonded and Insured
            </h3>
          </div>
        </div>
      </div>
      </div>
  )
}

export default WhatWeDo
