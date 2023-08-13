import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Companies,
  Company,
  CompareData,
  ComparePhone,
  Phone,
} from "../types/phone";
import { headers } from "../storage";

type Param = { id: number };

export const ratingApi: any = createApi({
  reducerPath: "ratingApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URI,
  }),
  tagTypes: ["Rating"],

  endpoints: (builder) => ({
    getRating: builder.query<any, number>({
      query: (id) => `rating/${id}`,
    }),

    addRating: builder.mutation({
      query: ({ id, value }) => ({
        url: `rating/create/${id}`,
        method: "POST",
        value,
      }),
      invalidatesTags: ["Rating"],
    }),
  }),
});

export const { useGetRatingQuery, useAddRatingMutation } = ratingApi;
