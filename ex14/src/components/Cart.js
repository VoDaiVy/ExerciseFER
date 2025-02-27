import React, { useState } from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
    setOrderConfirmed(true);
    setTimeout(() => {
      clearCart();
      setOrderConfirmed(false);
    }, 2000);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}
                <button onClick={() => removeFromCart(index)}>Delete</button>
              </li>
            ))}
          </ul>
          <p><strong>Total number of dishes:</strong> {cart.length}</p>
          <p><strong>Total value:</strong> ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
          <button className="checkout-btn" onClick={handleCheckout}>Order Confirmation</button>
        </>
      )}

      {orderConfirmed && <p className="success-message">Payment successful! Thank you!</p>}
    </div>
  );
};

export default Cart;