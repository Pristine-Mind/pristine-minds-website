import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-content">
        <img src="path/to/about-image.jpg" alt="About Us" />
        <div className="text-content">
          <h2>Empowering all large and small businesses.</h2>
          <p>Pristine Minds Nepal Pvt Ltd (PMN) offers Dynamic Staffing, a Comprehensive Suite of Web Development Services, and More.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
