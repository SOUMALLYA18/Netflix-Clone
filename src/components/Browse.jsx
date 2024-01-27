import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MainContainer from "./Movies/MainContainer";
import SecondaryContainer from "./Movies/SecondaryContainer";
import Navbar from "./Navbar";
import useTrandingMovies from "../hooks/useTrandingMovies";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Browse = () => {
  useNowPlayingMovies();
  useUpComingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTrandingMovies();
  const user = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
