import React, { useState } from "react";
import Images from "./Images";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Todo {
  title: string;
  desc: string;
  done: boolean;
  date: string;
}

interface TodoCardsProps {
  todos: Todo[];
  toggleTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
  editTodo: (index: number, updatedTodo: Todo) => void;
}

const TodoCards: React.FC<TodoCardsProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
  editTodo,
}) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDesc, setEditedDesc] = useState("");
  const [editedDate, setEditedDate] = useState("");

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
    setEditedTitle(todos[index].title);
    setEditedDesc(todos[index].desc);
    setEditedDate(todos[index].date);
  };

  const handleConfirmEdit = () => {
    if (editingIndex !== null) {
      const updatedTodo: Todo = {
        title: editedTitle,
        desc: editedDesc,
        done: todos[editingIndex].done,
        date: editedDate,
      };
      editTodo(editingIndex, updatedTodo);
      setEditingIndex(null);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "title") {
      setEditedTitle(value);
    } else if (name === "desc") {
      setEditedDesc(value);
    } else if (name === "date") {
      setEditedDate(value);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-10">
      {todos.map((item, index) => (
        <div
          key={index}
          className="w-full h-32 bg-white shadow-md rounded-lg p-3"
        >
          <div className="flex flex-row">
            <h1
              className={
                item.done ? "line-through font-semibold" : "font-semibold"
              }
            >
              {item.title}
            </h1>
            <div>
              <FiEdit
                className="text-blue-700 text-sm m-1"
                onClick={() => handleEditClick(index)}
              />
            </div>
            <div className="flex flex-col ml-auto space-y-1">
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => toggleTodo(index)}
                className="text-3xl text-blue-700"
              />

              <RiDeleteBin6Line
                className="text-red-700 text-lg"
                onClick={() => deleteTodo(index)}
              />
            </div>
          </div>
          <span className="text-slate-400 text-sm">{item.desc}</span>
          <div className="border mt-2"></div>
          <div className="flex flex-row my-3">
            <span className="text-slate-300 text-sm m-1">{item.date}</span>

            <Images />
          </div>
          {editingIndex === index && (
            <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-6">
              <Dialog>
                <DialogTrigger>Click to Edit</DialogTrigger>
                <DialogContent>
                  <input
                    type="text"
                    name="title"
                    value={editedTitle}
                    onChange={handleChange}
                  />
                  <textarea
                    name="desc"
                    value={editedDesc}
                    onChange={handleChange}
                  ></textarea>
                  <input
                    type="date"
                    name="date"
                    value={editedDate}
                    onChange={handleChange}
                  />
                  <button onClick={handleConfirmEdit}>Confirm</button>
                </DialogContent>
              </Dialog>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoCards;
