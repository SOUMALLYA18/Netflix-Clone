import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";

import { useEffect } from "react";
import { addTopRatedrMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  //   const topratedMovies = useSelector((store) => store.movies?.topratedMovies);
  const getTopratedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await response.json();
    dispatch(addTopRatedrMovies(json.results));
  };
  useEffect(() => {
    // !topratedMovies && getTopratedMovies();
    getTopratedMovies();
  }, []);
};

export default useTopRatedMovies;
