import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Companies,
  Company,
  CompareData,
  ComparePhone,
  Phone,
} from "../types/phone";

// interface ComparePhone {
//   phoneOne: string;
//   phoneTwo: string;
// }

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
  }),
});

export const {
  useGetPhonesQuery,
  useGetCompanyQuery,
  useGetCategoryPhonesQuery,
  useGetPhoneByIdQuery,
  // useGetComparePhoneQuery,
  useComparePhoneMutation,
} = phoneApi;
