import React from 'react';
import './style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
    <div className='Other-links'>
      <h5>SERVICES</h5>
        <ul>
          <li><a href="remote-developers.html" title="Remote Developers">Remote Developers</a></li>
          <li><a href="product-development.html" title="Product Development">Product Development</a></li>
          <li><a href="digital-transformation.html" title="Digital Transformation">Digital Transformation</a>
          </li>
        </ul>
      <h5>RESOURCES</h5>
        <ul>
          <li><a href="blogs.html" title="Blogs">Blogs</a></li>
          <li><a href="case-studies.html" title="Case Studies">Case Studies</a></li>
        </ul>
      <h5>COMPANY</h5>
        <ul>
          <li><a href="blogs.html" title="Blogs">Blogs</a></li>
          <li><a href="case-studies.html" title="Case Studies">Case Studies</a></li>
        </ul>
    </div>
      <div className="footer-links">
        <a href="https://www.facebook.com/bluetickconsultants/"><img src="facebook.png"></img></a>
        <a href="https://www.instagram.com/bluetickconsultants/"><img src="instagram.png"></img></a>
        <a href="https://twitter.com/bluetickconsult1"><img src="twitter.png"></img></a>
        <a href="https://www.linkedin.com/company/bluetickconsultants/"><img src="linkedin.png"></img></a>
        
      </div>
      <p>
        <a href="mailto:contact@bluetickconsultants.com"
        title="contact@bluetickconsultants.com">contact@bluetickconsultants.com</a><br />
      </p>
      <p>Tushar Maurya | tusharmaurya002@gmail.com</p>
      <p>All rights reserved.</p>
      <div className="footer-icons">
        <ul>
          <li><a href="#home"><img src='home.png'></img></a></li>
          <li><a href="#what-we-offer"><img src='whatweoffer.png'></img></a></li>
          <li><a href="#blog"><img src='blogposts.png'></img></a></li>
          <li><a href="#contact"><img src='contact.png'></img></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;