import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const TaskOverview = () => {
  const { loggedUser, employees } = useContext(AuthContext);
  if (!loggedUser) return null;
  const user = employees.find((e) => loggedUser.email == e.email);
  if (!user) return null;
  const { taskCounts } = user;
  return (
    <div className="flex mt-10 justify-between gap-5 ">
      <div className="w-1/2 bg-blue-500 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-bold">{taskCounts.newTask}</h2>
        <h3 className="text-2xl font-medium">New Task</h3>
      </div>
      <div className="w-1/2 bg-yellow-500 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-bold">{taskCounts.active}</h2>
        <h3 className="text-2xl font-medium">Accepted Task</h3>
      </div>
      <div className="w-1/2 bg-green-500 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-bold">{taskCounts.completed}</h2>
        <h3 className="text-2xl font-medium">Completed Task</h3>
      </div>
      <div className="w-1/2 bg-red-500 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-bold">{taskCounts.failed}</h2>
        <h3 className="text-2xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskOverview;
