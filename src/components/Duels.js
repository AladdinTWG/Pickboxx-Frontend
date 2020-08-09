import React from "react";
import Header from "./Header.js";

function Duels() {
  return (
    <div className="duels">
      <Header />
      <div className="boxx" id="box1">
        <img
          className="duel-profile"
          src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
          alt=""
        />
        <img
          className="bracket-icon"
          src="https://icon-library.com/images/tournament-icon/tournament-icon-9.jpg"
          alt=""
        />
        <input className="duel-checkbox" type="checkbox" />
      </div>
      <div className="boxx" id="box2">
        <img
          className="duel-profile-mirror"
          src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
          alt=""
        />
        <img
          className="bracket-icon-mirror"
          src="https://icon-library.com/images/tournament-icon/tournament-icon-9.jpg"
          alt=""
        />
        <input className="duel-checkbox-mirror" type="checkbox" />
        <div className="prompt">
          <p>Check a side to lead them to victory!</p>
        </div>
        <div className="duel-comments2">
          <div className="single-duel-comment">
          <img
            className="duel-profile-comment"
            src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
            alt=""
          />
          <p>Generic comment</p>
          </div>
          <div className="single-duel-comment">
          <img
            className="duel-profile-comment"
            src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
            alt=""
          />
          <p>Generic comment</p>
          </div>
          <div className="single-duel-comment">
          <img
            className="duel-profile-comment"
            src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
            alt=""
          />
          <p>Generic comment</p>
          </div>
        </div>
      </div>
      <div className="boxx" id="box3">
        <img
          className="duel-profile"
          src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
          alt=""
        />
        <img
          className="bracket-icon"
          src="https://icon-library.com/images/tournament-icon/tournament-icon-9.jpg"
          alt=""
        />
        <input className="duel-checkbox" type="checkbox" />
      </div>
      <div className="boxx" id="box4">
        <img
          className="duel-profile-mirror"
          src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
          alt=""
        />
        <img
          className="bracket-icon-mirror"
          src="https://icon-library.com/images/tournament-icon/tournament-icon-9.jpg"
          alt=""
        />
        <input className="duel-checkbox-mirror" type="checkbox" />
        <div className="prompt">
          <p>Check a side to lead them to victory!</p>
        </div>
        <div className="duel-comments2">
          <div className="single-duel-comment">
          <img
            className="duel-profile-comment"
            src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
            alt=""
          />
          <p>Generic comment</p>
          </div>
          <div className="single-duel-comment">
          <img
            className="duel-profile-comment"
            src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
            alt=""
          />
          <p>Generic comment</p>
          </div>
          <div className="single-duel-comment">
          <img
            className="duel-profile-comment"
            src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
            alt=""
          />
          <p>Generic comment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Duels;
