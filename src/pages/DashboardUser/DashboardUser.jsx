import { Sidebar } from "../../components/Sidebar/sidebar";
import { Outlet } from "react-router-dom";

const DashboardUser = () => {
  return (
    <div className="flex min-h-screen bg-gray-50" dir="rtl">
      <Sidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardUser;
