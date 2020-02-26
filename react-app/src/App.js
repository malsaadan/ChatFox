import React from "react";
import "./App.css";
import CommandList from "./components/CommandList";
import Axios from "axios";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "./logo2.png";

export default class App extends React.Component {
  render() {
    return (
      <Container className="main-container">
        <Row className="header">
          <Image src={logo} alt="" />
        </Row>
        <Row>
          <Col md={6} lg={4} className="col">
            <h3>All Commands</h3>
            <CommandList />
          </Col>
          <Col md lg className="col">
            xs=12 md=8
          </Col>
        </Row>{" "}
      </Container>
    );
  }

  componentDidMount() {}
}
