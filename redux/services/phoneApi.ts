import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Phone } from "../types/phone";

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
    getComparePhone: builder.query<
      Phone,
      {
        phoneOne: string;
        phoneTwo: string;
      }
    >({
      query: ({ phoneOne, phoneTwo }) =>
        `phones/compare?phoneOne=${phoneOne}&phoneTwo=${phoneTwo}`,
    }),
  }),
});

export const {
  useGetPhonesQuery,
  useGetCategoryPhonesQuery,
  useGetPhoneByIdQuery,
  useGetComparePhoneQuery,
} = phoneApi;
