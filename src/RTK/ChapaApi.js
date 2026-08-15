import { apiSlice } from './MainApiCall'

export const chapaApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    initializeChapaPayment: builder.mutation({
      query: (orderId) => ({
        url: '/api/chapa/initialize',
        method: 'POST',
        body: { orderId },
      }),
    }),
  }),
})

export const { useInitializeChapaPaymentMutation } = chapaApi