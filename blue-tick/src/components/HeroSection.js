import React from 'react';
import './style/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
        <h1>BLUE TICK</h1>
      <h1>Founded in 2017, Bluetick Consultants</h1>
      <p>A technology-driven firm making a significant impact in the Indian and US startup ecosystems.</p>
      <p>Transforming Enterprises with cutting-edge, scalable, privacy-focused Generative AI Solutions....<a href="https://www.bluetickconsultants.com/generative-ai.html" target="_blank" rel="noopener noreferrer">
        <button><img src='maximize.png' id='icons'></img></button>
      </a></p>
      <img src="blue_tick_logo.jpeg" alt="Bluetick Consultants"/>
      
      
    </section>
  );
};

export default HeroSection;