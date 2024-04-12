import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="navigation">
      <div class="navigation__wrapper">
      <h1> Portfolio </h1>
      <nav className="navigation__navbar">
        <ul className="navigation__list">
          <li className="navigation__active">
            <a className="navigation__item">Arpita</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__item">Padma</a>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Navbar;
