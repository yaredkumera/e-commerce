import { apiSlice } from './MainApiCall'

export const passwordApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: '/api/forgot-password',
        method: 'POST',
        body: { email },
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ token, password }) => ({
        url: `/api/reset-password/${token}`,
        method: 'POST',
        body: { password },
      }),
    }),
  }),
})

export const { useForgotPasswordMutation, useResetPasswordMutation } = passwordApi