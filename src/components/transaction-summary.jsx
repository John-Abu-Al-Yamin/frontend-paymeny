import { XCircle } from "lucide-react"

const countryNames = {
  SA: "السعودية", // Saudi Arabia
  EG: "مصر", // Egypt
}

const paymentMethodNames = {
  "bank-transfer": "حساب بنكي",
  "visa-card": "فيزا كارد",
  "e-wallet": "محفظة إلكترونية",
  "cash-payment": "دفع نقدي",
}

export default function TransactionSummary({ formData }) {
  const getCountryName = (code) => countryNames[code] || code
  const getPaymentMethodName = (id) => paymentMethodNames[id] || id

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-6" dir="rtl">
      <div className="pb-4 border-b border-gray-200 mb-4">
        <h2 className="text-2xl font-bold text-right text-gray-800">ملخص العملية</h2>
      </div>
      <div className="grid gap-4">
        {/* Transaction Details */}
        <div className="flex justify-between items-center">
          <p className="text-gray-600">الدولة المرسلة</p>
          <p className="font-medium text-gray-800">{getCountryName(formData.sendingCountry)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">الدولة المستلمة</p>
          <p className="font-medium text-gray-800">{getCountryName(formData.receivingCountry)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">وسيلة الدفع</p>
          <p className="font-medium text-gray-800">{getPaymentMethodName(formData.paymentMethod)}</p>
        </div>

        {formData.receiptImage && (
          <div className="flex justify-between items-center">
            <p className="text-gray-600">صورة الإيصال</p>
            <div className="relative w-24 h-24 border border-gray-200 rounded overflow-hidden">
              <img
                src={URL.createObjectURL(formData.receiptImage) || "/placeholder.svg"}
                alt="إيصال الدفع"
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-1 right-1 bg-white rounded-full p-0.5 shadow-sm"
                aria-label="Remove receipt image"
              >
                <XCircle className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
        )}

        {/* Sender Details */}
        <div className="border-t border-gray-200 pt-4 mt-4">
          <h3 className="text-lg font-bold mb-2 text-right text-gray-800">بيانات المرسل</h3>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">الإسم الكامل</p>
            <p className="font-medium text-gray-800">{formData.senderName}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">رقم واتساب للمتابعة</p>
            <p className="font-medium text-gray-800">{formData.senderWhatsapp}</p>
          </div>
        </div>

        {/* Receiver Details */}
        <div className="border-t border-gray-200 pt-4 mt-4">
          <h3 className="text-lg font-bold mb-2 text-right text-gray-800">بيانات المستلم</h3>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">الإسم الكامل</p>
            <p className="font-medium text-gray-800">{formData.receiverName}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">رقم الحساب</p>
            <p className="font-medium text-gray-800">{formData.receiverAccount}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-4 pt-6 border-t border-[#B49F65] mt-6">
        <button className="flex-1 py-2 px-4 border border-[#B49F65] text-[#B49F65] rounded-md hover:bg-primary/10 transition-colors duration-200">
          إلغاء
        </button>
        <button className="flex-1 py-2 px-4 bg-[#B49F65] text-[#FFFFFF] rounded-md hover:bg-primary/90 transition-colors duration-200">
          تأكيد العملية
        </button>
      </div>
    </div>
  )
}
