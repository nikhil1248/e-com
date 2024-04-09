import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // Import CSS file for styling

const Homepage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to Our E-Commerce Store</h1>
        <nav>
          <ul>
            <li><Link to="/products">View Products</Link></li>
            <li><Link to="/cart">View Cart</Link></li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </header>
      <main>
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-list">
            {/* Display featured products */}
            <div className="product">
              <img src="product1.jpg" alt="Product 1" />
              <h3>Product 1</h3>
              <p>Description of Product 1</p>
              <button>Add to Cart</button>
            </div>
            {/* Add more featured products */}
          </div>
        </section>
        <section className="new-arrivals">
          <h2>New Arrivals</h2>
          <div className="product-list">
            {/* Display new arrivals */}
            <div className="product">
              <img src="product2.jpg" alt="Product 2" />
              <h3>Product 2</h3>
              <p>Description of Product 2</p>
              <button>Add to Cart</button>
            </div>
            {/* Add more new arrivals */}
          </div>
        </section>
        {/* Add more sections for different categories or promotions */}
      </main>
      <footer>
        <p>&copy; 2024 Your E-Commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
