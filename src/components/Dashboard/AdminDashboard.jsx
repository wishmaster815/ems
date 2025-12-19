import React from "react";
import Header from "../Header";
import AdminForm from "../AdminForm";
import TaskList from "../TaskList";

const AdminDashboard = () => {
  return (
    <div className="p-6 h-screen w-full">
      <Header />
      <AdminForm />
    </div>
  );
};

export default AdminDashboard;
