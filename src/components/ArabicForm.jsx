import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ArabicForm = ({ formData, setFormData }) => {
  return (
    <div className="p-4 bg-white py-8 flex items-start justify-center">
      <div className="flex flex-col items-center justify-center gap-6 w-full max-w-4xl">
        {/* Sender Section */}
        <div className="w-full">
          <h2 className="text-lg font-bold text-right text-gray-800 mb-4">
            بيانات المرسل
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            {/* Sender Name */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
                الإسم الكامل
              </label>
              <input
                type="text"
                value={formData.senderName}
                onChange={(e) =>
                  setFormData({ ...formData, senderName: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-center text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* WhatsApp */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
                رقم واتساب
              </label>
              <div dir="ltr">
                <PhoneInput
                  country={"sa"}
                  value={formData.senderWhatsapp}
                  onChange={(phone) =>
                    setFormData({ ...formData, senderWhatsapp: `+${phone}` })
                  }
                  inputProps={{
                    name: "whatsapp",
                    required: true,
                  }}
                  containerStyle={{ width: "100%" }}
                  inputStyle={{ width: "100%", direction: "ltr" }}
                  buttonStyle={{ border: "none", background: "transparent" }}
                  enableSearch
                />
              </div>
            </div>
          </div>
        </div>

        {/* Receiver Section */}
        <div className="w-full">
          <h2 className="text-lg font-bold text-right text-gray-800 mb-4">
            بيانات المستلم
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            {/* Receiver Name */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
                الإسم الكامل
              </label>
              <input
                type="text"
                value={formData.receiverName}
                onChange={(e) =>
                  setFormData({ ...formData, receiverName: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-center text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            {/* Account Number */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
                رقم الحساب
              </label>
              <input
                type="text"
                value={formData.receiverAccount}
                onChange={(e) =>
                  setFormData({ ...formData, receiverAccount: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-center text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArabicForm;
