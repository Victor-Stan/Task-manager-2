import React from "react";
import Images from "./Images";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Todo {
  title: string;
  desc: string;
  done: boolean;
  date: string;
}

interface TodoCardsProps {
  todos: Todo[];
  toggleTodo: (index: number) => void;
  deleteTodo: (index: number) => void; // New prop for deleting todo
}

const TodoCards: React.FC<TodoCardsProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  const handleDelete = (index: number) => {
    deleteTodo(index);
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
           <div className="flex flex-col ml-auto space-y-1">

           <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggleTodo(index)}
              className="] text-3xl text-blue-700"
            />

  
<RiDeleteBin6Line
              className="text-red-700 text-lg"
              onClick={() => handleDelete(index)}
            />

          
           </div>
          </div>
          <span className="text-slate-400 text-sm">{item.desc}</span>
          <div className="border mt-2"></div>
          <div className="flex flex-row my-3">
            <span className="text-slate-300 text-sm m-1">{item.date}</span>
            
            <Images />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoCards;
