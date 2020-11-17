import React from 'react';

import {Header} from "./components/Header";
import {Portfolio} from "./components/Portfolio";
import {Contacts} from "./components/Contacts";
import {Skills} from "./components/Skills";
import {FirstScreen} from "./components/FirstScreen";
import {AboutMe} from "./components/AboutMe";

import "./scss/main.scss";


export function App() {
  return (
    <div>
      <Header/>
      <FirstScreen/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <Contacts/>
    </div>  
  );
}


