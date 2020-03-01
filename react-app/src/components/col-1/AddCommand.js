import React from "react";
import Axios from "axios";
import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";

export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
    // 2 states to hold the new values of the command to be added
    this.state = {
      newPhrase: "",
      newMessage: ""
    };
  }

  // A function to check input boxes
  checkInputs = e => {
    // Prevent default event of form on submit click which referesh the page
    e.preventDefault();
    // if both inputs are not empty >> pass the values to the parent through a function
    if (this.state.newPhrase && this.state.newMessage) {
      this.props.handleClose();
      this.props.handleAddCommand(this.state.newPhrase, this.state.newMessage);
    } else console.log("Couldn't add the command");
  };

  // A function to handle input boxes
  handleBoxChange = e => {
    // a variable that holds the input value
    const value = e.target.value;
    // a variable that holds the class
    const className = e.target.className;

    // if the class name equals phrase >> assign the value to the phrase state variable
    if (className === "phrase form-control")
      this.setState({
        newPhrase: value
      });
    // else assign the value to message state variable
    else {
      this.setState({
        newMessage: value
      });
    }
  };

  render() {
    return (
      <div>
        {/* If the passed props show is true >> display modal, onHide method is a function to hide the modal when the user clicks on close */}
        <Modal show={this.props.show} onHide={() => this.props.handleClose()}>
          {/* A header for the modal */}
          <Modal.Header closeButton>
            <Modal.Title>Add a New Command</Modal.Title>
          </Modal.Header>

          {/* A body that contains group of inputs to enter the phrase and the response and has a form control to
          handle the change of inputs to save them in the state to be passed later */}
          <Modal.Body>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">
                  Phrase
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                type="text"
                className="phrase"
                onChange={e => this.handleBoxChange(e)}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">
                  Response
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                className="message"
                onChange={e => this.handleBoxChange(e)}
              />
            </InputGroup>
            {/* Close button to hide the modal when clicked (Cancel add command) */}
            <Button variant="dark" onClick={() => this.props.handleClose()}>
              Close
            </Button>{" "}
            {/* Add button which will add the command to the list (as a confirm) */}
            <Button variant="outline-dark" onClick={e => this.checkInputs(e)}>
              Add
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
