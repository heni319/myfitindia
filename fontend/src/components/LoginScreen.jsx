import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { login } = useUser();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      navigate('/'); // Go to home after login
    } else {
      setError(result.message);
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={submitHandler}>
        <h2 style={styles.title}>Welcome Back</h2>
        {error && <p style={styles.error}>{error}</p>}
        
        <input 
          type="email" 
          placeholder="Email Address" 
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit" style={styles.button}>Sign In</button>
        
        <p style={styles.footer}>
          New Customer? <Link to="/register" style={styles.link}>Register</Link>
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: { height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f8fafc' },
  form: { background: '#fff', padding: '40px', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '100%', maxWidth: '400px' },
  title: { textAlign: 'center', marginBottom: '30px', color: '#1e293b', fontSize: '1.8rem' },
  input: { width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none' },
  button: { width: '100%', padding: '12px', background: '#1e293b', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' },
  error: { color: '#ff4757', textAlign: 'center', marginBottom: '15px' },
  footer: { marginTop: '20px', textAlign: 'center', color: '#64748b' },
  link: { color: '#1e293b', fontWeight: 'bold', textDecoration: 'none' }
};

export default LoginScreen;