import { TextIcon as Telegram, Youtube, Instagram, Twitter, Music, AtSign, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#3F3823] py-4 px-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Social Media Icons - Left Side */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-[#b8b8a3] hover:text-white transition-colors">
            <Telegram size={20} />
          </a>
          <a href="#" className="text-[#b8b8a3] hover:text-white transition-colors">
            <Youtube size={20} />
          </a>
          <a href="#" className="text-[#b8b8a3] hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-[#b8b8a3] hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-[#b8b8a3] hover:text-white transition-colors">
            <Music size={20} />
          </a>
          <a href="#" className="text-[#b8b8a3] hover:text-white transition-colors">
            <AtSign size={20} />
          </a>
          <a href="#" className="text-[#b8b8a3] hover:text-white transition-colors">
            <Facebook size={20} />
          </a>
        </div>

        {/* Arabic Copyright Text - Right Side */}
        <div className="text-[#b8b8a3] text-sm font-medium" dir="rtl">
          © جميع الحقوق محفوظة للمنظمة
        </div>
      </div>
    </footer>
  )
}
