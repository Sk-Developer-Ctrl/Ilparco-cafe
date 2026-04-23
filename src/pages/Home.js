import React from 'react';
import Hero from '../components/Hero';
import QuickStats from '../components/QuickStats';
import MenuSlider from '../components/MenuSlider';
import Reviews from '../components/Reviews';
import './Home.css';

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <div className="home-section-wrapper">
        <QuickStats />
        <MenuSlider />
        <div className="order-now-container">
          <a
            href="https://wolt.com/en/cyp/limassol/restaurant/il-parco-specialty"
            className="order-now-btn hover-scale"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Now on Wolt
          </a>
        </div>
        <Reviews />
      </div>
    </main>
  );
};

export default Home;
