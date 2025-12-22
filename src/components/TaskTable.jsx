import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const TaskTable = () => {
  const { employees } = useContext(AuthContext);
  const statusColors = {
    New: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    "In Progress": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    Completed: "bg-green-500/10 text-green-500 border-green-500/20",
    Failed: "bg-red-500/10 text-red-500 border-red-500/20",
  };
  return (
    <div className="pb-10 px-10">
      <div className="bg-gray-800 mt-10 p-5 rounded-2xl border border-gray-700 shadow-xl">
        <div className="grid grid-cols-5 bg-gray-900 px-6 py-4 rounded-xl text-sm font-bold text-gray-400 uppercase mb-4">
          <span>Assignee</span>
          <span className="col-span-2">Tasks</span>
          <span>Category</span>
          <span className="text-right">Status</span>
        </div>

        {employees.map((emp) => (
          <div
            key={emp.id}
            className="grid grid-cols-5 items-start px-6 py-4 mb-3 bg-gray-700/30 border border-gray-700 rounded-xl"
          >
            <h2 className="font-semibold text-white">{emp.firstName}</h2>

            <div className="col-span-2 space-y-1">
              {emp.tasks.map((task, i) => (
                <p key={i} className="text-gray-300 text-sm">
                  • {task.taskTitle}
                </p>
              ))}
            </div>

            <div className="space-y-1">
              {emp.tasks.map((task, i) => (
                <p key={i} className="text-emerald-400 text-sm">
                  {task.category}
                </p>
              ))}
            </div>

            <div className="flex flex-col items-end gap-1">
              {emp.tasks.map((task, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 text-xs font-bold rounded-lg border ${
                    statusColors[task.status]
                  }`}
                >
                  {task.status}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskTable;
