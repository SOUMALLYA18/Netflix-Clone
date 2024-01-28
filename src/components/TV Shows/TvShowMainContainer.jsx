import { useSelector } from "react-redux";
import TvShowVideobackGround from "./TvShowVideobackGround";
import TvShowVideotitle from "./TvShowVideotitle";

const TvShowMainContainer = () => {
  const tvShow = useSelector((store) => store.tvShows?.topRatedShow);
  if (!tvShow) return;
  const mainTvShow = tvShow[1];

  const { name, overview, id } = mainTvShow;

  return (
    <div className="w-screen  md:pt-0 pt-[25%] bg-black">
      <TvShowVideotitle name={name} overview={overview} tvShowId={id} />
      <TvShowVideobackGround tvShowId={id} />
    </div>
  );
};

export default TvShowMainContainer;
