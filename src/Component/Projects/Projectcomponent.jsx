import React from 'react';
import './Projectcomponent.css'

const Projectcomponent = () => {


const Projects = [
    {
        title : "SkyPaper",
        description : "A dynamic app that displays weather updates and news articles based on the searched city.",
        techStack : ["React", "API Integration", "CSS"],
        codeLink : "https://github.com/Jawith-Mousin/skypaper-website",
        image: "/Static/skypaper-website-image-of-paris.png",
    },
    {
        title: "Expense Management",
        description: "A simple and efficient expense tracking system with category-wise spending insights.",
        techStack: ["React", "Redux", "Firebase"],
        codeLink: "https://github.com/Jawith-Mousin/expense-management",
        image: "/Static/Expense-management-website-image.jpeg",
      },
]


    
return (
    <div className='project-section'>
     <h1 className='project-heading'>Projects</h1>
     <p className='project-intro'>Here are some of my best works showcasing my development and design skills.</p>
     <div className='project-container'>
        {Projects.map(({title,description,techStack,codeLink,image},index) => (
            <div key={index} className='project-card'>
                <img src={image} alt={title} className='project-img'/>
                <h2 className='project-title'>{title}</h2>
                <p className='project-description'>{description}</p>
                <p className='project-techstack'>
                   <strong>Tech Used :</strong>{techStack.join(",")} 
                </p>
                <div className='project-buttons'>
                    <a href={codeLink} className='project-btn' target='_blank'>View Code</a>
                </div>    
            </div>    
        ))}
     </div>
    </div>
  )
}

export default Projectcomponent