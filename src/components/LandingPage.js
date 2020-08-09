import React from "react";
import {Link} from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
      <img className="pickboxx-logo" src={"../Logo.jpeg"} alt="" />
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
        <p>Participate in duels to see who showed off best and win rewards from the product you're advertising</p>
      </div>
      </div>
      <div className="demo-container">
        <div className="demo1">
        <img className="demo-img" src="https://images.barrons.com/im-99873?width=620&size=1.5"/>
        </div>
        <div className="demo2">
        <img className="demo-img" src="https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2019/08/27/73ed2610-c8b9-11e9-b4e3-f796e392de6b_image_hires_223907.jpg?itok=z8ppYVA8&v=1566916753"/>
        </div>
        <div className="demo3">
        <img className="demo-img" src="https://image.cnbcfm.com/api/v1/image/105764935-coke-v-pepsi.jpg?v=1551293168"/>
        </div>
      </div>
      <Link to="/login">
      <button className="join-now">Join Now</button>
      </Link>
    </div>
  );
}

export default LandingPage;
