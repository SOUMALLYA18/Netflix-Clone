import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import tvShowReducer from "./tvSlice";
import myListReducer from "./MyListSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    tvShows: tvShowReducer,
    mylist: myListReducer,
  },
});

export default appStore;
