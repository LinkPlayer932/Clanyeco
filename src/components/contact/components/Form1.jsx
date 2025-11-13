import React from "react";

import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

const Form1 = () => {
  return (
    <div className="container w-full px-6 md:px-12 py-20 bg-white">
      {/* Container */}
      <div className="flex flex-col md:flex-row gap-10 items-stretch">
        {/* Left Section - Form */}
        <div
          className={`${outfit.className} w-full md:w-1/2 bg-gradient-to-b from-[#f1d80c] via-[#e8f5d3] to-[#eaefab] rounded-3xl p-10 shadow-sm flex flex-col justify-between`}
        >
          <div>
            <p className="text-xs uppercase text-gray-600 font-medium mb-2">
              Get Your Free Estimate
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Get a Quote
            </h2>

            {/* Form */}
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full p-3 rounded-lg bg-white focus:ring-2 "
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. john@youremail.com"
                    className="w-full p-3 rounded-lg bg-white focus:ring-2 "
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. (1) 23 4567 891"
                    className="w-full p-3 rounded-lg bg-white focus:ring-2 "
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Total square footage
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 120"
                    className="w-full p-3 rounded-lg bg-white focus:ring-2 "
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Choose a service
                </label>
                <select className="w-full p-3 rounded-lg bg-white focus:ring-2">
                  <option>Select</option>
                  <option>Home Cleaning</option>
                  <option>Office Cleaning</option>
                  <option>Carpet Cleaning</option>
                </select>
              </div>

              <div className="flex items-start gap-2 text-xs text-gray-600">
                <input type="checkbox" className="mt-1" defaultChecked />
                <p>
                  By submitting this form, you agree to the processing of your
                  personal data in accordance with the General Data Protection
                  Regulation and our Privacy Policy.
                </p>
              </div>

              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-900 transition-all"
              >
                I’d Like a Quote
              </button>
            </form>
          </div>
        </div>

        {/* Right Section */}

        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {/* Image */}
          <div>
            <img
              src="/image2.webp"
              alt="Cleaning team"
              className="w-[100%] h-[100%] object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form1;
