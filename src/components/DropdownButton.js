import React, { Component } from "react";
import { findAllByTestId } from "@testing-library/react";
import { Link } from "react-router-dom";

class DropdownButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }
  renderDropdowns() {
    return (
      <div className="login_option">
        <Link to="/login">Login</Link>
        <Link to="/login">Sign Up</Link>
      </div>
    );
  }

  render() {
    return (
      <button
        className="nav_user_btn"
        onClick={(e) => this.handleClick(e)}
        tabIndex="1"
      >
        {this.state.isVisible ? this.renderDropdowns() : null}
      </button>
    );
  }
}

export default DropdownButton;
