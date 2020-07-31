import React, { Component } from "react";
import ProfileInfo from "./ProfileInfo.js";
import ProfileNavBar from "./ProfileNav.js";
import { Route, Link } from "react-router-dom";
import ProfilePhotosVideosSection from "./ProfilePhotosVideosSection.js";
import ProfileBoxxesSection from "./ProfileBoxxesSection.js";
import DropdownButton from "./DropdownButton.js";

class Container extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="profile-container">
          <div className="header-flex">
          <img className="pickboxx-logo" src={"../Logo.jpeg"} alt="" />
        <Link className="navbutton" to="/">
          Home
        </Link>
        <Link className="navbutton" to="/explore">
          Explore
        </Link>
        <Link className="navbutton" to="/marketplace">Marketplace</Link>
        <Link className="navbutton">Map</Link>
        <Link className="navbutton" to="/leaderboards">
          Leaderboards
        </Link>
        <DropdownButton />
        </div>
        <ProfileInfo />
        <ProfileNavBar />
        <Route
          exact
          path={["/profile/photos-videos", "/profile"]}
          render={() => <ProfilePhotosVideosSection />}
        />
        <Route
          exact
          path="/profile/boxxes"
          render={() => <ProfileBoxxesSection />}
        />
      </div>
    );
  }
}
export default Container;
