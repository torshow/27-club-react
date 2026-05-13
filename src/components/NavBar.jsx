import React from "react";

function NavBar() {
  return (
    <nav className="nav">
      <div className="logo">Portfolio</div>
      <ul className="links">
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
