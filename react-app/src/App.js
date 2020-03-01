import React from "react";
import "./App.css";
import CommandList from "./components/col-1/CommandList";
import axios from "axios";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "./logo2.png";
import ChatList from "./components/col-2/ChatList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      // intents is an array of objects that holds the commands and their responses 
      intents: [
        {
          phrase: "Hello",
          message: "Hii",
          id: 0,
        },
      ],
    }
  };

  // A function to edit the commands' array
  handleIntents = (intents) => {
    this.setState({
      intents: intents,
    })
  };

  render() {
    return (
        // This container holds component 2 row components
      <Container className="main-container">
        {/* First row component is for the header that holds the logo  */}
        <Row className="header">
          <Image src={logo} alt="" />
        </Row>
        {/* Second row component is for the commands and the chatbox (holds 2 column components)*/}
        <Row>
          {/* The first column component holds the commands panel*/}
          <Col md={6} lg={4} className="col">
            <h3>All Commands</h3>
            <CommandList intents={this.state.intents} handleIntents={(intents) => this.handleIntents(intents)}/>
          </Col>
          {/* Second column component holds the chatbox to interact with the chatbot */}
          <Col md lg className="col">
            <ChatList intents={this.state.intents}/>
          </Col>
        </Row>{" "}
      </Container>
    );
  }

  componentDidMount() {}
}

