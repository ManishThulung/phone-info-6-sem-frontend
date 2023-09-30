import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Companies,
  Company,
  CompareData,
  ComparePhone,
  Phone,
} from "../types/phone";
import { formDataHeaders, headers } from "../storage";

type Query = {
  limit: number;
  page: number;
  name: string;
  memory: string;
  battery: string;
  camera: string;
  maxPrice: number;
  minPrice: number;
};

export const phoneApi: any = createApi({
  reducerPath: "phoneApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URI,
  }),
  tagTypes: ["Phones", "Comment", "Rating"],

  endpoints: (builder) => ({
    getCompany: builder.query<Company[], null>({
      query: () => "company",
      providesTags: ["Comment", "Phones"],
    }),
    getAllPhonesName: builder.query({
      query: () => "phones/all",
      providesTags: ["Phones"],
    }),
    getPhones: builder.query<Phone[], null>({
      query: () => "phones",
      providesTags: ["Phones"],
    }),

    getCategoryPhones: builder.query<Phone[], string>({
      query: (category) => `/phones/category/${category}`,
      providesTags: ["Phones"],
    }),
    getSimilarPhones: builder.query<Phone[], string>({
      query: (name) => `/phones/similar/${name}`,
      providesTags: ["Phones"],
    }),

    getPhoneById: builder.query<Phone, number>({
      query: (id) => `phones/${id}`,
      providesTags: ["Comment", "Phones", "Rating"],
    }),
    getPhoneSearch: builder.query<Phone, Query>({
      query: ({
        limit = "",
        page = "",
        name = "",
        memory = "",
        battery = "",
        camera = "",
        maxPrice = "",
        minPrice = "",
      }) =>
        // {limit: number,
        // page: number,
        // name: string,
        // memory: string,
        // maxPrice: number,
        // minPrice: number}
        `phones/search?name=${name}&memory=${memory}&battery=${battery}&camera=${camera}&maxPrice=${maxPrice}&minPrice=${minPrice}&limit=${limit}&page=${page}`,
    }),

    comparePhone: builder.mutation<ComparePhone, Partial<CompareData>>({
      query: (body) => ({
        url: `phones/compare`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Phones"],
    }),

    addPhone: builder.mutation({
      query: (body) => ({
        url: `phones/create`,
        method: "POST",
        body,
        credentialsls: "include",
        headers: formDataHeaders,
      }),
      invalidatesTags: ["Phones"],
    }),

    deletePhone: builder.mutation({
      query: (id) => ({
        url: `phones/${id}`,
        method: "DELETE",
        credentialsls: "include",
        headers: headers,
      }),
      invalidatesTags: ["Phones"],
    }),

    addComment: builder.mutation<any, any>({
      query: ({ id, ...body }) => ({
        url: `comment/create/${id}`,
        method: "POST",
        body,
        credentialsls: "include",
        headers: headers,
      }),
      invalidatesTags: ["Comment"],
    }),
  }),
});

export const {
  useGetPhonesQuery,
  useGetAllPhonesNameQuery,
  useGetCompanyQuery,
  useGetCategoryPhonesQuery,
  useGetSimilarPhonesQuery,
  useGetPhoneByIdQuery,
  useGetPhoneSearchQuery,
  // useGetComparePhoneQuery,
  useComparePhoneMutation,
  useAddPhoneMutation,
  useDeletePhoneMutation,
  useAddCommentMutation,
} = phoneApi;
