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
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here

    // Clear form data
    setFormData({
      fullName: '',
      email: '',
      contactNumber: '',
      subject: '',
      message: '',
    });

    // Show alert and set formSubmitted state to true
    alert('Form submitted!');
    setFormSubmitted(true);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <section className="contact-form" id="contact">
      <h2>LET'S CONNECT</h2>
      <p><i>Contact our support team or make an appointment with our experts</i></p>
      <form onSubmit={handleSubmit}>
        {/* Add form fields based on your specifications */}
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" />
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
        <button type="submit">Submit form</button>
      </form>
      {formSubmitted && (
        <div className="form-submitted-message">
          <p>Form is submitted</p>
        </div>
      )}
    </section>
  );
};

export default ContactForm;