import React from 'react';
import './Skillcomponent.css'

const Skillcomponent = () => {

const TechnicalSkills = [
    {
        title : "React.js & JavaScript (ES6+)",
        description : "I have strong expertise in building interactive user interfaces using React and modern JavaScript techniques.",
        progressvalue : 2 
    },
    {
        title : "HTML & CSS",
        description : "Skilled in crafting responsive layouts, CSS animations, and UI designs.",
        progressvalue : 2.3,
    },
    {
        title : "Redux Toolkit",
        description : "Experienced in managing application state efficiently using Redux.",
        progressvalue : 1.7
    },
    {
        title : "(In Progress: Node.js, Express, MongoDB)",
        description : "I’m actively learning back-end technologies to build full-stack applications."
    }
]

const SoftSkills = [
    {
        title : "Problem-Solving",
        description : "Ability to troubleshoot and resolve issues quickly."
    },
    {
        title : "Teamwork",
        description : "Collaborative mindset, working effectively with peers."
    },
    {
        title : "Communication",
        description : "Clear and concise, both in technical and non-technical discussions."
    },
    {
        title : "Adaptability",
        description : "Quick to learn new tools and adjust to changing project needs."
    }
]


return (
    <div className='skill-section'>

       <div className="skill-content">
       <div className='technical-skill-part'>
          <h1 className='technical-skill-heading'>Technical Skills</h1>
          { TechnicalSkills.map(({title,description,progressvalue},index) => (
             <div key={index} className='technical-skills'>
             <h3 className='technical-skills-title'>{title}</h3>
             <p className='technical-skills-description'>{description}</p>
             <div className='progress-bar'><span style={{ width: `${progressvalue * 20 + 40}%` }}></span></div>
            </div>
          ))    
          }
       </div>
       <div className='soft-skills-part'>
       <h1 className='soft-skill-heading'>Soft Skills</h1>
        {SoftSkills.map(({title,description},index) => (
            <div key={index} className='soft-skills'>
            <h3 className='soft-skills-title'>{title}</h3>
            <p className='soft-skills-description'>{description}</p>
            <p></p>
            </div>
        ))}
       </div>
       </div> 

       <div className='Additional-details'>
        <h1 className='Additional-detail-heading'>Additional Details</h1>
          <div className='additional-details-list'>  
            <li className='additional-details-list-part'>I continuously refine my skills through real-world projects and ongoing learning.</li>
            <li >My portfolio demonstrates a balance of technical prowess and creative design, 
                reflecting my passion for building seamless digital experiences.</li>
          </div>
       </div>
    </div>
  )
}

export default Skillcomponent