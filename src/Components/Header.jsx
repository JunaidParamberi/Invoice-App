import React from "react";
import logo from "../assets/Logo-whitemode.png";

function Header() {
  return (
    <div className="header-component items-center flex justify-between">
      <img className="w-30 h-30" src={logo} alt="" />

      <div className="address-part">
        <div className="text-right text-gray-500 text-[10px] font-normal font-['Inter'] leading-[14px]">
          Hamdan Street
          <br />
          Abu Dhabi - UAE
        </div>
        <div
          className="text-right text-gray-500 text-[10px] 
        font-normal font-['Inter'] leading-[14px]"
        >
          +971 58 197 6818
        </div>
      </div>
    </div>
  );
}

export default Header;
