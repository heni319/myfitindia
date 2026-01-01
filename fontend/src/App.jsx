import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { CartProvider } from './context/CartContext'; // 1. Import this
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import ProfileScreen from './components/ProfileScreen';

function App() {
  return (
    <UserProvider>
      <CartProvider> {/* 2. Wrap EVERYTHING inside CartProvider */}
        <Router>
          <Navbar />
          <main style={{ minHeight: '80vh', paddingTop: '100px' }}>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<SignupScreen />} />
              <Route path="/profile" element={<ProfileScreen />} /> 
            </Routes>
          </main>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;