import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import MovieCard from "./Movies/MovieCard";
import TVShowCard from "./TV Shows/TvShowCard";

import { MdDeleteForever } from "react-icons/md";
import { removeItem } from "../utils/MyListSlice";

const MyList = () => {
  const myListItems = useSelector((store) => store.mylist?.items);
  const dispatch = useDispatch();

  const removeFromMyList = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <>
      <Navbar />
      <div className="bg-zinc-900 text-white w-screen h-screen flex items-center justify-center flex-col">
        <h1 className="text-white text-3xl p-4">My Watch List</h1>
        {myListItems.length === 0 ? (
          <p className="text-white text-2xl">Your watchlist is empty.</p>
        ) : (
          <div className="movie-card-list flex gap-4 relative p-[8vh]">
            <button
              onClick={removeFromMyList}
              className="delete-button text-white absolute top-0 right-0 mt-0 mr-5 bg-red-500 px-2 py-2 rounded-lg hover:opacity-60"
            >
              <span className="flex items-center gap-1">
                <span className="text-lg">Clear MyList</span>
                <MdDeleteForever size={25} />
              </span>
            </button>

            {myListItems.map(({ id, type, ...otherProps }) => (
              <div key={id}>
                {type === "tvShow" ? (
                  <TVShowCard {...otherProps} tvShowId={id} />
                ) : (
                  <MovieCard {...otherProps} movieId={id} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyList;
