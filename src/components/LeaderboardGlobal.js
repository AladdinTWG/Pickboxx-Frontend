import React from "react";
import Header from "./Header.js";
import { Link } from "react-router-dom";
import DropdownButton from "./DropdownButton";
import Chat from "./Chat.js";

function LeaderboardGlobal() {
  return (
    <div className="leaderboards-page-global">
      <div className="header-flex">
        <img
          className="pickboxx-logo"
          src="https://lh3.googleusercontent.com/-zC-44BJGQN0/X0P1r5IgJgI/AAAAAAAAADE/MYtrI683VHA88mQ_fsKMN5TfPVpHamMCACK8BGAsYHg/s512/pickboxx-logo%2Btransparent.png"
          alt=""
        />
        <Link className="navbutton" to="/home">
          Home
        </Link>
        <Link className="navbutton" to="/explore">
          Explore
        </Link>
        <Link className="navbutton" to="/marketplace">
          Marketplace
        </Link>
        <Link className="navbutton" to="/map">
          Map
        </Link>
        <Link className="navbutton" to="/leaderboards/local">
          Leaderboards
        </Link>
        <Chat />
        <DropdownButton />
      </div>
      <div className="leaderboards">
        <div className="leaderboard-toggle-button-container">
          <Link className="leaderboard-toggle-local" to="/leaderboards/local">
            Local
          </Link>
          <Link className="leaderboard-toggle-global" to="/leaderboards/global">
            Global
          </Link>
        </div>
        <div className="leaderboards-flex-row">
          <div className="leaderboards-column-container1 leaderboards-column-container">
            <div className="top3 num1-local">
              <img
                className="leaderboard-profile"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
              />
              <div className="user-info-and-score">
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <p className="placement1">1</p>
            </div>
            <div className="top3 num2-local">
              <img
                className="leaderboard-profile"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
              />
              <div className="user-info-and-score">
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <p className="placement2">2</p>
            </div>
            <div className="top3 num3-local">
              <img
                className="leaderboard-profile"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
              />
              <div className="user-info-and-score">
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <p className="placement3">3</p>
            </div>
            <div className="top3 leaderboards-flex-column1 leaderboards-flex-column">
              <div className="top10">
                <p>4</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>5</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>6</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>7</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>8</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>9</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>10</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
            </div>
          </div>
          <div className="leaderboards-column-container1 leaderboards-column-container">
            <div className="top3 num1-local">
              <img
                className="leaderboard-profile"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
              />
              <div className="user-info-and-score">
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <p className="placement1">1</p>
            </div>
            <div className="top3 num2-local">
              <img
                className="leaderboard-profile"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
              />
              <div className="user-info-and-score">
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <p className="placement2">2</p>
            </div>
            <div className="top3 num3-local">
              <img
                className="leaderboard-profile"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
              />
              <div className="user-info-and-score">
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <p className="placement3">3</p>
            </div>
            <div className="top3 leaderboards-flex-column1 leaderboards-flex-column">
              <div className="top10">
                <p>4</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>5</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>6</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>7</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>8</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>9</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>10</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
            </div>
          </div>
          <div className="leaderboards-column-container1 leaderboards-column-container">
            <div className="top3 num1-local">
              <img
                className="leaderboard-profile"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
              />
              <div className="user-info-and-score">
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <p className="placement1">1</p>
            </div>
            <div className="top3 num2-local">
              <img
                className="leaderboard-profile"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
              />
              <div className="user-info-and-score">
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <p className="placement2">2</p>
            </div>
            <div className="top3 num3-local">
              <img
                className="leaderboard-profile"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
              />
              <div className="user-info-and-score">
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <p className="placement3">3</p>
            </div>
            <div className="top3 leaderboards-flex-column1 leaderboards-flex-column">
              <div className="top10">
                <p>4</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>5</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>6</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>7</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>8</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>9</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>10</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
            </div>
          </div>
          <div className="leaderboards-column-container1 leaderboards-column-container">
            <div className="top3 num1-local">
              <img
                className="leaderboard-profile"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
              />
              <div className="user-info-and-score">
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <p className="placement1">1</p>
            </div>
            <div className="top3 num2-local">
              <img
                className="leaderboard-profile"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
              />
              <div className="user-info-and-score">
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <p className="placement2">2</p>
            </div>
            <div className="top3 num3-local">
              <img
                className="leaderboard-profile"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
              />
              <div className="user-info-and-score">
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <p className="placement3">3</p>
            </div>
            <div className="top3 leaderboards-flex-column1 leaderboards-flex-column">
              <div className="top10">
                <p>4</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>5</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>6</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>7</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>8</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>9</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
              <div className="top10">
                <p>10</p>
                <img
                  className="leaderboard-profile-top10"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Circle_%28transparent%29.svg/400px-Circle_%28transparent%29.svg.png"
                />
                <p>@user123</p>
                <p>1234123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardGlobal;
