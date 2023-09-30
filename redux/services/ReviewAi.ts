import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Companies,
  Company,
  CompareData,
  ComparePhone,
  Phone,
} from "../types/phone";
import { headers } from "../storage";

export const reviewApi: any = createApi({
  reducerPath: "reviewApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URI,
  }),
  tagTypes: ["Review"],

  endpoints: (builder) => ({
    getReview: builder.query<Company[], null>({
      query: () => "review",
      providesTags: ["Review"],
    }),

    addReview: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `review/create/${id}`,
        method: "POST",
        body,
        credentialsls: "include",
        headers: headers,
      }),
      invalidatesTags: ["Review"],
    }),

    updateReview: builder.mutation({
      query: (id) => ({
        url: `review/${id}`,
        method: "DELETE",
        credentialsls: "include",
        headers: headers,
      }),
      invalidatesTags: ["Review"],
    }),
  }),
});

export const {
  useGetPhonesQuery,
  useAddReviewMutation,
  useDeletePhoneMutation,
} = reviewApi;
