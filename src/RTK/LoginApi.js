import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const loginApi=createApi({
    reducerPath:'loginApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000'}),
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(userData)=>({
               url:'/api/login' ,
               body:userData,
               method:'POST',
            })
        })
    })
})
export const {useLoginMutation}=loginApi