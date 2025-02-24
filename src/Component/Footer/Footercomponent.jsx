import React from 'react';
import './Footercomponent.css';
import { FaArrowUp } from "react-icons/fa6";

const Footercomponent = () => {
  
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };  


  return (
    <div className='footer-section'>
        <div className='footer-content'>
        <p className='footer-copyrights'>© 2025 Portfolio. All rights reserved.</p>
        <div className="footer-navigation">
           <a href="https://www.linkedin.com/in/mohamed-jawith-mousin-419728234/" target='_blank' ><img  className="footer-icon" src={"/Public/Static/linkedin-icon-png.png"} alt="Linked-In-Logo" target="_blank" onClick="https://storyset.com/people?utm_source=chatgpt.com" /></a>
           <a href="https://github.com/Jawith-Mousin" target='_blank'><img  className='footer-icon'  src={"/Public/Static/github-logo.png"} alt="GitHub-Logo" /></a>
        </div>
        </div>
        <button className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </div>
  )
}

export default Footercomponent