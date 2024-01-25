import { IMG_CDN_URL } from "../../utils/Constants";
import { useNavigate } from "react-router-dom";
import { FaPlay, FaCheckCircle } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";

const MovieCard = ({ poster_path, movieId, ratings, name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div className=" w-28 md:w-48 pr-4 overflow-hidden  cursor-pointer group">
      <img
        src={
          poster_path ? `${IMG_CDN_URL}${poster_path}` : "fallback_image_url"
        }
        alt="Movie Card"
        className="Movie-card md:w-[15vw] md:h-[15vw] cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 "
        onClick={handleClick}
      />
      <div className="flex items-center justify-center ">
        <div className="flex flex-col items-center justify-center opacity-0 absolute top-0  transition duration-200 z-20 invisible sm:visible delay-300 w-[18vw] h-[45vh] scale-0 group-hover:scale-110 group-hover:-translate-y-[7vw] group-hover:translate-x-[4vw] group-hover:opacity-100 bg-red-500">
          <img
            src={
              poster_path
                ? `${IMG_CDN_URL}${poster_path}`
                : "fallback_image_url"
            }
            alt="Movie Card"
            className="Movie-card w-[20vw] h-[250px] text-center cursor-pointer object-cover transition duration shadow-xl rounded-t-md flex items-center justify-center"
          />
          <div className="bg-zinc-900 p-3 lg:p-2 absolute w-full flex flex-col bottom-0 transition shadow-md gap-2">
            <h3 className="text-white px ">{name}</h3>
            <div className="flex flex-row items-center gap-3 ">
              <div
                className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-black rounded-full flex justify-center items-center transition hover:bg-neutral-700 "
                onClick={handleClick}
              >
                <FaPlay size={20} />
              </div>
              <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-black rounded-full flex justify-center items-center transition hover:bg-neutral-700 ">
                <IoAddSharp size={30} />
              </div>
            </div>
            <p className=" text-green-500 font-semibold mt-2 ">
              <span className="text-white text-sm gap-4 ">{ratings}</span>{" "}
              Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
