import React from 'react';
import './DevelopmentFocus.css';

const DevelopmentFocus = () => {
  const focusAreas = [
    { title: 'Technological Advancements', description: 'Details about technological advancements.' },
    { title: 'Environmental Sustainability', description: 'Details about environmental sustainability.' },
    { title: 'Educational Initiatives', description: 'Details about educational initiatives.' },
    { title: 'Community Engagements', description: 'Details about community engagements.' },
  ];

  return (
    <section className="development-focus" id="development-focus">
      <div className="container">
        <h2>Our Development Focus</h2>
        <div className="focus-areas">
          {focusAreas.map((focus, index) => (
            <div className="focus-area" key={index}>
              <h3>{focus.title}</h3>
              <p>{focus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentFocus;
