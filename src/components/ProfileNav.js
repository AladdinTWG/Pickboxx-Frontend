import React from "react";

import { Link } from "react-router-dom";

const ProfileNavBar = () => {
  return (
    // change class names
    <div className="profile-photo-video-boxx-buttons">
      {" "}
      <Link className="profile-nav-button" to="/profile/photos-videos">
        Photos/Videos
      </Link>
      <Link to="/profile/boxxes" className="profile-nav-button">
        Boxxes
      </Link>{" "}
    </div>
  );
};

export default ProfileNavBar;
