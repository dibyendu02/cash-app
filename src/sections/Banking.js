import React from "react";
import phone from "../images/banking/banking-phone.png";
import BankingBackground from "../components/BankingBackground";

const Banking = () => {
  return (
    <div className="h-screen bg-[#00D54B] z-10 relative flex items-center">
      <BankingBackground/>
      <div className="w-[323px] font-agrandir flex flex-col gap-4 ml-60">
        <h1 className="text-white text-[40px] font-extrabold leading-10 ">
          Banking
        </h1>
        <p className="text-sm font-normal leading-snug tracking-tight">
          Receive your paycheck, tax returns, and other direct deposits up to
          two days early using your Cash App routing and account number.
        </p>
      </div>
      <img
        src={phone}
        alt="phone"
        width="350px"
        className="absolute left-[35%]"
      />
    </div>
  );
};

export default Banking;
