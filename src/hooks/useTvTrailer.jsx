import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addTvCardTrailer } from "../utils/tvSlice";

const useTvTrailer = (tvShowId) => {
  const dispatch = useDispatch();

  const getTvShowTrailer = async () => {
    const data = await fetch(
      " https://api.themoviedb.org/3/tv/" + tvShowId + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const tvShowTrailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTvCardTrailer({ tvShowId, trailer: tvShowTrailer }));
  };
  useEffect(() => {
    getTvShowTrailer();
  }, []);
};

export default useTvTrailer;
