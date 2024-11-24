import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      <p>
        <a href="/privacy-policy" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Privacy Policy</a> | 
        <a href="/terms-of-service" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;