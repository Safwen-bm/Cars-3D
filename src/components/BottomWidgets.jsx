import { CreditCard, MapPin } from "lucide-react";
import TelemetryMarquee from "./TelementryMarquee";

const BottomWidgets = () => {
  return (
    <>
      <footer className="absolute bottom-6 left-8 right-8 z-20 grid grid-cols-3 gap-5">
        <div className="bg-white/80 backdrop-blur rounded-2xl p-5 shadow-xl shadow-zinc-300/80 relative overflow-hidden h-28">
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">My Location</p>
          <p className="text-xs font-medium">Lac 1, Tunis</p>
          <div className="absolute cursor-pointer bottom-3 right-3 bg-emerald-600 p-2.5 rounded-full text-white">
            <MapPin size={16} className="text-white" />
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xs rounded-xl p-5 shadow-xl shadow-zinc-300/80 h-28">
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">My Dates</p>
          <div className="flex justify-between items-center px-3 py-1.5 bg-zinc-50 rounded-xl">
            <div className="text-center">
              <p className="text-2xl font-light">20</p>
              <p className="text-[10px] text-zinc-400 uppercase">Jul</p>
            </div>
            <div className="w-px h-8 bg-zinc-200"></div>
            <div className="text-center">
              <p className="text-2xl font-light">10:25</p>
              <p className="text-[10px] text-zinc-400 uppercase">AM</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-xl p-5 shadow-xl shadow-zinc-300/80 h-28">
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">Payment Method</p>
          <div className="flex items-center gap-3 bg-zinc-900 text-white p-3 rounded-lg shadow-lg">
            <CreditCard size={18} className="text-emerald-500" />
            <div>
              <p className="text-[9px] opacity-60">Credit Card</p>
              <p className="text-[11px] tracking-[0.2em]">3451 **** **** 7896</p>
            </div>
            <div className="border border-emerald-600/90 rounded-full ml-auto p-0.5">
              <div className="size-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </footer>
      <TelemetryMarquee />
    </>
  );
};

export default BottomWidgets;