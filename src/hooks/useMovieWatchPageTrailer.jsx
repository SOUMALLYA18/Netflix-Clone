import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addWatchPageTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieWatchPageTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieWatchPageTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const movieTrailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addWatchPageTrailerVideo(movieTrailer));
  };
  useEffect(() => {
    getMovieWatchPageTrailer();
  }, []);
};

export default useMovieWatchPageTrailer;
