import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../../assets/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "الرئيسية", href: "#" },
    { label: "من نحن", href: "#" },
    { label: "أسعار الصرف", href: "#" },
    { label: "الخدمات", href: "#" },
    { label: "آراء العملاء", href: "#" },
  ];

  return (
    <nav className=" " dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Right side */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="الشعار"
              className="h-16 w-16 object-cover"
            />
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 space-x-reverse">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-[#464646] hover:text-[#B49F65] px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Language Selector - Left side */}
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-2 space-x-reverse text-[#464646]">
              <Globe className="w-6 h-6" />
              <span className="text-sm font-medium">عربي</span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#464646] hover:text-[#B49F65] p-2"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-[#464646] hover:text-[#B49F65] block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-2 space-x-reverse text-[#464646] px-3 py-2 border-t border-gray-100 mt-2 pt-2">
                <Globe className="w-6 h-6" />
                <span className="text-sm font-medium">عربي</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
