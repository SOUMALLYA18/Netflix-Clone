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
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Browse = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  useNowPlayingMovies();
  useUpComingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTrandingMovies();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDataLoaded(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="w-screen h-screen">
      <Navbar />
      {!dataLoaded ? (
        <Shimmer />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
