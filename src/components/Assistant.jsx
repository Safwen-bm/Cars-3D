import { Send, X } from "lucide-react";

const Assistant = () => {
  return (
    <div className="bg-zinc-200/60 backdrop-blur-xs rounded-2xl p-5 shadow-2xl shadow-zinc-300/80 border border-white/40">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-bold text-lg text-zinc-900">AI Assistant</h3>
          <p className="text-sm text-zinc-400">How can I help you?</p>
        </div>
        <button className="group size-9 bg-zinc-200/40 rounded-lg cursor-pointer hover:bg-emerald-600 transition center-item">
          <X size={18} className="text-zinc-500 group-hover:text-white" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-100">
          <p className="text-xs font-bold">Book a rent</p>
          <p className="text-[10px] text-zinc-400">5 min</p>
        </div>
        <div className="p-3 bg-zinc-100 rounded-xl border border-zinc-100 opacity-50">
          <p className="text-xs font-bold">Analysis</p>
        </div>
      </div>

      <div className="bg-zinc-100 rounded-xl p-2 px-3 flex items-center justify-between">
        <input
          type="text"
          placeholder="Arrange to rent ..."
          className="bg-transparent border-none outline-none text-xs w-full"
        />
        <button className="group bg-emerald-600 cursor-pointer hover:bg-zinc-800 transition p-2.5 rounded-md text-white">
          <Send size={14} className="group-hover:rotate-40 transition ease-in" />
        </button>
      </div>
    </div>
  );
};

export default Assistant;