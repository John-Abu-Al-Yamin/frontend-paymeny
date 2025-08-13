import React from "react";
import bgImage from "./../../../assets/image-2.png"; // Import image

const ExchangeRatesSection = () => {
  const exchangeRates = [
    {
      currency: "دولار أمريكي",
      flag: "https://flagcdn.com/w40/us.png",
      buy: "3.70",
      sell: "3.75",
    },
    {
      currency: "دينار كويتي",
      flag: "https://flagcdn.com/w40/kw.png",
      buy: "17.49",
      sell: "17.50",
    },
    {
      currency: "يورو",
      flag: "https://flagcdn.com/w40/eu.png",
      buy: "6.48",
      sell: "6.50",
    },
    {
      currency: "درهم إماراتي",
      flag: "https://flagcdn.com/w40/ae.png",
      buy: "2.44",
      sell: "2.50",
    },
    {
      currency: "ليرة تركية",
      flag: "https://flagcdn.com/w40/tr.png",
      buy: "3.45",
      sell: "3.50",
    },
    {
      currency: "جنيه مصري",
      flag: "https://flagcdn.com/w40/eg.png",
      buy: "5.56",
      sell: "5.59",
    },
    {
      currency: "ريال سعودي",
      flag: "https://flagcdn.com/w40/sa.png",
      buy: "12.78",
      sell: "12.50",
    },
    {
      currency: "دينار بحريني",
      flag: "https://flagcdn.com/w40/bh.png",
      buy: "4.78",
      sell: "4.50",
    },
    {
      currency: "ريال قطري",
      flag: "https://flagcdn.com/w40/qa.png",
      buy: "8.34",
      sell: "8.50",
    },
    {
      currency: "ريال عماني",
      flag: "https://flagcdn.com/w40/om.png",
      buy: "7.89",
      sell: "7.50",
    },
    {
      currency: "دولار كندي",
      flag: "https://flagcdn.com/w40/ca.png",
      buy: "15.23",
      sell: "15.50",
    },
    {
      currency: "فرنك سويسري",
      flag: "https://flagcdn.com/w40/ch.png",
      buy: "9.69",
      sell: "9.50",
    },
    {
      currency: "ليرة لبنانية",
      flag: "https://flagcdn.com/w40/lb.png",
      buy: "10.42",
      sell: "10.50",
    },
    {
      currency: "دينار أردني",
      flag: "https://flagcdn.com/w40/jo.png",
      buy: "11.89",
      sell: "11.50",
    },
    {
      currency: "كرونة سويدية",
      flag: "https://flagcdn.com/w40/se.png",
      buy: "18.31",
      sell: "18.50",
    },
    {
      currency: "ليرة سورية",
      flag: "https://flagcdn.com/w40/sy.png",
      buy: "19.42",
      sell: "19.50",
    },
    {
      currency: "دينار عراقي",
      flag: "https://flagcdn.com/w40/iq.png",
      buy: "13.52",
      sell: "13.50",
    },
  ];

  return (
    <div
      className="relative w-full mx-auto bg-cover bg-center bg-no-repeat rounded-xl "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay شفافية */}
      <div className="absolute inset-0 bg-white/50 rounded-xl"></div>

      {/* المحتوى */}
      <div className="relative p-6">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">أسعار الصرف</h1>
          <p className="text-gray-600 text-lg">
            اطلع على أحدث أسعار الصرف المحدثة لحظة بلحظة، واحصل على أفضل قيمة
            لتحويل أموالك بسهولة وأمان عبر المنطقة.
          </p>
        </div>

        {/* Exchange Rates Table */}
        <div
          className="min-h-screen p-4 flex items-center justify-center"
          dir="rtl"
        >
          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#B49F65] to-yellow-700 text-white">
                <div className="grid grid-cols-3 gap-4 px-6 py-4 text-center font-semibold">
                  <div>العملة</div>
                  <div>شراء</div>
                  <div>بيع</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="">
                {exchangeRates.map((rate, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 gap-4 px-6 py-3 hover:bg-gray-50 transition-colors"
                  >
                    {/* Currency with Flag */}
                    <div className="flex items-center justify-start gap-3">
                      <img
                        src={rate.flag}
                        alt={rate.currency}
                        className="w-6 h-4 object-cover rounded-sm "
                      />

                      <span className="text-gray-800 font-medium">
                        {rate.currency}
                      </span>
                    </div>

                    {/* Buy Rate */}
                    <div className="text-center text-gray-700 font-medium">
                      {rate.buy}
                    </div>

                    {/* Sell Rate */}
                    <div className="text-center text-gray-700 font-medium">
                      {rate.sell}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeRatesSection;
