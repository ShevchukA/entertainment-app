import { createSlice, configureStore } from "@reduxjs/toolkit";

//create slice of global store
const contentSlice = createSlice({
  name: "content",
  initialState: { items: [] },
  reducers: {
    updateContent(state, action) {
      state.items = action.payload;
    },
    bookmarkItem(state, action) {
      console.log(state, action.payload);
    },
  },
});

//action creator for async code
function fetchContent() {
  return async (dispatch) => {
    const response = await fetch("https://api.npoint.io/4424c46c093c84dc4fa5");

    if (!response.ok) {
      throw new Error("Fetching data error");
    }
    const data = await response.json();
    dispatch(contentActions.updateContent(data));
  };
}

const contentActions = contentSlice.actions;
const contentReducer = contentSlice.reducer;
const store = configureStore({ reducer: contentReducer });
// in case of one slice: useSelector(state=>state.items)

// const store = configureStore({ reducer: {content: contentReducer }});
// in this case: useSelector(state=>state.content.items)
// use for multiple slices

export default store;
export { contentActions, fetchContent }; // to get acsess for dispatching
