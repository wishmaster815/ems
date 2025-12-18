import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%]  py-5 w-full overflow-x-auto flex justify-start items-center gap-5 flex-nowrap mt-10 "
    >
      <div className="shrink-0 h-full p-5 w-[300px] rounded-xl bg-emerald-700">
        <div className="flex justify-between items-center p-2">
          <h3 className="bg-red-500 px-3 py-1 rounded-lg">High</h3>
          <h4 className="text-sm">24th July, 2024</h4>
        </div>
        <h1 className="text-3xl font-bold mt-2">Learn Docker and Kubernetes</h1>
        <p className="mt-2 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          est aspernatur{" "}
        </p>
      </div>
      <div className="shrink-0 h-full p-5 w-[300px] rounded-xl bg-cyan-700">
        <div className="flex justify-between items-center p-2">
          <h3 className="bg-red-500 px-3 py-1 rounded-lg">High</h3>
          <h4 className="text-sm">24th July, 2024</h4>
        </div>
        <h1 className="text-3xl font-bold mt-2">Learn Docker and Kubernetes</h1>
        <p className="mt-2 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          est aspernatur{" "}
        </p>
      </div>
      <div className="shrink-0 h-full p-5 w-[300px] rounded-xl bg-pink-700">
        <div className="flex justify-between items-center p-2">
          <h3 className="bg-red-500 px-3 py-1 rounded-lg">High</h3>
          <h4 className="text-sm">24th July, 2024</h4>
        </div>
        <h1 className="text-3xl font-bold mt-2">Learn Docker and Kubernetes</h1>
        <p className="mt-2 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          est aspernatur{" "}
        </p>
      </div>
      <div className="shrink-0 h-full p-5 w-[300px] rounded-xl bg-yellow-700">
        <div className="flex justify-between items-center p-2">
          <h3 className="bg-red-500 px-3 py-1 rounded-lg">High</h3>
          <h4 className="text-sm">24th July, 2024</h4>
        </div>
        <h1 className="text-3xl font-bold mt-2">Learn Docker and Kubernetes</h1>
        <p className="mt-2 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          est aspernatur{" "}
        </p>
      </div>
      <div className="shrink-0 h-full p-5 w-[300px] rounded-xl bg-gray-700">
        <div className="flex justify-between items-center p-2">
          <h3 className="bg-red-500 px-3 py-1 rounded-lg">High</h3>
          <h4 className="text-sm">24th July, 2024</h4>
        </div>
        <h1 className="text-3xl font-bold mt-2">Learn Docker and Kubernetes</h1>
        <p className="mt-2 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          est aspernatur{" "}
        </p>
      </div>
    </div>
  );
};

export default TaskList;
