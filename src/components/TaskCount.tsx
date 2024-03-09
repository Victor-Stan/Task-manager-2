const TaskCount = () => {
  return (
    <div className="flex flex-row py-7 justify-between ">
      <div>
        <span className="text-blue-800 font-semibold text-sm">All</span>
        <span className="border text-xs text-white bg-blue-700 text-xs ml-1 px-1 w-6 h-5.5  rounded-xl text-center">
          35
        </span>
      </div>
<span className="text-slate-300">|</span>
      <div>
        <span className="text-slate-400 font-semibold text-sm">Open</span>
        <span className="border text-xs text-white bg-slate-300 text-xs ml-1 px-1 w-6 h-5.5  rounded-xl text-center">
          14
        </span>
      </div>

      <div>
        <span className="text-slate-400 font-semibold text-sm">Closed</span>
        <span className="border text-xs text-white bg-slate-300 text-xs ml-1 px-1 w-6 h-5.5   rounded-xl text-center">
          19
        </span>
      </div>

      <div>
        <span className="text-slate-400 font-semibold text-sm">Archived</span>
        <span className="border text-xs text-white bg-slate-300 text-xs ml-1 px-1 w-6 h-5.5 rounded-xl text-center">
          2
        </span>
      </div>
    </div>
  );
};

export default TaskCount;
