import React from 'react';

const SideBar = ({ onColorSelect, activeColor }) => {
  const colors = [
    { name: 'White', hex: '#fff' },
    { name: 'Black', hex: '#000' },
    { name: 'Blue', hex: '#0055ff' },
    { name: 'Red', hex: '#ff4757' },
    { name: 'Green', hex: '#2ed573' }
  ];

  return (
    <aside style={styles.container}>
      <div style={styles.filterHeader}>
        <span style={styles.icon}>▽</span>
        <h3 style={styles.mainTitle}>Filter</h3>
      </div>
      
      <div style={styles.section}>
        <h4 style={styles.label}>Pick Color</h4>
        <div style={styles.colorGrid}>
          {colors.map(c => (
            <div 
              key={c.hex} 
              onClick={() => onColorSelect(c.hex === activeColor ? null : c.hex)}
              title={c.name}
              style={{
                ...styles.colorCircle, 
                backgroundColor: c.hex,
                border: activeColor === c.hex ? '2px solid #0055ff' : '1px solid #eee',
                transform: activeColor === c.hex ? 'scale(1.2)' : 'scale(1)',
                boxShadow: activeColor === c.hex ? '0 0 10px rgba(0,85,255,0.3)' : 'none'
              }}
            >
              {activeColor === c.hex && <span style={styles.check}>✓</span>}
            </div>
          ))}
        </div>
      </div>

      <div style={styles.section}>
        <h4 style={styles.label}>Brand</h4>
        {['Raymond', 'Blue World', 'Vanhuesen'].map(brand => (
          <label key={brand} style={styles.checkLabel}>
            <input type="checkbox" style={styles.checkbox} /> {brand}
          </label>
        ))}
      </div>
    </aside>
  );
};

const styles = {
  container: { background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', height: 'fit-content', position: 'sticky', top: '100px' },
  filterHeader: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' },
  icon: { fontWeight: 'bold' },
  mainTitle: { fontSize: '1.1rem', fontWeight: '700' },
  section: { marginBottom: '30px' },
  label: { fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '15px', fontWeight: '800' },
  colorGrid: { display: 'flex', gap: '12px', flexWrap: 'wrap' },
  colorCircle: { 
    width: '28px', height: '28px', borderRadius: '50%', cursor: 'pointer', 
    display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.2s' 
  },
  check: { color: '#0055ff', fontSize: '12px', fontWeight: 'bold' },
  checkLabel: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '0.95rem', cursor: 'pointer' },
  checkbox: { width: '18px', height: '18px' }
};

export default SideBar;