import { useState } from "react";
import Navigation from "./Navigation";
import SideBar from "./SideBar";
import Assistant from "./Assistant";
import MiniMusicPlayer from "./MiniMusicPlayer";
import BottomWidgets from "./BottomWidgets";
import { CAR_DATA } from "../assets/data";
import { songs } from "../assets/data";
import ModelViewer from "./ModelViewer";

const CarDealerUI = () => {
  const [activeCarKey, setActiveCarKey] = useState("Polestar");
  const [rotateSpeed, setRotateSpeed] = useState(1.5);

  const currentCar = CAR_DATA[activeCarKey];
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-zinc-200 text-zinc-800">
      <div className="absolute inset-0 z-0">
        <ModelViewer rotateSpeed={rotateSpeed} activeModel={currentCar.model} />
      </div>

      <Navigation car={currentCar} />

      <SideBar
        activeCarKey={activeCarKey}
        onSelectCar={setActiveCarKey}
        carOptions={CAR_DATA}
        rotateSpeed={rotateSpeed}
        setRotateSpeed={setRotateSpeed}
      />

      {/* Right rail: Assistant + Music player, stacked, no overlap */}
      <div className="hidden lg:flex absolute right-8 2xl:right-30 top-32 w-80 z-20 flex-col gap-4">
        <Assistant />
        <MiniMusicPlayer songs={songs} />
      </div>

      <BottomWidgets />
    </div>
  );
};

export default CarDealerUI;