import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { ChevronDown } from "lucide-react";

const ExchangeRates = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("SAR");
  const [isOpen, setIsOpen] = useState(false);

  const currencies = [
    { code: "SA", value: "SAR" },
    { code: "US", value: "USD" },
    { code: "EU", value: "EUR" },
  ];

  const exchangeRates = [
    { code: "US", currency: "دولار أمريكي", buy: "3.75", sell: "3.70" },
    { code: "KW", currency: "دينار كويتي", buy: "17.50", sell: "17.49" },
    { code: "EU", currency: "يورو", buy: "6.50", sell: "6.48" },
    { code: "AE", currency: "درهم إماراتي", buy: "2.50", sell: "2.44" },
    { code: "TR", currency: "ليرة تركية", buy: "3.50", sell: "3.45" },
    { code: "EG", currency: "جنيه مصري", buy: "5.50", sell: "5.56" },
    { code: "MY", currency: "رنجت ماليزي", buy: "12.50", sell: "12.78" },
    { code: "AU", currency: "دولار أسترالي", buy: "4.78", sell: "4.78" },
    { code: "GB", currency: "جنيه إسترليني", buy: "8.50", sell: "8.34" },
    { code: "CH", currency: "فرنك سويسري", buy: "7.50", sell: "7.89" },
    { code: "CN", currency: "يوان صيني", buy: "15.50", sell: "15.23" },
    { code: "LB", currency: "ليرة لبنانية", buy: "9.50", sell: "9.69" },
    { code: "IN", currency: "روبية هندية", buy: "10.50", sell: "10.42" },
    { code: "IL", currency: "شيكل إسرائيلي", buy: "11.50", sell: "11.89" },
    { code: "SY", currency: "ليرة سورية", buy: "18.50", sell: "18.31" },
    { code: "BH", currency: "دينار بحريني", buy: "13.50", sell: "13.52" },
  ];

  const selectedCur = currencies.find((c) => c.value === selectedCurrency);

  return (
    <div className="min-h-screen bg-gray-50 p-4" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-right mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">أسعار الصرف</h1>
          <p className="text-gray-600 mb-6">
            اختر العملة التي تريد مشاهدة أسعار صرفها
          </p>

          {/* Custom Currency Dropdown */}
          <div className="relative inline-block text-right">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between gap-2 border border-gray-300 rounded-lg px-4 py-2 bg-white w-40"
            >
              <div className="flex items-center gap-2">
                <ReactCountryFlag
                  countryCode={selectedCur.code}
                  svg
                  style={{ width: "1.5em", height: "1.5em" }}
                />
                <span>{selectedCur.value}</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {currencies.map((cur) => (
                  <div
                    key={cur.value}
                    onClick={() => {
                      setSelectedCurrency(cur.value);
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <ReactCountryFlag
                      countryCode={cur.code}
                      svg
                      style={{ width: "1.5em", height: "1.5em" }}
                    />
                    <span>{cur.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Exchange Rates Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-gray-100 border-b border-gray-200">
            <div className="p-4 text-center font-semibold text-gray-700">
              العملة
            </div>
            <div className="p-4 text-center font-semibold text-gray-700">
              شراء
            </div>
            <div className="p-4 text-center font-semibold text-gray-700">
              بيع
            </div>
            <div className="p-4 text-center font-semibold text-gray-700"></div>
          </div>

          {/* Table Rows */}
          {exchangeRates.map((rate, index) => (
            <div
              key={index}
              className="grid grid-cols-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="p-4 flex flex-row-reverse items-center justify-end gap-3">
                <span className="text-gray-800 font-medium">
                  {rate.currency}
                </span>
                <ReactCountryFlag
                  countryCode={rate.code}
                  svg
                  style={{
                    width: "2em",
                    height: "2em",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <div className="p-4 text-center text-gray-700">{rate.buy}</div>
              <div className="p-4 text-center text-gray-700">{rate.sell}</div>
              <div className="p-4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExchangeRates;
