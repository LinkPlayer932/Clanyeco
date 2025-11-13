import React from "react";
import { Outfit } from "next/font/google";
import { Mail, PhoneCallIcon, LocationEdit, Calendar1Icon } from "lucide-react";

const outfit = Outfit({ subsets: ["latin"] });

const Hero1 = () => {
  return (
    <div
      className={`${outfit.className} relative bg-white flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 py-20 overflow-hidden z-10`}
    >
      {/* Section Header */}
      <div className="container flex flex-col items-center justify-center text-center mb-14 px-4">
        <h3 className="text-[40px] sm:text-4xl font-normal mb-4 text-[#111] tracking-tight">
          Our Mission & Values
        </h3>
        <p className="text-base sm:text-lg max-w-2xl text-gray-600 leading-relaxed">
          Clany Eco Cleaning’s mission is to provide exceptional service that
          gives clients more free time while fostering financial stability and a
          positive, empowering environment for our technicians. We are committed
          to reducing our carbon footprint through advanced green technologies
          and sustainable practices.
        </p>
      </div>

      {/* Feature Boxes */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full pt-10">
        {/* Card 1 */}
        <div
          className="bg-[#e8f5d3] rounded-[1.5rem] p-8 text-start shadow-md hover:shadow-xl transition-all duration-300"
          style={{ transform: "skewY(2deg) rotate(0.5deg)" }}
        >
          <div style={{ transform: "skewY(-2deg)" }}>
            <div className="flex justify-start mb-5">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Mail className="text-[#3ca200]" size={28} />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-black">
              Dependable Team
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Our Clany Eco team members are friendly and professional, and you
              can count on them to take good care of your place.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="bg-[#e8f5d3] rounded-[1.5rem] p-8 text-start shadow-md hover:shadow-xl transition-all duration-300"
          style={{ transform: "skewY(2deg) rotate(0.5deg)" }}
        >
          <div style={{ transform: "skewY(-2deg)" }}>
            <div className="flex justify-start mb-5">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <PhoneCallIcon className="text-[#3ca200]" size={28} />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-black">
              Eco-Innovation
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We’re at the forefront of eco-friendly cleaning, pioneering
              innovative practices that safeguard the environment.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="bg-[#e8f5d3] rounded-[1.5rem] p-8 text-start shadow-md hover:shadow-xl transition-all duration-300"
          style={{ transform: "skewY(-2deg) rotate(-0.5deg)" }}
        >
          <div style={{ transform: "skewY(2deg)" }}>
            <div className="flex justify-start mb-5">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <LocationEdit className="text-[#3ca200]" size={28} />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-black">
              Empowerment Ethos
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Our culture of empowerment and fairness ensures that every
              employee thrives in a community where growth, respect, and job
              satisfaction are paramount.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="bg-[#e8f5d3] rounded-[1.5rem] p-8 text-start shadow-md hover:shadow-xl transition-all duration-300"
          style={{ transform: "skewY(-2deg) rotate(-0.5deg)" }}
        >
          <div style={{ transform: "skewY(2deg)" }}>
            <div className="flex justify-start mb-5">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Calendar1Icon className="text-[#3ca200]" size={28} />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-black">
              Client Excellence
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We’re in the business of enhancing lives, providing top-tier,
              health-focused cleaning solutions that give our clients more time
              to enjoy what matters most.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
