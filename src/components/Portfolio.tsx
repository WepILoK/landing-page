import React from "react";

import newCollection from "../images/newcollection.jpg";
import reebok from "../images/reebok_web.jpg";
import braun from "../images/braun.jpg";


export function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="content">
          <div className="title">Portfolio</div>
          <div className="item">
            <img src={newCollection} alt="" />
            <div className="first-title">Online fashion store - Homepage</div>
          </div>
          <div className="item">
            <img src={reebok} alt="" />
            <div className="first-title">Reebok Store - Concept</div>
          </div>
          <div className="item">
            <img src={braun} alt="" />
            <div className="first-title">Braun Landing Page - Concept</div>
          </div>
        </div>
      </div>
    </div>
  );
}
