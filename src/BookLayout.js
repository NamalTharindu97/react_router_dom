import { Link, Outlet } from "react-router-dom";
export function BookLayout() {
  return (
    <>
      <div>
        <Link to="/Books/1">Book 1</Link>
        <br />
        <Link to="/Books/2">Book 2</Link>
        <br />
        <Link to="/Books/3">Book 3</Link>
      </div>
      <br />
      <Outlet /> {/* render the current route */}
    </>
  );
}
