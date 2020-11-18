import React, { useEffect } from "react";
import { useStore } from "effector-react";
import { skillItems, getSkillsItem } from "../effector/model";

import star from "../images/Star.svg";


export function Skills() {
  const skills = useStore(skillItems);
  useEffect(() => {}, [skills]);
  useEffect(() => {
    getSkillsItem();
  }, []);
  return (
    <div className="skills" id="skills">
      <div className="container">
        <div className="content">
          <div className="title">Skills</div>
          <div className="first-title">I work in such programs as</div>
          <div className="programs">
            {skills.map((item) => (
              <div className="item" key={item.key}>
                <img className="logo-img" src={item.logoSvg} alt="" />
                <div className="name">{item.name}</div>
                <div className="stars">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
