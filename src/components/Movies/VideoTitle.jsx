import { FaCheckCircle, FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { FaVolumeOff } from "react-icons/fa6";
import { MdVolumeOff } from "react-icons/md";
import { useMute } from "../MuteContext";
import { useEffect, useState } from "react";
import VideoBackGround from "./VideoBackGround";
import { IoAddSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../utils/MyListSlice";

const VideoTitle = ({
  title,
  overview,
  movieId,
  name,
  ratings,
  poster_path,
}) => {
  const { toggleMute, isMuted } = useMute();
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isInMyList, setIsInMyList] = useState(false);
  const myListItems = useSelector((store) => store.mylist?.items);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const handleClick = () => {
    navigate(`/movies/${movieId}`);
  };
  const handleAddtoList = () => {
    if (!isInMyList) {
      dispatch(addItem({ id: movieId, name, ratings, poster_path }));
    }
  };
  useEffect(() => {
    const isInList = myListItems.some((item) => item.id === movieId);
    setIsInMyList(isInList);
  }, [movieId, myListItems]);
  return (
    <div className="w-screen aspect-video px-4 md:px-14  py-[16vh] md:py-[40vh] lg:py-[50vh] absolute bg-gradient-to-r from-zinc-950 text-white overflow-hidden ">
      <h1 className="text-sm md:text-xl lg:text-3xl font-bold leading-tight  ">
        {title}
      </h1>

      <div className="flex  md:flex-row items-center justify-between  md:mt-0 ">
        <div className="flex  md:flex-row gap-2 py-4 md:py-6 items-center justify-between">
          <button
            className="bg-white text-black lg:py-3 py-1 px-2 md:px-7 text-lg md:text-2xl flex items-center gap-2 rounded-lg hover:bg-opacity-80"
            onClick={handleClick}
          >
            <FaPlay />
            Play
          </button>

          <button
            className="hidden bg-white py-3 px-2 md:py-1 md:px-3 lg:px-3 lg:py-3 text-black text-xl md:text-2xl md:flex items-center gap-2 rounded-lg opacity-50 hover:bg-opacity-50 mt-2 md:mt-0"
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
              <div className=" mx-auto rounded-lg md:w-[80vw] md:h-[70vh] lg:w-[60vw] lg:h-[80vh] relative flex items-center flex-col">
                <button
                  className="absolute top-0 lg:right-[1vw] right-0 bg-zinc-800 text-white p-1 mt-4 rounded-full"
                  onClick={closeModal}
                >
                  <IoMdClose size={30} />
                </button>
                <div className="bg-zinc-900 w-full h-full overflow-hidden lg:rounded-t-lg object-cover flex items-center justify-center ">
                  <VideoBackGround />
                </div>

                <div className="bg-zinc-900 w-full h-[25vh] absolute z-20 bottom-0 flex flex-col  lg:gap-2 gap-1 p-4">
                  <h1 className=" lg:text-2xl md:text-xl font-bold leading-tight  ">
                    {title}
                  </h1>
                  <div className="flex overflow-hidden object-contain ">
                    <p className="hidden md:inline-block font-mono  leading-tight">
                      {overview}
                    </p>
                  </div>
                  <div className="flex gap-4 items-center  ">
                    <button
                      className="bg-white text-black  py-1 px-2  lg:text-xl  flex items-center gap-2 rounded-lg hover:bg-opacity-80"
                      onClick={handleClick}
                    >
                      <FaPlay size={20} />
                      Play
                    </button>
                    {isInMyList ? (
                      <button
                        className="cursor-pointer w-7 h-7 lg:w-10 lg:h-10 bg-zinc-800 rounded-full flex justify-center items-center transition hover:bg-neutral-700 "
                        onClick={handleAddtoList}
                      >
                        <FaCheckCircle size={35} />
                      </button>
                    ) : (
                      <button
                        className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-zinc-800 rounded-full flex justify-center items-center transition hover:bg-neutral-700 "
                        onClick={handleAddtoList}
                      >
                        <IoAddSharp size={35} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <span className="px-2 md:px-0">
          <button
            onClick={toggleMute}
            className="text-white md:w-10 md:h-10 rounded-full bg-transparent border "
          >
            {isMuted ? <MdVolumeOff size={33} /> : <FaVolumeOff size={25} />}
          </button>
        </span>
      </div>
    </div>
  );
};

export default VideoTitle;
