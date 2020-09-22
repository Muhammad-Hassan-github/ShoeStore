import React, { useState } from 'react';
import { Bar, Line, Scatter, Polar } from 'react-chartjs-2';
import MyContext from './context'
import Launch from '../component/launch'



import { Link, Outlet } from "react-router-dom";


export default function Contact() {

  return (
    <MyContext.Consumer>
      {(props) => {

        return (
          <div className="contact_page"> 
           

           <div class="container">

<h1 class="brand"><span>Maxenius Web Design</span></h1>

<div class="wrapper">


  <div class="company-info">
    <h3>Maxenius Web Design</h3>

    <ul>
      <li><i class="fa fa-road"></i> 44 Main Street</li>
      <li><i class="fa fa-phone"></i> (555) 555-5555</li>
      <li><i class="fa fa-envelope"></i> test@Maxenius.com</li>
    </ul>
  </div>
 
  <div class="contact">
    <h3>E-mail Us</h3>

    <form id="contact-form">

      <p>
        <label>Name</label>
        <input type="text" name="name" id="name" required />
      </p>

      <p>
        <label>Company</label>
        <input type="text" name="company" id="company" />
      </p>

      <p>
        <label>E-mail Address</label>
        <input type="email" name="email" id="email" required />
      </p>

      <p>
        <label>Phone Number</label>
        <input type="text" name="phone" id="phone" />
      </p>

      <p class="full">
        <label>Message</label>
        <textarea name="message" rows="5" id="message"></textarea>
      </p>

      <p class="full">
        <button type="submit">Submit</button>
      </p>

    </form>
   
  </div>


</div>

</div>
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
  }
};
