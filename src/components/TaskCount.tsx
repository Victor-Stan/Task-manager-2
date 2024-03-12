import React from "react";

interface Todo {
  title: string;
  desc: string;
  done: boolean;
  date: string;
}

interface TaskCountProps {
  todos: Todo[];
}

const TaskCount: React.FC<TaskCountProps> = ({ todos }) => {
  const openCount = todos.filter((todo) => !todo.done).length;
  const closedCount = todos.filter((todo) => todo.done).length;
  const allCount = todos.length;

  return (
    <div className="flex flex-row py-7 justify-between ">
      <div>
        <span className="text-blue-800 font-semibold text-sm">All</span>
        <span className="border text-white bg-blue-700 text-xs ml-1 px-1 w-6 h-5.5  rounded-xl text-center">
          {allCount}
        </span>
      </div>
      <span className="text-slate-300">|</span>
      <div>
        <span className="text-slate-400 font-semibold text-sm">Open</span>
        <span className="border text-white bg-slate-300 text-xs ml-1 px-1 w-6 h-5.5  rounded-xl text-center">
          {openCount}
        </span>
      </div>
      <div>
        <span className="text-slate-400 font-semibold text-sm">Closed</span>
        <span className="border text-xs text-white bg-slate-300 ml-1 px-1 w-6 h-5.5   rounded-xl text-center">
          {closedCount}
        </span>
      </div>
    </div>
  );
};

export default TaskCount;
