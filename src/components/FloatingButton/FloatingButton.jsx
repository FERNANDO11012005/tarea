import React from "react";
import "./FloatingButton.css";

const FloatingButton = ({ onClick }) => (
  <button className="floating-btn" onClick={onClick} title="Contacto">
    💬
  </button>
);

export default FloatingButton;