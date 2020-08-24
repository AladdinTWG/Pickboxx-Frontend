import React from "react";
import {Link} from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="left-div"></div>
      <div className="right-div"></div>
      <img className="pickboxx-logo" src="https://lh3.googleusercontent.com/-zC-44BJGQN0/X0P1r5IgJgI/AAAAAAAAADE/MYtrI683VHA88mQ_fsKMN5TfPVpHamMCACK8BGAsYHg/s512/pickboxx-logo%2Btransparent.png" alt="" />
      <h1 className="slogan">Sell it. Buy it. Sell it.</h1>
      <div className="info-container">
      <div className="info1">
        <h1 className="sell">Sell your product here</h1>
        <p>If you own a product post your products here for pickers to buy</p>
      </div>
      <div className="info2">
        <h1 className="sell">Pick a product to post</h1>
        <p>Pick a product to buy and show off to the world</p>
      </div>
      <div className="info3">
        <h1 className="sell">Compete with others</h1>
        <p>Rack up as many points as you can to reach the top of the leaderboards!</p>
      </div>
      </div>
      <div className="demo-container">
        <div className="demo1">
        <img className="demo-img" src={"../Screen Shot 2020-08-21 at 8.02.52 PM.png"}/>
        </div>
        <div className="demo2">
        <img className="demo-img" src={"../Screen Shot 2020-08-21 at 8.06.41 PM.png"}/>
        </div>
        <div className="demo3">
        <img className="demo-img" src={"../Screen Shot 2020-08-21 at 7.58.09 PM.png"}/>
        </div>
      </div>
      <Link to="/login">
      <button className="join-now"><span className="join">Join</span><span className="now">Now</span></button>
      </Link>
    </div>
  );
}

export default LandingPage;
