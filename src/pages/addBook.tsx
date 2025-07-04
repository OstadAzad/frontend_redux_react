import { useState } from "react";
import { useAddBookMutation } from "@/features/books/bookApi";
import { useNavigate } from "react-router";

const AddBook = () => {
    const [form, setForm] = useState({
        title: "",
        author: "",
        genre: "",
        isbn: "",
        description: "",
        copies: 1,
        available: true,
    });

    const [addBook, { isLoading }] = useAddBookMutation();
    const navigate = useNavigate();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const target = e.target as HTMLInputElement; // cast target to HTMLInputElement because only input has checked
        const { name, value, type, checked } = target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : type === "number" ? Number(value) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.title || !form.author || form.copies < 0) {
            alert("Please fill required fields correctly.");
            return;
        }

        try {
            await addBook(form).unwrap();
            alert("Book added successfully!");
            navigate("/books");
        } catch {
            alert("Failed to add book.");
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Add New Book</h1>
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
                    disabled={isLoading}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;
