import React, { Component } from "react";
import FacebookLoginWithButton from "react-facebook-login";
import GoogleLogin from "react-google-login";
import TwitterLogin from "react-twitter-login";

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
          <img className="login_logo" src={"../Logo.jpeg"} alt="" />
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

          <button
            className="username_input"
            style={{ backgroundColor: "#33ccff" }}
          >
            Login
          </button>
        </form>

        <div>
          <FacebookLoginWithButton
            appId="1206715649505081"
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
            icon="fa-facebook"
          />
        </div>
        <div>
          <GoogleLogin
            className="google_login"
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <div>
          <TwitterLogin
            className="twitter_login"
            authCallback={responseTwitter}
            consumerSecret={responseTwitter}
            callbackUrl={"http://localhost:3000/login"}
          />
        </div>
      </div>
    );
  }
}

export default LoginPage;