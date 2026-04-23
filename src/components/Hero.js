import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__content container fade-in-up">
        <h1 className="hero__title">Specialty Coffee, Crafted for the Journey.</h1>
        <p className="hero__subtitle">The Ultimate Grab & Go Experience in Limassol.</p>
        <Link to="/menu" className="hero__button hover-scale">
          View Daily Menu
        </Link>
      </div>
    </section>
  );
};

export default Hero;
