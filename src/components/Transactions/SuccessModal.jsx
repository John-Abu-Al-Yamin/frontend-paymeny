import { X, Check } from "lucide-react";
const SuccessModal = ({ isOpen, onClose ,onTrackClick }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full mx-4 relative shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 left-6 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        {/* Success icon with animated rings */}
        <div className="flex justify-center mb-8 mt-4">
          <div className="relative">
            {/* Animated rings */}
            <div className="absolute inset-0 rounded-full border-2 border-green-300 animate-ping opacity-75"></div>
            <div className="absolute inset-2 rounded-full border-2 border-green-400 animate-ping opacity-50 animation-delay-150"></div>

            {/* Main success icon */}
            <div className="relative w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <Check className="w-10 h-10 text-white stroke-[3]" />
            </div>
          </div>
        </div>

        {/* Arabic success message */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-800" dir="rtl">
            تمت عملية التحويل بنجاح
          </h2>
        </div>

        {/* Track operation button */}
        <button
          onClick={() => {
            onClose();
            onTrackClick();
          }}
          className="bg-[#B49F65] w-full hover:bg-[#A08B5A] text-white px-12 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          تتبع العملية
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
