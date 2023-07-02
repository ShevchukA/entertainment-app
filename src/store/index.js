import { createSlice, configureStore } from "@reduxjs/toolkit";

//create slice of global store
const contentSlice = createSlice({
  name: "content",
  initialState: [],
  reducers: {
    updateContent(state, action) {
      console.log(state, action.payload);
    },
    bookmarkContent(state, action) {
      console.log(state, action.payload);
    },
  },
});

//action creator for async code
function fetchContent() {}

const store = configureStore({ reducer: contentSlice.reducer });

export default store;
