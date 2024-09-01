import React from 'react';
import './skills.css';

const skillsData = [
  { name: 'React JS', imgSrc: './react.png' },
  { name: 'CSS', imgSrc: './css.png' },
  { name: 'HTML', imgSrc: './html.png' },
  { name: 'Node', imgSrc: './node.svg' },
  { name: 'JavaScript', imgSrc: './js.png' },
  { name: 'MongoDB', imgSrc: './db.png' },
  { name: 'MySQL', imgSrc: './mysql.png' },
  { name: 'XAMPP', imgSrc: './xmp.png' },
  { name: 'Python', imgSrc: './python.svg' },
  { name: 'C++', imgSrc: './cpp.png' },
  { name: 'C', imgSrc: './c.png' },
  { name: 'Java', imgSrc: './java.png' },
  { name: 'R', imgSrc: './r.png' },
];

const Skills = () => {
  return (
    <section id='skills' className='MySkills'>
      <div className='skills-header'>
        <h1>My Skills</h1>
        <p className='skills-description'>I have experience in a variety of technologies and tools. Below is a snapshot of my skills and expertise.</p>
      </div>
      <div className='skills-container'>
        {skillsData.map(skill => (
          <div key={skill.name} className='skill-item'>
            <img src={skill.imgSrc} alt={skill.name} className='skill-icon' />
            <p className='skill-name'>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
