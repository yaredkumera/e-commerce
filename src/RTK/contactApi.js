import { apiSlice } from "./MainApiCall";

export const contactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (formData) => ({
        url: "api/contacts",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useSendMessageMutation } = contactApi;