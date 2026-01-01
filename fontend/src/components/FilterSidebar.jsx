import React from 'react';

const FilterSidebar = ({ brands, colors, onFilterChange }) => {
  const priceRanges = [
    { label: '$0 - $50', value: '0-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: '$100 - $200', value: '100-200' },
    { label: '$200+', value: '200-10000' }
  ];

  return (
    <div style={styles.container}>
      <h3 style={styles.mainTitle}>Filter</h3>

      {/* Dynamic Colors */}
      {colors.length > 0 && (
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Pick Color</h4>
          <div style={styles.colorGrid}>
            {colors.map((color) => (
              <div 
                key={color} 
                onClick={() => onFilterChange('colors', color)}
                style={{ 
                  ...styles.colorCircle, 
                  backgroundColor: color.toLowerCase() 
                }}
                title={color}
              />
            ))}
          </div>
        </div>
      )}

      {/* Dynamic Brands */}
      <div style={styles.section}>
        <h4 style={styles.sectionTitle}>Brand</h4>
        {brands.map((brand) => (
          <label key={brand} style={styles.checkboxContainer}>
            <input 
              type="checkbox" 
              onChange={() => onFilterChange('brands', brand)} 
              style={styles.checkbox} 
            />
            <span>{brand}</span>
          </label>
        ))}
      </div>

      <div style={styles.section}>
        <h4 style={styles.sectionTitle}>Price</h4>
        {priceRanges.map((range) => (
          <label key={range.value} style={styles.checkboxContainer}>
            <input 
              type="checkbox" 
              onChange={() => onFilterChange('prices', range.value)} 
              style={styles.checkbox} 
            />
            <span>{range.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '20px', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #f1f5f9' },
  mainTitle: { fontSize: '1.1rem', fontWeight: '700', marginBottom: '25px' },
  section: { marginBottom: '30px' },
  sectionTitle: { fontSize: '0.8rem', fontWeight: '800', color: '#1e293b', textTransform: 'uppercase', marginBottom: '15px' },
  colorGrid: { display: 'flex', gap: '10px', flexWrap: 'wrap' },
  colorCircle: { width: '24px', height: '24px', borderRadius: '50%', cursor: 'pointer', border: '1px solid #e2e8f0' },
  checkboxContainer: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', cursor: 'pointer', fontSize: '0.9rem', color: '#64748b' },
  checkbox: { width: '18px', height: '18px', cursor: 'pointer' }
};

export default FilterSidebar;