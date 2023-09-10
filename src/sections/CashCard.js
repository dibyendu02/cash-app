import React from "react";
import phone from "../images/cash-card/boost-phone.png";
import CardBackground from "../components/CardBackground";


const CashCard = () => {
  return (
    <div className="h-[750px] z-20 bg-black relative flex pt-[15%]">
        <CardBackground/>
      <div className="w-[323px] font-agrandir flex flex-col gap-4 ml-80">
        <h1 className="text-[#00D54B] text-[40px] font-extrabold leading-10 ">
          Cash Card & Boost
        </h1>
        <p className="text-sm text-white font-normal leading-snug tracking-tight">
          The Cash Card is a free, customizable debit card that lets you pay
          online and in stores. It’s the only way to get Boosts—instant
          discounts that work at places where you want to spend.
        </p>
      </div>
      <img
        src={phone}
        alt="phone"
        width="250px"
        className="absolute left-[47%] bottom-[12%]"
      />
    </div>
  );
};

export default CashCard;
