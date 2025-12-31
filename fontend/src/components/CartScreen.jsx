import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartScreen = () => {
  const { cartItems, addToCart } = useCart();

  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const taxPrice = itemsPrice * 0.15;
  const totalPrice = itemsPrice + taxPrice;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Your Shopping Bag ({cartItems.length})</h2>
      <div style={styles.layout}>
        <div style={styles.cartList}>
          {cartItems.length === 0 ? (
            <p>Your bag is empty. <Link to="/" style={{color: '#0055ff'}}>Go Shopping</Link></p>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} style={styles.itemRow}>
                <img src={item.image} alt={item.name} style={styles.itemImg} />
                <div style={styles.itemInfo}>
                  <h4 style={styles.itemName}>{item.name}</h4>
                  <p style={styles.itemColor}>Price: ${item.price}</p>
                </div>
                <div style={styles.qtyControl}>
                  <span>Qty: {item.qty}</span>
                </div>
                <p style={styles.itemPrice}>${(item.price * item.qty).toFixed(2)}</p>
              </div>
            ))
          )}
        </div>

        <div style={styles.summaryCard}>
          <h3 style={styles.summaryTitle}>Order Summary</h3>
          <div style={styles.summaryRow}><span>Subtotal:</span> <span>${itemsPrice.toFixed(2)}</span></div>
          <div style={styles.summaryRow}><span>Tax (15%):</span> <span>${taxPrice.toFixed(2)}</span></div>
          <hr style={styles.hr} />
          <div style={styles.totalRow}><span>Total:</span> <span>${totalPrice.toFixed(2)}</span></div>
          <button style={styles.checkoutBtn}>Checkout Now</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: '1200px', margin: '40px auto', padding: '0 20px' },
  title: { fontSize: '1.8rem', fontWeight: '800', marginBottom: '30px' },
  layout: { display: 'grid', gridTemplateColumns: '1fr 350px', gap: '40px' },
  cartList: { background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' },
  itemRow: { display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 0', borderBottom: '1px solid #f1f5f9' },
  itemImg: { width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' },
  itemInfo: { flex: 1 },
  itemName: { fontSize: '1rem', fontWeight: '600' },
  itemColor: { fontSize: '0.85rem', color: '#64748b' },
  qtyControl: { display: 'flex', alignItems: 'center', gap: '15px' },
  itemPrice: { fontWeight: '800', width: '80px', textAlign: 'right' },
  summaryCard: { background: 'white', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', height: 'fit-content' },
  summaryTitle: { marginBottom: '20px', fontSize: '1.2rem' },
  summaryRow: { display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#64748b' },
  totalRow: { display: 'flex', justifyContent: 'space-between', fontWeight: '800', fontSize: '1.2rem', margin: '20px 0' },
  hr: { border: 'none', borderTop: '1px solid #e2e8f0', margin: '20px 0' },
  checkoutBtn: { width: '100%', background: '#0055ff', color: 'white', border: 'none', padding: '15px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }
};

export default CartScreen;