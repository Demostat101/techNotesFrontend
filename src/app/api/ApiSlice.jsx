

import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi ({
    //fetchbase query is used to replace axios
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:4501'}),
    tagTypes: ['Note', 'User'],
    endpoints:builder => ({

    })
})