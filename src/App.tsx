import { useState } from "react";
import Header from "./components/Header";
import TaskCount from "./components/TaskCount";
import TodoCards from "./components/TodoCards";
import data from "./data.json";

const App = () => {
  const initialTodos = data.data;
  const [todos, setTodos] = useState(initialTodos);

  const [filteredTodos, setFilteredTodos] = useState(todos);

  return (
    <div className="flex flex-col w-full bg-slate-50 h-screen p-7">
      <Header setTodos={setTodos} updateFilteredTodos={setFilteredTodos} />

      <TaskCount todos={todos} setFilteredTodos={setFilteredTodos} />
      <TodoCards todos={filteredTodos} />
    </div>
  );
};

export default App;
