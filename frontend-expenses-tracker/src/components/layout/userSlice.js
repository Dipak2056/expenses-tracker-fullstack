import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resp: {
    status: "",
    message: "",
  },
  isLoading: false,
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isLoadingpending: (state) => {
      state.isLoading = true;
    },
    setResponse: (state, action) => {
      state.isLoading = false;
      state.resp = action.payload;
    },
  },
});
const { actions, reducers } = userSlice;

export const { isLoadingpending, setResponse } = actions;
export default reducers;
