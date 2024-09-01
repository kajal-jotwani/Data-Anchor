import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Data Anchor</h1>
      </div>
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#Increasing Efficiency">Increasing Efficiency</a></li>
          <li><a href="#Calculator">Calculator</a></li>
          <li><a href="#Locations">Locations</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
