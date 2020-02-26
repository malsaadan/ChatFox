import React from "react";
import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";

export default class EditCommandItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPhrase: this.props.command.phrase,
      newMessage: this.props.command.message,
    };
  }
  // A function to check input boxes
  checkInputs = e => {
    // Prevent default event of form on submit click which referesh the page
    e.preventDefault();
    // if both inputs are not empty >> pass the values to the parent through a function
    if (this.state.newPhrase && this.state.newMessage) {
      this.props.handleClose()
      this.props.handleEditItem(
        this.props.command,
        this.state.newPhrase,
        this.state.newMessage
      );
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
        <Modal show={this.props.show} onHide={()=>this.props.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Command</Modal.Title>
          </Modal.Header>

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
            <Button variant="dark" onClick={()=>this.props.handleClose()}>Close</Button>{' '}
            <Button variant="outline-dark" onClick={e => this.checkInputs(e)}>
              Save
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
