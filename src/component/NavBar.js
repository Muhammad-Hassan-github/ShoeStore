import React, { useState, useDebugValue } from 'react';
import { Bar, Line, Scatter, Polar } from 'react-chartjs-2';
import MyContext from './context'
import { Link } from "react-router-dom";

export default function NavBar() {

    let chageCSS = () => {
        document.getElementById("abc").style.setProperty('height', '0px');

    }
    let changeCSS2 = () => {
        if (document.getElementById("abc").style.height == "" || document.getElementById("abc").style.height == "0px") {
            document.getElementById("abc").style.setProperty('height', 'calc(100vh - 50px');
        }
        else {
            document.getElementById("abc").style.setProperty('height', '0px');
        }
    }

    return (
        <MyContext.Consumer>
            {(props) => {

                return (
                    <div class="nav">
                        <input type="checkbox" id="nav-check" />
                        <div class="nav-header">
                            <div class="nav-title">
                                SHOES
                    </div>
                        </div>
                        <div class="nav-btn">
                            <label for="nav-check" onClick={changeCSS2}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        </div>

                        <div className="nav-links" id="abc">
                            <Link onClick={chageCSS} to="/" >HOME</Link>
                            <Link onClick={chageCSS} to="/about" >ABOUT</Link>
                            <Link onClick={chageCSS} to="/contact" >CONTACT US</Link>

                        </div>
                    </div>
                )
            }}

        </MyContext.Consumer >
    );
}