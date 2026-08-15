import { apiSlice } from './MainApiCall'
import toast from 'react-hot-toast'

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
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          toast.success(data.message || "Added to cart", { duration: 3000 });
        } catch (err) {
          toast.error(err.error?.data?.message || "Failed to add to cart", { duration: 3000 });
        }
      },
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
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          toast.success(data.message || "Cart updated", { duration: 2000 });
        } catch (err) {
          toast.error(err.error?.data?.message || "Failed to update cart", { duration: 3000 });
        }
      },
      invalidatesTags: ['cart'],
    }),

    deleteCart: builder.mutation({
      query: (id) => ({
        url: `/api/cart/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response) => ({
        success: response.success,
        message: response.message,
        data: response.data,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          toast.success(data.message || "Item removed from cart", { duration: 3000 });
        } catch (err) {
          toast.error(err.error?.data?.message || "Failed to remove item", { duration: 3000 });
        }
      },
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