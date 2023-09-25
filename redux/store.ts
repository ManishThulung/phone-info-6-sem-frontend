import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { userApi } from "./services/userApi";
import { phoneApi } from "./services/phoneApi";
import { reviewApi } from "./services/ReviewAi";
import { adminApi } from "./services/adminApi";
import { ratingApi } from "./services/ratingApi";
import { commentApi } from "./services/commentApi";
import { companyApi } from "./services/companyApi";

export const store = configureStore({
  reducer: {
    [phoneApi.reducerPath]: phoneApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [ratingApi.reducerPath]: ratingApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      phoneApi.middleware,
      userApi.middleware,
      reviewApi.middleware,
      adminApi.middleware,
      commentApi.middleware,
      ratingApi.middleware,
      companyApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
