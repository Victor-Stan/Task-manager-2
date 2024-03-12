import { IoCheckmarkCircle } from "react-icons/io5";
import Images from "./Images";
import data from "../data.json";

const TodoCards = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-10">
      {data.data.map((item, index) => (
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
            <IoCheckmarkCircle className="ml-auto text-3xl text-blue-700" />
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
