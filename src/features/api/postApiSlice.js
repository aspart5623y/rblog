import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { jsonPlaceholder } from '../../config/env'


export const postApi = createApi({
    reducerPath: 'post-api',
    baseQuery: fetchBaseQuery({
        // Fill in your own server starting URL here
        baseUrl: jsonPlaceholder.dummy_url
    }),
    endpoints: build => ({
        // A query endpoint with no arguments
        getPosts: build.query({
            query: () => '/posts'
        }),
        getPost: build.query({
            query: postId => `/posts/${postId}`
        })
    })
})

export const { useGetPostsQuery, useGetPostQuery } = postApi;