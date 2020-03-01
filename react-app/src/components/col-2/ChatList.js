import React from "react";
import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import "./ChatList.css";
import { Container } from "react-bootstrap";

export default class ChatList extends React.Component {
  constructor(props) {
    super(props);
    // The messages state holds the conversation between the user & the bot
    this.state = {
      messages: [],
    };
  }

  // This function handles user messages that has been sent
  handleSendClick = e => {
    // Prevent default action of the form submit which refereshes the page
    e.preventDefault();
    // if the input is not empty (true)
    if (this.state.input) {
      // clone the commands list that was passed as props 
      const intents = this.props.intents.slice();
      let msg = '';
      // looping t=around the cloned list and checking if the user message exists in the commands or not
      for(let i = 0; i < intents.length; i++){
        if (this.state.input.toLowerCase() === intents[i].phrase.toLowerCase()) 
        {
          // If exists >> create an object that holds user, bot messages from the matched command list
          msg = intents[i].message
          const message = {
            userMsg: this.state.input,
            botMsg: msg,
          }
          // clone the conversation list from the state
          const messages = this.state.messages.slice();
          // push the new message to the conversation list (messages list)
          messages.push(message);
          console.log(message)
          // Set the state to the new list
          this.setState({
            messages: messages,
            input: '',
          });
          // Exit the loop
          return;
        }
      }
        // If the phrase doesn't exist in the bots commands list 
        msg = "Sorry, I didn't get that. Can you rephrase?";
        // create an object with the not found message above as botMsg and the entered userMsg
        const message = {
          userMsg: this.state.input,
          botMsg: msg,
        }
        // Clone the conversation list from the state
        const messages = this.state.messages.slice();
        // add the new message to the end of the conversation list
        messages.push(message);
        // Update the conversation list in the state & empty the input field
        this.setState({
          messages: messages,
          input: '',
        });
  };
  }
  // A function to handle input boxes
  handleBoxChange = e => {
    // a variable that holds the input value
    const value = e.target.value;
    this.setState({
      input: value
    });
  };

  render() {

    // Break down each object where we will extract bot, user messages and then I will pass them as props to their components
    const allMessages = this.state.messages.map((message,index)=> {
      return(
        <div>
          <UserMessage key={index} userMsg={message.userMsg}/>
          <BotMessage key={index} botMsg={message.botMsg}/>
        </div>
      )
    })

    return (
      <Container id="chat-container">
        <Container className="msg-container">
          {/* Displaying the conversation */}
          {allMessages}
        </Container>
        <form>
          {/* An input that takes the user input */}
          <input
            placeholder="Type your text here ..."
            value={this.state.input}
            type="text"
            id="chat-input"
            onChange={e => this.handleBoxChange(e)}
          />
          {/* A submit button which sends the message */}
          <input
            id="submit-button"
            name=""
            value=""
            type="submit"
            style={{ "margin-left": "-50px", height: "20px", width: "50px" }}
            onClick={e => this.handleSendClick(e)}
          />
        </form>
      </Container>
    );
  }
}
