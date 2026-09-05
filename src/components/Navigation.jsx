import { MapPin } from "lucide-react";

const Navigation = ({ car }) => {
  return (
    <nav className="relative w-full p-8 z-20 flex justify-between items-start 2xl:px-40">
      <div className="flex flex-col gap-1">
        <div className="size-12 bg-zinc-900 rounded-full center-item text-white font-bold text-xl">
          Q
        </div>

        <h1 className="text-4xl lg:text-6xl font-light mt-4 tracking-tighter leading-none">
          {car ? car.name : "Car Name Here"}
        </h1>

        <p className="text-zinc-500 text-sm font-medium">
          {car ? car.desc : "More about the car here"}
        </p>

        <div className="flex gap-2 mt-2">
          {["L", "R", "F", "B"].map((pos) => (
            <span
              key={pos}
              className={`size-10 rounded-full text-sm cursor-pointer center-item border border-b-zinc-400 hover:border-emerald-600 ${pos === "L" ? "bg-emerald-600 text-white border-none" : ""} hover:bg-emerald-600 transition-all duration-200 hover:text-white`}
            >
              {pos}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute left-1/2 top-8 -translate-x-1/2 flex p-2 gap-4 items-center bg-white/50 backdrop-blur-md rounded-xl shadow-md shadow-zinc-300/50">
        <button className="px-6 py-2 bg-zinc-200 rounded-lg font-medium text-emerald-700 cursor-pointer hover:bg-emerald-600 hover:text-white transition">
          Rent
        </button>
        <button className="px-6 py-2 rounded-lg font-medium text-emerald-700 cursor-pointer hover:bg-emerald-600 hover:text-white transition">
          Buy
        </button>
        <button className="px-6 py-2 rounded-lg font-medium text-emerald-700 cursor-pointer hover:bg-emerald-600 hover:text-white transition">
          Sell
        </button>
      </div>

      <div className="flex items-center gap-3 bg-white/50 backdrop-blur-md px-4 py-2 rounded-2xl">
        <MapPin size={16} className="text-zinc-400" />
        <span className="text-sm font-medium">Tunis</span>
      </div>
    </nav>
  );
};

export default Navigation;