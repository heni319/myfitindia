import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useCart();
  const discount = 32;
  const originalPrice = (product.price / (1 - discount / 100)).toFixed(0);

  return (
    <div style={styles.card}>
      {/* Discount Badge */}
      <div style={styles.badge}>-{discount}%</div>
      
      {/* Heart/Wishlist Icon */}
      <div style={styles.wishlistIcon}>
        <i className="far fa-heart"></i>
      </div>

      <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
        <div style={styles.imageWrapper}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={styles.image} 
            onError={(e) => { e.target.src = 'https://via.placeholder.com/300x300?text=No+Image'; }}
          />
        </div>
      </Link>

      <div style={styles.info}>
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h4 style={styles.name}>{product.name}</h4>
        </Link>
        
        <div style={styles.rating}>
          <span style={styles.stars}>★★★★★</span>
          <span style={styles.count}>(350)</span>
        </div>

        <div style={styles.priceContainer}>
          <span style={styles.currentPrice}>₹{product.price}</span>
          <span style={styles.oldPrice}>₹{originalPrice}</span>
        </div>

        {/* Full-width Blue Button */}
        <button 
          style={product.countInStock > 0 ? styles.button : styles.disabledButton}
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          disabled={product.countInStock === 0}
        >
          <i className="fas fa-shopping-cart" style={{marginRight: '8px'}}></i>
          {product.countInStock > 0 ? 'Add to cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: { background: '#fff', borderRadius: '12px', position: 'relative', overflow: 'hidden', border: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', height: '100%' },
  badge: { position: 'absolute', top: '10px', left: '10px', background: '#ef4444', color: 'white', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '800', zIndex: '5' },
  wishlistIcon: { position: 'absolute', top: '10px', right: '10px', background: '#f8fafc', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b', zIndex: '5' },
  imageWrapper: { width: '100%', height: '220px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px' },
  image: { maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' },
  info: { padding: '15px', display: 'flex', flexDirection: 'column', flexGrow: 1 },
  name: { fontSize: '1rem', fontWeight: '700', marginBottom: '8px', color: '#1e293b', height: '40px', overflow: 'hidden' },
  rating: { display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px' },
  stars: { color: '#fbbf24', fontSize: '0.8rem' },
  count: { color: '#94a3b8', fontSize: '0.8rem' },
  priceContainer: { display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '15px' },
  currentPrice: { fontSize: '1.2rem', fontWeight: '800', color: '#1e293b' },
  oldPrice: { color: '#94a3b8', textDecoration: 'line-through', fontSize: '0.85rem' },
  button: { width: '100%', padding: '12px', background: '#1a46e5', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.2s' },
  disabledButton: { width: '100%', padding: '12px', background: '#e2e8f0', color: '#94a3b8', border: 'none', borderRadius: '8px', cursor: 'not-allowed' }
};

export default Product;