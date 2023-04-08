import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { jsonPlaceholder } from "../../config/env";



export const authorApi = createApi({
    reducerPath: 'author-api',
    baseQuery: fetchBaseQuery({
        // Fill in your own server starting URL here
        baseUrl: jsonPlaceholder.dummy_url
    }),
    endpoints: build => ({
        // A query endpoint with no arguments
        getAuthors: build.query({
            query: () => '/users'
        }),
        // getAuthor: build.query({
        //     query: authorId => `/users/${authorId}`
        // })
    })
})

export const { 
    // useGetAuthorQuery, 
    useGetAuthorsQuery 
} = authorApi;