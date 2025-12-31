import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useCart();
  const discount = 32;
  const originalPrice = (product.price / (1 - discount / 100)).toFixed(2);

  return (
    <div style={styles.card}>
      {/* Discount Badge on top of image */}
      <div style={styles.badge}>-{discount}%</div>
      
      <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
        <div style={styles.imageWrapper}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={styles.image} 
            onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500?text=MFI+Gear'; }}
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
          <span style={styles.currentPrice}>${product.price}</span>
          <span style={styles.oldPrice}>${originalPrice}</span>
        </div>

        <button 
          className="gold-btn" 
          style={styles.button}
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          disabled={product.countInStock === 0}
        >
          {product.countInStock > 0 ? 'Add to cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: { 
    background: '#fff', 
    borderRadius: '16px', 
    position: 'relative', 
    overflow: 'hidden',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column'
  },
  badge: { 
    position: 'absolute', 
    top: '12px', 
    left: '12px', 
    background: '#ef4444', 
    color: 'white', 
    padding: '4px 12px', 
    borderRadius: '20px', 
    fontSize: '0.8rem', 
    fontWeight: '800', 
    zIndex: '10' 
  },
  imageWrapper: { 
    width: '100%', 
    height: '280px', // Fixed height for consistency
    overflow: 'hidden'
  },
  image: { 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover' // Makes image take full width/height of wrapper
  },
  info: { padding: '20px' },
  name: { fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px', color: '#1e293b' },
  rating: { display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px' },
  stars: { color: '#fbbf24' },
  count: { color: '#94a3b8', fontSize: '0.85rem' },
  priceContainer: { display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '15px' },
  currentPrice: { fontSize: '1.25rem', fontWeight: '800' },
  oldPrice: { color: '#94a3b8', textDecoration: 'line-through', fontSize: '0.9rem' },
  button: { width: '100%' } // Class 'gold-btn' handles the rest
};

export default Product;