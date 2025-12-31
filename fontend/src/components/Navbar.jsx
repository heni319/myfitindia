import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems, isLoggedIn, logout } = useCart();

  // Guard: Ensure cartItems is an array before reducing
  const totalItems = Array.isArray(cartItems) 
    ? cartItems.reduce((acc, item) => acc + item.qty, 0) 
    : 0;

  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.container}>
        <Link to="/" style={styles.logo}>
          MFI <span style={{fontWeight: 'normal', fontSize: '0.9rem'}}>myfitindia</span>
        </Link>
        
        <div style={styles.links}>
          <Link to="/" style={styles.link}>Supplements</Link>
          <Link to="/" style={styles.link}>Apparels</Link>
        </div>

        <div style={styles.actions}>
          {/* CONDITION: Only show Pannier if Logged In */}
          {isLoggedIn && (
            <Link to="/cart" style={styles.iconContainer}>
              <span style={{fontSize: '1.4rem'}}>🛒</span>
              {totalItems > 0 && <span style={styles.badge}>{totalItems}</span>}
            </Link>
          )}

          {isLoggedIn ? (
            <button onClick={logout} style={styles.loginBtn}>Logout</button>
          ) : (
            <Link to="/login">
              <button style={styles.loginBtn}>Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: { background: '#0055ff', height: '70px', position: 'fixed', top: 0, width: '100%', zIndex: 1000, display: 'flex', alignItems: 'center' },
  container: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0 20px' },
  logo: { color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.4rem' },
  links: { display: 'flex', gap: '25px' },
  link: { color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: '0.9' },
  actions: { display: 'flex', alignItems: 'center', gap: '20px' },
  iconContainer: { position: 'relative', textDecoration: 'none' },
  badge: { position: 'absolute', top: '-8px', right: '-10px', background: '#ff4757', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '0.7rem', fontWeight: 'bold' },
  loginBtn: { background: 'white', color: '#0055ff', border: 'none', padding: '8px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }
};

export default Navbar;