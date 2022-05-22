import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/layout/userSlice";
import dashboardReducer from "../src/pages/dashboard/dashboardSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    dashboard: dashboardReducer,
  },
});
export default store;
