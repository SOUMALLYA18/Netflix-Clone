import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  //   const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await response.json();

    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    // !popularMovies && getPopularMovies();
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
