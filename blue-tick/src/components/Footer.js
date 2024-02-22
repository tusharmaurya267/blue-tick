import React from 'react';
import './style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-links">
        <a href="https://www.facebook.com/bluetickconsultants/"><img src="facebook.png"></img></a>
        <a href="https://www.instagram.com/bluetickconsultants/"><img src="instagram.png"></img></a>
        <a href="https://twitter.com/bluetickconsult1"><img src="twitter.png"></img></a>
        <a href="https://www.linkedin.com/company/bluetickconsultants/"><img src="linkedin.png"></img></a>
        
      </div>
      <p>Tushar Maurya | tusharmaurya002@gmail.com</p>
      <p>All rights reserved.</p>
      <div className="footer-icons">
        <a href="#home"><img src="up-arrow.png" alt="up-arrow" /></a>
        <a href="#home"><img src="up-arrow.png" alt="up-arrow" /></a>
        <a href="#home"><img src="up-arrow.png" alt="up-arrow" /></a>

      </div>
    </footer>
  );
};

export default Footer;