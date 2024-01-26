import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    tarilerVideo: null,
    movieCardTrailer: {},
    upComingMovies: null,
    popularMovies: null,
    topratedMovies: null,
    trandingMovies: null,
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
    addUpComingrMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedrMovies: (state, action) => {
      state.topratedMovies = action.payload; // Corrected naming here
    },
    addTrandingMovies: (state, action) => {
      state.trandingMovies = action.payload; // Corrected naming here
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addMovieCardTrailer,
  addUpComingrMovies,
  addPopularMovies,
  addTopRatedrMovies,
  addTrandingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
