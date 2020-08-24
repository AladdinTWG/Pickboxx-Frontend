import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home.js";
import TopBoxxes from "./components/TopBoxxes.js";
import BoxxDetails from "./components/BoxxDetails.js";
import Explore from "./components/Explore.js";
import Leaderboards from "./components/Leaderboards.js";
import Duels from "./components/Duels.js";
import SomethingPopular from "./components/SomethingPopular.js"
import TopPickerPage from "./components/TopPickerPage.js";
import Login from "./components/Login.js";
import Marketplace from "./components/Marketplace.js";
import Container from "./components/Container.js";
import LandingPage from "./components/LandingPage.js";
import Brackets from "./components/Brackets.js";
import PaymentMethod from "./components/PaymentMethod.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/">
        <LandingPage/>
        </Route>
        <Route exact path="/home">
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
        <Route exact path="/brackets">
        <Brackets/>
        </Route>
        <Route exact path="/payment-method">
        <PaymentMethod/>
        </Route>
      </div>
    );
  }
}

export default App;
