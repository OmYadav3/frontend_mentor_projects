import "./App.css";
import IconDiceSvg from "./public/images/icon-dice.svg";
import DestopImg from "./public/images/pattern-divider-desktop.svg";
import React, { useState, useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState("Loading...");

  const URL = "https://api.adviceslip.com/advice";

  const getAdvice = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    setAdvice(data.slip.advice);
  };
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <div className="main-container">
        <div className="main-box bg">
          <h6 className="heading ">ADVICE #117</h6>
          <h1 className="bg ">{advice}</h1>
          <div className="bg">
            <img 
             className="inner-img bg"
             src={DestopImg} 
             alt="Not found"
             ></img>
          </div>
        </div>
            <img
              className="outer-img "
              onClick={getAdvice}
              src={IconDiceSvg}
              alt="Not found"
            ></img>
         
      </div>
    </div>
  );
}

export default App;
