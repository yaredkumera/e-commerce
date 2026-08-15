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
      transformResponse: (response) => {
        return {
          id: response._id,
          fullName: response.fullName,
          email: response.email,
        };
      },
      // Transform error responses to normalize error messages
      transformErrorResponse: (response) => {
        return response.data?.message || 'Registration failed. Please try again.';
      },
    }),
  }),
});

export const { useSignupMutation } = signupApi;