import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { headers } from "../storage";

export const commentApi: any = createApi({
  reducerPath: "commentApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URI,
  }),
  tagTypes: ["Comment"],

  endpoints: (builder) => ({
    getComments: builder.query<any, null>({
      query: () => "comment",
      providesTags: ["Comment"],
    }),

    getCommentsById: builder.query<any, number>({
      query: (id) => `comment/phone/${id}`,
      providesTags: ["Comment"],
    }),

    // addComment: builder.mutation<any, any>({
    //   query: ({ id, ...body }) => ({
    //     url: `comment/create/${id}`,
    //     method: "POST",
    //     body,
    //     credentialsls: "include",
    //     headers: headers,
    //   }),
    //   invalidatesTags: ["Comment"],
    // }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetCommentsByIdQuery,
  // useAddCommentMutation,
  useDeletePhoneMutation,
} = commentApi;
