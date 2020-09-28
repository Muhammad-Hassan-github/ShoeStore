import React, {
  useReducer,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import "./App.css";
import MyContext from "./component/context";
import { Lines } from "react-preloaders";
import HomePage from "./component/HomePage";


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



      {/* <Lines animation="slide-left" customLoading={loading} /> */}

      <HomePage />
    </MyContext.Provider>
  );
}

export default App;
