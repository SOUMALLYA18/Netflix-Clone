import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  // Check if nowPlayingMovies is not null or undefined
  if (!movies.nowPlayingMovies) {
    // Handle the case where nowPlayingMovies is null or undefined
    return <div>Loading or handle error...</div>;
  }

  // Extract all release dates from nowPlayingMovies
  const releaseDates = movies.nowPlayingMovies.map(
    (movie) => movie.release_date
  );

  return (
    <div className="bg-zinc-950">
      <div className="mt-0 md:-mt-64 relative z-20 pl-1 md:pl-7">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
          releaseDates={releaseDates}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
