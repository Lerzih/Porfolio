import "../css/Navigation.css";
import { useState } from 'react';

function Navigation() {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen + "Holi");
  };

  return (
    <div className="navigation">
      <div className="burger-menu" onClick={toggleMenu}>
        <label className="container">
          <input type="checkbox" />
          <div className="checkmark">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
      </div>
      <nav className="navMenu">
        <div>
          <a href="#about-me">About me</a>
        </div>
        <div>
          <a href="#skills">Skills</a>
        </div>
        <div>
          <a href="#experience">Experience</a>
        </div>
        <div>
          <a href="#projects">Projects</a>
        </div>
        <div>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </div>
    
  );
}

export default Navigation;
