import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Companies,
  Company,
  CompareData,
  ComparePhone,
  Phone,
} from "../types/phone";

const accessToken = JSON.parse(
  localStorage.getItem("access_token") || ""
)?.access_token;

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
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + `${accessToken}`,
        },
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
  // useGetComparePhoneQuery,
  useComparePhoneMutation,
  useDeletePhoneMutation,
} = phoneApi;
