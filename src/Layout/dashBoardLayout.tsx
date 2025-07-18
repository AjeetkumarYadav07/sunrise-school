import { Outlet } from "react-router-dom";
import { Sidebar } from "./sideBar";


export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <main className="flex-1 bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  );
}
