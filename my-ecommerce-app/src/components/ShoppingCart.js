import React from 'react';

const ShoppingCart = ({ cart, clearCart }) => {
  // Check if cart is undefined or null
  if (!cart) {
    return <div>Loading...</div>;
  }

  const removeFromCart = (productId) => {
    // Filter out the item with the given productId
    const updatedCart = cart.filter(item => item.product.id !== productId);
    // Update the cart by calling the clearCart function passed from the parent
    clearCart(updatedCart);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <ul className="list-group mb-3">
        {cart.map((item, index) => (
          <li key={`${item.product.id}-${index}`} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item.product.title}</span>
            <span>Quantity: {item.quantity}</span>
            <button className="btn btn-danger" onClick={() => removeFromCart(item.product.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button className="btn btn-danger" onClick={() => clearCart([])}>Remove All</button>
    </div>
  );
};

export default ShoppingCart;
