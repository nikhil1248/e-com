import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage';
import Login from './components/Login'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';

const updateSidebar = (cart) => {
  if (cart.length > 0) {
    // toggleSidebar();
  }
};

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [cart, setCart] = useState([]);
  
  const toggleSidebar = () => {
    console.log('toggleSidebar');
    setShowSidebar(prevShowSidebar => !prevShowSidebar);
  };

  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);

  // const addToCart = (product) => {
  //   console.log('Adding to cart:', product);
  //   const existingProductIndex = cart.findIndex(item => item.product.id === product.id);
  //   console.log('Existing product index:', existingProductIndex);
    
  
  //   if (existingProductIndex !== -1) {
  //     const updatedCart = [...cart];
  //     updatedCart[existingProductIndex] = {
  //       ...updatedCart[existingProductIndex],
  //       quantity: updatedCart[existingProductIndex].quantity + 1
  //     };
  //     setCart(updatedCart);
  //   } else {
  //     setCart([...cart, { product, quantity: 1 }]);
  //   }
  // };

  const addToCart = (product) => {
    console.log('Adding to cart:', product);
    const existingProductIndex = cart.findIndex(item => item.product.id === product.id);
    console.log('Existing product index:', existingProductIndex);
    
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity: updatedCart[existingProductIndex].quantity + 1
      };
      setCart(updatedCart);
      updateSidebar(); 
    } else {
      setCart([...cart, { product, quantity: 1 }]);
      updateSidebar();
      toggleSidebar();  
    }
  };
  const handleLogin = (username) => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
      <div>
         {/* {isLoggedIn && window.location.pathname !== '/' && (
          <Navbar toggleSidebar={toggleSidebar} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        )} */}
         <Navbar toggleSidebar={toggleSidebar} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="container my-4">
          <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route exact path="/" element={<Homepage />} />
            {/* <Route path="/products" element={<ProductDetails addToCart={addToCart} toggleSidebar={toggleSidebar} />} /> */}
            <Route path="/products" element={<ProductDetails addToCart={addToCart} toggleSidebar={toggleSidebar} updateSidebar={updateSidebar} cart={cart} />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
        <Footer />
      </div>
  );
};


export default App;

