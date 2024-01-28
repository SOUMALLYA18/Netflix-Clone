import { IMG_CDN_URL } from "../../utils/Constants";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import useTvTrailer from "../../hooks/useTvTrailer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FaVolumeOff } from "react-icons/fa6";
import { MdVolumeOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { addItem } from "../../utils/MyListSlice";

const TVShowCard = ({ poster_path, tvShowId, ratings, name }) => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const dispatch = useDispatch();
  const [isInMyList, setIsInMyList] = useState(false);
  const myListItems = useSelector((store) => store.mylist?.items);

  useTvTrailer(tvShowId);

  const trailer = useSelector(
    (store) => store.tvShows?.tvCardTrailer?.[tvShowId]
  );

  const handleClick = () => {
    navigate(`/tvshow/${tvShowId}`);
  };

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };

  const handleToggleMute = () => {
    setIsMuted((prevMute) => !prevMute);
  };

  const handleAddtoList = () => {
    if (!isInMyList) {
      dispatch(addItem({ id: tvShowId, name, ratings, poster_path }));
    }
  };
  useEffect(() => {
    const isInList = myListItems.some((item) => item.id === tvShowId);
    setIsInMyList(isInList);
  }, [tvShowId, myListItems]);
  return (
    <div className="w-28 md:w-48 pr-4 overflow-hidden cursor-pointer group">
      <img
        src={
          poster_path ? `${IMG_CDN_URL}${poster_path}` : "fallback_image_url"
        }
        alt="TV Show Card"
        className="TVShow-card lg:w-[15vw] lg:h-[15vw] cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 "
      />
      <div className=" lg:hidden absolute  bottom-0 z-20 w-[23vw] h-8 flex items-center justify-between gap-3">
        {" "}
        <button
          className="cursor-pointer px-3 py-2 md:px-6 md:py-1 bg-black rounded-full flex justify-center items-center transition hover:bg-neutral-700"
          onClick={handleClick}
        >
          <FaPlay size={15} />
        </button>
        {isInMyList ? (
          <button
            className="cursor-pointer px-3 py-1 md:px-6 md:py-1 bg-black rounded-full flex justify-center items-center transition hover:bg-neutral-700"
            onClick={handleAddtoList}
          >
            <FaCheckCircle size={20} />
          </button>
        ) : (
          <button
            className="cursor-pointer px-3 py-1 md:px-6 md:py-1 bg-black rounded-full flex justify-center items-center transition hover:bg-neutral-700"
            onClick={handleAddtoList}
          >
            <IoAddSharp size={20} />
          </button>
        )}
      </div>
      <div
        className="flex items-center justify-center "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col items-center justify-center opacity-0 absolute top-0  transition duration-200 z-20 invisible sm:visible delay-300 w-[18vw] h-[45vh] scale-0 group-hover:scale-110 group-hover:-translate-y-[7vw] group-hover:translate-x-[4vw] group-hover:opacity-100 ">
          <div className="w-full h-full flex bg-zinc-900">
            {trailer && (
              <iframe
                className="w-full h-full aspect-video"
                src={
                  isPlaying
                    ? `https://www.youtube.com/embed/${
                        trailer.key
                      }?autoplay=1&${
                        isMuted ? "mute=1" : "mute=0"
                      }&loop=1&playlist=${trailer.key}`
                    : ""
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            )}
          </div>
          <div className="bg-zinc-900 p-3 lg:p-2 absolute w-full flex flex-col bottom-2 transition shadow-md gap-3 top-[30vh] ">
            <h3 className="text-white px ">{name}</h3>
            <div className="flex flex-row items-center gap-3  ">
              <div
                className="cursor-pointer w-4 h-4 lg:w-10 lg:h-10 bg-black rounded-full flex justify-center items-center transition hover:bg-neutral-700 "
                onClick={handleClick}
              >
                <FaPlay size={20} />
              </div>
              {isInMyList ? (
                <div
                  className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-black rounded-full flex justify-center items-center transition hover:bg-neutral-700 "
                  onClick={handleAddtoList}
                >
                  <FaCheckCircle size={30} />
                </div>
              ) : (
                <div
                  className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-black rounded-full flex justify-center items-center transition hover:bg-neutral-700 "
                  onClick={handleAddtoList}
                >
                  <IoAddSharp size={30} />
                </div>
              )}

              <span className="px-2 md:px-0">
                <button
                  onClick={handleToggleMute}
                  className="text-white w-8 h-8 rounded-full bg-transparent border "
                >
                  {isMuted ? (
                    <MdVolumeOff size={27} />
                  ) : (
                    <FaVolumeOff size={20} />
                  )}
                </button>
              </span>
              <span className="flex items-center">
                <p className=" text-green-500 font-semibold ">
                  <span className="text-white text-sm gap-4 ">{ratings}</span>{" "}
                  Rating
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShowCard;
