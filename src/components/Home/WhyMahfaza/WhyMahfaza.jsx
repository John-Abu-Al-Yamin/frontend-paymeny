import { Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import image from "../../../assets/image-3.png";

const testimonials = [
  {
    id: 1,
    text: "تعاملت مع المحفظة أكتر من مرة، والخدمة دائمًا سريعة وآمنة. بقدر أحوّل لأسرتي في الخارج بثقة.",
    name: "محمد خالد",
    title: "الخرطوم",
  },
  {
    id: 2,
    text: "خدمة ممتازة وسرعة في التنفيذ، أنصح الجميع بالتعامل معهم لأنهم يقدمون أفضل الخدمات المالية.",
    name: "أحمد علي",
    title: "الخرطوم",
  },
  {
    id: 3,
    text: "الثقة والأمان هما أهم ما يميز هذه الخدمة، تعاملت معهم عدة مرات ولم أواجه أي مشاكل.",
    name: "سارة محمود",
    title: "الخرطوم",
  },
];

const WhyMahfaza = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Main heading */}
        <div className="text-center mb-12">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
            dir="rtl"
          >
            لماذا شركة المحفظة؟
          </h1>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {["السرعة", "المصداقية", "الأمان"].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-green-200 cursor-pointer group"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
                <Check className="w-7 h-7 text-green-600 transition-colors duration-300 group-hover:text-green-700" />
              </div>
              <h3
                className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-700"
                dir="rtl"
              >
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 px-4 relative overflow-hidden">
        {/* Decorative profile images */}
        <div className="absolute top-20 left-4 sm:left-20 w-12 sm:w-16 h-12 sm:h-16 rounded-full overflow-hidden">
          <img src={image} alt="" className="object-cover w-full h-full" />
        </div>

        <div className="absolute top-32 right-4 sm:right-16 w-14 sm:w-20 h-14 sm:h-20 rounded-full overflow-hidden">
          <img src={image} alt="" className="object-cover w-full h-full" />
        </div>

        <div className="absolute bottom-32 left-4 sm:left-16 w-10 sm:w-14 h-10 sm:h-14 rounded-full overflow-hidden">
          <img src={image} alt="" className="object-cover w-full h-full" />
        </div>

        <div className="absolute bottom-20 right-4 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 rounded-full overflow-hidden">
          <img src={image} alt="" className="object-cover w-full h-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3" dir="rtl">
            آراء عملاؤنا
          </h2>

          <p className="text-gray-600 mb-12 text-sm sm:text-base" dir="rtl">
            نستمع ما يقوله عملاؤنا عن تجربتهم معنا، فنصص كلّ رأي ونجاح في كل تحويل
          </p>

          {/* Testimonials Swiper */}
          <div className="relative">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletClass:
                  "swiper-pagination-bullet !w-3 !h-3 !bg-[#B49F65] !opacity-50 transition-all duration-300",
                bulletActiveClass:
                  "swiper-pagination-bullet-active !bg-[#B49F65] !opacity-100 !scale-125",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="rounded-2xl p-6 sm:p-8 md:p-10 max-w-2xl mx-auto">
                    {/* Quote Icon */}
                    <div className="text-[#B49F65] text-5xl sm:text-7xl font-serif mb-4">
                      "
                    </div>

                    {/* Testimonial Text */}
                    <p
                      className="text-[#B49F65] text-xl sm:text-3xl md:text-5xl font-black leading-relaxed mb-6"
                      dir="rtl"
                    >
                      {testimonial.text}
                    </p>

                    {/* Author */}
                    <div>
                      <h4
                        className="text-gray-800 font-semibold text-sm sm:text-base mb-1"
                        dir="rtl"
                      >
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-xs sm:text-sm" dir="rtl">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          bottom: -20px !important;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          margin: 0 6px !important;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default WhyMahfaza;
