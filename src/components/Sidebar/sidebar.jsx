import {
  LayoutDashboard,
  BarChart3,
  Settings,
  User,
  HelpCircle,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "الرئيسية", href: "/dashboard-user", icon: LayoutDashboard },
  {
    name: "المعاملات",
    href: "/dashboard-user/previous-transactions",
    icon: BarChart3,
  },
  {
    name: "أسعار الصرف",
    href: "/dashboard-user/exchange-rates",
    icon: Settings,
  },
  { name: "حسابي", href: "/dashboard-user/account", icon: User },
  { name: "طلب جديد", href: "/dashboard-user/new-order", icon: HelpCircle },
  { name: "المساعدة", href: "/dashboard-user/help", icon: User },
];

export function Sidebar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md bg-[#FCFCFC] shadow-sm"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 right-0 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out w-60 bg-[#FCFCFC] shadow-sm z-40`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-center gap-3 mb-8">
            <img src={logo} alt="logo" className="w-16 h-16 object-cover" />
          </div>

          <nav className="space-y-2 flex-1">
            {navigation.map((item) => {
              const isActive =
                item.href === "/dashboard-user"
                  ? pathname === "/dashboard-user"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                  ${
                    isActive
                      ? "bg-amber-50 text-[#B49F65] border-r-2 border-amber-600"
                      : "text-[#464646] hover:bg-gray-50 hover:text-gray-700"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0  z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}