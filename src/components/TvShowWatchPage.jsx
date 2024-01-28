import { Link, useParams } from "react-router-dom";

import { IoArrowBackSharp } from "react-icons/io5";
import TvShowVideoTrailer from "./TvShowVideoTrailer";

const TvShowsWatchPAge = () => {
  const params = useParams();
  return (
    <div>
      <div className="w-[100vw] h-[100vh] ">
        <Link to="/tvshow">
          {" "}
          <button className="text-white z-10 absolute top-16 left-0 px-6 py-1 m-3 rounded-full">
            <IoArrowBackSharp size={40} />
          </button>
        </Link>
        <TvShowVideoTrailer key={params.id} tvShowId={params.id} />
      </div>
    </div>
  );
};

export default TvShowsWatchPAge;
