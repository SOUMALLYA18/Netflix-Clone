import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";

import { useEffect } from "react";
import { addTrandingMovies } from "../utils/movieSlice";

const useTrandingMovies = () => {
  const dispatch = useDispatch();
  //   const trandingMovies = useSelector((store) => store.movies?.trandingMovies);
  const getTrandingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPTIONS
    );
    const json = await response.json();
    dispatch(addTrandingMovies(json.results));
  };
  useEffect(() => {
    // !trandingMovies && getTrandingMovies();
    getTrandingMovies();
  }, []);
};

export default useTrandingMovies;