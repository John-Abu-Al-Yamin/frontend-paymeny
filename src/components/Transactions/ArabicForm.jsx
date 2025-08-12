"use client";

import { useState } from "react";
import { Building2, CreditCard, Wallet, Banknote } from "lucide-react";
import SuccessModal from "./SuccessModal";
import TrackingModal from "./TrackingModal";

const ArabicForm = () => {
  const [selectedCountryFrom, setSelectedCountryFrom] = useState("السعودية");
  const [selectedCountryTo, setSelectedCountryTo] = useState("مصر");
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("bank-transfer");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);

  const paymentMethods = [
    { id: "bank-transfer", name: "تحويل بنكي", icon: Building2 },
    { id: "visa-card", name: "فيزا كارد", icon: CreditCard },
    { id: "e-wallet", name: "محفظة إلكترونية", icon: Wallet },
    { id: "cash", name: "دفع نقدي", icon: Banknote },
  ];

  const transactionSummary = {
    sendingCountry: "السعودية",
    receivingCountry: "مصر",
    accountType: "حساب بنكي",
    sendAmount: "1000",
    currency: "ريال",
    senderData: {
      phoneNumber: "+67045678",
      fullName: "أحمد محمد خالد",
    },
    recipientData: {
      fullName: "محمد إبراهيم محمود",
      accountNumber: "EGQNBTUY179098789045807946899",
    },
  };

  const handleTrackClick = () => {
    setIsTrackingModalOpen(true);
  };

  return (
    <div className="min-h-screen  p-4" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Right Side - Recipient Data */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              بيانات المستلم
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  defaultValue="أحمد محمد خالد التميمي"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B49F65] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  رقم الحساب
                </label>
                <input
                  type="text"
                  defaultValue="EGQNBTUY179098789045807946899"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B49F65] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  اختر وسيلة الإستلام
                </label>
                <div className="border rounded-lg overflow-hidden border-gray-200">
                  {paymentMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <div
                        key={method.id}
                        className={`flex items-center justify-between p-4 cursor-pointer transition-colors ${
                          selectedPaymentMethod === method.id
                            ? "bg-[#F8F5F0]"
                            : "bg-white"
                        } ${
                          index < paymentMethods.length - 1
                            ? "border-b border-gray-200"
                            : ""
                        }`}
                        onClick={() => setSelectedPaymentMethod(method.id)}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-[#B49F65]" />
                          <span className="text-[#3D3D3D]">{method.name}</span>
                        </div>
                        <div
                          className={`w-4 h-4 bg-white rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                            selectedPaymentMethod === method.id
                              ? "border-[#B49F65] !bg-[#B49F65]"
                              : "border-gray-300"
                          }`}
                        >
                          {selectedPaymentMethod === method.id && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Confirm Button */}
            <div className="mt-8 w-full ">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#B49F65] w-full hover:bg-[#A08B5A] text-white px-12 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                تأكيد التحويل
              </button>
            </div>
          </div>

          {/* Left Side - Transaction Summary */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              ملخص العملية
            </h2>

            <div className="space-y-6">
              {/* Country Selection - Now using backend data */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-2">
                    البلد المرسلة
                  </label>
                  <div className="w-full px-3 py-2  text-gray-700">
                    {transactionSummary.sendingCountry}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-2">
                    البلد المستلمة
                  </label>
                  <div className="w-full px-3 py-2  text-gray-700">
                    {transactionSummary.receivingCountry}
                  </div>
                </div>
              </div>

              {/* Account Type - Static from backend */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  نوع الحساب
                </label>
                <div className="flex items-center gap-2 p-3 ">
                  <Building2 className="w-5 h-5 text-[#B49F65]" />
                  <span className="text-gray-700">
                    {transactionSummary.accountType}
                  </span>
                </div>
              </div>

              {/* Send Amount - Static from backend */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  مبلغ الإرسال
                </label>
                <div className="flex items-center gap-2 p-3 ">
                  <span className="text-gray-700 flex-1">
                    {transactionSummary.sendAmount}
                  </span>
                  <span className="text-gray-600">
                    {transactionSummary.currency}
                  </span>
                </div>
              </div>

              {/* Sender Data Section - Static from backend */}
              <div className="border-t pt-4">
                <h3 className="font-medium text-gray-800 mb-3">
                  بيانات المرسل
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>رقم الهاتف المحلي:</span>
                    <span>{transactionSummary.senderData.phoneNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الاسم الكامل:</span>
                    <span>{transactionSummary.senderData.fullName}</span>
                  </div>
                </div>
              </div>

              {/* Recipient Data Section - Static from backend */}
              <div className="border-t pt-4">
                <h3 className="font-medium text-gray-800 mb-3">
                  بيانات المستلم
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>الاسم الكامل:</span>
                    <span>{transactionSummary.recipientData.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>رقم الحساب:</span>
                    <span className="text-xs">
                      {transactionSummary.recipientData.accountNumber}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <SuccessModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onTrackClick={handleTrackClick}
        />

        <TrackingModal
          isOpen={isTrackingModalOpen}
          onClose={() => setIsTrackingModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default ArabicForm;
