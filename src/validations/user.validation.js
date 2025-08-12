import * as yup from "yup";

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "الاسم لازم يكون على الأقل 3 حروف")
    .required("الاسم مطلوب"),
  phone: yup
    .string()
    .matches(
      /^\+[1-9]\d{9,14}$/,
      "رقم الموبايل غير صحيح، لازم يكون بصيغة دولية ويبدأ بـ +"
    )
    .required("رقم الموبايل مطلوب"),
  password: yup
    .string()
    .min(8, "كلمة السر لازم تكون على الأقل 8 حروف")
    .required("كلمة السر مطلوبة"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "كلمة السر وتأكيدها مش متطابقين")
    .required("تأكيد كلمة السر مطلوب"),
});

export const loginSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(
      /^\+[1-9]\d{9,14}$/,
      "رقم الموبايل غير صحيح، لازم يكون بصيغة دولية ويبدأ بـ +"
    )
    .required("رقم الموبايل مطلوب"),
  password: yup
    .string()
    .min(8, "كلمة السر لازم تكون على الأقل 8 حروف")
    .required("كلمة السر مطلوبة"),
});
