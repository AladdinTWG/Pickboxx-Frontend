import React from "react";
import { Link } from "react-router-dom";

function somethingPopular() {
  return (
    <div className="explore">
      <div className="boxx-array">
        <div className="boxx-container">
          <div className="boxx">
            <Link to="/boxxdetails">
              <img
                className="expand"
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/expand-184-809607.png"
              />
            </Link>
            <img
              className="boxx-img"
              src="https://images.all-free-download.com/images/graphicthumb/climbing_motion_picture_167834.jpg"
            />
          </div>
          <div className="desc-and-comments">
            <div className="post-info">
              <img
                className="profile-comment"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <p className="boxx-description">
                Picked up new hiking gear from the Hiking Shop!
              </p>
              <img
                className="comment-profile-icon"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <p className="desc-comment">@user123 awesome!</p>
              <img
                className="second-comment-profile-icon"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <p className="second-desc-comment">@user123 omg amazing!</p>
            </div>
          </div>
        </div>
        <div className="boxx-container">
          <div className="boxx">
            <Link to="/boxxdetails">
              <img
                className="expand"
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/expand-184-809607.png"
              />
            </Link>
            <img
              className="boxx-img"
              src="https://ak.picdn.net/shutterstock/videos/17642746/thumb/5.jpg"
            />
          </div>
          <div className="post-info">
            <img
              className="profile-comment"
              src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
              alt=""
            />
            <p className="boxx-description">
              I'm out with this new bike! Catch you on the road!
            </p>
            <img
                className="comment-profile-icon"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <p className="desc-comment">@user123 awesome!</p>
              <img
                className="second-comment-profile-icon"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <p className="second-desc-comment">@user123 omg amazing!</p>
          </div>
        </div>
        <div className="boxx-container">
          <div className="boxx">
            <Link to="/boxxdetails">
              <img
                className="expand"
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/expand-184-809607.png"
              />
            </Link>
          </div>
          <div className="post-info">
            <img
              className="profile-comment"
              src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
              alt=""
            />
            <p className="boxx-description">Placeholder description of boxx. Show some love!</p>
            <img
                className="comment-profile-icon"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <p className="desc-comment">@user123 awesome!</p>
              <img
                className="second-comment-profile-icon"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <p className="second-desc-comment">@user123 omg amazing!</p>
          </div>
        </div>
        <div className="boxx-container">
          <div className="boxx">
            <Link to="/boxxdetails">
              <img
                className="expand"
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/expand-184-809607.png"
              />
            </Link>
          </div>
          <div className="post-info">
            <img
              className="profile-comment"
              src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
              alt=""
            />
            <p className="boxx-description">Placeholder description of boxx. Show some love!</p>
            <img
                className="comment-profile-icon"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <p className="desc-comment">@user123 awesome!</p>
              <img
                className="second-comment-profile-icon"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <p className="second-desc-comment">@user123 omg amazing!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default somethingPopular;
