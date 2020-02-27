import React from "react";
import "./App.css";
import CommandList from "./components/col-1/CommandList";
import Axios from "axios";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "./logo2.png";
import ChatList from "./components/col-2/ChatList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      intents: [
        {
          phrase: "Hello",
          message: "Hi there",
          id: 0
        },
      ],
    }
  }

  handleIntents = (intents) => {
    this.setState({
      intents: intents,
    })
  };

  render() {
    return (
      <Container className="main-container">
        <Row className="header">
          <Image src={logo} alt="" />
        </Row>
        <Row>
          <Col md={6} lg={4} className="col">
            <h3>All Commands</h3>
            <CommandList intents={this.state.intents} handleIntents={(intents) => this.handleIntents(intents)}/>
          </Col>
          <Col md lg className="col">
            <ChatList intents={this.state.intents}/>
          </Col>
        </Row>{" "}
      </Container>
    );
  }

  componentDidMount() {}
}
