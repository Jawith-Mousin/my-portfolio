import React, { useState } from "react";
import "./Headerstyless.css";

const Header = () => {
  const scrollToSection = (top) => {
    window.scrollTo({ top, behavior: "smooth" });
  };

  const Contact = () => {
    window.open(
      "https://www.linkedin.com/in/mohamed-jawith-mousin-419728234/",
      "_blank"
    );
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-component">
      <h1 className="header-title">Portfolio</h1>

     
      {<div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>}

      {/* Navigation for both Desktop and Mobile */}
      <nav className={`header-navigation ${menuOpen ? "active" : ""}`}>
        <ul>
          <li onClick={() => { menuOpen ? scrollToSection(0)  :scrollToSection(0); setMenuOpen(false); }}>Home</li>
          <li onClick={() => { menuOpen ? scrollToSection(700)  :scrollToSection(800); setMenuOpen(false); }}>About</li>
          <li onClick={() => { menuOpen ? scrollToSection(1800)  :scrollToSection(1630); setMenuOpen(false); }}>Projects</li>
          <li onClick={() => { menuOpen ? scrollToSection(3000)  :scrollToSection(2450); setMenuOpen(false); }}>Skills</li>
          <li onClick={() => { Contact(); setMenuOpen(false); }}>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
