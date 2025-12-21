import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";

const AdminForm = () => {
  const { employees, assignTask } = useContext(AuthContext);

  const [form, setForm] = useState({
    title: "",
    date: "",
    assignee: "",
    category: "",
    description: "",
    severity: "",
  });

  const statusColors = {
    New: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    "In Progress": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    Completed: "bg-green-500/10 text-green-500 border-green-500/20",
    Failed: "bg-red-500/10 text-red-500 border-red-500/20",
  };

  const handleCreateTask = () => {
    const { title, assignee, date, category, description, severity } = form;

    if (
      !title &&
      !assignee &&
      !date &&
      !category &&
      !severity &&
      !description
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    const newTask = {
      taskTitle: title,
      taskDescription: description,
      detailedDescription: description,
      severity,
      taskDate: date,
      category,
      status: "New",
      active: true,
      newTask: true,
      completed: false,
      failed: false,
    };

    assignTask(assignee, newTask);

    setForm({
      title: "",
      date: "",
      assignee: "",
      category: "",
      description: "",
      severity: "",
    });
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
              <input
                placeholder="Task Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-white"
              />

              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-white"
              />

              <select
                value={form.assignee}
                onChange={(e) => setForm({ ...form, assignee: e.target.value })}
                className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-white"
              >
                <option value="">Assign To</option>
                {employees.map((emp) => (
                  <option key={emp.id} value={emp.email}>
                    {emp.firstName}
                  </option>
                ))}
              </select>

              <input
                placeholder="Category (Design, Dev, QA...)"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-white"
              />

              <select
                value={form.severity}
                onChange={(e) => setForm({ ...form, severity: e.target.value })}
                className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-white"
              >
                <option value="" disabled>
                  Select Severity
                </option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            {/* RIGHT */}
            <div className="w-1/2 flex flex-col">
              <textarea
                placeholder="Detailed task description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="flex-1 rounded-lg bg-gray-700 px-4 py-3 text-white resize-none"
              />

              <button
                type="button"
                onClick={handleCreateTask}
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

export default AdminForm;
