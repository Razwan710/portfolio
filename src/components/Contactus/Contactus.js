import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import './contactus.css';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setIsError(true);
      return;
    }

    emailjs.send('service_urxkaqq', 'template_4fl3fnv', formData, 'yI1lAroMTddDgVuMU')
      .then((result) => {
        console.log('Success:', result.text);
        setIsSent(true);
        setIsError(false);
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log('Error:', error.text);
        setIsSent(false);
        setIsError(true);
      });
  };

  return (
    <section id='contactus' className='contactus-section'>
      <div className='contactus-container'>
        <h1 className='contactus-header'>Contact Us</h1>
        <p className='contactus-description'>
          Please fill out the below form to discuss any work opportunity.
        </p>
        <form className='contactus-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Enter your name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Your Message</label>
            <textarea
              id='message'
              name='message'
              placeholder='Enter your message'
              rows='4'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type='submit' className='submit-button'>Send Message</button>
          {isSent && <p className='form-status success'>Message sent successfully!</p>}
          {isError && <p className='form-status error'>Failed to send message. Please try again.</p>}
        </form>

        <div className='contact-links'>
        <a href='https://wa.me/923105275710' target='_blank' rel='noopener noreferrer' className='contact-linkWB'>
  <FaWhatsapp size={30} />
</a>

          <a href='https://linkedin.com/in/razwanzahid' target='_blank' rel='noopener noreferrer' className='contact-link'>
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
