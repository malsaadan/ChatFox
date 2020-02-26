import React from "react";
import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import './ChatContainer.css';
import { Container } from "react-bootstrap";

export default class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      botMsgs: ["Welcome"],
      userMsgs: [],
    };
  }

  handleSendClick = e => {
    e.preventDefault();
    console.log("Send button clicked");
    if (this.state.input){
       this.setState({
        userMsgs: [...this.state.userMsgs, this.state.input],
        input: '',
      }); 
    }
      
  };

  // A function to handle input boxes
  handleBoxChange = e => {
    // a variable that holds the input value
    const value = e.target.value;
    this.setState({
      input: value
    });
  };

  render() {
    const allBotMessages = this.state.botMsgs.map((message, index) => {
        return <BotMessage key={index} botMsg={message} />;
    });
    const allUserMessages =  this.state.userMsgs.map((message, index) => {
        return <UserMessage key={index} userMsg={message} />;
    })

    return (
      <div>
        <Container className="msg-container">
        {allBotMessages}
        {allUserMessages}
        </Container>
        <form>
          <input
            placeholder="Type your text here ..."
            value={this.state.input}
            type="text"
            id="chat-input"
            style={{
              width: "200px",
              height: "20px",
              "padding-right": "50px"
            }}
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
      </div>
    );
  }
}
