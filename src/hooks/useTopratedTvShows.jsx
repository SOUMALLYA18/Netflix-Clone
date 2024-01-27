import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addTopRatedShow } from "../utils/tvSlice";
const useTopratedTvShows = () => {
  const dispatch = useDispatch();
  const getTopRatedShow = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addTopRatedShow(json.results));
  };
  useEffect(() => {
    getTopRatedShow();
  }, []);
};

export default useTopratedTvShows;
