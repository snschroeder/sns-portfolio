import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [inquiryInput, setInquiryInput] = useState('');
  
  const handleSubmit = (e: any) => {

  };
  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const handleInquiryInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInquiryInput(e.target.value);
  };

  return (
    <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
      <h3 className="contact h3">
        Have a question for me or want to get in touch?
      </h3>
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
      <button type="submit" className="contact button">
        Submit
      </button>
    </form>
  );
}