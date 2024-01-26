import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MainContainer from "./Movies/MainContainer";
import SecondaryContainer from "./Movies/SecondaryContainer";
import Navbar from "./Navbar";
import useTrandingMovies from "../hooks/useTrandingMovies";

const Browse = () => {
  useNowPlayingMovies();
  useUpComingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTrandingMovies();
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
