import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Companies,
  Company,
  CompareData,
  ComparePhone,
  Phone,
} from "../types/phone";
import { headers } from "../storage";

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
  tagTypes: ["Phones"],

  endpoints: (builder) => ({
    getCompany: builder.query<Company[], null>({
      query: () => "company",
    }),
    getPhones: builder.query<Phone[], null>({
      query: () => "phones",
    }),

    getCategoryPhones: builder.query<Phone[], string>({
      query: (category) => `/phones/category/${category}`,
    }),
    getSimilarPhones: builder.query<Phone[], string>({
      query: (name) => `/phones/similar/${name}`,
    }),

    getPhoneById: builder.query<Phone, number>({
      query: (id) => `phones/${id}`,
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

    deletePhone: builder.mutation({
      query: (id) => ({
        url: `phones/${id}`,
        method: "DELETE",
        credentialsls: "include",
        headers: headers,
      }),
      invalidatesTags: ["Phones"],
    }),
  }),
});

export const {
  useGetPhonesQuery,
  useGetCompanyQuery,
  useGetCategoryPhonesQuery,
  useGetSimilarPhonesQuery,
  useGetPhoneByIdQuery,
  useGetPhoneSearchQuery,
  // useGetComparePhoneQuery,
  useComparePhoneMutation,
  useDeletePhoneMutation,
} = phoneApi;
