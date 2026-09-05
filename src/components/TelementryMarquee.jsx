import { carTelemetry } from "../assets/data";

const TelemetryMarquee = () => {
  const marqueeContent = (
    <>
      {carTelemetry.map((item, index) => (
        <span key={index} className="flex gap-12 px-12">
          {item.label} <span className="text-white">{item.value}</span>{" "}
          <span className="text-emerald-500">{item.trend}</span> •
        </span>
      ))}
    </>
  );

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-scroll {
          animation: scroll-left 90s linear infinite;
        }
      `}</style>
      <div className="absolute -top-1 w-full h-8 bg-zinc-950 border-b border-white/5 lg:flex items-center overflow-hidden z-50 hidden ">
        <div className="flex whitespace-nowrap text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 marquee-scroll">
          {marqueeContent}
          {marqueeContent}
        </div>
      </div>
    </>
  );
};

export default TelemetryMarquee;
