import { Routes, Route, Navigate } from "react-router-dom";
import AllBooks from "@/pages/allBooks";
import AddBook from "@/pages/addBook";
import EditBook from "@/pages/editBook";
import BorrowBook from "@/pages/borrowBook";
import BorrowSummary from "@/pages/borrowSummary";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Navigate to="/books" replace />} />
        <Route path="/books" element={<AllBooks />} />
        <Route path="/create-book" element={<AddBook />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
        <Route path="/borrow/:bookId" element={<BorrowBook />} />
        <Route path="/borrow-summary" element={<BorrowSummary />} />
    </Routes>
);

export default AppRoutes;
