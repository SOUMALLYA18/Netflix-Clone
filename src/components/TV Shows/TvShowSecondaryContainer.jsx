import { useSelector } from "react-redux";
import TvShowList from "./TvShowList";

const TvShowSecondaryContainer = () => {
  const tvShows = useSelector((store) => store.tvShows);
  return (
    <div className="bg-zinc-950">
      <div className="mt-0 md:-mt-64 relative z-20 pl-1 md:pl-7 text-white  ">
        <TvShowList
          title={"Top Rated"}
          tvShows={tvShows.topRatedShow}
          name={tvShows.topRatedShow?.title}
        />
      </div>
    </div>
  );
};

export default TvShowSecondaryContainer;
