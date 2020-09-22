import React, { useState } from 'react';
import { Bar, Line, Scatter, Polar } from 'react-chartjs-2';
import MyContext from './context'




export default function About() {

  return (
    <MyContext.Consumer>
      {(props) => {

        return (
          <div className="about">
            <h1>About Page</h1>
          </div>

        )

      }}

    </MyContext.Consumer >
  );
}