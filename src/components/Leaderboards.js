import React from "react";
import Header from "./Header.js";

function Leaderboards() {
  return (
    <div className="leaderboards-page">
      <Header />
      <div className="leaderboards">
        <ol className="rank">
          <li className="userposition">
            <img src="https://img.icons8.com/pastel-glyph/40/000000/user-male--v1.png" alt=""/>
            <div>user1</div>
          </li>
          <li className="userposition">
            <img src="https://img.icons8.com/pastel-glyph/40/000000/user-male--v1.png" alt=""/>
            <div>user2</div>
          </li>
          <li className="userposition">
            <img src="https://img.icons8.com/pastel-glyph/40/000000/user-male--v1.png" alt=""/>
            <div>user3</div>
          </li>
          <li className="userposition">
            <img src="https://img.icons8.com/pastel-glyph/40/000000/user-male--v1.png" alt=""/>
            <div>user4</div>
          </li>
          <li className="userposition">
            <img src="https://img.icons8.com/pastel-glyph/40/000000/user-male--v1.png" alt=""/>
            <div>user5</div>
          </li>
          <li className="userposition">
            <img src="https://img.icons8.com/pastel-glyph/40/000000/user-male--v1.png" alt=""/>
            <div>user6</div>
          </li>
          <li className="userposition">
            <img src="https://img.icons8.com/pastel-glyph/40/000000/user-male--v1.png" alt=""/>
            <div>user7</div>
          </li>
        </ol>
      </div>
      <div className="leaderboard-posts">
        <div className="boxx-column">
          <div className="boxx-container">
            <div className="boxx"></div>
            <div className="post-info">
              <img
                className="profile-comment"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <input className="boxx-description" placeholder="caption"></input>
            </div>
          </div>
          <div className="boxx-container">
            <div className="boxx"></div>
            <div className="post-info">
              <img
                className="profile-comment"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <input className="boxx-description" placeholder="caption"></input>
            </div>
          </div>
          <div className="boxx-container">
            <div className="boxx"></div>
            <div className="post-info">
              <img
                className="profile-comment"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <input className="boxx-description" placeholder="caption"></input>
            </div>
          </div>
          <div className="boxx-container">
            <div className="boxx"></div>
            <div className="post-info">
              <img
                className="profile-comment"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <input className="boxx-description" placeholder="caption"></input>
            </div>
          </div>
          <div className="boxx-container">
            <div className="boxx"></div>
            <div className="post-info">
              <img
                className="profile-comment"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <input className="boxx-description" placeholder="caption"></input>
            </div>
          </div>
          <div className="boxx-container">
            <div className="boxx"></div>
            <div className="post-info">
              <img
                className="profile-comment"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <input className="boxx-description" placeholder="caption"></input>
            </div>
          </div>
          <div className="boxx-container">
            <div className="boxx"></div>
            <div className="post-info">
              <img
                className="profile-comment"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <input className="boxx-description" placeholder="caption"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboards;
