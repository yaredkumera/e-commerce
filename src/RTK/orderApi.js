import { apiSlice } from "./MainApiCall";

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "/api/orders",
        method: "POST",
        body: orderData,
      }),
      invalidatesTags: ["cart", "orders"],
    }),

    getMyOrders: builder.query({
      query: () => "/api/orders",

      transformResponse: (response) => ({
        success: response.success,
        message: response.message,
        orders: response.data,
      }),

      providesTags: ["orders"],
    }),

    getOneOrder: builder.query({
      query: (id) => `/api/orders/${id}`,

      transformResponse: (response) => ({
        success: response.success,
        message: response.message,
        order: response.data,
      }),
    }),

  }),
});

export const {
  useCreateOrderMutation,
  useGetMyOrdersQuery,
  useGetOneOrderQuery,
} = orderApi;