import React, { useState } from "react";

interface Todo {
  title: string;
  desc: string;
  done: boolean;
  date: string;
}

interface TaskCountProps {
  todos: Todo[];
  setFilteredTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskCount: React.FC<TaskCountProps> = ({ todos, setFilteredTodos }) => {
  const [selectedTab, setSelectedTab] = useState("all");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);

    if (tab === "open") {
      setFilteredTodos(todos.filter((todo) => !todo.done));
    } else if (tab === "closed") {
      setFilteredTodos(todos.filter((todo) => todo.done));
    } else {
      setFilteredTodos(todos);
    }
  };

  const openCount = todos.filter((todo) => !todo.done).length;
  const closedCount = todos.filter((todo) => todo.done).length;
  const allCount = todos.length;

  return (
    <div className="flex flex-row py-7 justify-between">
      <div
        onClick={() => handleTabClick("all")}
        className={`cursor-pointer ${
          selectedTab === "all" ? "text-blue-800" : "text-slate-400"
        }`}
      >
        <span className="font-semibold text-sm">All</span>
        <span className="border text-white bg-slate-300 text-xs ml-1 px-1 w-6 h-5.5 rounded-xl text-center">
          {allCount}
        </span>
      </div>
      <span className="text-slate-300">|</span>
      <div
        onClick={() => handleTabClick("open")}
        className={`cursor-pointer ${
          selectedTab === "open" ? "text-blue-800" : "text-slate-400"
        }`}
      >
        <span className="font-semibold text-sm">Open</span>
        <span className="border text-white bg-slate-300 text-xs ml-1 px-1 w-6 h-5.5 rounded-xl text-center">
          {openCount}
        </span>
      </div>
      <div
        onClick={() => handleTabClick("closed")}
        className={`cursor-pointer ${
          selectedTab === "closed" ? "text-blue-800" : "text-slate-400"
        }`}
      >
        <span className="font-semibold text-sm">Closed</span>
        <span className="border text-xs text-white bg-slate-300 ml-1 px-1 w-6 h-5.5 rounded-xl text-center">
          {closedCount}
        </span>
      </div>
    </div>
  );
};

export default TaskCount;
