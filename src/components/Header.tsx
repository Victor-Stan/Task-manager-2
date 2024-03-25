import React, { useState, useEffect } from "react";
import { GoPlus } from "react-icons/go";

interface HeaderProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  updateFilteredTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

interface Todo {
  title: string;
  desc: string;
  done: boolean;
  date: string;
}

const Header: React.FC<HeaderProps> = ({ setTodos, updateFilteredTodos }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const getCurrentDate = () => {
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const today = new Date();
      const formattedDate = today.toLocaleDateString(undefined, options);
      setCurrentDate(formattedDate);
    };

    getCurrentDate();
  }, []);

  const handleNewTaskClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = {
      title,
      desc,
      date,
      done: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTask]);

    updateFilteredTodos((prevFilteredTodos) => [...prevFilteredTodos, newTask]);

    setTitle("");
    setDesc("");
    setDate("");
    setShowForm(false);
  };

  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold" id="yeah">
          Today's Task
        </h1>
        <span className="text-sm mt-1 font-light">{currentDate}</span>
      </div>
      <div className="ml-auto">
        <button
          className="bg-blue-100 text-blue-700 font-medium text-sm p-1 w-55 rounded-xl inline-flex items-center my-auto"
          onClick={handleNewTaskClick}
        >
          <GoPlus />
          <span className="p-1"> New Task</span>
        </button>
      </div>
      {showForm && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <form
            className="bg-white shadow-md rounded-lg p-5"
            onSubmit={handleFormSubmit}
          >
            <label className="block mb-2">
              <span className="text-gray-700">Title:</span>
              <input
                type="text"
                className="form-input mt-1 block w-full border-gray-300 rounded-md"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Description:</span>
              <textarea
                className="form-textarea mt-1 block w-full border-gray-300 rounded-md"
                rows={3}
                placeholder="Enter description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Date:</span>
              <input
                type="date"
                className="form-input mt-1 block w-full border-gray-300 rounded-md"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-3"
            >
              Add Task
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Header;
