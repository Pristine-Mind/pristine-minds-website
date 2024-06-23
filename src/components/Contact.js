import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <form action="#" method="post">
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea name="message" placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <p>Email: infot@pristine-minds.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
