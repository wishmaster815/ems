import React from "react";
import Header from "../Header";
import TaskOverview from "../TaskOverview";
import TaskList from "../TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="p-6 h-screen w-full">
      <Header />
      <TaskOverview />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
