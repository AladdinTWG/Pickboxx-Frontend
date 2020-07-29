import React from "react";
import { Route, Link } from "react-router-dom";
import DropdownButton from "./DropdownButton";
function Header() {
  return (
    <div>
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
      <div className="boxx-search-div">
        <input className="boxx-search" type="text"></input>
        <div className="boxx-nav">
          <Link to="SomethingPopular">#somethingPopular</Link>
          <Link to="TopBoxxes">Top Boxxes</Link>
          <Link to="Duels">Duels</Link>
          <Link to="TopPickerPage">Top Pickers</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
