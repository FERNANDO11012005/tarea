import React from "react";
import "./Cart.css";

const Cart = ({ cart, checkout }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2></h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity} - S/ {item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p>Total: S/ {total}</p>
          <button onClick={checkout}>Pagar</button>
        </>
      )}
    </div>
  );
};

export default Cart;
