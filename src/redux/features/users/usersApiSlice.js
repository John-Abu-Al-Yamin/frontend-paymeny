import { apiSlice } from "../../app/api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: "Users", id }],
    }),
    exchangeRate: builder.query({
      query: ({ from, to }) => `/exchange-rate/${from}/${to}`,
      providesTags: ["ExchangeRate"],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useExchangeRateQuery } = usersApiSlice;
