import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductScreen = () => {
  const { id } = useParams(); // Gets the ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <h2 style={{marginTop: '150px', textAlign: 'center'}}>Loading Product...</h2>;

  return (
    <div className="container" style={{ marginTop: '120px' }}>
      <div style={styles.row}>
        <div style={styles.imageCol}>
          {/* DYNAMIC IMAGE FROM DATABASE */}
          <img src={product.image} alt={product.name} style={styles.image} />
        </div>
        <div style={styles.infoCol}>
           <h1 style={styles.name}>{product.name}</h1>
           <p style={styles.price}>${product.price}</p>
           <p style={styles.desc}>{product.description}</p>
           <button className="gold-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  row: { display: 'flex', gap: '40px', flexWrap: 'wrap' },
  imageCol: { flex: '1', minWidth: '300px' },
  image: { width: '100%', borderRadius: '20px' },
  infoCol: { flex: '1', minWidth: '300px' },
  name: { fontSize: '2.5rem', fontWeight: '800' },
  price: { fontSize: '1.5rem', color: '#1e293b', fontWeight: '700' },
  desc: { margin: '20px 0', color: '#64748b', lineHeight: '1.6' }
};

export default ProductScreen;