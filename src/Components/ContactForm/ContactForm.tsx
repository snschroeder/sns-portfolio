import React from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <section className="contact-container">
      <h3>Contact Me</h3>
      <form className="contact-form" onSubmit={(e => handleSubmit(e))}>
        <label htmlFor="name-input">Name:
        <input
            type="text"
            id="name-input"
            name="name"
            required
        />
        </label>
        <label htmlFor="email-input">Email:
        <input
            type="email"
            id="email-input"
            name="email"
            required
        />
        </label>
        <label htmlFor="question-input">Reach me anytime with any questions or opportunities
            <textarea
                id="question-input"
                name="question"
                rows={6}
                cols={63}
                maxLength={2000}
                required
            />
        </label>
        <button className="contact-button" type="submit">SEND</button>
      </form>
    </section>
  );
};

export default ContactForm;
