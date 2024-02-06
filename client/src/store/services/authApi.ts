import { AccessTokenType, LoginType, RegisterType } from "@/@types/auth";
import { baseUrl } from "@/lib/BaseURL";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const authApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl:`${baseUrl}`,
        prepareHeaders:(headers)=>{
            const token = localStorage.getItem('token')
            if(token){
                const accessToken = JSON.parse(token) as AccessTokenType

                headers.set('Authorization',`Bearer ${accessToken.access_token}`)
            }
            return headers
        }

    }),
    reducerPath:"authApis",
    tagTypes:['auth'],
    endpoints:(build)=>({
        login:build.mutation<AccessTokenType, LoginType>({
            query:(data)=>({
                url:'auth/login',
                method:'POST',
                body:data
            }),
            invalidatesTags:['auth']
        }),
        register:build.mutation<AccessTokenType, RegisterType>({
            query:(data)=>({
                url:'auth/register',
                method:'POST',
                body:data
            }),
            invalidatesTags:['auth']
        }),
        logout:build.query({
            query:()=>({
                url:'auth/logout',
                method:'GET'
            }),
            providesTags:['auth']
        }),
        getme:build.query({
            query:()=>({
                url:'users/me',
                method:'GET'
            }),
            providesTags:['auth']
        })

    })

})

export const {useRegisterMutation,useLoginMutation,useLogoutQuery,useGetmeQuery} = authApi