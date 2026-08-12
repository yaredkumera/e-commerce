import { apiSlice } from '../RTK/MainApiCall'

export const uploadApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: (formData) => ({
        url: '/api/upload',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
})

export const { useUploadImageMutation } = uploadApi