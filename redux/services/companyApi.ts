import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { headers } from "../storage";

export const companyApi: any = createApi({
  reducerPath: "companyApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URI,
  }),
  tagTypes: ["Company"],

  endpoints: (builder) => ({
    getCompanies: builder.query<any, null>({
      query: () => "company",
    }),

    addCompany: builder.mutation<any, any>({
      query: (body) => ({
        url: `company/create`,
        method: "POST",
        body,
        credentialsls: "include",
        headers: headers,
      }),
      invalidatesTags: ["Company"],
    }),
  }),
});

export const { useGetCompaniesQuery, useAddCompanyMutation } = companyApi;
