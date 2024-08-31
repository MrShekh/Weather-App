import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/MrShekh">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://shekhsportfolio.netlify.app/#">
          Shekh Asif
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://www.raiuniversity.edu/">
          Rai University
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
