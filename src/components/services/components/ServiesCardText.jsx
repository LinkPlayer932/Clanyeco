import React from "react";
import { Outfit } from "next/font/google";
import { ChevronRight } from "lucide-react";

const outfit = Outfit({ subsets: ["latin"] });

const ServiesCardText = () => {
  const services = [
    {
      title: "House Cleaning",
      image: "/image2.webp",
      description:
        "Our professional home cleaning services are designed to give you a spotless home without the hassle. We provide customized cleaning that fits your needs and schedule. We provide customized cleaning that fits.",
    },
    {
      title: "Office Cleaning",
      image: "/image11.png",
      description:
        "If you need recurring cleaning at the office or you just want us to come for a one-off visit, we can accommodate you. We clean for parties and other special events, and we can make your office space look its best.",
    },
    {
      title: "Move In / Out Cleaning",
      image: "/image9.png",
      description:
        "You’ve packed up and are ready to move into your new home, but the place you’re leaving behind still needs a thorough cleaning. Moving out can be stressful, and cleaning may be the last thing on your mind.",
    },
    {
      title: "Deep Cleaning",
      image: "/image10.png",
      description:
        "Are there parts of your homeland you just never feel like cleaning because they’re too much of a challenge? Maybe you’re thinking of the oven or the basement and you dread having to clean these areas.",
    },
    {
      title: "Post construction cleaning",
      image: "/image6.png",
      description:
        "In the bustling world of construction, the final stages of a project often steal the spotlight, but there’s a crucial detail that should never be overlooked – post-construction cleaning. We can provide expert cleaning. ",
    },
    {
      title: "Recurring cleaning",
      image: "/image15.webp",
      description:
        "If you need to schedule cleaning services weekly, monthly, or on some other regular schedule, give us a call. We can provide scheduled cleaning services as often as you need, with special discounts for recurring visits.",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#f5f6f1] to-[#fefffc] rounded-4xl text-black py-20 px-5 md:px-10 text-center">

      <div className="max-w-4xl mx-auto mb-20">
        <p
          className={`${outfit.className} text-xs sm:text-sm uppercase tracking-wide text-gray-600 mb-2`}
        >
          Our Services
        </p>
        <h1
          className={`${outfit.className} text-3xl sm:text-4xl md:text-5xl font-normal text-[#111]`}
        >
          Services We Provide
        </h1>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#e8e8e8] rounded-[1.5rem] p-10 flex flex-col items-start  shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image */}
            <div
              className="w-full overflow-hidden mb-10 rounded-[1.5rem]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 90%, 85% 100%, 0 100%)",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
            </div>

            {/* Title */}
            <h3
              className={`${outfit.className} text-2xl font-medium text-gray-900 mb-8`}
            >
              {service.title}
            </h3>

            <p className="text-gray-600 text-left w-full mb-10 text-[15px] leading-relaxed">
              {service.description}
            </p>

            <a
              href="/"
              className={`${outfit.className} group relative flex items-center justify-between w-full bg-[#f2d701] text-black px-6 py-2 rounded-full font-medium shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-lg`}
            >

              <span className="text-[16px] tracking-wide">Learn more</span>

              <span className="flex items-center justify-center bg-[#e8f5d3] text-[#3ca200] rounded-full p-1.5 transition-transform duration-300 group-hover:translate-x-2">
                <ChevronRight size={18} strokeWidth={2.5} />
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiesCardText;
