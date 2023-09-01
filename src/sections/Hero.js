import React from "react";
import bgImage from "../images/hero/Vector.png";
import Navbar from "../components/Navbar";
import HeroCenter from "../components/HeroCenter";
import Footer from "../components/Footer";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})`,  backgroundSize: "cover"}}
      className="h-screen bg-black text-white flex flex-col justify-between"
    >
      <Navbar/>
      <HeroCenter/>
      <Footer bgColor="black"/>
    </div>
  );
};

export default Hero;
