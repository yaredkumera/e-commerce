import { apiSlice } from './MainApiCall.js'

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "/api/products",
      transformResponse: (response) => ({
        success: response.success,
        message: response.message,
        products: response.data,
      }),
      providesTags: ['products'],
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/api/products",
        method: "POST",
        body: newProduct,
      }),
      transformResponse: (response) => ({
        success: response.success,
        message: response.message,
        product: response.data,
      }),
      invalidatesTags: ['products'],
    }),
    updateProduct: builder.mutation({
      query: ({ _id, ...updated }) => ({
        url: `/api/products/${_id}`,
        method: "PUT",
        body: updated,
      }),
      transformResponse: (response) => ({
        success: response.success,
        message: response.message,
        product: response.data,
      }),
      invalidatesTags: ['products'],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/api/products/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response) => ({
        success: response.success,
        message: response.message,
        product: response.data,
      }),
      invalidatesTags: ['products'],
    }),
  }),
})

export const {
  useGetProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi