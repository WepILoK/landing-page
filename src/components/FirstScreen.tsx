import React from "react";

import photo from "../images/photo.jpg";
import photoMb from "../images/photo-mb.jpg";


export function FirstScreen() {
  return (
    <div className="first-screen" id="home">
      <div className="container">
        <div className="content">
          <div className="name">
            Denis
            <br /> Novik
          </div>
          <div className="information">
            UX | UI designer
            <br />
            24 years old, Minsk
          </div>
          <div className="lang">
            <div>RU</div> | ENG
          </div>
        </div>
        <div>
          <img className="image-des" src={photo} alt="" />
          <img className="image-mb" src={photoMb} alt="" />
        </div>
      </div>
    </div>
  );
}
