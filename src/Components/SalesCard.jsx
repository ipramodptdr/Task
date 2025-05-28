import React from "react";
import image5 from "../assets/image-5.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
const SalesCard = () => {
   
  return (
    <div className="px-20 py-4 flex gap-8">
      <div className="w-[200px] h-[300px] bg-gray-100 py-3 px-2 rounded">
        <div>
          <img src={image1} alt="" className="w-full h-full object-fit-cover content-center" />
        </div>
        <div>
          <h3 className="text-sm">HAVIT HV-G92 Gamepad</h3>
          <p className="text-red-500">$120</p>
        </div>
      </div>
      <div className="w-[200px] h-[300px] bg-gray-100 py-3 px-2 rounded">
        <div>
          <img src={image2} alt="" className="w-full h-full object-fit-cover content-center" />
        </div>
        <div>
          <h3 className="text-sm">HAVIT HV-G92 Gamepad</h3>
          <p className="text-red-500">$120</p>
        </div>
      </div>
      <div className="w-[200px] h-[300px] bg-gray-100 py-3 px-2 rounded">
        <div>
          <img src={image3} alt="" className="w-full h-full object-fit-cover content-center" />
        </div>
        <div>
          <h3 className="text-sm">HAVIT HV-G92 Gamepad</h3>
          <p className="text-red-500">$120</p>
        </div>
      </div>
      <div className="w-[200px] h-[300px] bg-gray-100 py-3 px-2 rounded">
        <div>
          <img src={image4} alt="" className="w-full h-full object-fit-cover content-center" />
        </div>
        <div>
          <h3 className="text-sm">HAVIT HV-G92 Gamepad</h3>
          <p className="text-red-500">$120</p>
        </div>
      </div>
      <div className="w-[200px] h-[300px] bg-gray-100 py-3 px-2 rounded">
        <div>
          <img src={image5} alt="" className="w-full h-full object-fit-cover content-center" />
        </div>
        <div>
          <h3 className="text-sm">HAVIT HV-G92 Gamepad</h3>
          <p className="text-red-500">$120</p>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
