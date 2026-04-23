import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__section">
          <h2 className="footer__logo">IL PARCO</h2>
          <p className="footer__description">
            Premium Specialty Coffee & Artisan Bakery. The ultimate grab & go
            boutique experience in Limassol.
          </p>
          <div className="footer__socials">
            <a
              href="https://wolt.com/en/cyp/limassol/restaurant/il-parco-specialty"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wolt
            </a>
            <a
              href="https://www.foody.com.cy/delivery/lemesos/il-parco-specialty-coffee-2000415622"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Foody
            </a>
          </div>
        </div>

        <div className="footer__section">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Our Menu</Link>
            </li>
            <li>
              <Link to="/about">Our Story</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h3 className="footer__heading">Delivery Times</h3>
          <ul className="footer__links">
            <p className="footer__info">Monday: 06:15–18:15</p>
            <p className="footer__info">Tuesday: 06:15–18:15</p>
            <p className="footer__info">Wednesday: 06:15–18:15</p>
            <p className="footer__info">Thursday: 06:15–18:15</p>
            <p className="footer__info">Friday: 06:15–18:15</p>
            <p className="footer__info">Saturday: 06:15–18:15</p>
            <p className="footer__info">Sunday: 07:00–13:30</p>
          </ul>
        </div>

        <div className="footer__section">
          <h3 className="footer__heading">Contact Us</h3>
          <p className="footer__info">Phone: (+357) 25310072</p>
          <p className="footer__info">
            Location:{" "}
            <a
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14e733077b471bf1:0xc8767a07a5ef8004?sa=X&ved=1t:8290&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
            >
              IL PARCO specialty coffee | 138D-3021, Arch. Makariou, Limassol
              3021, Cyprus
            </a>
          </p>
        </div>

        <div className="footer__section footer__map-container">
          <h3 className="footer__heading">Find Us</h3>
          <div className="footer__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.749238855824!2d33.0356553!3d34.6862778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e733077b471bf1%3A0xc8767a07a5ef8004!2sIL%20PARCO%20specialty%20coffee!5e0!3m2!1sen!2s!4v1776877960971!5m2!1sen!2s"
              width="350"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IL PARCO Location Map"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="footer__bottom container">
        <p>
          &copy; {new Date().getFullYear()} IL PARCO Specialty Coffee & Café.
          All rights reserved. Developed by{" "}
          <a
            href="https://sikander-dev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sikander
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
