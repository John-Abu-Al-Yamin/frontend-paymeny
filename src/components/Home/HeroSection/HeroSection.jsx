import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import { Repeat2 } from "lucide-react";

const currencies = [
  { value: "USD", label: "الدولار الأمريكي", flag: "🇺🇸" },
  { value: "KWD", label: "الدينار الكويتي", flag: "🇰🇼" },
  { value: "SAR", label: "الريال السعودي", flag: "🇸🇦" },
  { value: "EGP", label: "الجنيه المصري", flag: "🇪🇬" },
];

// كومبوننت جاهزة لإعادة الاستخدام للـ dropdown مع العلم والسهم
const CurrencySelect = ({ value, onChange }) => {
  const current = currencies.find((c) => c.value === value);

  return (
    <div className="relative">
      {/* علم البلد */}
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xl pointer-events-none select-none leading-none">
        {current?.flag}
      </span>

      {/* الـ select نفسه */}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        // ملاحظة: مخلي الاتجاه LTR عشان الرموز والأرقام تبقى مضبوطة
        dir="ltr"
        className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg text-lg font-medium text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#B49F65]/50 pl-10 pr-10"
      >
        {currencies.map((c) => (
          <option key={c.value} value={c.value}>
            {c.label}
          </option>
        ))}
      </select>

      {/* سهم الفتحة */}
      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none select-none text-gray-500">
        ▼
      </span>
    </div>
  );
};

const HeroSection = () => {
  const [sendCurrency, setSendCurrency] = useState("USD");
  const [receiveCurrency, setReceiveCurrency] = useState("USD");

  return (
    <div className="relative w-full min-h-screen" dir="rtl">
      {/* الخلفية مع clip-path */}
      <div
        className="absolute inset-0 bg-[#fcfaf4ae] -z-10"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 64%)", zIndex: 0 }}
      />

      <Navbar />

      <div className="flex flex-col md:flex-row justify-between items-center gap-x-8 relative z-10 container mx-auto py-12">
        <div className="flex flex-col w-full md:w-1/2 mb-8 md:mb-0">
          <p className="text-[#3D3D3D] font-[400] text-[20px]">مرحبُا بك في موقعنا</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            <span className="text-[#B49F65]">المحفظة</span> اول شركة صرافة سودانية مسجلة فى امريكا
          </h1>
        </div>

        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg w-full max-w-2xl mx-auto border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
              {/* عندما ترسل */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600">عندما تُرْسِل</label>

                <CurrencySelect value={sendCurrency} onChange={setSendCurrency} />

                <input
                  type="number"
                  defaultValue="560"
                  inputMode="decimal"
                  className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg p-3 text-2xl font-bold text-gray-800 text-left focus:outline-none focus:ring-2 focus:ring-[#B49F65]/50"
                  dir="ltr"
                />
              </div>

              {/* سيحصل المستلم علي */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600">سيحصل المستلم علي</label>

                <CurrencySelect value={receiveCurrency} onChange={setReceiveCurrency} />

                <input
                  type="number"
                  defaultValue="67.890"
                  readOnly
                  className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg p-3 text-2xl font-bold text-gray-800 text-left focus:outline-none"
                  dir="ltr"
                />
              </div>
            </div>

            {/* زر التحويل */}
            <div className="mt-6">
              <button className="w-full bg-[#c5b384] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 text-lg transition-all duration-300 hover:bg-[#b49f65] focus:outline-none focus:ring-2 focus:ring-[#B49F65]/50">
                <Repeat2 className="w-6 h-6" />
                <span>حوّل العملة</span>
              </button>
            </div>

            <div className="mt-4 text-center text-xs text-gray-500">
              <p>
                أقل مبلغ للتحويل = <span className="font-bold">10.00 دولار</span> | أقصي مبلغ للتحويل ={" "}
                <span className="font-bold">50000.00 دولار</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
