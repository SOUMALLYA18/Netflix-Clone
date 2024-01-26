import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { useMute } from "../MuteContext";

const VideoBackGround = ({ movieId }) => {
  const { isMuted } = useMute();
  const tarilerVideo = useSelector((store) => store.movies?.tarilerVideo);
  useMovieTrailer(movieId);

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

export default VideoBackGround;
