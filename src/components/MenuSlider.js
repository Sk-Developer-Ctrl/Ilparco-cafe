import React, { useState, useEffect, useCallback, useRef } from 'react';
import { menuData } from '../data/menuData';
import './MenuSlider.css';

const MenuSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const featuredItems = [...menuData["COLD COFFEE"], ...menuData["HOT COFFEE"]].slice(0, 6);
  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
  }, [featuredItems.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  // Touch Handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="menu-slider">
      <div className="container">
        <div className="menu-slider__header fade-in-up">
          <h2 className="menu-slider__title">Signature Brews</h2>
          <p className="menu-slider__subtitle">Curated favorites from our specialty collection</p>
        </div>

        <div 
          className="menu-slider__viewport"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div 
            className="menu-slider__track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {featuredItems.map((item, index) => (
              <div key={index} className="menu-slider__slide">
                <div className={`menu-slider__card ${index === currentIndex ? 'menu-slider__card--active' : ''}`}>
                  <div className="menu-slider__image-box">
                    <img src={item.image} alt={item.name} className="menu-slider__img" />
                    <div className="menu-slider__overlay">
                      <span className="menu-slider__price">{item.price}</span>
                    </div>
                  </div>
                  <div className="menu-slider__info">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="menu-slider__nav menu-slider__nav--prev" onClick={prevSlide} aria-label="Previous slide">
            <span>&#8592;</span>
          </button>
          <button className="menu-slider__nav menu-slider__nav--next" onClick={nextSlide} aria-label="Next slide">
            <span>&#8594;</span>
          </button>
        </div>

        <div className="menu-slider__dots">
          {featuredItems.map((_, index) => (
            <button
              key={index}
              className={`menu-slider__dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSlider;
