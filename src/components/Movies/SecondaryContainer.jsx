import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies.nowPlayingMovies) {
    return <div>Loading or handle error...</div>;
  }

  const ratings = movies.nowPlayingMovies.map(
    (movie) => Math.floor(movie.vote_average * 10) / 10
  );

  return (
    <div className="bg-zinc-950">
      <div className="mt-0 md:-mt-64 relative z-20 pl-1 md:pl-12">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
          ratings={ratings}
          name={movies.nowPlayingMovies.title}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
