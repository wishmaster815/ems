import React from "react";

const AdminForm = () => {
  return (
    <div className="p-10 min-h-screen">
      {/* FORM SECTION */}
      <div className="flex items-center justify-center">
        <form className="bg-gray-800 w-full py-8 px-10 rounded-2xl shadow-2xl space-y-8 border border-gray-700">
          <h2 className="text-3xl font-semibold text-center text-white">
            Create Task
          </h2>

          <div className="flex gap-10">
            {/* LEFT SIDE */}
            <div className="w-1/2 space-y-5">
              <div>
                <label className="text-gray-300 block mb-1">Task Title</label>
                <input
                  type="text"
                  placeholder="Make a UI design"
                  className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-emerald-500 border border-gray-600"
                />
              </div>

              <div>
                <label className="text-gray-300 block mb-1">Due Date</label>
                <input
                  type="date"
                  className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-white outline-none focus:ring-2 focus:ring-emerald-500 border border-gray-600"
                />
              </div>

              <div>
                <label className="text-gray-300 block mb-1">Assign To</label>
                <input
                  type="text"
                  placeholder="Employee name"
                  className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-emerald-500 border border-gray-600"
                />
              </div>

              <div>
                <label className="text-gray-300 block mb-1">Category</label>
                <input
                  type="text"
                  placeholder="Design, Dev, etc."
                  className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-emerald-500 border border-gray-600"
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-1/2 flex flex-col">
              <label className="text-gray-300 block mb-1">Description</label>
              <textarea
                placeholder="Describe the task..."
                className="flex-1 rounded-lg bg-gray-700 px-4 py-3 text-white placeholder-gray-400 outline-none resize-none focus:ring-2 focus:ring-emerald-500 border border-gray-600"
              ></textarea>
              <button className="mt-6 w-full bg-emerald-500 hover:bg-emerald-600 transition-colors text-white py-3 rounded-lg font-bold">
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* TASK LIST SECTION (UPDATED TO MATCH DARK UI) */}
      <div className="bg-gray-800 mt-10 p-5 rounded-2xl border border-gray-700 shadow-xl">
        {/* Header Row */}
        <div className="grid grid-cols-5 bg-gray-900 px-6 py-4 rounded-xl text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
          <span className="col-span-1">Assignee</span>
          <span className="col-span-2">Task Description</span>
          <span>Category</span>
          <span className="text-right">Status</span>
        </div>

        {/* Task Row Items */}
        <div className="space-y-3">
            <div
              className="grid grid-cols-5 items-center px-6 py-4 bg-gray-700/30 border border-gray-700 rounded-xl hover:border-emerald-500/50 transition-all duration-300"
            >
              <h2 className="font-semibold text-white">Jayesh</h2>
              <h3 className="col-span-2 text-gray-300">
                Make a UI design for dashboard
              </h3>
              <span className="text-emerald-400 text-sm font-medium">
                Design
              </span>
              <div className="flex justify-end">
                <span className="px-4 py-1.5 text-xs font-bold rounded-lg bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                  In Progress
                </span>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminForm;
