import React, { useState, useEffect } from 'react';
import { Bar, Line, Scatter, Polar } from 'react-chartjs-2';
import MyContext from './context'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from 'react-router-dom'





export function Launch() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const { slug } = useParams();


  const shoe = shoes[slug];

  const { name, img ,price } = shoe;

  return (
    <MyContext.Consumer>
      {(props) => {

        return (
          <div>
            <h1>{name}</h1>
            <h4>{price}</h4>

            <img src={img} height={400} width={600} alt="No Internet Connection" style={{ boxShadow: "0 0 5px #808080", borderRadius: "5px" }} ></img>
            <br/>
            <button className="btn-addToCart">Add To Cart</button>
          </div >
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