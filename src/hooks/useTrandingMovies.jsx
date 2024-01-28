import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";

import { useEffect } from "react";
import { addTrandingMovies } from "../utils/movieSlice";

const useTrandingMovies = () => {
  const dispatch = useDispatch();
  //   const trandingMovies = useSelector((store) => store.movies?.trandingMovies);
  const getTrandingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&adult=true&with_original_language=hi",
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
