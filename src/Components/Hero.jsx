import React from "react";
import logo from "../assets/apple.png";
import banner from "../assets/banner.jpg";
import Sidebar from "./Sidebar";
const Hero = () => {
  return (
    <div className="flex w-full px-20 py-10">
      <div className="w-[200px] h-full ">
        <Sidebar />
      </div>
      <div className="w-[900px] h-[344px] flex bg-black text-white p-15 px-20 justify-content-between">
        <div className="flex flex-col gap-2 ">
          <div className="flex items-center gap-2">
            <span>
              <img className="w-10 h-10" src={logo} alt="" />
            </span>
            <span>iPhone 14 Series</span>
          </div>
          <h1 className="text-4xl font-bold">Up to 10% <br /> off Voucher</h1>
          <button className="bg-white text-black px-4 py-2 rounded-md">Shop Now</button>
        </div>
        <div className="flex content-end rounded-lg">
          <img
            src={banner}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
