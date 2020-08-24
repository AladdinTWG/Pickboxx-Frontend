import React, { Component } from "react";
import ProfileInfo from "./ProfileInfo.js";
import ProfileNavBar from "./ProfileNav.js";
import { Route, Link } from "react-router-dom";
import ProfilePhotosVideosSection from "./ProfilePhotosVideosSection.js";
import ProfileBoxxesSection from "./ProfileBoxxesSection.js";
import DropdownButton from "./DropdownButton.js";
import Header from "./Header.js";

class Container extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="profile-container">
        <Header />
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
