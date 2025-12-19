import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AdminForm = () => {
  const { employees } = useContext(AuthContext);

  const statusColors = {
    New: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    "In Progress": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    Completed: "bg-green-500/10 text-green-500 border-green-500/20",
    Failed: "bg-red-500/10 text-red-500 border-red-500/20",
  };

  return (
    <div className="p-10">
      {/* CREATE TASK FORM */}
      <div className="flex items-center justify-center">
        <form className="bg-gray-800 w-full py-8 px-10 rounded-2xl shadow-2xl space-y-8 border border-gray-700">
          <h2 className="text-3xl font-semibold text-center text-white">
            Create Task
          </h2>

          <div className="flex gap-10">
            {/* LEFT */}
            <div className="w-1/2 space-y-5">
              <div>
                <label className="text-gray-300 block mb-1">Task Title</label>
                <input
                  type="text"
                  placeholder="Enter task title"
                  className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-white"
                />
              </div>

              <div>
                <label className="text-gray-300 block mb-1">Due Date</label>
                <input
                  type="date"
                  className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-white"
                />
              </div>

              <div>
                <label className="text-gray-300 block mb-1">Assign To</label>
                <input
                  type="text"
                  placeholder="Employee name"
                  className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-white"
                />
              </div>

              <div>
                <label className="text-gray-300 block mb-1">Category</label>
                <input
                  type="text"
                  placeholder="Enter category (Presentation, Development, Meeting, QA, etc...)"
                  className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-white"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-1/2 flex flex-col">
              <label className="text-gray-300 block mb-1">Description</label>
              <textarea
                placeholder="Enter detailed description of task (limit 500 characters)"
                className="flex-1 rounded-lg bg-gray-700 px-4 py-3 text-white resize-none"
              />

              <button
                type="button"
                className="mt-6 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-bold"
              >
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* EMPLOYEE TASK TABLE */}
      <div className="bg-gray-800 mt-10 p-5 rounded-2xl border border-gray-700 shadow-xl">
        {/* TABLE HEADER */}
        <div className="grid grid-cols-5 bg-gray-900 px-6 py-4 rounded-xl text-sm font-bold text-gray-400 uppercase mb-4">
          <span>Assignee</span>
          <span className="col-span-2">Tasks</span>
          <span>Category</span>
          <span className="text-right">Status</span>
        </div>

        {/* TABLE ROWS */}
        {employees.map((emp) => (
          <div
            key={emp.id}
            className="grid grid-cols-5 items-start px-6 py-4 mb-3 bg-gray-700/30 border border-gray-700 rounded-xl hover:border-emerald-500/50 transition"
          >
            {/* Assignee */}
            <h2 className="font-semibold text-white">{emp.firstName}</h2>

            {/* Tasks */}
            <div className="col-span-2 space-y-1">
              {emp.tasks.length ? (
                emp.tasks.map((task, i) => (
                  <p key={i} className="text-gray-300 text-sm">
                    • {task.taskTitle}
                  </p>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No tasks assigned</p>
              )}
            </div>

            {/* Categories */}
            <div className="space-y-1">
              {emp.tasks.length ? (
                emp.tasks.map((task, i) => (
                  <p key={i} className="text-emerald-400 text-sm">
                    {task.category}
                  </p>
                ))
              ) : (
                <p className="text-gray-500 text-sm">—</p>
              )}
            </div>

            {/* Status */}
            <div className="flex flex-col items-end gap-1">
              {emp.tasks.length ? (
                emp.tasks.map((task, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs font-bold text-center rounded-lg border ${
                      statusColors[task.status] ||
                      "bg-gray-500/10 text-gray-400 border-gray-500/20"
                    }`}
                  >
                    {task.status}
                  </span>
                ))
              ) : (
                <span className="text-gray-500 text-sm">—</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminForm;
