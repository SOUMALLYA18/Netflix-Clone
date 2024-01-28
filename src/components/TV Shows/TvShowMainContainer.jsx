import { useSelector } from "react-redux";
import TvShowVideobackGround from "./TvShowVideobackGround";
import TvShowVideotitle from "./TvShowVideotitle";

const TvShowMainContainer = () => {
  const tvShow = useSelector((store) => store.tvShows?.topRatedShow);
  if (!tvShow) return;
  const mainTvShow = tvShow[1];

  const { name, overview, id, ratings, poster_path } = mainTvShow;

  return (
    <div className="w-screen  lg:pt-0 md:pt-[30%] pt-[25%] bg-black">
      <TvShowVideotitle
        name={name}
        overview={overview}
        tvShowId={id}
        ratings={ratings}
        poster_path={poster_path}
      />
      <TvShowVideobackGround tvShowId={id} />
    </div>
  );
};

export default TvShowMainContainer;
