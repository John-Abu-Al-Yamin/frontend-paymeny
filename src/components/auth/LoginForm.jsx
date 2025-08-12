import React, { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useLoginMutation } from "../../redux/features/auth/authApiSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/user.validation"; // عدل المسار حسب مشروعك

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();
      toast.success(res.message);
      const accessToken = res.accessToken;
      if (accessToken) {
        Cookies.set("accessToken", accessToken);
        navigate("/");
      }
    } catch (err) {
      if (err?.data?.errors?.length) {
        err.data.errors.forEach((error) => {
          toast.error(error.message);
        });
      } else if (err?.data?.message && err.status >= 400) {
        toast.error(err.data.message);
      } else {
        toast.error("حدث خطأ غير متوقع");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* رقم الواتساب */}
      <div>
        <label htmlFor="phone" className="block text-xs text-zinc-500 mb-1">
          رقم واتساب
        </label>
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              country={"eg"}
              value={value}
              onChange={(val) => {
                const formatted = val.startsWith("+") ? val : `+${val}`;
                onChange(formatted);
              }}
              enableSearch
              searchPlaceholder="ابحث عن الدولة"
              inputProps={{
                name: "phone",
                required: true,
              }}
              containerClass="w-full"
              inputClass={`!w-full !rounded-md !border !px-4 !py-3 !text-sm !outline-none ${
                errors.phone
                  ? "!border-red-500 focus:!border-red-500 focus:!ring-red-300"
                  : "!border-zinc-300 focus:!border-[#b59b6b]/60 focus:!ring-[#b59b6b]/30"
              } !bg-white`}
              buttonClass="!border !border-zinc-300 !bg-white !pr-6"
            />
          )}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* كلمة المرور */}
      <div>
        <label htmlFor="password" className="block text-xs text-zinc-500 mb-1">
          كلمة المرور
        </label>
        <div className="relative">
          <input
            id="password"
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className={`w-full rounded-md border px-4 py-3 text-sm outline-none transition focus:ring-2 ${
              errors.password
                ? "border-red-500 focus:border-red-500 focus:ring-red-300"
                : "border-zinc-300 focus:border-[#b59b6b]/60 focus:ring-[#b59b6b]/30"
            } bg-white`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded p-1 text-zinc-400 hover:text-zinc-600"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* زر الدخول */}
      <button
        type="submit"
        disabled={isLoading}
        className="mt-2 w-full flex items-center justify-center rounded-md bg-[#b59b6b] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#a0885c] focus:outline-none focus:ring-4 focus:ring-[#b59b6b]/30"
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          "تسجيل الدخول"
        )}
      </button>
    </form>
  );
};

export default LoginForm;
