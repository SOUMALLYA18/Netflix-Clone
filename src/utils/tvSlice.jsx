import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
  name: "tvShows",
  initialState: {
    topRatedShow: null,
    tvShowTrailer: null,
    tvCardTrailer: {},
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
  },
});

export const { addTopRatedShow, addTvShowTrailer, addTvCardTrailer } =
  tvSlice.actions;

export default tvSlice.reducer;
