import React from 'react';
import './Herosection.css'

const Herosection = () => {
  
  const Project = () => {
    window.scrollTo({top : 1630,behavior: 'smooth'})
  }  
  
  const Reachme = () => {
    window.open('https://www.linkedin.com/in/mohamed-jawith-mousin-419728234/','_blank');
  }
  
  
return (
  
    <div className='hero-section-container'>
      <div className='hero-section-inner-container'>
         <h1 className='hero-section-name'>Hi,I am Jawith Mousin,</h1>
          <h3 className='hero-section-title'>Web Developer & Designer</h3>
            <p className='hero-section-tagline'>Turning Ideas into Reality, One Pixel at a Time.</p>
            <div className='hero-section-button-container'>
                  <button onClick={Reachme} className='hero-section-contact-btn'>Reach Me</button>
                  <button className='hero-section-view-btn' onClick={Project}>View Projects</button>
            </div>
      </div>
       <div className='img-container'>
        <img src={'/Public/Static/dev-productivity.svg'} alt='Developer-animation' className='hero-image'/>
       </div>
    </div>
  )
}

export default Herosection