import React, { useEffect, useRef, useState } from "react";
import "./ContactModal.css";

const ContactModal = ({ isOpen, onClose }) => {
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    if (formRef.current) formRef.current.elements[0].focus();
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="overlay" role="dialog" aria-modal="true">
      <div className="modal">
        <button
          className="closeBtn"
          onClick={onClose}
          aria-label="Cerrar modal"
          title="Cerrar"
        >
          ×
        </button>
        <h2>Contáctanos</h2>
        <form className="form" ref={formRef} onSubmit={handleSubmit} autoComplete="off">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo" required />
          <textarea placeholder="Mensaje" rows="4" required></textarea>
          <button type="submit" disabled={sent}>
            {sent ? "Enviando..." : "Enviar"}
          </button>
        </form>
        {sent && (
          <div style={{ color: "#4a00e0", marginTop: "1rem" }}>
            ¡Mensaje enviado!
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
