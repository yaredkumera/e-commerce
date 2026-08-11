import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://e-commerce-backend-vgk5.onrender.com',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      if (token) {
       headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['products', 'cart', 'wishlist'],
  endpoints: () => ({}), // intentionally empty — each feature file injects its own endpoints
})