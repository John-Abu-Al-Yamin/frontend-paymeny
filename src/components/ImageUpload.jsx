import { CloudUpload } from "lucide-react";
import React, { useState } from "react";

const ImageUpload = ({ onImageSelect }) => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (onImageSelect) {
        onImageSelect(file);
      }
      setIsUploaded(true);
      setUploadedFileName(file.name);
      setPreviewUrl(URL.createObjectURL(file)); // عرض المعاينة
      e.target.value = null; // يسمح برفع نفس الصورة أو استبدالها
    }
  };

  const handleRemoveImage = () => {
    setIsUploaded(false);
    setUploadedFileName("");
    setPreviewUrl("");
  };

  return (
    <div className="flex flex-col items-start gap-4 p-4">
      <h2 className="text-xl font-semibold text-neutral-800 text-right">
        رفع صورة الإيصال
      </h2>

      <div className="flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#D4C19C] bg-[#FBF8F2] p-6 text-center">
        {isUploaded && previewUrl ? (
          <>
            <img
              src={previewUrl}
              alt="معاينة الإيصال"
              className="max-h-48 object-contain rounded mb-4"
            />
            <p className="text-sm text-[#6B6B6B] mb-2">
              ✅ تم رفع الإيصال بنجاح
              <span className="block mt-1 text-xs text-gray-500">
                ({uploadedFileName})
              </span>
            </p>
            <div className="flex gap-3">
              <label
                htmlFor="file-upload"
                className="text-sm px-4 py-2 bg-[#B49F65] text-white rounded cursor-pointer hover:bg-[#a38f59]"
              >
                تغيير الصورة
              </label>
           
            </div>
          </>
        ) : (
          <>
            <CloudUpload className="h-12 w-12 text-[#D4C19C]" />
            <label
              htmlFor="file-upload"
              className="mt-4 text-sm cursor-pointer text-[#6B6B6B]"
            >
              افلت الصورة أو اختر من جهازك
            </label>
          </>
        )}

        <input
          type="file"
          className="sr-only"
          id="file-upload"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default ImageUpload;
