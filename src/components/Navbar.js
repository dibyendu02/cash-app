import React from "react";
import logo from "../images/hero/logo.svg";
import eyelogo from "../images/hero/eyelogo.svg";

const Navbar = () => {
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-14">
      <div className="flex-1 ">
        <img src={logo} alt="logo" />
      </div>

      <div className="flex-1 ">
        <ul className="w-[766px] h-[18px] justify-end items-center gap-6 inline-flex">
          <li className="text-white text-xs font-extrabold uppercase leading-[18px] tracking-wide">
            Sign In
          </li>
          <li className="text-white text-xs font-extrabold uppercase leading-[18px] tracking-wide">
            Legal
          </li>
          <li className="text-white text-xs font-extrabold uppercase leading-[18px] tracking-wide">
            Licenses
          </li>
          <li className="text-white text-xs font-extrabold uppercase leading-[18px] tracking-wide">
            Security
          </li>
          <li className="text-white text-xs font-extrabold uppercase leading-[18px] tracking-wide">
            Careers
          </li>
          <li className="text-white text-xs font-extrabold uppercase leading-[18px] tracking-wide">
            Press
          </li>
          <li className="text-white text-xs font-extrabold uppercase leading-[18px] tracking-wide">
            Support
          </li>
          <li className="text-white text-xs font-extrabold uppercase leading-[18px] tracking-wide">
            Status
          </li>
          <li className="text-white text-xs font-extrabold uppercase leading-[18px] tracking-wide">
            Codeblog
          </li>
        </ul>
      </div>

      <div className="flex-1 flex justify-end">
        <img src={eyelogo} alt="eyelogo" />
      </div>
    </div>
  );
};

export default Navbar;
