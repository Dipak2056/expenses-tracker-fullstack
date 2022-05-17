import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  res: {
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
      state.res = action.payload;
    },
  },
});
const { actions, reducer } = userSlice;

export const { isLoadingpending, setResponse } = actions;
export default reducer;
