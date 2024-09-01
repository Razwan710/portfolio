import React from 'react';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'; // Importing the icons
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-branding'>
          <img src='/logo.png' alt='Logo' className='footer-logo' />
          <h2 className='footer-title'>Razwan Zahid</h2>
          <p className='footer-tagline'>© 2024 Razwan Zahid. All rights reserved</p>
        </div>
        <div className='contact-links'>
          <a href='https://www.linkedin.com/in/razwanzahid' target='_blank' rel='noopener noreferrer' className='contact-linkWB'>
            <FaLinkedin size={30} /> 
          </a>
          <a href='https://wa.me/923105275710' target='_blank' rel='noopener noreferrer' className='contact-link'>
            <FaWhatsapp size={30} /> 
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
