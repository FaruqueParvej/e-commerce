import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = product.price + totalPrice;
    totalShipping = product.shipping + totalShipping;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <p>selected items {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
