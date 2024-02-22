import React, { useState } from 'react';


import './style/contact.css';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Send the details to the mail
    <a href='#home'></a>

  };

  return (
    <section className="contact-form" id="contact">
        <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        {/* Add form fields based on your specifications */}
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" />
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
        <button type="submit">Submit form</button>
      </form>
    </section>
  );
};

export default ContactForm;