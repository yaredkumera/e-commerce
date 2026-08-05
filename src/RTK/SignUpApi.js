import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const signupApi = createApi({
  reducerPath: 'signupApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (form) => ({
        url: 'api/signup',
        method: 'POST',
      
        body: form,
      }),
    }),
  }),
});

export const {useSignupMutation}=signupApi