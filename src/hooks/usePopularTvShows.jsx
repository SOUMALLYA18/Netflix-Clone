import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addPopularTvShows } from "../utils/tvSlice";

const usePopularTvShows = () => {
  const dispatch = useDispatch();
  const getPopularTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularTvShows(json.results));
  };
  useEffect(() => {
    getPopularTvShows();
  }, []);
};

export default usePopularTvShows;
