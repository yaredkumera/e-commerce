import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const CartApi=createApi({
    reducerPath:'CartApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000',
        prepareHeaders:(headers)=>{
            const token=localStorage.getItem('token')
          if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers

        }
    }),
    tagTypes:['cart'],
    endpoints:(builder)=>({
getCarts:builder.query({
    query:()=>({
        url:"/api/cart",

    }),
providesTags:['cart'],
}),
createCart:builder.mutation({
    query:(newdata)=>({
        url:"/api/cart",
        method:"POST",
        body:newdata,
    }),
    invalidatesTags:["cart"]
})
,
updateCart:builder.mutation({
    query:({_id,...updated})=>({
        url:`/api/cart/${_id}`,
        method:"PUT",
        body:updated,
    }),
    invalidatesTags:["cart"]
}),
deleteCart:builder.mutation({
    query:(id)=>({
        url:`/api/cart/${id}`,
        method:"DELETE",
        
    }),
    invalidatesTags:["cart"]
}),
    })
})
export const {useGetCartsQuery,useCreateCartMutation,useDeleteCartMutation,useUpdateCartMutation}=CartApi
export default CartApi