import { Banknote, CreditCard, Wallet } from "lucide-react";

const PaymentMethodSelector = ({ formData, setFormData }) => {
  const selectedMethod = formData.paymentMethod;

  const paymentMethods = [
    {
      id: "bank-transfer",
      name: "تحويل بنكي",
      icon: Banknote,
    },
    {
      id: "visa-card",
      name: "فيزا كارد",
      icon: CreditCard,
    },
    {
      id: "e-wallet",
      name: "محفظة إلكترونية",
      icon: Wallet,
    },
    {
      id: "cash-payment",
      name: "دفع نقدي",
      icon: Wallet,
    },
  ];

  return (
    <div className="p-2 rounded-lg">
      <h2 className="text-lg font-bold text-right mb-4 text-[#3D3D3D]">
        اختر وسيلة الدفع
      </h2>
      <div className="border rounded-lg overflow-hidden border-gray-200">
        {paymentMethods.map((method, index) => (
          <div
            key={method.id}
            className={`flex items-center justify-between p-4 cursor-pointer ${
              selectedMethod === method.id ? "bg-[#F8F5F0]" : "bg-white"
            } ${
              index < paymentMethods.length - 1
                ? "border-b border-gray-200"
                : ""
            }`}
            onClick={() =>
              setFormData({ ...formData, paymentMethod: method.id })
            }
          >
            <div className="flex items-center gap-3">
              <method.icon className="w-5 h-5 text-text-dark" />
              <span className="text-text-dark">{method.name}</span>
            </div>
            <div
              className={`w-5 h-5 bg-white rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                selectedMethod === method.id
                  ? "border-primary-selected-radio bg-primary-selected-radio"
                  : "border-secondary-radio"
              }`}
            >
              {selectedMethod === method.id && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#B49F65]" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodSelector;
