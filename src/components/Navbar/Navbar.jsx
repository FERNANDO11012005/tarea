import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onSelectCategory, active }) => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ["Inicio", "Electrónica", "Ropa", "Hogar"];

  return (
    <nav className="navbar">
      <div className="logo">Mi Tienda</div>
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {categories.map((cat) => (
          <li
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => {
              onSelectCategory(cat);
              setIsOpen(false);
            }}
          >
            {cat}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;