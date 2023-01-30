import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalSlice";
import { api } from "./api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
setupListeners(store.dispatch);
