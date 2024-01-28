import { useSelector } from "react-redux";
import useMovieWatchPageTrailer from "../hooks/useMovieWatchPageTrailer";

const VideoTrailer = ({ movieId }) => {
  useMovieWatchPageTrailer(movieId);
  const tarilerVideo = useSelector((store) => store.movies?.watchPageTrailer);
  return (
    <div className=" ">
      <iframe
        className="w-[100vw] h-[100vh] aspect-video bg-zinc-950"
        src={
          tarilerVideo
            ? `https://www.youtube.com/embed/${tarilerVideo.key}?autoplay=1&mute=1&loop=1&playlist=${tarilerVideo.key}`
            : ""
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
