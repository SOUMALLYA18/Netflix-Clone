import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TVShowCard from "./TvShowCard";
import { useRef } from "react";

const TvShowList = ({ title, tvShows }) => {
  const tvShowPostersRef = useRef(null);

  const handleArrowClick = (scrollAmount) => {
    if (tvShowPostersRef.current) {
      tvShowPostersRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div>
      <div className="px-4 text-white relative">
        <h1 className="md:text-2xl text-lg py-2 leading-tight">{title}</h1>
        <div className="relative">
          <div
            ref={tvShowPostersRef}
            className="tv-show-posters flex overflow-x-scroll relative"
          >
            <div className="flex">
              {tvShows &&
                tvShows.map((tvShow) => (
                  <TVShowCard
                    key={tvShow.id}
                    tvShowId={tvShow.id}
                    poster_path={tvShow.poster_path}
                    ratings={tvShow.vote_average}
                    name={tvShow.name}
                  />
                ))}
            </div>
          </div>

          <div className="md:flex">
            <div className="slider-button-overlay-left absolute left-0 top-0 bottom-0 bg-gradient-to-r from-transparent to-black" />
            <FaChevronLeft
              className="slider-button absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white cursor-pointer opacity-10 hover:opacity-100 bg-gradient-to-r from-black w-12 h-[70%] hidden md:block"
              size={20}
              onClick={() => handleArrowClick(-100)}
            />

            <div className="slider-button-overlay-right absolute right-0 top-0 bottom-0 bg-gradient-to-l from-transparent to-black" />
            <FaChevronRight
              className="slider-button absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white cursor-pointer opacity-10 hover:opacity-100 bg-gradient-to-r from-black w-12 h-[70%] hidden md:block"
              size={40}
              onClick={() => handleArrowClick(100)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvShowList;
