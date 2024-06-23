import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">Pristine Minds</div>
        <nav>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#expansion">Expansion</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;