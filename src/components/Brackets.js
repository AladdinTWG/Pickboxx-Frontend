import React from "react";
import Header from "./Header.js";

function Brackets() {
  return (
      <div className="brackets">
      <Header/>
    <div className="bracket-division1">
      <div className="player1"></div>
      <div className="player2"></div>
      <div className="player3"></div>
      <div className="player4"></div>
      <div className="player5"></div>
      <div className="player6"></div>
      <div className="player7"></div>
      <div className="player8"></div>
    </div>
    <div className="bracket-lines">
    <div className="bracket-line" id="bl1"></div>
    <div className="bracket-line" id="bl2"></div>
    <div className="bracket-line" id="bl3"></div>
    <div className="bracket-line" id="bl4"></div>
    </div>
    <div className="bracket-division2">
    <div className="semi1"></div>
    <div className="semi2"></div>
    <div className="semi3"></div>
    <div className="semi4"></div>
    </div>
    <div className="bracket-division3">
    <div></div>
    <div></div>
    </div>
    <div className="bracket-division4">
    <div></div>
    </div>
    </div>
  );
}

export default Brackets;
