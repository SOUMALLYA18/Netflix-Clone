import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const tarilerVideo = useSelector((store) => store.movies?.tarilerVideo);
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const movieTrailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(movieTrailer));
  };
  useEffect(() => {
    !tarilerVideo && getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
