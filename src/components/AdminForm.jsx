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
    </div>
  );
};

export default AdminForm;
