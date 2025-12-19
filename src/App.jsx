import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Toaster position="top-center" />

      {!user && <Login />}
      {user === "employee" && <EmployeeDashboard />}
      {user === "admin" && <AdminDashboard />}
    </>
  );
};

export default App;
