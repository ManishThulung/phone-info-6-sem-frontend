import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AccessToken, LoginData, User } from "../types/user";
import { headers } from "../storage";

export const adminApi: any = createApi({
  reducerPath: "adminApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URI,
  }),
  tagTypes: ["Admin"],
  endpoints: (builder) => ({
    // getUsers: builder.query<User[], null>({
    //   query: () => "users",
    //   providesTags: ["Users"],
    // }),
    // getUserById: builder.query<User, number>({
    //   query: (id) => `users/${id}`,
    // }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
        credentialsls: "include",
        headers: headers,
      }),
      invalidatesTags: ["Admin"],
    }),
  }),
});

export const {
  //  useGetUsersQuery,
  // useGetUserByIdQuery,
  useDeleteUserMutation,
} = adminApi;
