import React from "react";
import { Shield, LogOut } from "lucide-react";

const handleLogout = () => {
  console.log("Admin logged out");
};

export default function AdminHeader() {
  return (
    <nav className="bg-white border-b px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Left: Admin Info (Icon + Text Block) */}
        <div className="flex items-start gap-3 text-blue-700">
          <Shield className="h-8 w-8 mt-1" />
          <div>
            <h1 className="text-xl font-bold leading-tight">Admin Dashboard</h1>
            <p className="text-sm text-gray-600 leading-snug">
              Manage Users & System Settings
            </p>
          </div>
        </div>

        {/* Right: Logout Icon */}
        <button
          onClick={handleLogout}
          className="hover:text-red-500 transition"
          title="Logout"
        >
          <LogOut className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}
