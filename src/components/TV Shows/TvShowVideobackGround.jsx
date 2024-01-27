import { useSelector } from "react-redux";
import UseTvShowTrailer from "../../hooks/UseTvShowTrailer";
import { useMute } from "../MuteContext";
const TvShowVideobackGround = ({ tvShowId }) => {
  const { isMuted } = useMute();
  const tarilerVideo = useSelector((store) => store.tvShows?.tvShowTrailer);
  UseTvShowTrailer(tvShowId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          tarilerVideo
            ? `https://www.youtube.com/embed/${tarilerVideo.key}?autoplay=1&${
                isMuted ? "mute=1" : "mute=0"
              }&loop=1&playlist=${tarilerVideo.key}`
            : ""
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default TvShowVideobackGround;

// tvShowTrailer
