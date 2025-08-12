import React, { useState } from "react";
import CurrencyExchange from "../../components/Transactions/CurrencyExchange";
import TransferMethods from "../../components/Transactions/TransferMethods";
import ArabicForm from "../../components/Transactions/ArabicForm";

const stepsCount = 3;

const TransactionsPage = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-end px-16">
        <img src="./src/assets/Logo.png" alt="img" className="w-14 h-14 object-cover " />
      </div>
      {/* Steps progress bar */}
      <div className="relative flex items-center justify-between w-full mx-auto px-16">
        {[...Array(stepsCount)].map((_, index) => {
          const stepNumber = index + 0;
          const isActive = step >= stepNumber;
          return (
            <React.Fragment key={stepNumber}>
              {index !== 0 && (
                // الخط بين الدوائر
                <div
                  className={`flex-grow h-[2px] ${
                    step > stepNumber ? "bg-[#B49F65]" : "bg-gray-300"
                  }`}
                />
              )}
              {/* الدائرة */}
              <div
                className={`w-2 h-2 rounded-full ${
                  isActive ? "bg-[#B49F65]" : "bg-gray-300"
                } flex items-center justify-center`}
              >
                {/* لو عايز رقم داخل الدائرة ممكن تضيف span هنا */}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* المحتوى حسب الخطوة */}
      {step === 1 && <CurrencyExchange setStep={setStep} />}
      {step === 2 && (
        <div>
          <TransferMethods setStep={setStep} />
        </div>
      )}
      {step === 3 && (
        <div className="">
          <ArabicForm />
        </div>
      )}
    </div>
  );
};

export default TransactionsPage;
