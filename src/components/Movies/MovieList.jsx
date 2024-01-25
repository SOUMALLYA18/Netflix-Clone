import React, { useState, useRef, useEffect } from "react";
import MovieCard from "./MovieCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const MovieList = ({ title, movies, releaseDates }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const moviePostersRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    const newPosition = scrollPosition + scrollOffset;
    setScrollPosition(newPosition >= 0 ? newPosition : 0);
    moviePostersRef.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  const handleArrowClick = (scrollOffset) => {
    handleScroll(scrollOffset);
    return false;
  };

  if (!movies || movies.length === 0) {
    return (
      <div>
        <h1>{title}</h1>
        <p>No movies available</p>
      </div>
    );
  }

  return (
    <div className="px-4 text-white relative">
      <h1 className="md:text-2xl text-lg py-2 leading-tight">{title}</h1>
      <div className="">
        <div
          ref={moviePostersRef}
          className="movie-posters flex overflow-x-scroll relative"
        >
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movieId={movie.id}
                poster_path={movie.poster_path}
                releaseDates={movie.release_date}
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
  );
};

export default MovieList;
