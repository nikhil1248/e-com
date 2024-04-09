import React, { useState, useEffect } from 'react';
import axios from 'axios';

  const ProductDetails = ({ addToCart, toggleSidebar, updateSidebar, cart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);

  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product);
    addToCart(product);
    updateSidebar(cart);
    toggleSidebar(); 
    
   
    console.log('Cart after adding:', cart);
  };

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="my-4">Products</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map(product => (
          <div key={product.id} className="col">
            <div className="card h-100" style={{ backgroundColor: '#f8f9fa' }}>
              <img src={product.image} className="card-img-top" alt={product.title} style={{ maxHeight: '200px', objectFit: 'contain' }} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">{product.description}</p>
                <div className="d-flex align-items-center">
                  <input type="number" className="form-control me-2" defaultValue={1} min={1} />
                  <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
