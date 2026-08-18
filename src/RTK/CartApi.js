import { apiSlice } from './MainApiCall'
import toast from 'react-hot-toast'

const handleToast = (defaultSuccessMsg, duration = 3000) => async (arg, { queryFulfilled }) => {
  try {
    const { data } = await queryFulfilled
    toast.success(data.message || defaultSuccessMsg, { duration })
  } catch (err) {
    if (err.error?.status !== 401) {
      toast.error(err.error?.data?.message || "Operation failed", { duration: 3000 })
    }
  }
}

export const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCarts: builder.query({
      query: () => "/api/cart",
      transformResponse: (res) => ({ success: res.success, message: res.message, cart: res.data }),
      providesTags: ['cart'],
    }),

    createCart: builder.mutation({
      query: (newdata) => ({
        url: "/api/cart",
        method: "POST",
        body: newdata,
      }),
      transformResponse: (res) => ({ success: res.success, message: res.message, item: res.data }),
      onQueryStarted: handleToast("Added to cart", 3000),
      invalidatesTags: ['cart'],
    }),

    updateCart: builder.mutation({
      query: ({ _id, ...updated }) => ({
        url: `/api/cart/${_id}`,
        method: "PUT",
        body: updated,
      }),
      transformResponse: (res) => ({ success: res.success, message: res.message, item: res.data }),
      onQueryStarted: handleToast("Cart updated", 2000),
      invalidatesTags: ['cart'],
    }),

    deleteCart: builder.mutation({
      query: (id) => ({
        url: `/api/cart/${id}`,
        method: "DELETE",
      }),
      transformResponse: (res) => ({ success: res.success, message: res.message, data: res.data }),
      onQueryStarted: handleToast("Item removed from cart", 3000),
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