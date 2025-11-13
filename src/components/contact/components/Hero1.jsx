import React from "react";
import { Outfit } from "next/font/google";
import { Calendar, SprayCan, HandHeart, ShieldCheck, Mail, PhoneCallIcon, LocationEdit, WorkflowIcon, Calendar1Icon } from "lucide-react";

const outfit = Outfit({ subsets: ["latin"] });

const Hero1 = () => {
  return (
    <div
      className={`${outfit.className} relative bg-[#ffffff]  flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 py-20 overflow-hidden z-10`}
    >
      {/* Section Header */}
      <div className="container flex flex-col items-center justify-center text-center mb-12">
        <h3 className="text-sm uppercase  mb-3 tracking-widest">Contact us</h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal max-w-2xl leading-snug">
          Contact Us Today
        </h2>
      </div>

      {/* Feature Boxes */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full pt-20">
        {/* Card 1 */}
        <div
          className="bg-[#f4f6f0] rounded-[1.5rem] p-6 text-start shadow-md hover:shadow-xl transition-all duration-300"
          style={{ transform: "skewY(2deg) rotate(0.5deg)" }}
        >
          <div style={{ transform: "skewY(-2deg)" }}>
            <div className="flex justify-start mb-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Mail className="text-[#3ca200]" size={28} />
              </div>
            </div>
            <h3 className="text-3xl text-[24px] mb-2 text-black">Email Us</h3>
            <a
              href="mailto:contact@clanyeco.com"
              className="mb-4 leading-relaxed text-medium text-gray-600"
            >
              contact@clanyeco.com
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="bg-[#f4f6f0] rounded-[1.5rem] p-6 text-start shadow-md hover:shadow-xl transition-all duration-300"
          style={{ transform: "skewY(2deg) rotate(0.5deg)" }}
        >
          <div style={{ transform: "skewY(-2deg)" }}>
            <div className="flex justify-start mb-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <PhoneCallIcon className="text-[#3ca200]" size={28} />
              </div>
            </div>
            <h3 className="text-3xl text-[24px] mb-2 text-black">Call Us</h3>
            <a
              href="tel:+11805678990"
              className="mb-4 leading-relaxed text-medium text-gray-600"
            >
              +1 (180) 567-8990
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="bg-[#f4f6f0] rounded-[1.5rem] p-6 text-start shadow-md hover:shadow-xl transition-all duration-300"
          style={{ transform: "skewY(-2deg) rotate(-0.5deg)" }}
        >
          <div style={{ transform: "skewY(2deg)" }}>
            <div className="flex justify-start mb-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <LocationEdit className="text-[#3ca200]" size={28} />
              </div>
            </div>
            <h3 className="text-3xl text-[24px] mb-2 text-black">
              Our Location
            </h3>
            <p className="mb-4 leading-relaxed text-medium text-gray-600">
              72 Kneeland St, Suite 305,
              <br />
              New York, MA 02111
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="bg-[#f4f6f0] rounded-[1.5rem] p-6 text-start shadow-md hover:shadow-xl transition-all duration-300"
          style={{ transform: "skewY(-2deg) rotate(-0.5deg)" }}
        >
          <div style={{ transform: "skewY(2deg)" }}>
            <div className="flex justify-start mb-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Calendar1Icon className="text-[#3ca200]" size={28} />
              </div>
            </div>
            <h3 className="text-3xl text-[24px] mb-2 text-black">
              Working Hours
            </h3>
            <ul
              className={`${outfit.className} space-y-1 text-medium text-gray-600`}
            >
              <li>
                Mon – Fri: <span className="ml-1">9.00am – 8.00pm</span>
              </li>
              <li>
                Saturday: <span className="ml-1">10.00am – 8.00pm</span>
              </li>
              <li>
                Sunday: <span className="ml-1">10.00am – 4.00pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
