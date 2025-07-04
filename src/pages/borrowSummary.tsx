import { useGetBorrowSummaryQuery } from "@/features/books/bookApi";

const BorrowSummary = () => {
    const { data: summary = [], isLoading, isError } = useGetBorrowSummaryQuery();

    if (isLoading) return <p>Loading summary...</p>;
    if (isError) return <p>Failed to load borrow summary.</p>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Borrow Summary</h1>
            {summary.length === 0 ? (
                <p>No borrows found.</p>
            ) : (
                <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-3 py-2">Book Title</th>
                            <th className="border px-3 py-2">ISBN</th>
                            <th className="border px-3 py-2">Total Quantity Borrowed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {summary.map(({ book, totalQuantity }, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="border px-3 py-1">{book.title}</td>
                                <td className="border px-3 py-1">{book.isbn}</td>
                                <td className="border px-3 py-1">{totalQuantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default BorrowSummary;
