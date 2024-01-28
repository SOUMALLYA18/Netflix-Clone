import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTvShowWatchPageTrailer } from "../utils/tvSlice";
import { useEffect } from "react";

const useTvShowWatchPageTrailer = (tvShowId) => {
  const dispatch = useDispatch();
  const getTvShowWatchPageTrailer = async () => {
    const data = await fetch(
      " https://api.themoviedb.org/3/tv/" + tvShowId + "/videos?language=en-US",

      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const tvShowTrailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTvShowWatchPageTrailer(tvShowTrailer));
  };
  useEffect(() => {
    getTvShowWatchPageTrailer();
  }, []);
};

export default useTvShowWatchPageTrailer;
