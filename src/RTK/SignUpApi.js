import { apiSlice } from './MainApiCall';

export const signupApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (form) => ({
        url: 'api/signup',
        method: 'POST',
        body: form,
      }),
      // Transform successful responses before returning to component
  transformResponse: (response) => ({
  success: response.success,
  message: response.message,
  token: response.data?.token,
  user: response.data?.user,
  role: response.data?.role,
}),
      // Transform error responses to normalize error messages
      transformErrorResponse: (response) => {
        return response.data?.message || 'Registration failed. Please try again.';
      },
    }),
  }),
});

export const { useSignupMutation } = signupApi;