import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import useTopratedTvShows from "../hooks/useTopratedTvShows";
import TvShowMainContainer from "./TV Shows/TvShowMainContainer";
import TvShowSecondaryContainer from "./TV Shows/TvShowSecondaryContainer";
import useLatestTvShows from "../hooks/useLatestTvShows";
import usePopularTvShows from "../hooks/usePopularTvShows";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const TvBrowse = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  useTopratedTvShows();
  useLatestTvShows();
  usePopularTvShows();
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
          <TvShowMainContainer />
          <TvShowSecondaryContainer />
        </>
      )}
    </div>
  );
};

export default TvBrowse;
