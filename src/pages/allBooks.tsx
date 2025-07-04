import { useGetBooksQuery, useDeleteBookMutation } from "@/features/books/bookApi";
import { useNavigate } from "react-router";

const AllBooks = () => {
    const { data: books = [], isLoading, isError } = useGetBooksQuery();
    const [deleteBook] = useDeleteBookMutation();
    const navigate = useNavigate();

    if (isLoading) return <p>Loading books...</p>;
    if (isError) return <p>Error loading books.</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">All Books</h1>
            <button
                onClick={() => navigate("/create-book")}
                className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
                + Add New Book
            </button>

            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-3 py-2">Title</th>
                        <th className="border px-3 py-2">Author</th>
                        <th className="border px-3 py-2">Genre</th>
                        <th className="border px-3 py-2">ISBN</th>
                        <th className="border px-3 py-2">Copies</th>
                        <th className="border px-3 py-2">Available</th>
                        <th className="border px-3 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book._id} className="hover:bg-gray-50">
                            <td className="border px-3 py-1">{book.title}</td>
                            <td className="border px-3 py-1">{book.author}</td>
                            <td className="border px-3 py-1">{book.genre}</td>
                            <td className="border px-3 py-1">{book.isbn}</td>
                            <td className="border px-3 py-1">{book.copies}</td>
                            <td className="border px-3 py-1">{book.available ? "Yes" : "No"}</td>
                            <td className="border px-3 py-1 space-x-2">
                                <button
                                    onClick={() => navigate(`/edit-book/${book._id}`)}
                                    className="text-blue-600 hover:underline"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => {
                                        if (confirm("Are you sure you want to delete this book?")) {
                                            deleteBook(book._id);
                                        }
                                    }}
                                    className="text-red-600 hover:underline"
                                >
                                    Delete
                                </button>
                                {book.available && (
                                    <button
                                        onClick={() => navigate(`/borrow/${book._id}`)}
                                        className="text-purple-600 hover:underline"
                                    >
                                        Borrow
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllBooks;
