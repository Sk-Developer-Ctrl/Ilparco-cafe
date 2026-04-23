import React from "react";
import "./QuickStats.css";

const QuickStats = () => {
  const stats = [
    { label: "Pure Coffee", detail: "Premium Grade" },
    { label: "Freshly Baked Daily", detail: "Local Ingredients" },
    { label: "Specialty Blends", detail: "Expertly Roasted" },
  ];

  return (
    <section className="stats">
      <div className="stats__container container">
        {stats.map((stat, index) => (
          <div key={index} className="stats__item">
            <h3 className="stats__label">{stat.label}</h3>
            <p className="stats__detail">{stat.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickStats;
