import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useGetBookByIdQuery, useBorrowBookMutation } from "@/features/books/bookApi";

const BorrowBook = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const { data: book, isLoading, isError } = useGetBookByIdQuery(bookId!);
  const [borrowBook] = useBorrowBookMutation();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");

  if (isLoading) return <p>Loading book info...</p>;
  if (isError || !book) return <p>Book not found.</p>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (quantity < 1 || quantity > book.copies) {
      alert(`Quantity must be between 1 and ${book.copies}`);
      return;
    }

    if (!dueDate) {
      alert("Please select a due date");
      return;
    }

    try {
      await borrowBook({ bookId: book._id, quantity, dueDate }).unwrap();
      alert("Book borrowed successfully!");
      navigate("/borrow-summary");
    } catch {
      alert("Failed to borrow book.");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Borrow Book: {book.title}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          Quantity (Available: {book.copies})
          <input
            type="number"
            min={1}
            max={book.copies}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full border px-3 py-2"
            required
          />
        </label>
        <label className="block">
          Due Date
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full border px-3 py-2"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Borrow
        </button>
      </form>
    </div>
  );
};

export default BorrowBook;
