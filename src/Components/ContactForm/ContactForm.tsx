import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [inquiryInput, setInquiryInput] = useState('');
  const handleSubmit = (e: any) => {

  };
  const handleNameInputChange = (e: any) => {

  };

  const handleEmailInputChange = (e: any) => {

  };

  const handleInquiryInputChange = (e: any) => {

  };

  return (
    <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name-input">
        Name: 
      </label>
        <input
          type="text"
          name="name-input"
          id="name-input"
          value={nameInput}
          maxLength={50}
          onChange={(e) => handleNameInputChange(e)}
        />
      <label htmlFor="email-input">
        Email: 
      </label>
        <input 
          type="email"
          name="email-input"
          id="email-input"
          value={emailInput}
          maxLength={50}
          onChange={(e) => handleEmailInputChange(e)}
        />
      <label htmlFor="inquiry-input">
        Get in touch! 
      </label>
      <textarea 
        name="inquiry-input"
        id="inquiry-input"
        value={inquiryInput}
        maxLength={500}
        onChange={(e) => handleInquiryInputChange(e)}
        rows={4}
        cols={100}
      />
    </form>
  );
}