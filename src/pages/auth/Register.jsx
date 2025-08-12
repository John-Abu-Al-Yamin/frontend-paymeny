import React from "react";
import RegisterForm from "../../components/auth/RegisterForm";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";


const Register = () => {
  return (
    <main className="min-h-screen w-full bg-white">
      {/* Desktop: two columns. Mobile: stack. */}
      <div className="mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 md:grid-cols-2">
        {/* Left: Form panel (RTL) */}
        <section
          dir="rtl"
          className="flex flex-col gap-8 border-r border-zinc-200 px-6 py-8 md:px-8 lg:px-10"
          aria-labelledby="signup-title"
        >
          {/* Brand */}
          <div className="flex items-center justify-start gap-3">
            <img
              src={logo}
              alt="الشعار"
              className="h-10 w-10 rounded-sm"
            />
            <div className="leading-none">
              <p className="text-[10px] tracking-[0.25em] text-zinc-500">
                AL MUSTAFA
              </p>
              <div className="h-0.5 w-7 bg-[#b59b6b]" />
            </div>
          </div>

          {/* Headings */}
          <div className="space-y-2">
            <h1
              id="signup-title"
              className="text-2xl font-semibold text-zinc-900"
            >
              سجل حسابك معنا
            </h1>
            <p className="text-sm text-zinc-500">
              حوّل أموالك بثقة، وابدأ حالاً بخطوة بسيطة.
            </p>
          </div>

          {/* Form */}
          <RegisterForm />

          {/* Footer link */}
          <p className="mt-auto text-xs text-zinc-500 text-center">
            لديك حساب بالفعل؟{" "}
            <Link
              to="/auth/login"
              className="font-medium text-[#b59b6b] hover:underline"
            >
              تسجيل الدخول
            </Link>
          </p>
        </section>

        {/* Right: Decorative panel */}
        <aside className="hidden bg-white md:block">
          <img
            src="/src/assets/Login.png"
            alt="الشعار"
            className="h-full w-full object-cover"
          />
        </aside>
      </div>
    </main>
  );
};

export default Register;
