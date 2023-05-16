import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  id: number;
  name: string;
  email: number;
};

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URI,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], null>({
      query: () => "users",
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

    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: `users/login`,
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
} = userApi;
