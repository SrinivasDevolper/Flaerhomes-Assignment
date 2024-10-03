import HomeBooksPage from "./components/HomePage/index";
import LibraryPage from "./components/LibraryPage/index";
import NotFound from "./components/NoPage";
import BookDetails from "./components/BookDetails/index";
import NavBar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeBooksPage />} />
        <Route path="/book/:bookId" element={<BookDetails />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
