import { apiSlice } from './MainApiCall.js'
export const wishlistApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWhishList: builder.query({
      query: () => "/api/wishlist",
      transformResponse: (response) => ({
        success: response.success,
        message: response.message,
        wishlist: response.data,
      }),
      providesTags: ['wishlist'],
    }),
    addToWishlist: builder.mutation({
      query: (product) => ({
        url: "/api/wishlist",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ['wishlist'],
    }),
    removeFromWishlist: builder.mutation({
  query: (id) => ({
        url: `/api/wishlist/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['wishlist'],
    }),
  }),
})

export const {
  useGetWhishListQuery,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
} = wishlistApi