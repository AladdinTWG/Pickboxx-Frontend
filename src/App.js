import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="App">
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
