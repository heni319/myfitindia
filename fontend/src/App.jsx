import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext'; // Import Provider
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';
import SignupScreen from './components/SignupScreen';
import LoginScreen from './components/LoginScreen';
import CartScreen from './components/CartScreen';

function App() {
  return (
    // UserProvider must be on the OUTSIDE
    <UserProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <main style={{ minHeight: '80vh' }}>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<SignupScreen />} />
            </Routes>
          </main>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;