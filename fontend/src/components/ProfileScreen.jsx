import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';

const ProfileScreen = () => {
  const { userInfo } = useUser();
  
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [success, setSuccess] = useState(false);

  // Load user data into state when component mounts or userInfo changes
  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setMessage(null);

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      // This is where you will call your updateProfile function later
      console.log('Updating profile for:', name);
      setSuccess(true);
    }
  };

  // Generate a professional default avatar based on initials
  const defaultAvatar = `https://ui-avatars.com/api/?name=${name}&background=1e293b&color=fff&size=128`;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <img 
            src={userInfo?.image || defaultAvatar} 
            alt="Profile" 
            style={styles.avatar} 
          />
          <h2 style={styles.title}>User Profile</h2>
        </div>

        {message && <div style={styles.error}>{message}</div>}
        {success && <div style={styles.success}>Profile Updated Successfully!</div>}

        <form onSubmit={submitHandler}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input 
              type="text" 
              placeholder="Enter name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input 
              type="email" 
              placeholder="Enter email" 
              value={email} 
              disabled // Email is usually kept unique and not changeable easily
              style={{ ...styles.input, backgroundColor: '#f1f5f9', cursor: 'not-allowed' }}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>New Password</label>
            <input 
              type="password" 
              placeholder="Leave blank to keep current" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm New Password</label>
            <input 
              type="password" 
              placeholder="Confirm new password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: { display: 'flex', justifyContent: 'center', padding: '40px 20px', backgroundColor: '#f8fafc' },
  card: { background: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '100%', maxWidth: '450px' },
  header: { textAlign: 'center', marginBottom: '30px' },
  avatar: { width: '100px', height: '100px', borderRadius: '50%', marginBottom: '15px', border: '4px solid #e2e8f0', objectFit: 'cover' },
  title: { fontSize: '1.5rem', color: '#1e293b', fontWeight: '800' },
  inputGroup: { marginBottom: '20px' },
  label: { display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#64748b' },
  input: { width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none', fontSize: '1rem', transition: 'border 0.2s' },
  button: { width: '100%', padding: '14px', background: '#1e293b', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: '700', cursor: 'pointer', marginTop: '10px' },
  error: { backgroundColor: '#fee2e2', color: '#dc2626', padding: '10px', borderRadius: '8px', marginBottom: '20px', textAlign: 'center', fontSize: '0.9rem' },
  success: { backgroundColor: '#dcfce7', color: '#16a34a', padding: '10px', borderRadius: '8px', marginBottom: '20px', textAlign: 'center', fontSize: '0.9rem' }
};

export default ProfileScreen;