import React from "react";
import "./Navbar.scss";
import { useNavigate } from 'react-router-dom'
import logo from "../../assests/logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleButtonOnClick = () => {
    console.log("grads");
    
  };
  const handlePortOnClick = () => {
    console.log("port");
    
  };
  return (
    <header className="navigation">
      <div className="navigation__wrapper">
      <img className="navigation__logo" src={logo} alt="Portfolio-logo" />
      <nav className="navigation__navbar">
        <ul className="navigation__list">
          {/* <li className="navigation__active">
            <a onClick={handleButtonOnClick} className="navigation__item">BrainStation Grads</a>
          </li>
          <li className="navigation__item">
            <a onClick={handlePortOnClick} className="navigation__item">Portfolio</a>
          </li> */}
          <li className="navigation__active">
            <button onClick={handleButtonOnClick} className="navigation__item navigation__button">BrainStation Grads</button>
          </li>
          <li className="navigation__item">
            <button onClick={handlePortOnClick} className="navigation__item navigation__button">Portfolio</button>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Navbar;
