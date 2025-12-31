import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  
  const { register } = useUser(); // Ensure 'register' is exported in UserContext
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      const result = await register(name, email, password);
      if (result.success) {
        navigate('/'); // Redirect to home on success
      } else {
        setMessage(result.message);
      }
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={submitHandler}>
        <h2 style={styles.title}>Create MFI Account</h2>
        {message && <p style={styles.error}>{message}</p>}
        
        <input 
          type="text" 
          placeholder="Full Name" 
          style={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
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

        <input 
          type="password" 
          placeholder="Confirm Password" 
          style={styles.input}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        
        <button type="submit" style={styles.button}>Sign Up</button>
        
        <p style={styles.footer}>
          Already a member? <Link to="/login" style={styles.link}>Login</Link>
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: { height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f8fafc' },
  form: { background: '#fff', padding: '40px', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '100%', maxWidth: '400px' },
  title: { textAlign: 'center', marginBottom: '30px', color: '#1e293b', fontSize: '1.8rem', fontWeight: '800' },
  input: { width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none' },
  button: { width: '100%', padding: '12px', background: '#1e293b', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' },
  error: { color: '#ff4757', textAlign: 'center', marginBottom: '15px', fontWeight: '600' },
  footer: { marginTop: '20px', textAlign: 'center', color: '#64748b' },
  link: { color: '#1e293b', fontWeight: 'bold', textDecoration: 'none' }
};

export default SignupScreen;