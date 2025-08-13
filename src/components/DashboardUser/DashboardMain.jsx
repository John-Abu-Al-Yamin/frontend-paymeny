import React from "react";
import monay from "../../assets/monay.png";

const DashboardMain = () => {
  const transactions = [
    {
      id: 1,
      transactionNumber: "678903847789",
      sentAmount: "200 يورو",
      receivedAmount: "300 جنيه إسترليني",
      recipientName: "أحمد محمد أحمد",
      date: "اليوم الساعة 3 مساءً",
      status: "مكتملة",
      statusType: "completed",
    },
    {
      id: 2,
      transactionNumber: "435675432342",
      sentAmount: "300 جنيه إسترليني",
      receivedAmount: "600 دولار كندي",
      recipientName: "نجلاء عبد الرحمن",
      date: "اليوم الساعة 5 مساءً",
      status: "معلقة",
      statusType: "pending",
    },
    {
      id: 3,
      transactionNumber: "324567543323",
      sentAmount: "400 ريال سعودي",
      receivedAmount: "800 ين ياباني",
      recipientName: "عمر سعيد الحريري",
      date: "اليوم الساعة 7 مساءً",
      status: "غير مكتملة",
      statusType: "incomplete",
    },
    {
      id: 4,
      transactionNumber: "234567854334",
      sentAmount: "500 درهم إماراتي",
      receivedAmount: "400 ريال سعودي",
      recipientName: "فاطمة زكريا عبدالله",
      date: "اليوم الساعة 10 مساءً",
      status: "مكتملة",
      statusType: "completed",
    },
    {
      id: 5,
      transactionNumber: "234566743654",
      sentAmount: "600 دولار كندي",
      receivedAmount: "500 درهم إماراتي",
      recipientName: "حسين علي الرفاعي",
      date: "اليوم الساعة 11 مساءً",
      status: "مكتملة",
      statusType: "completed",
    },
    {
      id: 6,
      transactionNumber: "234567876543",
      sentAmount: "700 كرونة سويدية",
      receivedAmount: "700 كرونة سويدية",
      recipientName: "سارة خالد العلي",
      date: "اليوم الساعة 5 مساءً",
      status: "مكتملة",
      statusType: "completed",
    },
    {
      id: 7,
      transactionNumber: "345679965432",
      sentAmount: "800 ين ياباني",
      receivedAmount: "1200 دينار كويتي",
      recipientName: "سالم يوسف العلي",
      date: "الأحد 15 مارس 2025",
      status: "مكتملة",
      statusType: "completed",
    },
    {
      id: 8,
      transactionNumber: "345678987654",
      sentAmount: "900 رمية هندية",
      receivedAmount: "1400 ريال قطري",
      recipientName: "علي حسين الحريري",
      date: "الأحد 15 مارس 2025",
      status: "مكتملة",
      statusType: "completed",
    },
    {
      id: 9,
      transactionNumber: "234567987655",
      sentAmount: "1000 بيزو مكسيكي",
      receivedAmount: "1100 فرنك سويسري",
      recipientName: "يوسف طارق السعيد",
      date: "الأحد 15 مارس 2025",
      status: "مكتملة",
      statusType: "completed",
    },
    {
      id: 10,
      transactionNumber: "333345675433",
      sentAmount: "1100 فرنك سويسري",
      receivedAmount: "900 رمية هندية",
      recipientName: "ليلى ناصر القريشي",
      date: "الأحد 15 مارس 2025",
      status: "مكتملة",
      statusType: "completed",
    },
    {
      id: 11,
      transactionNumber: "356778654332",
      sentAmount: "1200 دينار كويتي",
      receivedAmount: "200 يورو",
      recipientName: "محمود سامي العلي",
      date: "اليوم الساعة 3 مساءً",
      status: "مكتملة",
      statusType: "completed",
    },
    {
      id: 12,
      transactionNumber: "345676543223",
      sentAmount: "1300 دولار أسترالي",
      receivedAmount: "1000 بيزو مكسيكي",
      recipientName: "هدى عبد الله",
      date: "الأحد 15 مارس 2025",
      status: "مكتملة",
      statusType: "completed",
    },
  ];
  const getStatusBadge = (status, statusType) => {
    const baseClasses =
      "inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap";

    if (statusType === "completed") {
      return `${baseClasses} bg-green-100 text-green-800`;
    }

    if (statusType === "pending") {
      return `${baseClasses} bg-yellow-100 text-yellow-800`;
    }

    if (statusType === "incomplete") {
      return `${baseClasses} bg-red-100 text-red-800`;
    }

    return `${baseClasses} bg-gray-100 text-gray-800`;
  };

  return (
    <div>
      <div className="bg-[#f5f1e8] rounded-2xl p-8 w-full  shadow-lg mb-8 ml-auto">
        <div className="flex items-center justify-between gap-8">
          {/* Left side - Illustration */}

          {/* Right side - Content */}
          <div className="flex-1 text-right" dir="rtl">
            {/* Main heading */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-relaxed">
              مع المحفظة حول أموالك من أي مكان بالعالم
              <br />
              إلى السودان.
            </h2>

            {/* Subtext */}
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              حول أموالك بثقة، تابع حوالاتك لحظة بلحظة.
            </p>

            {/* CTA Button */}
            <button className="bg-[#b8a882] hover:bg-[#a69770] text-white px-12 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md">
              جرب الآن
            </button>
          </div>
          <div className="flex-shrink-0">
            <img
              src={monay}
              alt="Hand holding money bag"
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-right">
        المعاملات السابقة
      </h2>
      <div
        className="w-full max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-sm"
        dir="rtl"
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                  #
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                  رقم المعاملة
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                  المبلغ المرسل
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                  المبلغ المستلم
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                  اسم المستلم
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                  التاريخ
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                  الحالة
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr
                  key={transaction.id}
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-25"
                  }`}
                >
                  <td className="px-4 py-4 text-sm text-gray-900">
                    {transaction.id}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900 font-mono">
                    {transaction.transactionNumber}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">
                    {transaction.sentAmount}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">
                    {transaction.receivedAmount}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">
                    {transaction.recipientName}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {transaction.date}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={getStatusBadge(
                        transaction.status,
                        transaction.statusType
                      )}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
