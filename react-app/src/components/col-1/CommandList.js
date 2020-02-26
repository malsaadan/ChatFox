import React from "react";
import CommandItem from "./CommandItem";
import AddItem from "./AddCommand";
import { Container, Button, ListGroup } from "react-bootstrap";

export default class CommandList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      intents: [
        {
          phrase: "Hello",
          message: "Hi there",
          id: 0
        },
        { phrase: "ee", message: "ww", id: 1 },
        {
          phrase: "itkkrtj",
          message: "Hi tkr",
          id: 2
        },
        {
          phrase: "jfkref",
          message: "tklejtklj klrejtkerjtkrjtlkre",
          id: 3
        }
      ],
      show: false
    };
  }

  handleAddCommand = (phrases, messages) => {
    const randomId = Math.floor(Math.random() * 1000);
    console.log("Command has been added!");
    const newIntent = {
      phrase: phrases,
      message: messages,
      id: randomId
    };

    const newIntents = this.state.intents.slice();
    newIntents.unshift(newIntent);
    this.setState({
      intents: newIntents
    });
  };

  handleEditItem = (command, newPhrase, newMessage) => {
    // Getting commands array from intents state
    const commands = this.state.intents.slice();

    // Getting index of command passed argument
    const commandIndex = commands.indexOf(command);

    // Updating the selected item from the array
    commands[commandIndex].phrase = newPhrase;
    commands[commandIndex].message = newMessage;

    // Update the state with the new array
    this.setState({
      intents: commands
    });
  };

  // Function that Deletes commands
  handleDeleteItem = command => {
    // Cloning commands array from intents state
    const commands = this.state.intents.slice();

    // Getting index of command passed argument
    const commandIndex = commands.indexOf(command);

    // Deleting the selected item from the array
    commands.splice(commandIndex, 1);

    // Reassign the intents array to the new array
    this.setState({
      intents: commands
    });
  };

  handleDeleteAllItems = () => {
    this.setState({
      intents: []
    });
  };

  handleClose = () =>
    this.setState({
      show: false
    });

  handleShow = () =>
    this.setState({
      show: true
    });

  render() {
    const allCommands = this.state.intents.map((command, index) => {
      return (
        <ListGroup.Item>
          <CommandItem
            key={index}
            command={command}
            handleEditItem={(id, newPhrase, newMessage) =>
              this.handleEditItem(id, newPhrase, newMessage)
            }
            handleDeleteItem={id => this.handleDeleteItem(id)}
          />
        </ListGroup.Item>
      );
    });

    const show = this.state.show;
    return (
      <Container>
        <ListGroup style={{ "max-height": "415px", "overflow-y": "auto"}}>
          <AddItem
            show={show}
            handleClose={() => this.handleClose()}
            intents={this.state.intents}
            handleAddCommand={(newPhrases, newMessages) =>
              this.handleAddCommand(newPhrases, newMessages)
            }
          />
          {allCommands}
        </ListGroup>
        <br />
        <Button
          variant="outline-dark"
          size="md"
          onClick={() => this.handleDeleteAllItems()}
          style={{ position: "sticky", bottom: "1%", "margin-top": "1%" }}
        >
          Delete All Commands
        </Button>{" "}
        <Button
          variant="outline-dark"
          size="md"
          onClick={() => this.handleShow()}
          style={{ position: "sticky", bottom: "1%", "margin-top": "1%" }}
        >
          Add a new command
        </Button>
      </Container>
    );
  }
}