import React, { useState } from 'react';
import { Bar, Line, Scatter, Polar } from 'react-chartjs-2';
import MyContext from './context'

export default function Covid_Chart() {

  return (
    <MyContext.Consumer>
      {(props) => {
     
        return (
            <div class="nav">
            <input type="checkbox" id="nav-check"/>
            <div class="nav-header">
              <div class="nav-title">
                JoGeek
              </div>
            </div>
            <div class="nav-btn">
              <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
            
            <div class="nav-links">
              <a href="" target="_blank">Github</a>
              <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
              <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
              <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
              <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
            </div>
          </div>
        )
      }}

    </MyContext.Consumer >
  );
}