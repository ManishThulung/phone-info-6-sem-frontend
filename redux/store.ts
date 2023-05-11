import { configureStore } from "@reduxjs/toolkit";
import { phoneApi } from "./services/phoneApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { userApi } from "./services/userApi";

export const store = configureStore({
  reducer: {
    [phoneApi.reducerPath]: phoneApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(phoneApi.middleware, userApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
