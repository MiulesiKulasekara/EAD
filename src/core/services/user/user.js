import { createApi } from "@reduxjs/toolkit/query/react";
import customBaseQuery from "../../helper/customBaseQuery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: customBaseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: ({ body }) => ({
        url: `/register`,
        method: "POST",
        body: body,
      }),

      transformResponse: (response) => response?.data,
    }),

    getUserById: builder.query({
      query: ({ userId }) => ({
        url: `/user/${userId}`,
        method: "GET",
      }),

      transformResponse: (response) => response,
    }),
  }),
});

export const { useCreateUserMutation, useGetUserByIdQuery } = userApi;
