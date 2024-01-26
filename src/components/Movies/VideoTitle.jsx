import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { FaVolumeOff } from "react-icons/fa6";
import { MdVolumeOff } from "react-icons/md";
import { useMute } from "../MuteContext";
import { useState } from "react";
import VideoBackGround from "./VideoBackground";

const VideoTitle = ({ title, overview, movieId }) => {
  const { toggleMute, isMuted } = useMute();
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <div className="w-screen aspect-video px-4 md:px-14 py-[10vh] sm:py-[30vh] md:py-[40vh] absolute bg-gradient-to-r from-zinc-950 text-white overflow-hidden">
      <h1 className="text-sm md:text-3xl font-bold leading-tight  ">{title}</h1>
      <p className="hidden md:inline-block font-sans py-3 md:w-1/3 leading-tight">
        {overview}
      </p>
      <div className="flex  md:flex-row items-center justify-between mt-[6vh] md:mt-0 ">
        <div className="flex  md:flex-row gap-2 py-4 md:py-6 items-center justify-between">
          <button className="bg-white text-black md:py-3 py-1 px-2 md:px-7 text-lg md:text-2xl flex items-center gap-2 rounded-lg hover:bg-opacity-80">
            <FaPlay />
            Play
          </button>

          <button
            className="hidden bg-white py-3 px-2 md:px-3 text-black text-xl md:text-2xl md:flex items-center gap-2 rounded-lg opacity-50 hover:bg-opacity-50 mt-2 md:mt-0"
            onClick={openModal}
          >
            <span>
              <GoInfo size="30px" />
            </span>
            More Info
          </button>
          {modalVisible && (
            <div
              className="fixed inset-0 z-50  flex items-center justify-center  bg-opacity-50 w-screen h-screen "
              style={{
                background: "linear-gradient(0deg, #181818, transparent 50%)",
              }}
            >
              <div className="bg-white  mx-auto rounded-lg w-[60vw] h-[90vh] relative">
                <button
                  className="absolute top-0 right-[1vw] bg-zinc-800 text-white p-1 mt-4 rounded-full"
                  onClick={closeModal}
                >
                  <IoMdClose size={30} />
                </button>
                <div className="bg-zinc-900 w-full h-full overflow-hidden rounded-t-lg  ">
                  <VideoBackGround className="object-cover w-full h-full" />
                </div>
                <div></div>
              </div>
            </div>
          )}
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
