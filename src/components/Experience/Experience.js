import React from 'react';
import './experience.css';

const experiences = [
  {
    title: 'Internship: Front-End Web Developer',
    duration: '09/2021 to 11/2021',
    company: 'Vinega Solutions',
    location: '221-B, Madina Tower, Commercial Market Rd, B-Block Block B Satellite Town, Rawalpindi, Punjab 46000',
    responsibilities: [
      'Cooperate with designers to create clean interfaces and simple, intuitive interactions and experiences.',
      'Work with senior developer to manage large, complex design projects for corporate clients.',
    ],
  },
  {
    title: 'Freelancing: Fiverr',
    duration: '05/2021 to 01/2022',
    company: 'Fiverr',
    responsibilities: [
      'Experienced freelancer proficient in Python, React JS, JavaScript, MATLAB, C/C++, Java, HTML, and CSS.',
      'Successfully completed diverse projects, including thesis work, showcasing strong technical skills and a proven ability to deliver high-quality solutions.',
    ],
  },
  {
    title: 'Front-End Web Developer',
    duration: '01/2022 to 06/2023',
    company: 'Solo IT Solutions',
    location: 'Office #1, 2nd Floor, Al-Rehman Trade Center, University Road, Sargodha, 40100',
    responsibilities: [
      'Implemented front-end frameworks such as React JS to enhance website functionality and interactivity.',
      'Maintain effective communication with a senior developer to oversee and manage sizable, intricate design projects aimed at corporate clients.',
    ],
  },
];

const Experience = () => {
  return (
    <section id='experience' className='experience-section'>
      <h1 className='experience-header'>Experience</h1>
      <div className='experience-container'>
        {experiences.map((exp, index) => (
          <div key={index} className='experience-card'>
            <h2 className='experience-title'>{exp.title}</h2>
            <p className='experience-duration'>{exp.duration}</p>
            {exp.company && <p className='experience-company-title'>Company:</p>}
            {exp.company && <p className='experience-company'>{exp.company}</p>}
            {exp.location && <p className='experience-location-title'>Location:</p>}
            {exp.location && <p className='experience-location'>{exp.location}</p>}
            <ul className='experience-responsibilities'>
              {exp.responsibilities.map((responsibility, i) => (
                <li key={i} className='responsibility-item'>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
