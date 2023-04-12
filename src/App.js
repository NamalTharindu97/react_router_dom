import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { NotFound } from "./Components/NotFound";
import { BookRoutes } from "./BookRoutes";

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
              <Link to="/Books">Book</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contacts />} />
          {/* nested routing */}
          {/* need * mark for route enything */}
          <Route path="/Books/*" element={<BookRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
