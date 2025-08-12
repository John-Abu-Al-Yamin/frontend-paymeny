import { X, ArrowUp, Check, Clock } from "lucide-react";

export function TrackingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const timelineSteps = [
    {
      id: 1,
      text: "لقد أرسلت التحويل",
      time: "اليوم 5:00 مساء",
      status: "completed",
    },
    {
      id: 2,
      text: "لقد استلمنا التحويل",
      time: "اليوم 5:03 مساء",
      status: "completed",
    },
    {
      id: 3,
      text: "جاري معالجة أموالك",
      time: "",
      status: "in-progress",
    },
    {
      id: 4,
      text: "حظل يونس عمل",
      time: "",
      status: "pending",
    },
    {
      id: 5,
      text: "أحمد محمد حسن استلم 5000#",
      time: "",
      status: "pending",
    },
  ];

  return (
    <div className="fixed inset-0  bg-black/50 flex items-center justify-center p-4 z-50">
      <div
        className="bg-white rounded-2xl p-4 w-full max-w-md relative max-h-[90vh] overflow-y-auto"
        dir="rtl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            تتبع العملية
          </h2>

          {/* Icon */}
          <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <ArrowUp className="w-8 h-8 text-amber-600" />
          </div>

          <p className="text-gray-600 mb-2">إرسال</p>
          <p className="text-2xl font-bold text-gray-900 mb-2"># 5000</p>
          <p className="text-gray-700">أحمد محمد حسن</p>
        </div>

        {/* Timeline */}
        <div className="space-y-4 mb-8">
          {timelineSteps.map((step, index) => (
            <div key={step.id} className="flex items-start gap-3">
              {/* Status Icon */}
              <div className="flex-shrink-0 mt-1">
                {step.status === "completed" && (
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
                {step.status === "in-progress" && (
                  <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                )}
                {step.status === "pending" && (
                  <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm ${
                    step.status === "completed"
                      ? "text-gray-900"
                      : step.status === "in-progress"
                      ? "text-gray-900"
                      : "text-gray-500"
                  }`}
                >
                  {step.text}
                </p>
                {step.time && (
                  <p className="text-xs text-gray-500 mt-1">{step.time}</p>
                )}
              </div>

              {/* Time indicator */}
              {step.time && (
                <div className="flex-shrink-0">
                  <Clock className="w-4 h-4 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="bg-[#B49F65] w-full hover:bg-[#A08B5A] text-white px-12 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          انتقل إلى لوحة التحكم
        </button>
      </div>
    </div>
  );
}

export default TrackingModal;
