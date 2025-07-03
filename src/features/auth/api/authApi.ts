import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface User {
  id: string;
  name: string;
  email: string;
}

export const apiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    login: builder.mutation<{ user: User; token: string }, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getCurrentUser: builder.query<User, void>({
      query: () => '/me',
    }),
  }),
});

export const { useLoginMutation, useGetCurrentUserQuery } = apiSlice;
