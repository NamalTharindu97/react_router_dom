import React from "react";
import { Link } from "react-router-dom";

export const BookList = () => {
  return (
    <div>
      <div>BookList</div>
      <div>
        <Link to="/Books/1">Book 1</Link>
        <Link to="/Books/2">Book 2</Link>
      </div>
    </div>
  );
};
