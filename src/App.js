import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { BookList } from "./pages/BookList";
import { Contacts } from "./pages/Contacts";
import { Books } from "./Components/Books";
import { NotFound } from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Books/:id">Book</Link>
            </li>
            <li>
              <Link to="/Books">BookList</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Books" element={<BookList />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Books/:id" element={<Books />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
