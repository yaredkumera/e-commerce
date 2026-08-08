// RTK/CartApi.js
import { apiSlice } from './MainApiCall'
export const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCarts: builder.query({
      query: () => "/api/cart",
      transformResponse: (response) => ({
        success: response.success,
        message: response.message,
        cart: response.data,
      }),
      providesTags: ['cart'],
    }),
    createCart: builder.mutation({
      query: (newdata) => ({
        url: "/api/cart",
        method: "POST",
        body: newdata,
      }),
      transformResponse: (response) => ({
        success: response.success,
        message: response.message,
        item: response.data,
      }),
      invalidatesTags: ['cart'],
    }),
    updateCart: builder.mutation({
      query: ({ _id, ...updated }) => ({
        url: `/api/cart/${_id}`,
        method: "PUT",
        body: updated,
      }),
      transformResponse: (response) => ({
        success: response.success,
        message: response.message,
        item: response.data,
      }),
      invalidatesTags: ['cart'],
    }),
    deleteCart: builder.mutation({
      query: (id) => ({
        url: `/api/cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['cart'],
    }),
  }),
})

export const {
  useGetCartsQuery,
  useCreateCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = cartApi