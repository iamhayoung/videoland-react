import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/movie">Movies</Link>
      <Link to="/tv">TV Shows</Link>
      <Link to="/search">Search</Link>
    </>
  )
}

export default Header;