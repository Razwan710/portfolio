import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './intro.css';

const Intro = () => {
  // Create a ref for the element that will display the typed text
  const typedElementRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js on the element referenced by typedElementRef
    const options = {
      strings: ["Razwan Zahid"], // Text string to type
      typeSpeed: 100, // Speed at which the text is typed
      backSpeed: 50,  // Speed at which the text is deleted
      loop: true      // Loop the typing effect
    };

    const typed = new Typed(typedElementRef.current, options);

    // Cleanup function to destroy Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>
          I'm <span ref={typedElementRef} className='auto-type'></span><br/>
          Front-End Web Developer
        </span>
        <p className='introPara'>
          I am an experienced web developer with a strong background 
          <br/>in creating website designs.
        </p>
        <a href='/CV_RazwanZahid_2024.pdf' target='_blank' rel='noopener noreferrer' className='btn hireBtn'>
          <img src='./hire.png' alt='hire' className='hireImgIcon' />My Resume
        </a>
      </div>
      <img className='bg' src='/bg.png' alt='Profile'/>
    </section>
  );
};

export default Intro;
