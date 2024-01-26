import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    tarilerVideo: null,
    movieCardTrailer: {},
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.tarilerVideo = action.payload;
    },
    addMovieCardTrailer: (state, action) => {
      const { movieId, trailer } = action.payload;
      state.movieCardTrailer[movieId] = trailer;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addMovieCardTrailer } =
  movieSlice.actions;

export default movieSlice.reducer;
