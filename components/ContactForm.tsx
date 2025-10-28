// components/ContactForm.tsx
'use client';
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Please fill out all fields.');
    }
  }

  return (
    <div className="py-8">
      <h3>Contact Me</h3>
      <form id="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoFocus
        />
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          id="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <div className="social-icons" id="social-icons">
        <a href="https://www.facebook.com/profile.php?id=61552679667437" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com/gentle_dev1" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-x"></i>
        </a>
        <a href="https://github.com/Gentle-dove" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/royal-alozie-533a57297" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:royalalozie46@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
