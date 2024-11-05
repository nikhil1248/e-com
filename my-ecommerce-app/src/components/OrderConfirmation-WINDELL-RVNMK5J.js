import React, { useState } from 'react';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Order Confirmation</h2>
        <p>Your order has been successfully placed!</p>
        <div className="order-wrap">
          <img className="image truck-img" src="https://learndesigntutorial.com/wp-content/uploads/2021/03/truck.png" alt="" />
          <img className="image box-img" src="https://learndesigntutorial.com/wp-content/uploads/2021/03/box.png" alt="" />
          <img className="image box-img box-img2" src="https://learndesigntutorial.com/wp-content/uploads/2021/03/box.png" alt="" />
        </div>
      </div>
    );
  };
  

const Checkout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = (e) => {
    e.preventDefault(); 
    setOrderPlaced(true); 
  };

  return (
    <div>
      {!orderPlaced ? (
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
        <OrderConfirmation />
      )}
    </div>
  );
};

export default Checkout;
