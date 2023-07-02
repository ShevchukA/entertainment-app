import { createSlice, configureStore } from "@reduxjs/toolkit";

//create slice of global store
const contentSlice = createSlice({
  name: "content",
  initialState: { items: [] },
  reducers: {
    updateContent(state, action) {
      state.items = action.payload;
    },
    bookmarkContent(state, action) {
      console.log(state, action.payload);
    },
  },
});

//action creator for async code
function fetchContent() {}

const contentActions = contentSlice.actions;
const contentReducer = contentSlice.reducer;
const store = configureStore({ reducer: contentReducer });
// in case of one slice: useSelector(state=>state.items)

// const store = configureStore({ reducer: {content: contentReducer }});
// in this case: useSelector(state=>state.content.items)
// use for multiple slices

export default store;
export { contentActions };
