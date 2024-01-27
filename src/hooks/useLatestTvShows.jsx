import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addLatestTvShows } from "../utils/tvSlice";

const useLatestTvShows = () => {
  const dispatch = useDispatch();
  const getLAtestTvShow = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addLatestTvShows(json.results));
  };
  useEffect(() => {
    getLAtestTvShow();
  }, []);
};

export default useLatestTvShows;
