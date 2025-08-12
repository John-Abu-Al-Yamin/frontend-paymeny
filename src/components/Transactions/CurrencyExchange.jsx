import { useState } from "react";
import { Info, Minus, ChevronDown } from "lucide-react";

const FlagIcon = ({ countryCode, className = "" }) => {
  return (
    <img
      src={`https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`}
      alt={`${countryCode} flag`}
      className={`inline-block rounded-sm ${className}`}
      width={24}
      height={18}
    />
  );
};

const currencyMap = {
  EG: { code: "EGP", name: "جنيه مصري" },
  SA: { code: "SAR", name: "ريال سعودي" },
  US: { code: "USD", name: "دولار أمريكي" },
  AE: { code: "AED", name: "درهم إماراتي" },
};

const CurrencyExchange = ({ setStep }) => {
  const [fromAmount, setFromAmount] = useState("1,500,000");
  const [toAmount, setToAmount] = useState("150,000");

  const [fromCountry, setFromCountry] = useState("EG");
  const [toCountry, setToCountry] = useState("SA");

  const [isFromDropdownOpen, setIsFromDropdownOpen] = useState(false);
  const [isToDropdownOpen, setIsToDropdownOpen] = useState(false);

  const countries = ["EG", "SA", "US", "AE"];

  const formatNumber = (value) => {
    const number = value.replace(/,/g, "");
    if (isNaN(Number(number))) return value;
    return Number(number).toLocaleString();
  };

  const handleFromAmountChange = (e) => {
    setFromAmount(formatNumber(e.target.value));
  };

  const handleToAmountChange = (e) => {
    setToAmount(formatNumber(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fromAmount, toAmount, fromCountry, toCountry);
  };
  return (
    <div className="max-w-6xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left side - Illustration */}
        <div className="hidden lg:flex lg:w-1/2 p-8 items-center justify-center">
          <img src="./src/assets/image-1.png" alt="" />
        </div>

        {/* Right side - Form */}
        <div className="lg:w-1/2 p-8" dir="rtl">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-right">
            الدفع
          </h2>

          <div className="space-y-6">
            {/* From Currency */}
            <div>
              <label className="block text-sm text-gray-600 mb-2 text-right">
                المبلغ المرسل
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg bg-white relative">
                {/* Amount Input */}
                <input
                  type="text"
                  value={fromAmount}
                  onChange={handleFromAmountChange}
                  className="flex-1 px-4 py-3 focus:outline-none text-right text-lg font-medium"
                  placeholder="أدخل المبلغ"
                />
                {/* Country/Currency Selector */}
                <button
                  type="button"
                  onClick={() => {
                    setIsFromDropdownOpen(!isFromDropdownOpen);
                    setIsToDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 transition-colors border-r border-gray-300"
                >
                  <FlagIcon countryCode={fromCountry} />
                  <span className="font-medium text-gray-700">
                    {currencyMap[fromCountry]?.code}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {isFromDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 min-w-[140px]">
                    {countries.map((country) => (
                      <button
                        key={country}
                        onClick={() => {
                          setFromCountry(country);
                          setIsFromDropdownOpen(false);
                        }}
                        className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-50 transition-colors text-right"
                      >
                        <FlagIcon countryCode={country} />
                        <span className="font-medium text-gray-700">
                          {currencyMap[country]?.code}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Exchange Rate Info */}
            <div className="p-4 rounded-lg">
              <div className="flex justify-between items-center text-sm text-gray-700 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Info className="w-3 h-3 text-yellow-600" />
                  </div>
                  <span>1 جنية مصري = 0.13 ريال سعودي</span>
                </div>
                <span className="font-medium">سعر الصرف الحالي</span>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Minus className="w-3 h-3 text-yellow-600" />
                  </div>
                  <span>150 جنية مصري</span>
                </div>
                <span className="font-medium">رسوم المعاملة</span>
              </div>
            </div>

            {/* To Currency */}
            <div>
              <label className="block text-sm text-gray-600 mb-2 text-right">
                سيحصل المستلم على
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg bg-white relative">
                <input
                  type="text"
                  value={toAmount}
                  onChange={handleToAmountChange}
                  className="flex-1 px-4 py-3 focus:outline-none text-right text-lg font-medium"
                  placeholder="أدخل المبلغ"
                />
                <button
                  type="button"
                  onClick={() => {
                    setIsToDropdownOpen(!isToDropdownOpen);
                    setIsFromDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 transition-colors border-r border-gray-300"
                >
                  <FlagIcon countryCode={toCountry} />
                  <span className="font-medium text-gray-700">
                    {currencyMap[toCountry]?.code}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {isToDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 min-w-[140px]">
                    {countries.map((country) => (
                      <button
                        key={country}
                        onClick={() => {
                          setToCountry(country);
                          setIsToDropdownOpen(false);
                        }}
                        className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-50 transition-colors text-right"
                      >
                        <FlagIcon countryCode={country} />
                        <span className="font-medium text-gray-700">
                          {currencyMap[country]?.code}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={() => setStep((prevStep) => prevStep + 1)}
              className="w-full bg-[#B49F65] hover:bg-[#ab9805] text-white font-semibold py-4 px-6 rounded-lg transition duration-200 mt-8"
            >
              اختر طريقة التحويل
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyExchange;
