"use client";
import React from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export default function BookingForm() {
  return (
    <div className={`${outfit.className} w-full bg-[#E8F6D7] p-15 rounded-3xl max-w-7xl mx-auto mt-5`}>
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-gray-900">
        Get Your Estimate & Book Now
      </h1>

      {/* Steps */}
      <div className="flex items-center justify-between w-full mt-8 px-10">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full">
            1
          </div>
        </div>

        <div className="flex-1 h-[2px] bg-gray-300 mx-3"></div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 bg-white text-gray-700 rounded-full border">
            2
          </div>
        </div>

        <div className="flex-1 h-[2px] bg-gray-300 mx-3"></div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 bg-white text-gray-700 rounded-full border">
            3
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT SIDE FORM */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-700 block mb-1">Service</label>
              <select className="w-full p-3 border rounded-xl bg-white">
                <option>Select service that fits you best</option>
                <option>Airbnb Cleaning</option>
                <option>Apartment Cleaning</option>
                <option>Deep Cleaning</option>
                <option>Office Cleaning</option>
                <option>House Cleaning</option>
                <option>Move in out Cleaning</option>
                <option>Redurring Cleaning</option>
                <option>Post Construction Cleaning</option>
                <option>Pre Construction Cleaning</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700 block mb-1">Bedrooms</label>
              <select className="w-full p-3 border rounded-xl bg-white">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700 block mb-1">Bathrooms</label>
              <select className="w-full p-3 border rounded-xl bg-white">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700 block mb-1">Extras</label>
              <select className="w-full p-3 border rounded-xl bg-white">
                <option>Select</option>
                <option>inside Empty Refrigerator</option>
                <option>Clean Exterior of Kitchen Cabinats</option>
                <option>Interior Cleaning</option>
                <option>Inside single Owen</option>
                <option>inside Double Owen</option>
                <option>Dish washer</option>
                <option>Flod Clothes</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700 block mb-1">Frequency</label>
              <select className="w-full p-3 border rounded-xl bg-white">
                <option>Select</option>
                <option>3 weeks</option>
                <option>6 weeks</option>
                <option>1 month</option>
                <option>2 months</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700 block mb-1">Square ft</label>
              <input
                type="text"
                placeholder="e.g. 1000 sq ft"
                className="w-full p-3 border rounded-xl bg-white"
              />
            </div>

            <div>
              <label className="text-gray-700 block mb-1">Date</label>
              <input
                type="date"
                className="w-full p-3 border rounded-xl bg-white"
              />
            </div>

            <div>
              <label className="text-gray-700 block mb-1">Time</label>
              <input
                type="time"
                defaultValue="08:00"
                className="w-full p-3 border rounded-xl bg-white"
              />
            </div>
          </div>

          <button className="mt-8 bg-yellow-400 px-10 py-3 rounded-full text-black font-semibold hover:bg-yellow-500">
            Continue
          </button>
        </div>

        {/* IMAGE CARD */}
        <div className="flex justify-center">
          <div className="relative w-[280px] h-[380px] rounded-3xl overflow-hidden shadow-lg bg-gradient-to-b from-white to-[#D6CBA9]">
            {/* Image */}
            <img
              src="/image3.png"
              alt="Cleaning"
              className="w-full h-full object-cover rounded-3xl"
            />

            {/* Badge + Text */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <h3 className="text-black text-3xl font-bold mt-2 drop-shadow-md">
                100%
              </h3>

              <p className="text-black text-sm drop-shadow-md">
                Happy customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
