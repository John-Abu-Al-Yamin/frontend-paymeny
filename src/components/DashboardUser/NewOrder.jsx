import React from "react";
import monay from "../../assets/monay.png";

const NewOrder = () => {
  return (
    <div>
      <div className="bg-[#f5f1e8] rounded-2xl p-8 w-full  shadow-lg mb-8 ml-auto">
        <div className="flex items-center justify-between gap-8">
          {/* Left side - Illustration */}

          {/* Right side - Content */}
          <div className="flex-1 text-right" dir="rtl">
            {/* Main heading */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-relaxed">
              مع المحفظة حول أموالك من أي مكان بالعالم
              <br />
              إلى السودان.
            </h2>

            {/* Subtext */}
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              حول أموالك بثقة، تابع حوالاتك لحظة بلحظة.
            </p>

            {/* CTA Button */}
            <button className="bg-[#b8a882] hover:bg-[#a69770] text-white px-12 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md">
              جرب الآن
            </button>
          </div>
          <div className="flex-shrink-0">
            <img
              src={monay}
              alt="Hand holding money bag"
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrder;
