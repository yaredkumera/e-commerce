import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import toast from 'react-hot-toast'

const rawBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token')
    // Only attach token if it exists and is not the literal string "undefined"
    if (token && token !== 'undefined' && token !== 'null') {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions)

  if (result?.error?.status === 401) {
    // Automatically clear broken tokens to unblock the UI
    localStorage.removeItem('token')
    toast.error('Session expired. Please log in again.', { id: 'auth-toast' })
  }

  return result
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['products', 'cart', 'wishlist', 'orders'],
  endpoints: () => ({}),
})