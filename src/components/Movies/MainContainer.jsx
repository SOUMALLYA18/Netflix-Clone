import { useSelector } from "react-redux";

import VideoTitle from "../Movies/VideoTitle";
import { MuteProvider } from "../MuteContext";
import VideoBackGround from "./VideoBackGround";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[8];

  const { title, overview, id, name, ratings, poster_path } = mainMovie;
  return (
    <MuteProvider>
      <div className="w-screen  lg:pt-0 pt-[30%] bg-black">
        <VideoTitle
          title={title}
          overview={overview}
          movieId={id}
          name={name}
          ratings={ratings}
          poster_path={poster_path}
        />
        <VideoBackGround movieId={id} />
      </div>
    </MuteProvider>
  );
};

export default MainContainer;
