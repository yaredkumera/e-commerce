import { apiSlice } from '../RTK/MainApiCall'

export const adminApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => '/api/orders/all',
      transformResponse: (r) => ({ orders: r.data }),
      providesTags: ['orders'],
    }),
    updateOrderStatus: builder.mutation({
      query: ({ id, status }) => ({ url: `/api/orders/${id}/status`, method: 'PUT', body: { status } }),
      invalidatesTags: ['orders'],
    }),
    getAllUsers: builder.query({
      query: () => '/api/users',
      transformResponse: (r) => ({ users: r.data }),
      providesTags: ['users'],
    }),
    updateUserRole: builder.mutation({
      query: ({ id, role }) => ({ url: `/api/users/${id}/role`, method: 'PUT', body: { role } }),
      invalidatesTags: ['users'],
    }),
  }),
})

export const { useGetAllOrdersQuery, useUpdateOrderStatusMutation, useGetAllUsersQuery, useUpdateUserRoleMutation } = adminApi