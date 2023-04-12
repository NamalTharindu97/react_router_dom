import { Routes, Route } from "react-router-dom";
import { BookList } from "./pages/BookList";
import { Books } from "./Components/Books";
import { BookLayout } from "./BookLayout";

export function BookRoutes() {
  return (
    <>
      <BookLayout />
      <Routes>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Books />} />
      </Routes>
    </>
  );
}
