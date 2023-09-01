import React from "react";
import mobile from "../images/hero/intro-phone 1.png"
import introcube from "../images/hero/intro-cube.png"
import introcubes from "../images/hero/intro-cubes.png"
import introstair from "../images/hero/intro-stairs 1.png"
import intropillar from "../images/hero/intro-pillar 1.png"

const HeroCenter = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="absolute top-56 w-[711px]  text-center text-white text-[193px] font-extrabold uppercase leading-[166px]  tracking-[0.5px]">
        CASH
      </div>

        <img src={introcube} alt="introcube" width="74px" className="absolute top-16 left-80" />
        <img src={introcubes} alt="introcubes" width="188px" className="absolute bottom-10 left-48" />
        <img src={introstair} alt="introstair" width="200px" className="absolute top-10 right-20" />
        <img src={intropillar} alt="intropillar" width="280px" className="absolute bottom-0 right-80" />

        <img src={mobile} alt="mobile" width="370px" height="453.08px" className="absolute z-1 top-28 left-[40%]"/>

      <div className=" bottom-44 absolute z-2 w-[711px]  text-center text-white text-[193px] font-extrabold uppercase leading-[166px] tracking-[0.5px]">
        APP
      </div>
    </div>
  );
};

export default HeroCenter;
