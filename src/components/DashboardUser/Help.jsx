import React from "react";
import message from "../../assets/message.png";
import { PhoneCallIcon, TextIcon as Telegram } from "lucide-react";
const Help = () => {
  return (
    <div>
      <div className="bg-[#f5f1e8] rounded-2xl p-8 w-full  shadow-lg mb-8 ml-auto">
        <div className="flex items-center justify-between gap-8">
          {/* Left side - Illustration */}

          {/* Right side - Content */}
          <div className="flex-1 text-right" dir="rtl">
            {/* Main heading */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-relaxed">
              خدمة عملاء 24 ساعة
            </h2>

            {/* Subtext */}
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              نرغب في مساعدتك دومًا، تواصل معنا عبر الواتساب ودعنا نساعدك!{" "}
            </p>

            {/* CTA Button */}
            <button className="flex items-center gap-1 bg-[#0AC175] hover:bg-[#09a463] text-white px-12 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md">
              جرب الآن
              <span className="">
                <PhoneCallIcon size={14} />
              </span>
            </button>
          </div>
          <div className="flex-shrink-0">
            <img
              src={message}
              alt="Hand holding money bag"
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
