/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { AlertCircle } from "lucide-react";

const MiniMusicPlayer = ({ songs }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasUserInteracted) {
        setIsPlaying(true);
        setHasUserInteracted(true);
        document.removeEventListener("click", handleFirstInteraction);
        document.removeEventListener("keydown", handleFirstInteraction);
        document.removeEventListener("touchstart", handleFirstInteraction);
      }
    };
    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("keydown", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);
    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [hasUserInteracted]);

  const hasSongs = songs && Array.isArray(songs) && songs.length > 0;
  const currentSong = hasSongs ? songs[currentSongIndex] : null;

  useEffect(() => {
    if (hasSongs && isPlaying && audioRef.current) {
      audioRef.current.play().catch((err) => console.error("Playback failed:", err));
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSongIndex, hasSongs]);

  useEffect(() => {
    if (!hasSongs) return;
    const updateProgress = () => {
      if (audioRef.current && audioRef.current.duration) {
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
      }
    };
    const handleEnded = () => handleNext();
    const currentAudio = audioRef.current;
    if (currentAudio) {
      currentAudio.addEventListener("timeupdate", updateProgress);
      currentAudio.addEventListener("ended", handleEnded);
    }
    return () => {
      if (currentAudio) {
        currentAudio.removeEventListener("timeupdate", updateProgress);
        currentAudio.removeEventListener("ended", handleEnded);
      }
    };
  }, [currentSongIndex, hasSongs]);

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handlePrevious = () => {
    if (!hasSongs) return;
    setCurrentSongIndex((i) => (i === 0 ? songs.length - 1 : i - 1));
    setProgress(0);
  };
  const handleNext = () => {
    if (!hasSongs) return;
    setCurrentSongIndex((i) => (i === songs.length - 1 ? 0 : i + 1));
    setProgress(0);
  };
  const getInitials = (name) => (name ? name.charAt(0).toUpperCase() : "?");

  const Icons = {
    Play: () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M8 5v14l11-7z" /></svg>,
    Pause: () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>,
    Prev: () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>,
    Next: () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>,
  };

  if (!hasSongs) {
    return (
      <div className="w-full p-5 flex items-center bg-zinc-950/90 backdrop-blur-md border border-emerald-500/30 rounded-xl shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="size-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
            <AlertCircle size={20} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 mb-1">Playback Error</p>
            <p className="text-[11px] font-bold text-zinc-400 uppercase leading-tight">Playlist not found or empty</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-4 flex items-center bg-zinc-200/60 backdrop-blur-xs rounded-xl border border-white/20 shadow-xl shadow-zinc-300/50">
      <div className="size-14 rounded-lg mr-4 overflow-hidden flex justify-center items-center bg-zinc-900 border border-emerald-500 shrink-0">
        {currentSong?.image ? (
          <img
            src={currentSong.image}
            alt="Song Cover"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
          />
        ) : (
          <span className="text-xl font-black uppercase text-emerald-500">
            {getInitials(currentSong?.name)}
          </span>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="text-center mb-2 text-xs font-black tracking-widest text-emerald-500 uppercase truncate">
          {currentSong?.name || "Unknown Track"}
        </div>

        <div className="flex items-center text-xl mb-2 justify-center gap-6">
          <button onClick={handlePrevious} className="text-white hover:text-emerald-500 hover:scale-120 transition-colors cursor-pointer focus:outline-none">
            <Icons.Prev />
          </button>
          <button onClick={handlePlayPause} className="text-white hover:scale-160 hover:text-emerald-500 transition-transform focus:outline-none cursor-pointer">
            {isPlaying ? <Icons.Pause /> : <Icons.Play />}
          </button>
          <button onClick={handleNext} className="text-white hover:text-emerald-500 hover:scale-120 transition-colors cursor-pointer focus:outline-none">
            <Icons.Next />
          </button>
        </div>

        <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
          <div style={{ width: `${progress}%` }} className="h-full bg-emerald-500 transition-all duration-300"></div>
        </div>

        <audio ref={audioRef} src={currentSong?.audio}></audio>
      </div>
    </div>
  );
};

export default MiniMusicPlayer;