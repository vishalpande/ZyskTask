import React from "react";
import Boltshift from "../assets/Boltshift.png";
import Lightbox from "../assets/Ligtbox.png";
import Feather from "../assets/Feather.png";
import spherule from "../assets/spherule.png";
import global from "../assets/global.png";
import niet from "../assets/Niet.png";

const Companies = () => {
  return (
    <div className="bg-white py-12">
      <div className="text-center mb-8">
        <p className="text-gray-700 text-sm font-medium">
          Join 4,000+ companies already growing
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
        {/* Logos */}
        <div className="flex items-center justify-center">
          <img src={Boltshift} alt="Boltshift Logo" className="h-12 w-auto" />
        </div>
        <div className="flex items-center justify-center">
          <img src={Lightbox} alt="Lightbox Logo" className="h-12 w-auto" />
        </div>
        <div className="flex items-center justify-center">
          <img src={Feather} alt="FeatherDev Logo" className="h-12 w-auto" />
        </div>
        <div className="flex items-center justify-center">
          <img src={spherule} alt="Spherule Logo" className="h-12 w-auto" />
        </div>
        <div className="flex items-center justify-center">
          <img src={global} alt="GlobalBank Logo" className="h-12 w-auto" />
        </div>
        <div className="flex items-center justify-center">
          <img src={niet} alt="Nietzsche Logo" className="h-12 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
