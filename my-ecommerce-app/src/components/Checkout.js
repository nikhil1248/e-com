import React, { useState } from 'react';
import OrderConfirmation from './OrderConfirmation'; // Import the OrderConfirmation component

const Checkout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false); // State to track whether the order is placed or not

  const handlePlaceOrder = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setOrderPlaced(true); // Update state to indicate order has been placed
  };

  return (
    <div>
      {!orderPlaced ? ( // Conditionally render the form or the order confirmation message
        <div>
          <h2>Checkout</h2>
          <p>Please enter your shipping information:</p>
          <form onSubmit={handlePlaceOrder}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="fullName" required />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" required />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" id="city" required />
            </div>
            <div className="mb-3">
              <label htmlFor="zipcode" className="form-label">Zip Code</label>
              <input type="text" className="form-control" id="zipcode" required />
            </div>
            <button type="submit" className="btn btn-primary">Place Order</button>
          </form>
        </div>
      ) : (
        <OrderConfirmation /> // Render the order confirmation message
      )}
    </div>
  );
};

export default Checkout;
