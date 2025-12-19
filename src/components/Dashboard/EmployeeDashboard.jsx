import React from "react";
import Header from "../Header";
import TaskOverview from "../TaskOverview";
import TaskList from "../TaskList";
import Footer from "../Footer";

const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-6">
        <Header />
        <TaskOverview />
      </div>
      <div className="flex-1 px-6">
        <TaskList />
      </div>
      <Footer />
    </div>
  );
};

export default EmployeeDashboard;
