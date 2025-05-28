import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const FlashSales = () => {
  return (
    <div className="px-20 w-screen">
      <div className="flex text-red-500 font-bold gap-3">
        <div className="w-[12px] h-[30px] bg-red-500 rounded"></div>
        <div>Today's</div>
      </div>
      <div className="w-full flex justify-content-between">
        <div>
          <h1 className="text-4xl font-bold">Flash Sales</h1>
        </div>
        <div className="flex gap-3">
          <div className="bg-gray-200 p-4 rounded-full">
            <FaArrowLeft />
          </div>
          <div className="bg-gray-200 p-4 rounded-full">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
