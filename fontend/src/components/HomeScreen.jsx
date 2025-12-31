import React, { useState, useEffect } from 'react';
import Product from '../components/Product'; 

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const [color, setColor] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/products?category=${category}&color=${color}`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category, color]);

  return (
    <div className="container" style={{ marginTop: '120px' }}>
      <h1 style={styles.title}>Latest Collections</h1>

      {/* FILTER SECTION USING YOUR STYLES */}
      <div style={styles.filterSection}>
        <div style={styles.filterBox}>
          <label style={styles.filterLabel}>Category</label>
          <select 
            style={styles.customSelect} 
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Apparels">Apparels</option>
            <option value="Supplements">Supplements</option>
            <option value="Equipment">Equipment</option>
          </select>
        </div>

        <div style={styles.filterBox}>
          <label style={styles.filterLabel}>Color</label>
          <select 
            style={styles.customSelect} 
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="All">All Colors</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Blue">Blue</option>
          </select>
        </div>
      </div>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div style={styles.grid}>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

// INTEGRATING YOUR STYLE OBJECTS HERE
const styles = {
  title: { textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem', fontWeight: '800' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '30px',
  },
  filterSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    padding: '30px',
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    marginBottom: '40px',
    border: '1px solid #f1f5f9'
  },
  filterBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  filterLabel: {
    fontSize: '0.75rem',
    fontWeight: '800',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  customSelect: {
    padding: '12px 20px',
    borderRadius: '10px',
    border: '2px solid #f1f5f9',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1e293b',
    outline: 'none',
    transition: '0.3s'
  }
};

export default HomeScreen;