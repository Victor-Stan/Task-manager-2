
import Header from "./components/Header";
import TaskCount from "./components/TaskCount";
import TodoCards from "./components/TodoCards";
import data from "./data.json";

const App = () => {
  return (
    <div className="flex flex-col w-full bg-slate-50 h-screen p-7">
      <Header />
      <TaskCount todos={data.data} />
      <TodoCards />
    </div>
  );
};

export default App;
