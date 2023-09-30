import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "../storage";

export const ratingApi: any = createApi({
  reducerPath: "ratingApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URI,
  }),
  tagTypes: ["Rating"],

  endpoints: (builder) => ({
    getRatingById: builder.query({
      query: (id) => `rating/${id}`,
      providesTags: ["Rating"],
    }),

    addRating: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `rating/create/${id}`,
        method: "POST",
        body,
        credentialsls: "include",
        headers: headers,
      }),
      invalidatesTags: ["Rating"],
    }),
  }),
});

export const { useGetRatingByIdQuery, useAddRatingMutation } = ratingApi;
