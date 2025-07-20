import React from "react";
import { Link } from "react-router-dom";
import { LogOut, Home } from "lucide-react";

const handleLogout = () => {
  console.log("Logging out...");
};

export default function Header() {
  return (
    <nav className="bg-white border-b px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
       <Link
        to="/"
     className="flex items-center gap-2 text-2xl font-extrabold text-blue-600 hover:text-blue-700 transition"
     >
     <span className="inline-flex items-center justify-center h-10 w-10 bg-blue-100 text-blue-700 rounded-full text-lg font-bold shadow-sm">
      U/M
    </span>
     <span className="text-base tracking-wide text-gray-700 hidden sm:inline">UserManager</span>
    </Link>


        {/* Right: Home, Avatar, Name, Logout */}
        <div className="flex items-center gap-5 text-gray-700">
          
          {/* Home icon */}
          <Link to="/" className="hover:text-blue-600 transition">
            <Home className="h-6 w-6" />
          </Link>

          {/* Avatar */}
          {/* {user.avatar ? (
            <img
              className="h-10 w-10 rounded-full object-cover border-2 border-blue-500"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
              {user.name[0].toUpperCase()}
            </div>
          )} */}

          {/* Name */}
          
          {/* <span className="font-medium text-gray-800 text-sm tracking-wide">
            profile
          </span> */}


           <Link to="/Profile" className="hover:text-blue-600 transition">
          <h2>profile</h2>
          </Link>

          {/* Logout icon */}
          <button onClick={handleLogout} className="hover:text-red-500 transition">
            <LogOut className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
