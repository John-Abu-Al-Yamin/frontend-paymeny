import { RefreshCw } from "lucide-react";
import { useMemo } from "react";
import Select from "react-select";
import countries from "world-countries";

const formatCountries = countries.map((country) => {
  const currencyKey = Object.keys(country.currencies || {})[0];
  const currency = country.currencies?.[currencyKey]?.name || "";
  const currencyCode = currencyKey || "";

  return {
    value: country.cca2,
    label: (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <img
          src={`https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`}
          alt={country.name.common}
          style={{ width: "20px", height: "15px", objectFit: "cover" }}
        />
        <span>{country.name.common}</span>
      </div>
    ),
    currencyCode,
    currency,
  };
});

const CountrySelect = ({ formData, setFormData }) => {
  const options = useMemo(() => formatCountries, []);

  const sendingCountry = options.find(
    (option) => option.value === formData.sendingCountry
  );
  const receivingCountry = options.find(
    (option) => option.value === formData.receivingCountry
  );

  const handleSelectChange = (field, selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      [field]: selectedOption.value,
    }));
  };

  const handleAmountChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div dir="rtl">
      <p className="font-medium text-xl pb-2">تحديد الدول</p>
      <div className="flex justify-between items-center gap-x-6">
        <div className="flex flex-col w-full">
          <label className="mb-1">اختر الدولة المرسلة</label>
          <Select
            options={options}
            value={sendingCountry}
            onChange={(val) => handleSelectChange("sendingCountry", val)}
            className="w-full"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="mb-1">اختر الدولة المستلمة</label>
          <Select
            options={options}
            value={receivingCountry}
            onChange={(val) => handleSelectChange("receivingCountry", val)}
            className="w-full"
          />
        </div>
      </div>

      <div className="py-4">
        <p className="font-medium text-xl pb-4 text-right">سعر الصرف اللحظي</p>
        <div className="w-1/2 flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-lg">
              {sendingCountry?.currencyCode || "___"}
            </span>
            <input
              type="text"
              value={formData.amountSar}
              onChange={(e) =>
                handleAmountChange("amountSar", e.target.value)
              }
              className="text-lg font-semibold w-24 text-right border-none focus:outline-none"
              aria-label="Sending amount"
            />
          </div>

          <RefreshCw className="text-gray-500 w-5 h-5" />

          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-lg">
              {receivingCountry?.currencyCode || "___"}
            </span>
            <input
              type="text"
              value={formData.amountEgp}
              onChange={(e) =>
                handleAmountChange("amountEgp", e.target.value)
              }
              className="text-lg font-semibold w-12 text-right border-none focus:outline-none"
              aria-label="Receiving amount"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountrySelect;
