import React from "react";
import CommandItem from "./CommandItem";
import AddItem from "./AddCommand";
import { Container, Button, ListGroup } from "react-bootstrap";

// This component holds the list and pass each item to the commandItem component to display them
export default class CommandList extends React.Component {
  constructor(props) {
    super(props);

    // A state to handles whether to show or hide modals
    this.state = {
      show: false
    };
  }

  // A function to that adds a new command
  handleAddCommand = (phrases, messages) => {
    // Generating random id
    const randomId = Math.floor(Math.random() * 1000);
    // Create an object with the phrase, message and id
    const newIntent = {
      phrase: phrases,
      message: messages,
      id: randomId
    };

    // Cloning the commands list
    const newIntents = this.props.intents.slice();
    // add the new command to the front of the list
    newIntents.unshift(newIntent);
    // Sending the new list to the parent's function to change the intent list
    this.props.handleIntents(newIntents);
  };

  // This function handle the editing of commands
  handleEditItem = (command, newPhrase, newMessage) => {
    // Cloning commands array
    const commands = this.props.intents.slice();

    // Getting index of command passed argument
    const commandIndex = commands.indexOf(command);

    // Updating the selected item from the array
    commands[commandIndex].phrase = newPhrase;
    commands[commandIndex].message = newMessage;

    // Update the state with the new array by passing the list as an argument to the parent's function
    this.props.handleIntents(commands);

  };

  // Function that Deletes commands
  handleDeleteItem = command => {
    // Cloning commands array from intents state
    const commands = this.props.intents.slice();

    // Getting index of command passed argument
    const commandIndex = commands.indexOf(command);

    // Deleting the selected item from the array
    commands.splice(commandIndex, 1);
    this.props.handleIntents(commands);

  };

  // This function deletes all the items
  handleDeleteAllItems = () => {
    // Creating an empty array
    const commands = [];
    // Passing it to the parent's function which will overwrite the main array
    this.props.handleIntents(commands);

  };

  // A function to close the add command modal
  handleClose = () =>
    this.setState({
      show: false
    });

  // A function to display the add command modal
  handleShow = () =>
    this.setState({
      show: true
    });

  render() {
    // Creating a CommandItem component for each item in the command list
    const allCommands = this.props.intents.map((command, index) => {
      return (
        <ListGroup.Item>
          <CommandItem
            key={index}
            command={command}
            // I'm passing this function to handle the edit of each item, which is in the CommandItem component
            handleEditItem={(id, newPhrase, newMessage) =>
              this.handleEditItem(id, newPhrase, newMessage)
            }
            // This function handles the delete of each item, which is in the CommandItem component
            handleDeleteItem={id => this.handleDeleteItem(id)}
          />
        </ListGroup.Item>
      );
    });

    // A variable that holds the show state to control whether to display the modal or not based on user click
    const show = this.state.show;
    return (
      <Container>
        {/* ListGroup component styles the list container */}
        <ListGroup style={{ "max-height": "410px", "overflow-y": "auto"}}>
          {/* AddItem component adds a new command to the list, it is shown as a modal and the variable show dicide whether or not to show it based on user clicks */}
          <AddItem
            show={show}
            handleClose={() => this.handleClose()}
            intents={this.props.intents}
            handleAddCommand={(newPhrases, newMessages) =>
              this.handleAddCommand(newPhrases, newMessages)
            }
          />
          {/* Displaying all commands' items */}
          {allCommands}
        </ListGroup>
        <br />
        {/* A button that handles the delete of all items */}
        <Button
          variant="outline-dark"
          size="md"
          onClick={() => this.handleDeleteAllItems()}
          style={{ position: "sticky", bottom: "2%"}}
        >
          Delete All Commands
        </Button>{" "}
        {/* This button the show state to display the modal*/}
        <Button
          variant="outline-dark"
          size="md"
          onClick={() => this.handleShow()}
          style={{ position: "sticky", bottom: "2%"}}
        >
          Add a new command
        </Button>
      </Container>
    );
  }
}
