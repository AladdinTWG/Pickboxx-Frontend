import React from "react";

const ProfileInfo = () => {
  return (
    // class names should be changed
    <div className="profile-info-container">
      {" "}
      <div className="profile-pic-and-name-section">
        <img
          className="profile-picture"
          src="https://pbs.twimg.com/media/EYF2qfAXYAYEHtI.jpg"
          alt="placeholder"
        />
        <p className="profile-username">bryantmoreland27</p>
      </div>
      <div className="profile-stats-section">
        <p className="profile-stat-item">
          Score: <span>88</span>
        </p>

        <p className="profile-stat-item">
          Current Ranking: <span>142</span>
        </p>

        <p className="profile-stat-item">
          Bio:{" "}
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a
            laudantium ea at temporibus odio similique eius harum? Blanditiis,
            vero.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
