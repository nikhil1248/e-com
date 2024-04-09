import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css'; // Import CSS for styling

const Navbar = ({ toggleSidebar, isLoggedIn, onLogout }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [checkoutStatus, setCheckoutStatus] = useState(false);
  const [productList, setProductList] = useState([
    { id: 1, name: 'Product 1', image: 'product1.jpg', price: 10, description: 'This is product 1' },
    { id: 2, name: 'Product 2', image: 'product2.jpg', price: 20, description: 'This is product 2' },
    { id: 3, name: 'Product 3', image: 'product3.jpg', price: 30, description: 'This is product 3' },
  ]);

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  // const handleCartIconClick = () => {
  //   console.log('handleCartIconClick');
  //   toggleSidebar(); 
  //   console.log('showSidebar:', showSidebar);
  // };

  const handleCartIconClick = () => {
    setShowSidebar(prevShowSidebar => !prevShowSidebar); 
  };
  

  useEffect(() => {
    console.log('showSidebar:', showSidebar);
  }, [showSidebar]);

  const handleLogout = () => {
    onLogout();
  };
  

  const handleEditClick = (id) => {
    setSelectedProductId(id);
  };

  const handleRemoveClick = (id) => {
    setProductList(productList.filter(product => product.id !== id));
  };

  const handleCheckoutClick = () => {
    setCheckoutStatus(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const updatedProduct = {
      id: selectedProductId,
      name: event.target.name.value,
      image: event.target.image.value,
      price: event.target.price.value,
      description: event.target.description.value,
    };
    const index = productList.findIndex((product) => product.id === selectedProductId);
    const updatedList = [...productList];
    updatedList[index] = updatedProduct;
    setProductList(updatedList);
    setSelectedProductId(null);
    closeSidebar();
  };

  return (
    <nav>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">E-Commerce App</Link>
        <div className="nav-items">
          <FaShoppingCart className="cart-icon" onClick={handleCartIconClick} />
          {isLoggedIn ? (
            <div className="my-profile">
              <Link to="/profile" className="profile-link">My Profile</Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <Link to="/login" className="login-link">Login</Link>
          )}
          {/* <div className={`sidebar ${showSidebar ? 'show' : ''}`} > */}
          {/* <div className={showSidebar ? 'sidebar show' : 'sidebar'}> */}
          <div className={`sidebar ${showSidebar ? 'show' : ''}`} onClick={closeSidebar}>
            <ul>
              {productList.map((product) => (
                <li key={product.id}>
                  <Link to={`/products/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                    <span>{product.name}</span>
                  </Link>
                  <div>
                    <button onClick={() => handleEditClick(product.id)}>Edit</button>
                    <button onClick={() => handleRemoveClick(product.id)}>Remove</button>
                  </div>
                </li>
              ))}
              <li>
                <Link to="/checkout" onClick={handleCheckoutClick} className="go-to-checkout">
                  Go to Checkout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {selectedProductId && (
        <div className="overlay" onClick={closeSidebar}>
          <div className="edit-form-container" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleFormSubmit}>
              <h2>Edit Product</h2>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" defaultValue={productList.find((product) => product.id === selectedProductId).name} required />
              <label htmlFor="image">Image:</label>
              <input type="text" id="image" name="image" defaultValue={productList.find((product) => product.id === selectedProductId).image} required />
              <label htmlFor="price">Price:</label>
              <input type="number" id="price" name="price" defaultValue={productList.find((product) => product.id === selectedProductId).price} required />
              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description" defaultValue={productList.find((product) => product.id === selectedProductId).description} required></textarea>
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      )}
      {checkoutStatus && (
        <div className="checkout-overlay" onClick={closeSidebar}>
          <div className="checkout-container" onClick={(e) => e.stopPropagation()}>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
