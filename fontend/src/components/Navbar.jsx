import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Navbar = () => {
  const { userInfo, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Generates a default avatar based on user initials if image is missing
  const defaultAvatar = `https://ui-avatars.com/api/?name=${userInfo?.name || 'User'}&background=1e293b&color=fff`;

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>MFI <span style={{fontWeight: '300'}}>myfitindia</span></Link>
      
      <div style={styles.links}>
        <Link to="/supplements" style={styles.link}>Supplements</Link>
        <Link to="/apparels" style={styles.link}>Apparels</Link>

        {userInfo ? (
          <div style={styles.userSection}>
            <Link to="/profile" style={styles.profileLink}>
              <img 
                src={userInfo.image || defaultAvatar} 
                alt="profile" 
                style={styles.avatar} 
              />
              <span>{userInfo.name}</span>
            </Link>
            <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
          </div>
        ) : (
          <Link to="/login" style={styles.loginBtn}>Login</Link>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5%', background: '#fff', position: 'fixed', top: 0, width: '100%', zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' },
  logo: { fontSize: '1.5rem', fontWeight: '800', textDecoration: 'none', color: '#1e293b' },
  links: { display: 'flex', alignItems: 'center', gap: '25px' },
  link: { textDecoration: 'none', color: '#64748b', fontWeight: '600' },
  userSection: { display: 'flex', alignItems: 'center', gap: '15px' },
  profileLink: { display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#1e293b', fontWeight: '700' },
  avatar: { width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #e2e8f0' },
  logoutBtn: { background: 'none', border: '1px solid #e2e8f0', padding: '5px 12px', borderRadius: '5px', cursor: 'pointer', fontWeight: '600' },
  loginBtn: { background: '#1e293b', color: '#fff', padding: '8px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }
};

export default Navbar;