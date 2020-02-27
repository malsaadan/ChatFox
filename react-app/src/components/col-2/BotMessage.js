import React from "react";
import "./BotMessage.css";
import Listen from "./Listen";

export default class BotMessage extends React.Component {
  render() {
    return (
      <div class="bot-container">
        <img src={require("./icon.png")} alt="icon" id="bot-icon"/>
        <span id="bot">
          {this.props.botMsg}
          <Listen text={this.props.botMsg} />
        </span>
      </div>
    );
  }
}