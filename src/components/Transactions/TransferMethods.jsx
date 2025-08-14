import React, { useState } from "react";
import { Home, CreditCard, Wallet, Banknote } from "lucide-react";
import ImageUpload from "../ImageUpload";
import image from "./../../assets/image-1.png";

const TransferMethods = ({setStep}) => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const paymentMethods = [
    { id: "home", name: "تحويل بنكي", icon: Home },
    { id: "wallet", name: "فيزا كارد", icon: Wallet },
    { id: "card", name: "محفظة إلكترونية", icon: CreditCard },
    { id: "bank", name: "دفع نقدي", icon: Banknote },
  ];

  return (
    <div className="max-w-6xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left side - Illustration */}
        <div className="hidden lg:flex lg:w-1/2 p-8 items-center justify-center">
          <img src={image} alt="" />
        </div>

        {/* Right side - Form */}
        <div className="lg:w-1/2 p-8" dir="rtl">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-right">
            طريقة التحويل
          </h2>

          <div className="border rounded-lg overflow-hidden border-gray-200">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.id}
                  className={`flex items-center justify-between p-4 cursor-pointer ${
                    selectedMethod === method.id ? "bg-[#F8F5F0]" : "bg-white"
                  } ${
                    index < paymentMethods.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                  onClick={() => setSelectedMethod(method.id)}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-[#3D3D3D]" />
                    <span className="text-[#3D3D3D]">{method.name}</span>
                  </div>
                  <div
                    className={`w-4 h-4 bg-white rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                      selectedMethod === method.id
                        ? "border-[#B49F65] !bg-[#B49F65]"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedMethod === method.id && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="">
            <ImageUpload />
          </div>

          {/* Submit Button */}
          <button
            onClick={() => setStep((prevStep) => prevStep + 1)}
            className="w-full bg-[#B49F65] hover:bg-[#baa15e] text-white font-semibold py-4 px-6 rounded-lg transition duration-200 mt-8"
          >
            ادخل بيانات المستلم
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferMethods;
