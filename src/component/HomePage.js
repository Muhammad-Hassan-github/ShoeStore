import React, { useState } from 'react';
import { Bar, Line, Scatter, Polar } from 'react-chartjs-2';
import MyContext from './context'
import Launch from '../component/launch'



import { Link, Outlet } from "react-router-dom";


export default function HomePage() {

  return (
    <MyContext.Consumer>
      {(props) => {

        return (
          <div className="homePage">
            <ul style={{listStyleType:"none"}}>
              {Object.entries(shoes).map(([slug, {name,img}]) => {
                console.log(name)
                return (
                  <li key={slug}>
                    <Link style={{textDecoration:"none",color:"white"}} to={`/contact/${slug}`}>
                    <h1 >{name}</h1>
                    <img src={img}  height={400} alt="No Internet Connection" width={600} style={{boxShadow: "0 0 5px #808080" ,borderRadius:"5px"}} />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      }}

    </MyContext.Consumer >
  );
}

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
   "air-jordan-3-valor-green": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london-pink": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-red": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
  
};
