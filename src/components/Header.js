import React from "react";
import { Link } from "react-router-dom";
import DropdownButton from "./DropdownButton";
import Chat from "./Chat.js";

function Header() {
  return (
    <div>
      <div className="header-flex">
        <img className="pickboxx-logo" src={"../Logo.jpeg"} alt="" />
        <Link className="navbutton" to="/home">
          Home
        </Link>
        <Link className="navbutton" to="/explore">
          Explore
        </Link>
        <Link className="navbutton" to="/marketplace">Marketplace</Link>
        <Link className="navbutton" to="/map">Map</Link>
        <Link className="navbutton" to="/leaderboards">
          Leaderboards
        </Link>
        <Chat/>
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
