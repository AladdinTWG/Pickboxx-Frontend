import React, { Component } from 'react';
import { render } from '@testing-library/react';




class Chat extends Component {
  constructor() {
    super();
    this.state = {
      //this is mock data, should use a testing library
      messages: [
        {
          username: 'user1',
          message: 'Last message sent...',
          messageSent: undefined
        },
        {
          username: 'user2',
          message: 'Last message sent...',
          messageSent: undefined
        },
        {
          username: 'user3',
          message: 'Last message sent...',
          messageSent: undefined
        },
        {
          username: 'user4',
          message: 'Last message sent...',
          messageSent: undefined
        },
        {
          username: 'user5',
          message: 'Last message sent...',
          messageSent: undefined
        },
        {
          username: 'user6',
          message: 'Last message sent...',
          messageSent: undefined
        },
        {
          username: 'user7',
          message: 'Last message sent...',
          messageSent: undefined
        },
        {
          username: 'user8',
          message: 'Last message sent...',
          messageSent: undefined
        },
        {
          username: 'user9',
          message: 'Last message sent...',
          messageSent: undefined
        }
      ]
    }
  }
  render() {
    return (
      <div class='chat-container'>
        {this.state.message.map(ele => <div classname=''>
          <p>{ele.username}</p>
          <p>{ele.message}</p>
          <p>{ele.messageSent}</p>
        </div>)}
      </div>
    )
  }
}
export default Chat;