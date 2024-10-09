import { configureStore, createSlice } from "@reduxjs/toolkit";

// NAVBAR WIDTH SLICE
const navSlice = createSlice({
  name: "navSelection",
  initialState: { value: "lg:w-52" },
  reducers: {
    expand: (state) => {
      state.value = "lg:w-52";
    },
    contract: (state) => {
      state.value = "lg:w-20";
    },
  },
});
// NAVBAR WIDTH SLICE ACTIONS EXPORT

export const { expand, contract } = navSlice.actions;

// STORE CONFIGURATION
const store = configureStore({
  reducer: {
    navSelection: navSlice.reducer,
  },
});

export default store;