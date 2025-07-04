import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  useEditBookMutation,
  useGetBooksQuery,
} from "@/features/books/bookApi";
import type { BookForm } from "@/types";

const EditBook = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: books } = useGetBooksQuery();
  const [editBook] = useEditBookMutation();

  const [form, setForm] = useState<BookForm>({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    copies: 1,
    available: true,
  });

  useEffect(() => {
    const bookToEdit = books?.find((b) => b._id === id);
    if (bookToEdit) {
      const { _id, ...rest } = bookToEdit;
      setForm(rest);
    }
  }, [books, id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    try {
      await editBook({ id, data: form }).unwrap();
      alert("Book updated successfully!");
      navigate("/books");
    } catch {
      alert("Failed to update book.");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border px-3 py-2"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border px-3 py-2"
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border px-3 py-2"
          name="genre"
          placeholder="Genre"
          value={form.genre}
          onChange={handleChange}
        />
        <input
          className="w-full border px-3 py-2"
          name="isbn"
          placeholder="ISBN"
          value={form.isbn}
          onChange={handleChange}
        />
        <textarea
          className="w-full border px-3 py-2"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <input
          className="w-full border px-3 py-2"
          type="number"
          name="copies"
          placeholder="Copies"
          min={0}
          value={form.copies}
          onChange={handleChange}
          required
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="available"
            checked={form.available}
            onChange={handleChange}
          />
          <span>Available</span>
        </label>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
