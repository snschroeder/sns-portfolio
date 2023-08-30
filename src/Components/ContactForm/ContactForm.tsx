import React from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
        <section className="contact-container">
            <form className="login-form" onSubmit={(e => handleSubmit(e))}>
                <label htmlFor="name-input">Name</label>
                <input
                    type="text"
                    id="name-input"
                    name="name"
                    required
                />
                <label htmlFor="email-input">Email</label>
                <input
                    type="email"
                    id="email-input"
                    name="email"
                    required
                />
                <label htmlFor="question-input">Please feel free to reach me with any questions or opportunities</label>
                <input
                    type="textarea"
                    id="question-input"
                    name="question"
                    maxLength={2000}
                    required
                />

            </form>
        </section>
  );
};

export default ContactForm;
