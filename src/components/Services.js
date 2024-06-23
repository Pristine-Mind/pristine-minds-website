import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { 
        title: 'Software Development',
        description: 'We deliver custom software solutions for efficient business needs.',
        icon: 'path/to/icon1.jpg' 
    },
    { 
        title: 'IT Training & Bootcamps',
        description: 'Intensive training programs to equip individuals with the latest tech skills.',
        icon: 'path/to/icon2.jpg'
    },
    { 
        title: 'Cloud Solutions',
        description: 'Cloud solutions for efficient business operations.',
        icon: 'path/to/icon3.jpg'
    },
    { 
        title: 'Blockchain & AI Solutions',
        description: 'Innovative blockchain and AI solutions for complex business challenges.',
        icon: 'path/to/icon4.jpg'
    },
    { 
        title: 'E-Learning Platforms',
        description: 'We develop e-learning platforms for online education and training.',
        icon: 'path/to/icon5.jpg'
    },
    {   
        title: 'We develop e-learning platforms for online education and training.',
        description: 'We provide expert IT project management and consultancy services.',
        icon: 'path/to/icon6.jpg'
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h3>Services</h3>
        <h2>Unlocking Potential: Our Service Offerings</h2>
        <div className="service-cards">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <img src={service.icon} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
