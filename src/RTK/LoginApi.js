import { apiSlice } from './MainApiCall'

export const loginApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData) => ({
        url: '/api/login',
        method: 'POST',
        body: userData,
      }),
      transformResponse: (response) => ({
        success: response.success,
        message: response.message,
        token: response.data.token,
        user: response.data.user,
        role:response.data.role,
      }),
    }),
  }),
})

export const { useLoginMutation } = loginApi