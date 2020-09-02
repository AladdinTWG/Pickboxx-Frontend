import React from "react";
import Header from "./Header.js";
import { Link } from "react-router-dom";

function Leaderboards() {
  return (
    <div className="leaderboards-page">
      <Header />

      <div className="leaderboards">
        <div className="leaderboard-toggle-button-container">
          <Link className="leaderboard-toggle-local" to="/leaderboards/local">
            Local
          </Link>
          <Link
            className="leaderboard-toggle-global"
            to="/leaderboards/global"
          >
            Global
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Leaderboards;
