import React from "react";

import linkedIn from "../images/linkedIn.svg";
import instagram from "../images/instagram.svg";
import behance from "../images/behance.svg";
import Dribble from "../images/Dribble.svg";


export function Contacts() {
  return (
    <div className="contacts" id="contacts">
      <div className="container">
        <div className="content">
          <div className="title">Contacts</div>
          <div className="first-title">
            <p>Want to know more or just chat?</p>
            You are welcome!
          </div>
          <button>Send message</button>
          <div className="links">
            <a href="#">
              <img src={linkedIn} alt="" />
            </a>
            <a href="#">
              <img src={instagram} alt="" />
            </a>
            <a href="#">
              <img src={behance} alt="" />
            </a>
            <a href="#">
              <img src={Dribble} alt="" />
            </a>
          </div>
          <div className="text">
            Like me on
            <br />
            LinkedIn, Instagram, Behance, Dribble
          </div>
        </div>
      </div>
    </div>
  );
}
