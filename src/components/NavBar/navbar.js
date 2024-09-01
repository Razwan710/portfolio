import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll event to change navbar background color
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <img src='/logo.png' alt='Logo' className='logo'/>
      <div className={`desktopMenu ${isOpen ? 'open' : ''}`}>
        <Link className='desktopMenuListItem' to="intro" smooth={true} duration={500}>Home</Link>
        <Link className='desktopMenuListItem' to="skills" smooth={true} duration={500}>Skills</Link>
        <Link className='desktopMenuListItem' to="experience" smooth={true} duration={500}>Experience</Link>
        <Link className='desktopMenuListItem' to="contactus" smooth={true} duration={500}>Contact Me</Link>
      </div>
      <div className='hamburger' onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </nav>
  );
};

export default Navbar;
