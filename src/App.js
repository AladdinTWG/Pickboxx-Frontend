import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
import TopBoxxes from "./components/TopBoxxes.js";
import BoxxDetails from "./components/BoxxDetails.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="header-flex">
          <img className="pickboxx-logo" src={"../Logo.jpeg"} alt="" />
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link>Marketplace</Link>
          <Link>Map</Link>
          <Link>Leaderboards</Link>
          <img
            className="profile-icon"
            src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
            alt=""
          />
        </div>
        <div className="boxx-search-div">
          <input className="boxx-search" type="text"></input>
          <div className="boxx-nav">
            <Link>#somethingPopular</Link>
            <Link to="TopBoxxes">Top Boxxes</Link>
            <Link>Duels</Link>
            <Link>Top Pickers</Link>
          </div>
        </div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/explore">
          <Explore />
        </Route>
        <Route exact path="/TopBoxxes">
          <TopBoxxes />
        </Route>
        <Route exact path="/BoxxDetails">
          <BoxxDetails />
        </Route>
      </div>
    );
  }
}

export default App;
