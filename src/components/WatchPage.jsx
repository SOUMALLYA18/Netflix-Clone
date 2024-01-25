import { useParams, Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import VideoTrailer from "./VideoTrailer";

const WatchPage = () => {
  const params = useParams();

  return (
    <div className="w-[100vw] h-[100vh] ">
      <Link to="/browse">
        {" "}
        <button className="text-white z-10 absolute top-16 left-0 px-6 py-1 m-3 rounded-full">
          <IoArrowBackSharp size={40} />
        </button>
      </Link>
      <VideoTrailer key={params.id} movieId={params.id} />
    </div>
  );
};

export default WatchPage;
