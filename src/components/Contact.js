import React, { useState } from 'react';
import { submitContactForm } from '../apiService';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitContactForm(formData)
      .then(response => {
        setSubmitted(true);
        setError(null);
      })
      .catch(error => {
        setError('There was an error submitting the form');
        console.error('Error submitting the form:', error);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        {submitted && <p className="success-message">Your message has been sent successfully!</p>}
        {error && <p className="error-message">{error}</p>}
        <div className="contact-info">
          <p>Email: info@pristine-minds.com</p>
          <p>Phone: +977 - 9767474645</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;