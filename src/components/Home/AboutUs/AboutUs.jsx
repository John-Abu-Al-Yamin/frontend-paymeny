import React from "react";
import aboutimage from "../../../assets/about.jpg";
const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-16" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-16 text-foreground">
          من نحن
        </h1>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-2">
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src={aboutimage}
                alt="تبادل الأموال - خدمات مالية"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-1 space-y-6 text-right">
            <p className="text-sm leading-relaxed text-foreground">
              في المحفظة، نضع الراحة والثقة في قلب كل معاملة. نحن شركة سودانية
              متخصصة في تقديم حلول مبتكرة لتحويل الأموال محلياً ودولياً، بسهولة
              وأمان وفي أي وقت.
            </p>

            <p className="text-sm leading-relaxed text-foreground">
              نهدف إلى تمكين الأفراد والشركات من إدارة أموالهم بسهولة عبر تقنيات
              حديثة وشبكة خدمات موثوقة تصل إلى كل مكان.
            </p>

            <p className="text-sm leading-relaxed text-foreground">
              برؤيتنا التي تركز على الشفافية، الأمان، وخدمة العملاء، نسعى لأن
              نكون الخيار الأول لكل من يبحث عن طريقة آمنة وفعالة لإرسال واستلام
              الأموال.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
