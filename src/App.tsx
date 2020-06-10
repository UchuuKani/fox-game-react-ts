import React from "react";
import "./style.css";
import "./sprites.css";

function App() {
  return (
    <div className="container">
      <div className="inner">
        <div className="game day"></div>
        <div className="fox hidden"></div>
        <div className="poop-bag hidden"></div>
        <div className="foreground-rain"></div>
        <div className="frame"></div>
        <div className="modal">
          <div className="modal-inner">Press the middle button to start</div>
        </div>
        <div className="buttons">
          <button className="btn left-btn"></button>
          <button className="btn middle-btn"></button>
          <button className="btn right-btn"></button>
        </div>
        <div className="icons">
          <div className="icon highlighted fish-icon"></div>
          <div className="icon poop-icon"></div>
          <div className="icon weather-icon"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
