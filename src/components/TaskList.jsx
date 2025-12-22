import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const cardColors = {
  High: "bg-red-700",
  Medium: "bg-yellow-600",
  Low: "bg-green-700",
};

const TaskList = () => {
  const { loggedUser, employees, updateTaskStatus } = useContext(AuthContext);

  if (!loggedUser) return null;

  const user = employees.find((e) => e.email === loggedUser.email);
  if (!user) return null;

  const { tasks } = user;

  return (
    <div
      id="tasklist"
      className="h-[55%] py-5 w-full overflow-x-auto flex gap-5 mt-10"
    >
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`shrink-0 h-full p-5 w-[300px] rounded-xl text-white ${
            cardColors[task.severity] || "bg-gray-700"
          }`}
        >
          <div className="flex justify-between items-center p-2">
            <h3 className="bg-black/30 px-3 py-1 rounded-lg text-sm">
              {task.severity}
            </h3>
            <h4 className="text-sm bg-black/40 px-3 py-1 rounded-lg">
              {task.taskDate}
            </h4>
          </div>
          <h1 className="text-xl font-bold mt-2">{task.taskTitle}</h1>
          <p className="mt-2 text-sm opacity-90">{task.detailedDescription}</p>
          <span className="inline-block mt-3 px-3 py-1 text-xs font-bold rounded-lg bg-black/40">
            {task.status}
          </span>
          {task.status !== "Completed" && task.status !== "Failed" && (
            <div className="flex flex-col gap-2 mt-4">
              <button
                onClick={() =>
                  updateTaskStatus(loggedUser.email, index, "Completed")
                }
                className="uppercase font-semibold bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white text-sm transition-all duration-200 shadow-md active:scale-95"
              >
                Mark as Completed
              </button>

              <button
                onClick={() =>
                  updateTaskStatus(loggedUser.email, index, "Failed")
                }
                className="uppercase font-semibold bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white text-sm transition-all duration-200 shadow-md active:scale-95"
              >
                Mark as Failed
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
