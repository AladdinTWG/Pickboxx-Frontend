import React from "react";

function BoxxDetails() {
  return (
    <div className="boxx-details">
      <div className="boxx-details__image">
        <div className="boxx-profile-and-name">
        <img
          className="boxx-details__profile"
          src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
          alt=""
        />
        <p className="product-name">Product Name</p>
        </div>
        <img
          className="boxx-details__post"
          src="https://images.all-free-download.com/images/graphicthumb/climbing_motion_picture_167834.jpg"
        />
      </div>
      <div className="boxx-details__comments">
        <div className="full-boxx-desc">
          <p>
            {" "}
            7/18/21 @username: This bicycle is the newest and best bicycle for
            young kids! Super safe and shiny! It has 24 inch wheels with
            reflective lighting and chromoly steel handle bars.
          </p>
        </div>
        <div className="boxx-details__comments-single">
          <img
            className="boxx-details__profile-comment"
            src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
          />
          <p className="comment-string">I know what I'm buying next</p>
        </div>
        <div className="boxx-details__comments-single">
          <img
            className="boxx-details__profile-comment"
            src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
          />
          <p className="comment-string">Cool!</p>
        </div>
        <div className="boxx-details__comments-single">
          <img
            className="boxx-details__profile-comment"
            src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
          />
          <p className="comment-string">
            Damn, I just bought a bike too, would have loved this one instead.
          </p>
        </div>
        <div className="boxx-details__comments-single">
          <img
            className="boxx-details__profile-comment"
            src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
          />
          <p className="comment-string">ooh shiny!</p>
        </div>
        <div className="boxx-details__comments-single">
          <img
            className="boxx-details__profile-comment"
            src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
          />
          <p className="comment-string">very nice!</p>
        </div>
        <div className="boxx-details__comments-single">
          <img
            className="boxx-details__profile-comment"
            src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
          />
          <p className="comment-string">My kid would love that</p>
        </div>
        <div className="boxx-details__comments-single">
          <img
            className="boxx-details__profile-comment"
            src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
          />
          <p className="comment-string">
            bruh, thats a mountain climber, where do you see a bike?
          </p>
        </div>
      </div>
    </div>
  );
}

export default BoxxDetails;
