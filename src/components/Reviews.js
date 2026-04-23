import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    { name: "Elena Georgiou", text: "The best Freddo Espresso in Limassol. The atmosphere is top-notch!", rating: 5 },
    { name: "Markos Andreou", text: "Freshly baked pies every morning. Their Halloumi pie is a must-try.", rating: 5 },
    { name: "Sophia Smith", text: "Premium coffee and super fast service. Perfect for my morning commute.", rating: 5 }
  ];

  return (
    <section className="reviews">
      <div className="container">
        <h2 className="reviews__title fade-in-up">Customer Reviews</h2>
        <div className="reviews__grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="review-card__rating">
                {[...Array(review.rating)].map((_, i) => <span key={i}>&#9733;</span>)}
              </div>
              <p className="review-card__text">"{review.text}"</p>
              <h4 className="review-card__name">- {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
