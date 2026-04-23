import React, { useState } from "react";
import "./FloatingContact.css";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const FloatingContact = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`contact-fab ${isExpanded ? "contact-fab--expanded" : ""}`}>
      <div className="contact-fab__options">
        <a
          href="tel:+35725310072"
          className="contact-fab__link contact-fab__link--call"
        >
          <FaPhone /> Call (+357 25310072)
        </a>
        <a
          href="https://wa.me/35725310072"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-fab__link contact-fab__link--wa"
        >
          <FaWhatsapp /> WhatsApp
        </a>
      </div>
      <button
        className="contact-fab__main"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "×" : <FaPhone />}
      </button>
    </div>
  );
};

export default FloatingContact;
