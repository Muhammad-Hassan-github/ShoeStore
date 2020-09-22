import React, {
  useReducer,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import "./App.css";

import HomePage from "./component/HomePage";
import About from "./component/About";
import Contact from "./component/Contact";
import NavBar from "./component/NavBar";
import MyContext from "./component/context";
import { Launch } from "./component/launch";

import { Lines } from "react-preloaders";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    setLoading(false);
  }, []);

  const [globalData, setGlobalData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [cityName, setCityName] = useState([]);
  const [confirmed, setConfirmed] = useState();
  const [deaths, setDeaths] = useState();
  const [active, setActive] = useState();
  const [recovered, setRecovered] = useState();
  const [loading, setLoading] = useState(true);
  const [dataCity, setDataCity] = useState("Gloable");

  return (
    <MyContext.Provider
      value={{
        state: {
          cityData,
          globalData,
          confirmed,
          active,
          deaths,
          recovered,
          cityName,
          dataCity,
        },
        setCityData: setCityData,
        setActive: setActive,
        setConfirmed: setConfirmed,
        setDeaths: setDeaths,
        setRecovered: setRecovered,
        setCityName: setCityName,
        setLoading: setLoading,
        setDataCity: setDataCity,
      }}
      >
        <BrowserRouter>
      <NavBar />
      <div style={{margin:"0px auto" , textAlign:"center"}}>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact/:slug" component={Launch} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={HomePage} />
            <Route path="/" component={HomePage} />
          </Switch>
      </div>
        </BrowserRouter>
      <Lines animation="slide-left" customLoading={loading} />
    </MyContext.Provider>
  );
}

export default App;
