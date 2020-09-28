import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';
import MyContext from "../component/context";
import iState from './state';

export default function HomePage() {

  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [counter, setCounter] = React.useState(1);

  const [paragraph, setParagraph] = useState();
  const [onStart, setOnStart] = useState(false);
  const [flag, setFlag] = React.useState(true);
  const [getWords, setGetWords] = React.useState();
  // const [typed, setTyped] = React.useState(["Hassan "]);

  const [firtTime, setFirstTime] = React.useState(true);



  const handleChange = (event) => {

    let typedWord = event.target.value.split(" ")

    if (firtTime) {
      document.getElementById("ParagraphId").innerHTML = " ";
      getWords.forEach((element, index) => {
        document.getElementById("ParagraphId").innerHTML += `<span id=${index} >${element}</span> `;
      })
      setFirstTime(false)
    }

    getWords.forEach((element, index) => {


      if (event.key == " ") {


        if (index < typedWord.length) {
          console.log(element, typedWord[index])
          document.getElementById(index).style.background = "none"
          document.getElementById(typedWord.length).style.background = "#efefef"

          if (element === typedWord[index]) {
            document.getElementById(index).style.color = "Green"

          }
          else {
            document.getElementById(index).style.color = "Red"

          }

        } else if(index > typedWord.length ){

          document.getElementById(index).style.color = "black"
          document.getElementById(index).style.background = "none"

        }



      }




    });



    if (flag) {
      setInterval(() => {
        setCounter(counter => {
          setCounter(counter + 1)
          setSeconds(parseInt(counter % 60))
          setMinutes(parseInt(counter / 60))
          setHours(parseInt(counter / 3600))
        });

      }, 1000);
      setFlag(false)
    }

  };


  function pad(n) {
    return (n < 10 ? '0' : '') + n;
  }


  let genrateParagraph = () => {
    setParagraph(iState[Math.floor(Math.random() * 11) + 1])
  }

  let changeValue = (e) => {
    setParagraph(e.target.value)


  }
  let startHandle = () => {

    setOnStart(true)
    setGetWords(paragraph.split(" "))

  }


  return (
    <MyContext.Consumer>
      {(props) => {

        return (
          <div className="homePage">
            {/* <div className="time"> */}
            <div id="countdown">
              <div id='tiles'><span>{pad(hours)}</span><span>{pad(minutes)}</span><span>{pad(seconds)}</span></div>
              <div class="labels">
                <li>Hours</li>
                <li>Mins</li>
                <li>Secs</li>
              </div>
            </div>
            {/* </div> */}
            <p id="para"></p>

            <div className="header">
              <Button variant="contained" color="primary" onClick={genrateParagraph} className="btn-genrateParagraph">
                Genrate Paragraph
              </Button>
            </div>
            <div className="MainBox">
              <Paper elevation={3} className="textBox2">

                {(onStart) ?
                  <p className="paragraphfield" id="ParagraphId" >

                    {paragraph}

                  </p>
                  :
                  <TextField
                    className="textfield"
                    id="genrateParagraph"
                    label="Typing"
                    multiline
                    rows={19}
                    variant="outlined"
                    value={paragraph}

                    onChange={changeValue}


                    size={40}
                  />

                }

              </Paper>


              <Paper elevation={3} className="textBox2" >

                <TextField
                  className="textfield"
                  id=""
                  label="Typing"
                  multiline
                  rows={19}
                  // defaultValue="Default Value"
                  variant="outlined"
                  onKeyDown={handleChange}
                  onClick={startHandle}

                />

              </Paper>

            </div>
          </div>
        )
      }}

    </MyContext.Consumer >
  );
}
