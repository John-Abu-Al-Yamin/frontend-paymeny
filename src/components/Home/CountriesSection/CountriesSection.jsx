import React from "react";

export default function CountriesSection() {
  const countries = [
    { name: "مصر", code: "EG", isHigher: true },
    { name: "أمريكا", code: "US", isHigher: false },
    { name: "السودان", code: "SD", isHigher: true },
    { name: "عمان", code: "OM", isHigher: false },
    { name: "السعودية", code: "SA", isHigher: true },
    { name: "ماليزيا", code: "MY", isHigher: false },
    { name: "البحرين", code: "BH", isHigher: true },
    { name: "الإمارات", code: "AE", isHigher: false },
    { name: "قطر", code: "QA", isHigher: true },
    { name: "بريطانيا", code: "GB", isHigher: false },
  ];

  return (
    <section className=" py-16 sm:py-20" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            الدول المتاح الصرافة إليها
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            اكتشف شبكة تحويل الأموال الواسعة لدينا، مع إمكانية إرسال واستلام
            الأموال إلى أبرز الدول حول العالم بسرعة وأمان.
          </p>
        </div>

        {/* Country Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {countries.map((country) => (
            <div
              key={country.code}
              className={`flex flex-col items-center text-center cursor-pointer group ${
                country.isHigher ? "-mt-5" : "mt-5"
              }`}
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-100 transition-all duration-200 p-6 w-32 h-32 flex flex-col items-center justify-center group-hover:scale-105">
                <div className="mb-3 flex items-center justify-center">
                  <img
                    src={`https://flagsapi.com/${country.code}/flat/64.png`}
                    alt={`Flag of ${country.name}`}
                    className="w-12 h-8 object-cover rounded-sm shadow-sm"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://placehold.co/48x32/f1f1f1/888?text=${country.code}`;
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-800 leading-tight">
                  {country.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
