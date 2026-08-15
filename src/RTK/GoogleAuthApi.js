import { apiSlice } from "./MainApiCall";

export const googleAuthApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    googleLogin: builder.mutation({
      query: (credential) => ({
        url: "/api/auth/google",
        method: "POST",
        body: {
          credential,
        },
      }),
    }),
  }),
});

export const {
  useGoogleLoginMutation,
} = googleAuthApi;