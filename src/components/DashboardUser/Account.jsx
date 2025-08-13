import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Account = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full max-w-xl">
        {/* العنوان */}
        <h2 className="text-xl font-bold text-right text-black">حسابي</h2>
        <p className="text-sm text-gray-500 text-right mt-1">
          عدل بياناتك بسهولة ويسر
        </p>

        {/* الحقول */}
        <div className="flex items-center gap-8 w-full mt-4">
          {/* رقم الهاتف */}
          <div className="w-full">
            <label htmlFor="phone" className="block text-xs text-zinc-500 mb-1">
              رقم واتساب
            </label>
            <PhoneInput
              country={"eg"}
              enableSearch
              searchPlaceholder="ابحث عن الدولة"
              inputProps={{
                name: "phone",
              }}
              containerClass="w-full"
              inputClass="!w-full !rounded-md !border !px-4 !py-3 !text-sm !outline-none !border-zinc-300 focus:!border-[#b59b6b]/60 focus:!ring-[#b59b6b]/30 !bg-white"
              buttonClass="!border !border-zinc-300 !bg-white !pr-6"
            />
          </div>

          {/* الاسم الكامل */}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 text-right">
              الاسم الكامل
            </label>
            <input
              type="text"
              defaultValue="أحمد محمد خالد"
              className="w-full rounded-md border px-4 py-3 text-sm outline-none transition focus:ring-2 border-zinc-300 focus:border-[#b59b6b]/60 focus:ring-[#b59b6b]/30 bg-white"
            />
          </div>
        </div>

        {/* تغيير كلمة المرور */}
        <div className="mt-3 text-right">
          <a
            href="#"
            className="text-sm text-[#B49F65] underline hover:underline-offset-2"
          >
            تغيير كلمة المرور
          </a>
        </div>

        {/* الأزرار */}
        <div className="flex w-full justify-center gap-4 mt-6">
          <button
            type="button"
            className="px-8 py-2 border w-full border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            إلغاء
          </button>
          <button
            type="button"
            className="px-8 py-2 w-full bg-[#B49F65] text-white rounded-lg hover:bg-[#B49F65]/80"
          >
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
