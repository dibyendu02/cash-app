import React from "react";
import bgImage from "../images/hero/Vector.png";

const Investing = () => {
  return (
    <div className="h-screen z-20  bg-[#00D54B] relative flex items-center">
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          height: "500px",
          zIndex: "30",
        }}
        className="bg-red w-full"
      >
        hello
      </div>
    </div>
  );
};

export default Investing;
