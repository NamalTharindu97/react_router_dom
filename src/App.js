import { Link, useRoutes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { NotFound } from "./Components/NotFound";
import { BookRoutes } from "./BookRoutes";

function App() {
  // useRoutes Hook
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Books/*",
      element: <BookRoutes />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Contacts",
      element: <Contacts />,
    },
  ]);
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
        {element} {/* use here useRoutes Hook constant */}
      </>
    </div>
  );
}

export default App;
