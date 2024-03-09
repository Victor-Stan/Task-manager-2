import { IoCheckmarkCircle } from "react-icons/io5";
import Images from "./Images";

const TodoCards = () => {
  return (
    <div className="flex flex-col flex justify-center items-center space-y-10">


      <div className="w-full h-32 bg-white shadow-md rounded-lg p-3">
        <div className="flex flex-row ">
          <h1 className="line-through font-semibold">Client Review & Feedback</h1>
          <IoCheckmarkCircle className="ml-auto text-3xl text-blue-700" />
        </div>
        <span className="text-slate-400 text-sm">Crypto Wallet Redesign</span>
        <div className="border mt-2"></div>
        <div className="flex flex-row my-3">
          <h4 className="text-slate-500">Today</h4>
          <span className="text-slate-300 text-sm m-1">10:00pm-11:45pm</span>
          <Images  />
        </div>
      </div>

      

      <div className="w-full h-32 bg-white shadow-md rounded-lg p-3">
        <div className="flex flex-row ">
          <h1 className="line-through font-semibold">Create Wireframe</h1>
          <IoCheckmarkCircle className="ml-auto text-3xl text-blue-700" />
        </div>
        <span className="text-slate-400 text-sm">Crypto Wallet Redesign</span>
        <div className="border mt-2"></div>
        <div className="flex flex-row my-3">
          <h4 className="text-slate-500">Today</h4>
          <span className="text-slate-300 text-sm m-1">09:15pm-10:00pm</span>
          <Images  />
        </div>
      </div>



      <div className="w-full h-32 bg-white shadow-md rounded-lg p-3">
        <div className="flex flex-row ">
          <h1 className="font-semibold">Review with Client</h1>
          <IoCheckmarkCircle className="ml-auto text-3xl text-blue-700" />
        </div>
        <span className="text-slate-400 text-sm">Product Team</span>
        <div className="border mt-2"></div>
        <div className="flex flex-row my-3">
          <h4 className="text-slate-500">Today</h4>
          <span className="text-slate-300 text-sm m-1">01:00pm-03:00pm</span>
          <Images  />
        </div>
      </div>




     
      <div className="w-full h-32 bg-white shadow-md rounded-lg p-3">
        <div className="flex flex-row ">
          <h1 className="font-semibold">Ideation</h1>
          <IoCheckmarkCircle className="ml-auto text-3xl text-blue-700" />
        </div>
        <span className="text-slate-400 text-sm">Product Team</span>
        <div className="border mt-2"></div>
        <div className="flex flex-row my-3">
          <h4 className="text-slate-500">Today</h4>
          <span className="text-slate-300 text-sm m-1">06:00pm-08:00pm</span>
         
         <Images  />
        
        </div>
      </div>




    </div>
  );
};

export default TodoCards;
