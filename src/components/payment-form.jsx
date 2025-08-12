import React from "react";
import CountrySelect from "./country-select";
import PaymentMethodSelector from "./PaymentMethodSelector";
import ImageUpload from "./ImageUpload";
import ArabicForm from "./ArabicForm";
import PaymentReceiptSelector from "./PaymentReceiptSelector";

const PaymentForm = ({ formData, setFormData }) => {
  return (
    <div dir="rtl">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-medium">صفحة دفع إلكتروني</p>
        <img src="./src/assets/Logo.png" alt="img" className="" />
      </div>
      <div className="">
        <CountrySelect formData={formData} setFormData={setFormData} />
      </div>
      <div className="">
        <PaymentMethodSelector formData={formData} setFormData={setFormData} />
      </div>
      <div className="">
        <ImageUpload
          onImageSelect={(file) =>
            setFormData({ ...formData, receiptImage: file })
          }
        />
      </div>
      <div className="">
        <ArabicForm formData={formData} setFormData={setFormData} />
      </div>

      <div className="">
        <PaymentReceiptSelector formData={formData} setFormData={setFormData} />
      </div>
    </div>
  );
};

export default PaymentForm;
