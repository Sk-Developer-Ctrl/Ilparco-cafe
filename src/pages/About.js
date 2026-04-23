import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__content container fade-in-up">
          <h1 className="about-hero__title">Our Story</h1>
          <p className="about-hero__subtitle">
            Crafting the perfect moment, one cup at a time.
          </p>
        </div>
      </section>

      <section className="about-content container">
        <div className="about-content__grid">
          <div className="about-content__text fade-in-up">
            <h2 className="about-content__heading">The IL PARCO Philosophy</h2>
            <p>
              Founded in the heart of Limassol, IL PARCO Specialty Coffee & Café
              was born from a simple vision: to bridge the gap between high-end
              specialty coffee and the fast-paced 'Grab & Go' lifestyle.
            </p>
            <p>
              We believe that coffee is more than just a caffeine kick; it's an
              art form. Our beans are ethically sourced, 100% Arabica, and
              roasted to perfection to ensure every sip tells a story of origin
              and craft.
            </p>
          </div>
          <div className="about-content__image-wrapper fade-in-up">
            <img
              src="https://imageproxy.wolt.com/assets/6732146036490b6739cf54c3"
              alt="Coffee Brewing"
              className="about-content__image"
            />
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="about-values__grid">
            <div className="value-card">
              <h3 className="value-card__title">Quality</h3>
              <p>
                We never compromise. From our specialty blends to our freshly
                baked pastries, quality is our north star.
              </p>
            </div>
            <div className="value-card">
              <h3 className="value-card__title">Community</h3>
              <p>
                IL PARCO is a place for the people of Limassol. We grow with our
                community, one conversation at a time.
              </p>
            </div>
            <div className="value-card">
              <h3 className="value-card__title">Innovation</h3>
              <p>
                Whether it's our signature Iced Matcha or our protein-packed
                smoothies, we love to innovate our menu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
