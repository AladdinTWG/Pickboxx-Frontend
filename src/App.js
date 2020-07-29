import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
import TopBoxxes from "./components/TopBoxxes.js";
import BoxxDetails from "./components/BoxxDetails.js";
import Explore from "./components/Explore.js";
import Leaderboards from "./components/Leaderboards.js"
import TopPickerPage from "../../pickboxx-frontend/src/components/TopPickerPage";
import LoginPage from "./components/login.js";
import DropdownButton from "./components/dropdownbutton";
import MarketPlace from "./components/marketplace";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/explore">
          <Explore />
        </Route>
        <Route exact path="/leaderboards">
          <Leaderboards/>
        </Route>
        <Route exact path="/TopBoxxes">
          <TopBoxxes />
        </Route>
        <Route exact path="/BoxxDetails">
          <BoxxDetails />
        </Route>
        <Route exact path="/TopPickerPage">
          <TopPickerPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path = "/marketplace">
          <MarketPlace />
        </Route>
      </div>
    );
  }
}

export default App;

