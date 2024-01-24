import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

import { FaVolumeOff } from "react-icons/fa6";
import { MdVolumeOff } from "react-icons/md";
import { useMute } from "../MuteContext";

const VideoTitle = ({ title, overview }) => {
  const { toggleMute, isMuted } = useMute();
  return (
    <div className="w-screen aspect-video px-4 md:px-14 py-[10vh] sm:py-[30vh] md:py-[40vh] absolute bg-gradient-to-r from-zinc-950 text-white overflow-hidden">
      <h1 className="text-sm md:text-3xl font-bold leading-tight ">{title}</h1>
      <p className="hidden md:inline-block font-sans py-3 md:w-1/3 leading-tight">
        {overview}
      </p>
      <div className="flex  md:flex-row items-center justify-between  md:mt-0 ">
        <div className="flex  md:flex-row gap-2 py-4 md:py-6 items-center justify-between">
          <button className="bg-white text-black md:py-3 py-1 px-2 md:px-7 text-lg md:text-2xl flex items-center gap-2 rounded-lg hover:bg-opacity-80">
            <FaPlay />
            Play
          </button>

          <button className="hidden bg-white py-3 px-2 md:px-3 text-black text-xl md:text-2xl md:flex items-center gap-2 rounded-lg opacity-50 hover:bg-opacity-50 mt-2 md:mt-0">
            <span>
              <GoInfo size="30px" />
            </span>
            More Info
          </button>
        </div>
        <span className="px-2 md:px-0">
          <button
            onClick={toggleMute}
            className="text-white w-10 h-10 rounded-full bg-transparent border "
          >
            {isMuted ? <MdVolumeOff size={36} /> : <FaVolumeOff size={30} />}
          </button>
        </span>
      </div>
    </div>
  );
};

export default VideoTitle;
