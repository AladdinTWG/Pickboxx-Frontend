import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
import TopBoxxes from "./components/TopBoxxes.js";
import BoxxDetails from "./components/BoxxDetails.js";
import Explore from "./components/Explore.js";
import Leaderboards from "./components/Leaderboards.js";
import Duels from "./components/Duels.js";
import SomethingPopular from "./components/SomethingPopular.js"
import TopPickerPage from "./components/TopPickerPage.js";
// import DropdownButton from "./components/DropdownButton.js";
import Login from "./components/Login.js";
import Marketplace from "./components/Marketplace.js";
import Container from "./components/Container.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        {/* <div className="header-flex">
          <img className="pickboxx-logo" src={"../Logo.jpeg"} alt="" />
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link>Marketplace</Link>
          <Link>Map</Link>
          <Link to="/leaderboards">Leaderboards</Link>
          <DropdownButton />
          <img
            className="profile-icon"
            src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
            alt=""
          />
        </div>
        <div className="boxx-search-div">
          <input className="boxx-search" type="text"></input>
          <div className="boxx-nav">
            <Link to="/somethingPopular">#somethingPopular</Link>
            <Link to="/topboxxes">Top Boxxes</Link>
            <Link to="/duels">Duels</Link>
            <Link to="/TopPickerPage">Top Pickers</Link>
          </div>
        </div> */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/explore">
          <Explore />
        </Route>
        <Route exact path="/leaderboards">
          <Leaderboards/>
        </Route>
        <Route exact path="/topboxxes">
          <TopBoxxes />
        </Route>
        <Route exact path="/somethingPopular">
          <SomethingPopular/>
        </Route>
        <Route exact path="/duels">
        <Duels/>
        </Route>
        <Route exact path="/BoxxDetails">
          <BoxxDetails />
        </Route>
        <Route exact path="/TopPickerPage">
          <TopPickerPage />
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/marketplace">
        <Marketplace/>
        </Route>
        <Route exact path="/profile">
        <Container/>
        </Route>
      </div>
    );
  }
}

export default App;
