import React from "react";
import Herosection from "./components/Herosection";
import HowWorks from "./components/HowWorks";
import WhoWeAre from "./components/WhoWeAre";
import WhyChooseUs from "./components/WhyChooseUs";
import OurServices from "./components/OurServices";
import Testimonials from "./components/Testimonials";
import GetAQuote from "./components/GetAQuote";

const Home = () => {
  return (
    <div>
      <Herosection />
      <HowWorks />
      <WhoWeAre />
      <WhyChooseUs />
      <OurServices />
      <Testimonials />
      <GetAQuote />
    </div>
  );
};

export default Home;
