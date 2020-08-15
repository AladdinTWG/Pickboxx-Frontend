import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { render } from "@testing-library/react";

class Chat extends Component {
  constructor() {
    super();

    this.state = {
      //this is mock data, should use a testing library
      clicked: false,
      messages: [
        {
          username: "user1",
          message: "Last message sent...",
          messageSent: undefined,
        },

        {
          username: "user2",
          message: "Last message sent...",
          messageSent: undefined,
        },

        {
          username: "user3",
          message: "Last message sent...",
          messageSent: undefined,
        },

        {
          username: "user4",
          message: "Last message sent...",
          messageSent: undefined,
        },

        {
          username: "user5",
          message: "Last message sent...",
          messageSent: undefined,
        },

        {
          username: "user6",
          message: "Last message sent...",
          messageSent: undefined,
        },

        {
          username: "user7",
          message: "Last message sent...",
          messageSent: undefined,
        },

        {
          username: "user8",
          message: "Last message sent...",
          messageSent: undefined,
        },

        {
          username: "user9",
          message: "Last message sent...",
          messageSent: undefined,
        },
      ],
    };
  }

  chatClicked = () => {
      if(this.state.clicked === false){
    this.setState({
        clicked: true
    })
} else {
    this.setState({
        clicked: false,
    })
}
  }

  render() {
    return (
      <div className="chat">
        <img className="chat-img" src="https://static.vecteezy.com/system/resources/previews/000/422/741/non_2x/vector-chat-icon.jpg" alt="" onClick={this.chatClicked}/>
        {this.state.clicked &&
        <div class="chat-container">
          {" "}
          {this.state.messages.map((ele) => (
            <div className="chat-message">
              {" "}
              {/* <img src='' className='chat-message-profile-pic' /> */}
              <div className="chat-message-profile-pic-div">
                {" "}
                <img
                  className="chat-message-profile-pic-img"
                  src="https://stroseschool.stroselions.net/wp-content/uploads/2018/04/profile-blank-reva.png"
                />{" "}
              </div>{" "}
              <p> {ele.username}: </p> <p> {ele.message}</p>{" "}
              <p> {ele.messageSent}</p>{" "}
            </div>
          ))}
        </div>
        }
      </div>
    );
  }
}

export default Chat;