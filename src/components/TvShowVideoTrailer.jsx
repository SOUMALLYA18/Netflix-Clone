import { useSelector } from "react-redux";
import useTvShowWatchPageTrailer from "../hooks/useTvShowWatchPageTrailer";

const TvShowsVideoTrailer = ({ tvShowId }) => {
  useTvShowWatchPageTrailer(tvShowId);
  const tvShowTrailer = useSelector(
    (store) => store.tvShows?.tvShowWAtchPageTrailer
  );
  return (
    <div className=" ">
      <iframe
        className="w-[100vw] h-[100vh] aspect-video bg-zinc-950"
        src={
          tvShowTrailer
            ? `https://www.youtube.com/embed/${tvShowTrailer.key}?autoplay=1&mute=1&loop=1&playlist=${tvShowTrailer.key}`
            : ""
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default TvShowsVideoTrailer;
