import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@/app/common/constants";
import { Post } from "@/app/types/interfaces";

const JSON_PLACEHOLDER_API = "jsonPlaceholderApi";

export const jsonPlaceholderApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  reducerPath: JSON_PLACEHOLDER_API,
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], number>({
      query: (page) => `${BASE_URL}/posts?_page=${page}&_per_page=10`,
    }),
  }),
});

export const { useLazyGetPostsQuery } = jsonPlaceholderApi;
