import React, { useState } from 'react';
import { Bar, Line, Scatter, Polar } from 'react-chartjs-2';
import MyContext from './context'



export default function Covid_Chart() {

  return (
    <MyContext.Consumer>
      {(props) => {

        return (
          <div>
            <h1>Home Page</h1>
          </div>

        )

      }}

    </MyContext.Consumer >
  );
}