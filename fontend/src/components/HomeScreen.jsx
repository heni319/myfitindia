import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import FilterSidebar from '../components/FilterSidebar';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeFilters, setActiveFilters] = useState({ brands: [], colors: [], prices: [] });

  // 1. Fetch products from your API
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchProducts();
  }, []);

  // 2. Extract UNIQUE values from actual data
  const uniqueBrands = [...new Set(products.map((p) => p.brand))].filter(Boolean);
  const uniqueColors = [...new Set(products.map((p) => p.color))].filter(Boolean);

  // 3. Filter Logic
  useEffect(() => {
    let result = products;

    if (activeFilters.brands.length > 0) {
      result = result.filter(p => activeFilters.brands.includes(p.brand));
    }
    
    if (activeFilters.colors.length > 0) {
      result = result.filter(p => activeFilters.colors.includes(p.color));
    }

    if (activeFilters.prices.length > 0) {
      result = result.filter(p => {
        return activeFilters.prices.some(range => {
          const [min, max] = range.split('-').map(Number);
          return p.price >= min && p.price <= max;
        });
      });
    }

    setFilteredProducts(result);
  }, [activeFilters, products]);

  const handleFilterChange = (type, value) => {
    setActiveFilters(prev => {
      const currentSection = prev[type];
      const isAlreadySelected = currentSection.includes(value);
      return {
        ...prev,
        [type]: isAlreadySelected 
          ? currentSection.filter(i => i !== value) 
          : [...currentSection, value]
      };
    });
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.contentContainer}>
        <aside style={styles.sidebar}>
          {/* Pass the dynamic unique values as props */}
          <FilterSidebar 
            brands={uniqueBrands} 
            colors={uniqueColors} 
            onFilterChange={handleFilterChange} 
          />
        </aside>

        <main style={styles.productSection}>
          <h2 style={styles.title}>Collections ({filteredProducts.length})</h2>
          <div style={styles.grid}>
            {filteredProducts.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: { backgroundColor: '#fcfcfc', minHeight: '100vh', paddingTop: '120px' },
  contentContainer: { display: 'flex', maxWidth: '1440px', margin: '0 auto', padding: '0 20px', gap: '30px' },
  sidebar: { width: '280px', flexShrink: 0 },
  productSection: { flexGrow: 1 },
  title: { fontSize: '1.5rem', fontWeight: '800', color: '#1e293b', marginBottom: '30px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }
};

export default HomeScreen;