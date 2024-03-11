import { GoPlus } from "react-icons/go";

const Header = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold" id="yeah">
          Today's Task
        </h1>
        <span className="text-sm mt-1 font-light">Monday,11 March</span>
      </div>
      <div className=" ml-auto ">
        <button className="bg-blue-100  text-blue-700 font-medium text-sm p-1 w-55 rounded-xl inline-flex items-center my-auto">
          <GoPlus />
          <span className="p-1"> New Task</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
