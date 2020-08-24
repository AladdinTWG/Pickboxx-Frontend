import React, { Component } from "react";
import FacebookLoginWithButton from "react-facebook-login";
import GoogleLogin from "react-google-login";
import TwitterLogin from "react-twitter-login";
import {Link} from "react-router-dom";

const responseFacebook = (response) => {
  console.log(response);
};

const responseGoogle = (response) => {
  console.log(response);
};
const responseTwitter = (response) => {
  console.log(response);
};

const componentClicked = () => {
  console.log("Clicked!");
};

class LoginPage extends Component {
  render() {
    return (
      <div className="login_panel">
        <div>
          <img className="login_logo" src="https://lh3.googleusercontent.com/-zC-44BJGQN0/X0P1r5IgJgI/AAAAAAAAADE/MYtrI683VHA88mQ_fsKMN5TfPVpHamMCACK8BGAsYHg/s512/pickboxx-logo%2Btransparent.png" alt="" />
        </div>

        <form>
          <div>
            <input
              className="username_input"
              type="text"
              placeholder="Username, Phone, Email"
            ></input>
          </div>
          <div>
            <input
              className="username_input"
              type="passward"
              placeholder="password"
              size="33"
            ></input>
          </div>
          <Link to ="/home">
          <button
            className="username_input"
            style={{ backgroundColor: "#33ccff" }}
          >
            Login
          </button>
          </Link>
        </form>
        <span className="line">
          <h3>
            <span></span><span className="or-sign">Or Sign</span> <span className="up-using"> Up Using</span>
          </h3>
        </span>

        <div>
          <FacebookLoginWithButton
            className="facebook-login"
            appId="1206715649505081"
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
            icon="fa-facebook"
          />
        </div>
        <div className="google-login-button">
          <GoogleLogin
            className="google_login"
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <div className="twitter-login-button">
          <TwitterLogin
            className="twitter_login"
            authCallback={responseTwitter}
            consumerSecret={responseTwitter}
            callbackUrl={"http://localhost:3000/login"}
            children={<button className="twitter-button"><i className="fa fa-twitter" aria-hidden="true"></i><p>LOGIN WITH TWITTER</p></button>}
          />
        </div>
      </div>
    );
  }
}

export default LoginPage;
