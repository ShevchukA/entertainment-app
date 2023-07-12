import { createSlice, configureStore } from "@reduxjs/toolkit";
console.log("STORE");
//create slice of global store
const contentSlice = createSlice({
  name: "content",
  initialState: { items: [], isLoading: true },
  reducers: {
    setIsLoading(state) {
      state.isLoading = true;
    },
    updateContent(state, action) {
      // console.log("update state");
      state.items = action.payload;
      state.isLoading = false;
    },
    bookmarkItem(state, action) {
      // console.log(action);
      const index = state.items.findIndex(
        (item) => item.title === action.payload
      );
      state.items[index].isBookmarked = !state.items[index].isBookmarked;
    },
  },
});

const searchingSlice = createSlice({
  name: "search",
  initialState: { searchingRequest: "", isSearching: false },
  reducers: {
    updateState(state, action) {
      if (action.payload.trim() === "") {
        state.isSearching = false;
      } else {
        state.isSearching = true;
      }
      state.searchingRequest = action.payload;
    },
  },
});

//action creator for async code
function fetchContent() {
  return async (dispatch) => {
    dispatch(contentActions.setIsLoading());
    console.log("getting data");
    const response = await fetch("https://api.npoint.io/4424c46c093c84dc4fa5");
    // const response = await fetch(
    //   "https://react-http-c788f-default-rtdb.asia-southeast1.firebasedatabase.app/entertainment-app.json"
    // );

    console.log("getting is over");
    if (!response.ok) {
      throw new Error("Fetching data error");
    }
    const data = await response.json();
    dispatch(contentActions.updateContent(data || [])); // empty array to avoid errorrs in case of empty data
  };
}

function sendContent(content) {
  return async () => {
    console.log("sending", content);

    const response = await fetch(
      "https://react-http-c788f-default-rtdb.asia-southeast1.firebasedatabase.app/entertainment-app.json",
      {
        method: "PUT",
        body: JSON.stringify(content),
      }
    );

    console.log("sending is over");

    if (!response.ok) {
      console.log(response);
      throw new Error("Sending data is failed");
    }
  };
}

const contentActions = contentSlice.actions; // includes all reducers from contentSlice
const searchingActions = searchingSlice.actions;
const contentReducer = contentSlice.reducer;
const searchingReducer = searchingSlice.reducer;

// in case of one slice:
// const store = configureStore({ reducer: contentReducer });
// useSelector(state=>state.items)

const store = configureStore({
  reducer: { content: contentReducer, search: searchingReducer },
});

export default store;
export { contentActions, searchingActions, fetchContent, sendContent }; // to get acsess for dispatching
