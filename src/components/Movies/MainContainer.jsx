import { useSelector } from "react-redux";
import VideoBackground from "../Movies/VideoBackground";
import VideoTitle from "../Movies/VideoTitle";
import { MuteProvider } from "../MuteContext";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[9];

  const { title, overview, id } = mainMovie;
  return (
    <MuteProvider>
      <div className="w-screen  md:pt-0 pt-[25%] bg-black">
        <VideoTitle title={title} overview={overview} movieId={id} />
        <VideoBackground movieId={id} />
      </div>
    </MuteProvider>
  );
};

export default MainContainer;
