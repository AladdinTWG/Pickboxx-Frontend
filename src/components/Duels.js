import React from "react";
import Header from "./Header.js";

function Duels() {
  return (
    <div className="duels">
      <Header />
      <div className="boxx-array">
        <div className="boxx-container">
          <div className="boxx">
            <img
              className="duel-profile-comment"
              src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
              alt=""
            />
            <img
              className="bracket-icon"
              src="https://icon-library.com/images/tournament-icon/tournament-icon-9.jpg"
            />
            <input className="duel-checkbox" type="checkbox" />
          </div>
        </div>
        <div className="boxx-container">
          <div className="boxx-mirror">
            <img
              className="duel-profile-comment-mirror"
              src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
              alt=""
            />
            <img
              className="bracket-icon-mirror"
              src="https://icon-library.com/images/tournament-icon/tournament-icon-9.jpg"
            />
            <input className="duel-checkbox-mirror" type="checkbox" />
          </div>
        </div>
        <div className="boxx-container">
          <div className="boxx">
            <img
              className="duel-profile-comment"
              src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
              alt=""
            />
            <img
              className="bracket-icon"
              src="https://icon-library.com/images/tournament-icon/tournament-icon-9.jpg"
            />
            <input className="duel-checkbox" type="checkbox" />
          </div>
        </div>
        <div className="boxx-container">
          <div className="boxx-mirror">
            <img
              className="duel-profile-comment-mirror"
              src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
              alt=""
            />
            <img
              className="bracket-icon-mirror"
              src="https://icon-library.com/images/tournament-icon/tournament-icon-9.jpg"
            />
            <input className="duel-checkbox-mirror" type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Duels;
