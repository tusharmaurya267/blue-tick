import React from 'react';
import './style/Header.css';


const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">Bluetick Consultants
            <img src="blue_tick_logo.jpeg" alt="Bluetick Consultants" height="30px" width="30px" />
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#what-we-offer">What We Offer</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;