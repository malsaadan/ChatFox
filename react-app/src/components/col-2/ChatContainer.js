import React from "react";
import "./ChatContainer.css";
import ChatList from "./ChatList";
import { Container } from "react-bootstrap";


export default class ChatContainer extends React.Component {

  render() {
    return (
      <div>
        <Container id="chat-container">
          <ChatList/>
        </Container>
      </div>
    );
  }
}