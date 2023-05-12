import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Phone } from "../types/phone";

export const phoneApi: any = createApi({
  reducerPath: "phoneApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URI,
  }),
  endpoints: (builder) => ({
    getPhones: builder.query<Phone[], null>({
      query: () => "phones",
    }),
    getCategoryPhones: builder.query<Phone[], string>({
      query: (category) => `phones/${category}`,
    }),
    getPhoneById: builder.query<Phone, number>({
      query: (id) => `phones/${id}`,
    }),
  }),
});

export const {
  useGetPhonesQuery,
  useGetCategoryPhonesQuery,
  useGetPhoneByIdQuery,
} = phoneApi;
