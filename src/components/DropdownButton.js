import React, { Component } from "react";
import { Link } from "react-router-dom";
import MessageDropDown from './MessageDropDown.js'

class DropdownButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>

        <div className="login_option">
          <Link to="/login">Login</Link>
          <Link to="/login">Sign Up</Link>
        </div>
        <MessageDropDown />
        <Link className="nav_user_btn" to="/profile">
        </Link>

      </div>
    );
  }
}

export default DropdownButton;
