import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap'
import Chat from './Chat.js'

class MessageDropDown extends Component {
  state = {}
  render() {
    return (<Dropdown className='header-message-icon'>
      <Dropdown.Toggle className='dropdown-toggle-chat' variant='success'>
        <img className='header-message-icon' src='https://cdn1.iconfinder.com/data/icons/feather-2/24/message-square-512.png' alt='messages' />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Chat />
      </Dropdown.Menu>
    </Dropdown>
    );
  }
}

export default MessageDropDown;