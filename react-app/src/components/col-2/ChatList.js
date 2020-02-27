import React from "react";
import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import "./ChatList.css";
import { Container } from "react-bootstrap";

export default class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  handleSendClick = e => {
    e.preventDefault();
    if (this.state.input) {
      const intents = this.props.intents.slice();
      let msg = '';
      for(let i = 0; i < intents.length; i++){
        if (this.state.input.toLowerCase() === intents[i].phrase.toLowerCase()) 
        {
          msg = intents[i].message
          const message = {
            userMsg: this.state.input,
            botMsg: msg,
          }
          const messages = this.state.messages.slice();
          messages.push(message);
          console.log(message)
          this.setState({
            messages: messages,
            input: '',
          });
          return;
        }
      }
        msg = "Sorry, I didn't get that. Can you rephrase?";
        const message = {
          userMsg: this.state.input,
          botMsg: msg,
        }
        const messages = this.state.messages.slice();
        messages.push(message);
        console.log(message)
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
          {allMessages}
        </Container>
        <form>
          <input
            placeholder="Type your text here ..."
            value={this.state.input}
            type="text"
            id="chat-input"
            onChange={e => this.handleBoxChange(e)}
          />
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
