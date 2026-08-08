import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./Login/Logindetail/AuthSlice"
import { apiSlice } from "./RTK/MainApiCall";
const store = configureStore({
  reducer: {

      authslice: AuthReducer,
      [apiSlice.reducerPath]:apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;