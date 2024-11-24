import React, { useState } from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand">PATHSHALA</a>

      <span className="menu-toggle" onClick={toggleMenu}>☰</span>
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
