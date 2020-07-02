import React, { Component } from "react";
import "./App.css";
import {Link} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="App">
      {/* <div className="header-flex">
      <img className="pickboxx-logo" src={"../Logo.jpeg"}/>
      <Link>Home</Link>
      <Link>Explore</Link>
      <Link>Marketplace</Link>
      <Link>Map</Link>
      <Link>Leaderboards</Link>
      </div> */}
      <div className="boxx-array">
      <div className="boxx-container">
        <div className="boxx"></div>
        <div className="post-info">
        <div className="profile-comment"></div>
        <input className="boxx-comment" placeholder="caption"></input>
        </div>
      </div>
      <div className="boxx-container">
        <div className="boxx"></div>
        <div className="post-info">
        <div className="profile-comment"></div>
        <input className="boxx-comment" placeholder="caption"></input>
        </div>
      </div>
      <div className="boxx-container">
        <div className="boxx"></div>
        <div className="post-info">
        <div className="profile-comment"></div>
        <input className="boxx-comment" placeholder="caption"></input>
        </div>
      </div>
      <div className="boxx-container">
        <div className="boxx"></div>
        <div className="post-info">
        <div className="profile-comment"></div>
        <input className="boxx-comment" placeholder="caption"></input>
        </div>
      </div>
      </div>
    </div>;
  }
}

export default App;
