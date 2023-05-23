import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AccessToken, LoginData, User } from "../types/user";

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URI,
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], null>({
      query: () => "users",
      providesTags: ["Users"],
    }),
    getUserById: builder.query<User, number>({
      query: (id) => `users/${id}`,
    }),

    registerUser: builder.mutation({
      query: ({ name, email, password }) => ({
        url: `users/register`,
        method: "POST",
        body: { name, email, password },
      }),
    }),

    loginUser: builder.mutation<AccessToken, Partial<LoginData>>({
      query: (body) => ({
        url: `users/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
} = userApi;
