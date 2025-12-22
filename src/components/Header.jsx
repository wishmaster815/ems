import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Header = () => {
  const { logout, loggedUser, employees, admin } = useContext(AuthContext);

  if (!loggedUser) return null;

  let displayName = "User";

  if (loggedUser.role === "employee") {
    const emp = employees.find((e) => e.email === loggedUser.email);
    displayName = emp?.firstName || "Employee";
  }

  if (loggedUser.role === "admin") {
    displayName = "Admin";
  }

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-medium">
        Hello <span className="text-2xl font-bold">{displayName} 👋</span>
      </h1>

      <button
        onClick={logout}
        className="font-semibold bg-red-600 hover:bg-red-700 hover:scale-95 px-4 py-2 rounded-lg text-white text-sm tracking-wide transition-all duration-200 shadow-md active:scale-95"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
