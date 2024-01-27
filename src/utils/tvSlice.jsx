import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
  name: "tvShows",
  initialState: {
    topRatedShow: null,
    tvShowTrailer: null,
    tvCardTrailer: {},
    latestTvShows: null,
    popularTvShows: null,
  },
  reducers: {
    addTopRatedShow: (state, action) => {
      state.topRatedShow = action.payload;
    },
    addTvShowTrailer: (state, action) => {
      state.tvShowTrailer = action.payload;
    },
    addTvCardTrailer: (state, action) => {
      const { tvShowId, trailer } = action.payload;
      state.tvCardTrailer[tvShowId] = trailer;
    },
    addLatestTvShows: (state, action) => {
      state.latestTvShows = action.payload;
    },
    addPopularTvShows: (state, action) => {
      state.popularTvShows = action.payload;
    },
  },
});

export const {
  addTopRatedShow,
  addTvShowTrailer,
  addTvCardTrailer,
  addLatestTvShows,
  addPopularTvShows,
} = tvSlice.actions;

export default tvSlice.reducer;
