import { apiSlice } from "./api/apiSlice";

export const booksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ query = "populate=*" }: any = {}) => `/books?${query}`,

      providesTags: ["books"],
    }),
    getBook: builder.query({
      query: (bookId) => `/books/${bookId}?populate=*`,
      providesTags: (result, error, arg) => [{ type: "book", id: arg }],
    }),
  }),
});

export const { useGetBookQuery, useGetBooksQuery } = booksApi;
