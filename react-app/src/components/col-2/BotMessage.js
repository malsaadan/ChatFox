import React from "react";
import "./BotMessage.css";
import Listen from "./Listen";

export default class BotMessage extends React.Component {
  render() {
    return (
      // Display the message with the icon
      <div class="bot-container">
        <img src={require("./icon.png")} alt="icon" id="bot-icon"/>
        <span id="bot">
          {this.props.botMsg}
          {/* A listen component is to convert the passed message to speech */}
          <Listen text={this.props.botMsg} />
        </span>
      </div>
    );
  }
}