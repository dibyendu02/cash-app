import React from "react";
import bgImage from "../images/hero/Vector.png";
import InvestingBackground from "../components/InvestingBackground";
import Footer from "../components/Footer";

const Investing = () => {
  return (
    <div className="h-screen z-20  bg-[#00D54B] relative flex items-center">
      <InvestingBackground />
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
          zIndex: "30",
        }}
        className=" w-full flex flex-col items-center"
      >
        <h1 className=" text-white text-[40px] font-extrabold leading-10 pt-20">Investing</h1>
        
        <div className="w-[80%] flex justify-between pt-40 pb-72 ">
          <div className="flex flex-col w-80 gap-5">
            <h1 className="font-extrabold text-2xl">Stocks</h1>
            <p className="text-sm">
              Whether you’re an expert or just getting started, Cash App is the
              fastest and most accessible way to invest in stocks. Start now
              with as little as $1.
            </p>
          </div>
          <div className="flex flex-col w-80 gap-5">
            <h1 className="font-extrabold text-2xl">Bitcoin</h1>
            <p className="text-sm">
              Cash App is the fastest way to convert dollars to bitcoin. From
              your home screen, six taps are all it takes to stack sats, buy an
              entire bitcoin, or just see what it’s all about.
            </p>
          </div>
        </div>

        <Footer className="" bgColor="white"/>
      </div>
    </div>
  );
};

export default Investing;
