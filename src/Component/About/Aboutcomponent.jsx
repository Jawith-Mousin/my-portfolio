import React from 'react';
import './Aboutcomponent.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Aboutcomponent = () => {
  return (
    <div className='about-component-container'>
      <div className='image-container'>
      <DotLottieReact className='img-animation'  src="/Public/Static/Animation - 1740295145856.json" loop autoplay/>
      </div>
      <div className='Right-sidepart'>  
      <div className='About-me'>
      <h1 className='about-me-heading'>About Me</h1>    
      <p className='about-me-details'>👋 Hey, I'm Jawith Mousin—an innovative React Developer & Designer with a passion for building seamless,
      interactive web experiences. I specialize in crafting dynamic UIs, integrating smooth animations, and
      continuously evolving my skills.</p>
      </div>
      <div className='about-component-second-part'>
        <h1 className='about-component-second-part-title'>🚀 What I Do:</h1>
        <li className='about-component-frontend-development'>Frontend Development (React, JavaScript, CSS, HTML)</li>
        <li className='about-component-UIUX-design'>UI/UX Design (Figma, Motion UI, CSS Animations)</li>
        <li className='about-component-beyond-web'>Exploring Beyond Web (VR & Future Tech Aspirations)</li>
      </div>
      <p className='about-me-other-detail'>🌟 Currently, I'm working on mastering full-stack development and pushing the boundaries of web interactivity.</p>
      </div>
    </div>
    
  )
}

export default Aboutcomponent