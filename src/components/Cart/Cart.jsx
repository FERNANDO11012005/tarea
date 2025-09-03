import React, { useEffect, useRef, useState } from "react";
import "./Cart.css";

const CheckoutModal = ({ open, onClose, onConfirm }) => {
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const formRef = useRef(null);

  useEffect(() => {
    if (open) {
      setSuccess(false);
      setProcessing(false);
      setErrors({});
      formRef.current?.querySelector("input")?.focus();
    }
  }, [open]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Nombre requerido";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Email inválido";
    if (!form.address.trim()) e.address = "Dirección requerida";
    const cardNum = form.cardNumber.replace(/\s+/g, "");
    if (!/^\d{13,19}$/.test(cardNum)) e.cardNumber = "Número de tarjeta inválido";
    if (!/^(0[1-9]|1[0-2])\/\d{2,4}$/.test(form.expiry)) e.expiry = "Expiración inválida (MM/YY)";
    if (!/^\d{3,4}$/.test(form.cvv)) e.cvv = "CVV inválido";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setProcessing(true);
    await new Promise((r) => setTimeout(r, 1500));
    setProcessing(false);
    setSuccess(true);
    onConfirm?.({ ...form });
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1200);
  };

  if (!open) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="checkout-modal" ref={formRef}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">×</button>
        <h3>Pago seguro</h3>
        {success ? (
          <div className="payment-success">Pago realizado con éxito. Gracias.</div>
        ) : (
          <form className="checkout-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label>
                Nombre
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  disabled={processing}
                  required
                />
                {errors.name && <small className="field-error">{errors.name}</small>}
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  disabled={processing}
                  required
                />
                {errors.email && <small className="field-error">{errors.email}</small>}
              </label>
            </div>
            <label>
              Dirección
              <input
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                disabled={processing}
                required
              />
              {errors.address && <small className="field-error">{errors.address}</small>}
            </label>
            <div className="form-row">
              <label>
                Nº tarjeta
                <input
                  inputMode="numeric"
                  value={form.cardNumber}
                  onChange={(e) => setForm({ ...form, cardNumber: e.target.value.replace(/[^\d\s]/g, "") })}
                  placeholder="4111 1111 1111 1111"
                  disabled={processing}
                  required
                />
                {errors.cardNumber && <small className="field-error">{errors.cardNumber}</small>}
              </label>
              <label>
                Vence (MM/YY)
                <input
                  value={form.expiry}
                  onChange={(e) => setForm({ ...form, expiry: e.target.value })}
                  placeholder="09/26"
                  disabled={processing}
                  required
                />
                {errors.expiry && <small className="field-error">{errors.expiry}</small>}
              </label>
              <label>
                CVV
                <input
                  inputMode="numeric"
                  value={form.cvv}
                  onChange={(e) => setForm({ ...form, cvv: e.target.value.replace(/[^\d]/g, "") })}
                  placeholder="123"
                  disabled={processing}
                  required
                />
                {errors.cvv && <small className="field-error">{errors.cvv}</small>}
              </label>
            </div>
            <button type="submit" className="pay-btn" disabled={processing}>
              {processing ? "Procesando..." : "Pagar ahora"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const Cart = ({ cart = [], checkout, removeFromCart, initialOpen = false }) => {
  const [open, setOpen] = useState(initialOpen);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const total = cart.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0);
  const drawerRef = useRef(null);

  useEffect(() => {
    if (open && window.innerWidth <= 768) {
      document.body.style.overflow = "hidden";
    } else if (!checkoutOpen) {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open, checkoutOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!drawerRef.current) return;
      if (open && !drawerRef.current.contains(e.target) && window.innerWidth <= 768) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleCheckoutConfirm = (customerData) => {
    checkout?.(customerData);
    setCheckoutOpen(false);
    setOpen(false);
  };

  return (
    <>
      {/* Icono flotante solo en pantallas pequeñas */}
      {window.innerWidth <= 768 && cart.length > 0 && (
        <button
          className="cart-icon"
          aria-label="Abrir carrito"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          🛒
          <span className="cart-badge">{cart.length}</span>
        </button>
      )}

      {/* Drawer/Carrito */}
      <aside
        ref={drawerRef}
        className={`cart ${open ? "open" : ""}`}
        role="region"
        aria-label="Carrito de compras"
      >
        <div className="cart-header">
          <h2>🛒 Carrito</h2>
          {window.innerWidth <= 768 && (
            <button className="cart-close" onClick={() => setOpen(false)} aria-label="Cerrar carrito">×</button>
          )}
        </div>

        {cart.length === 0 ? (
          <p className="empty-msg">Tu carrito está vacío</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map(item => (
                <li key={item.id} className="cart-item">
                  {item.image ? <img src={item.image} alt={item.name} className="item-img"/> : <div className="item-img placeholder"/>}
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <div className="item-meta">
                      <span className="item-quantity">x{item.quantity}</span>
                      <span className="item-price">S/ {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item)}
                    title={`Eliminar ${item.name}`}
                  >×</button>
                </li>
              ))}
            </ul>
            <div className="cart-footer">
              <div className="cart-total">Total: <strong>S/ {total.toFixed(2)}</strong></div>
              <button
                className="checkout-btn"
                onClick={() => setCheckoutOpen(true)}
                disabled={cart.length === 0}
              >Pagar</button>
            </div>
          </>
        )}
      </aside>

      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        onConfirm={handleCheckoutConfirm}
      />
    </>
  );
};

export default Cart;
