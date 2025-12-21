import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const cardColors = {
  High: "bg-red-700",
  Medium: "bg-yellow-600",
  Low: "bg-green-700",
};

const TaskList = () => {
  const { loggedUser, employees } = useContext(AuthContext);

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
            <h4 className="text-sm bg-black px-3 py-2 rounded-xl">
              {task.taskDate}
            </h4>
          </div>

          <h1 className="text-2xl font-bold mt-2">{task.taskTitle}</h1>

          <p className="mt-2 text-sm opacity-90">{task.detailedDescription}</p>
          <div className="flex flex-col items-center align-middle gap-2 ">
            <div>
              <button className="mt-2 font-bold bg-[#08CB00] px-2 py-2 rounded-lg">
                mark as completed
              </button>
            </div>
            <div>
              <button className="mt-1 font-bold bg-[#F5004F] px-2 py-2 rounded-lg">
                mark as failed
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
