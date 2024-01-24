import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./Movies/MainContainer";
import SecondaryContainer from "./Movies/SecondaryContainer";
import Navbar from "./Navbar";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Navbar />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
