import { createSlice } from "@reduxjs/toolkit";

const loadMyListFromLocalStorage = () => {
  const storedData = localStorage.getItem("myList");
  return storedData ? JSON.parse(storedData) : [];
};

const myListSlice = createSlice({
  name: "mylist",
  initialState: {
    items: loadMyListFromLocalStorage(),
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("myList", JSON.stringify(state.items));
    },
    removeItem: (state) => {
      state.items = [];
      localStorage.removeItem("myList");
    },
  },
});

export const { addItem, removeItem } = myListSlice.actions;

export default myListSlice.reducer;
