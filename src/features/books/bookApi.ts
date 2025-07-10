import type { Book, BorrowSummary } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
    reducerPath: "bookApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
    tagTypes: ["Books", "Borrows"],
    endpoints: (builder) => ({
        getBooks: builder.query<Book[], void>({
            query: () => "/books",
            transformResponse: (response: { data: Book[] }) => response.data,
            providesTags: ["Books"],
        }),
        getBookById: builder.query<Book, string>({
            query: (id) => `/books/${id}`,
        }),
        addBook: builder.mutation<Book, Partial<Book>>({
            query: (book) => ({
                url: "/books",
                method: "POST",
                body: book,
            }),
            invalidatesTags: ["Books"],
        }),
        editBook: builder.mutation<Book, { id: string; data: Partial<Book> }>({
            query: ({ id, data }) => ({
                url: `/books/${id}`,
                method: "PATCH",
                body: data,
            }),
        }),
        deleteBook: builder.mutation<{ message: string }, string>({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Books"],
        }),
        borrowBook: builder.mutation<{ message: string }, { bookId: string; quantity: number; dueDate: string }>({
            query: ({ bookId, quantity, dueDate }) => ({
                url: "/borrows",
                method: "POST",
                body: { bookId, quantity, dueDate },
            }),
            invalidatesTags: ["Books", "Borrows"],
        }),
        // ✅ FIXED ENDPOINT and RESPONSE FORMAT
        getBorrowSummary: builder.query<BorrowSummary[], void>({
            query: () => "/borrow", // ✅ corrected path
            transformResponse: (response: { data: BorrowSummary[] }) => response.data, // ✅ unwrap response
            providesTags: ["Borrows"],
        }),
    }),
});

export const {
    useGetBooksQuery,
    useGetBookByIdQuery,
    useAddBookMutation,
    useEditBookMutation,
    useDeleteBookMutation,
    useBorrowBookMutation,
    useGetBorrowSummaryQuery,
} = bookApi;
