import React from "react";
import Button from "./Button";
import apple from "../images/icons/apple.svg";
import playstore from "../images/icons/playstore.svg";
import twitch from "../images/icons/twitch.svg";
import twitter from "../images/icons/twitter.svg";
import instagram from "../images/icons/instagram.svg";
import downarrow from "../images/icons/down-arrow.svg";

import { BsTwitch, BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = ({ bgColor }) => {
  return (
    <div className="flex w-[100%] z-10 justify-between px-14">
      <div className="flex pt-7 gap-5 ">
        <Button bgColor={bgColor} icon={apple} text="APP STORE" />
        <Button bgColor={bgColor} icon={playstore} text="GOOGLE PLAY" />
      </div>

        {/* <img src={downarrow} className="absolute right-[50%] bottom-8" /> */}

      <div className="flex gap-10">
        <p className={`w-96 text-xs text-${bgColor === "black" ? "red" : "black"}`}>
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </p>
        <div className="flex gap-7 items-center">
            
            <BsTwitch size="20px" />
            <BsTwitter size="20px"/>
            <AiOutlineInstagram size="20px"/>

        </div>
      </div>
    </div>
  );
};

export default Footer;
