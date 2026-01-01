import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductScreen = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div style={{padding: '150px', textAlign: 'center'}}>Loading...</div>;

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.backLink}>← Back to Shop</Link>
      
      <div style={styles.row}>
        {/* Left Column: Image */}
        <div style={styles.imageCol}>
          <img src={product.image} alt={product.name} style={styles.image} />
        </div>

        {/* Right Column: Content */}
        <div style={styles.contentCol}>
          <h1 style={styles.title}>{product.name}</h1>
          <div style={styles.priceRow}>
            <span style={styles.price}>₹{product.price}</span>
            <span style={styles.stockStatus}>
              {product.countInStock > 0 ? '● In Stock' : '○ Out of Stock'}
            </span>
          </div>
          
          <p style={styles.description}>{product.description}</p>
          
          <div style={styles.actionSection}>
            <button 
              style={product.countInStock > 0 ? styles.addBtn : styles.disabledBtn}
              onClick={() => addToCart(product)}
              disabled={product.countInStock === 0}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: '1200px', margin: '0 auto', padding: '120px 20px 60px' },
  backLink: { textDecoration: 'none', color: '#64748b', fontSize: '0.9rem', marginBottom: '20px', display: 'inline-block' },
  row: { display: 'flex', gap: '50px', alignItems: 'flex-start', flexWrap: 'wrap' },
  imageCol: { flex: '1 1 500px', background: '#f8fafc', borderRadius: '20px', padding: '40px', display: 'flex', justifyContent: 'center' },
  image: { maxWidth: '100%', height: 'auto', objectFit: 'contain' },
  contentCol: { flex: '1 1 400px' },
  title: { fontSize: '2.5rem', fontWeight: '800', color: '#1e293b', marginBottom: '15px' },
  priceRow: { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '25px' },
  price: { fontSize: '2rem', fontWeight: '700', color: '#1a46e5' },
  stockStatus: { color: '#16a34a', fontWeight: '600', fontSize: '0.9rem' },
  description: { lineHeight: '1.7', color: '#64748b', marginBottom: '30px', fontSize: '1.1rem' },
  addBtn: { width: '100%', padding: '18px', background: '#1a46e5', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '1.1rem', fontWeight: '700', cursor: 'pointer', transition: '0.3s' },
  disabledBtn: { width: '100%', padding: '18px', background: '#e2e8f0', color: '#94a3b8', border: 'none', borderRadius: '12px', cursor: 'not-allowed' }
};

export default ProductScreen;