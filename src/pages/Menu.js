import React, { useState } from 'react';
import { menuData } from '../data/menuData';
import { MdFilterList } from 'react-icons/md';
import './Menu.css';

const Menu = () => {
  const categories = ['All', ...Object.keys(menuData)];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCategories = activeCategory === 'All' 
    ? Object.keys(menuData) 
    : [activeCategory];

  return (
    <div className="menu-page">
      <div className="menu-page__header container fade-in-up">
        <h1 className="menu-page__title">Daily Menu</h1>
        <p className="menu-page__subtitle">Crafted with passion, served with excellence.</p>
      </div>

      <div className="menu-filters-wrapper container fade-in-up">
        <div className="menu-filters__label">
          <MdFilterList className="filter-icon" />
          <span>Categories</span>
        </div>
        <div className="menu-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-page__container container">
        {filteredCategories.map((category, catIndex) => (
          <div key={category} className="menu-category fade-in-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
            <h2 className="menu-category__title">{category}</h2>
            <div className="menu-category__grid">
              {menuData[category].map((item, itemIndex) => (
                <div key={item.name} className="menu-card hover-scale">
                  <div className="menu-card__image-wrapper">
                    <img src={item.image} alt={item.name} className="menu-card__image" />
                  </div>
                  <div className="menu-card__content">
                    <h3 className="menu-card__name">{item.name}</h3>
                    <p className="menu-card__price">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
