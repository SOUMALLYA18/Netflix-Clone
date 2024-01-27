import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import useTopratedTvShows from "../hooks/useTopratedTvShows";
import TvShowMainContainer from "./TV Shows/TvShowMainContainer";
import TvShowSecondaryContainer from "./TV Shows/TvShowSecondaryContainer";
import useLatestTvShows from "../hooks/useLatestTvShows";
import usePopularTvShows from "../hooks/usePopularTvShows";

const TvShowBrowse = () => {
  useTopratedTvShows();
  useLatestTvShows();
  usePopularTvShows();
  const user = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Navbar />
      <TvShowMainContainer />
      <TvShowSecondaryContainer />
    </div>
  );
};

export default TvShowBrowse;
