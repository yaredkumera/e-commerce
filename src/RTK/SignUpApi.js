import { apiSlice } from './MainApiCall'

export const signupApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (form) => ({
        url: 'api/signup',
        method: 'POST',
        body: form,
      }),
    }),
  }),
})

export const { useSignupMutation } = signupApi