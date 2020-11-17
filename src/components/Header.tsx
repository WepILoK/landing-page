import React, {useState} from "react";

import burger from "../images/burger.svg";
import close from "../images/close.svg";


export function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const toggleActive = () => {
    setMenuActive(!menuActive)
  }
  return (
    <div className="header">
      <div className="container">
        <div className={menuActive ? "burger active" : "burger"} onClick={toggleActive}>
          <img className="burger-svg" src={burger} alt="" />
          <img className="close-svg" src={close} alt="" />
                <span></span>
        </div>
        <nav>
          <ul className={menuActive ? "list active" : "list"} onClick={toggleActive}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#aboutme">About me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
            <li>
              <div className="lang">
                <div>RU</div> | ENG
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
