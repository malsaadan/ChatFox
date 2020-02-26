import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default class Confirm extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={() => this.props.handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="dark" onClick={() => this.props.handleClose()}>
            Cancel
          </Button>{" "}
          <Button
            variant="outline-dark"
            onClick={() => this.props.handleDeleteAllItems()}
          >
            Continue
          </Button>
        </Modal.Body>
      </Modal>
    );
  }
}
