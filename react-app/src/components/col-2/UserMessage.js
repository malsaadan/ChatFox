import React from "react";
import "./UserMessage.css";

export default class UserMessage extends React.Component {
  render() {
    return (
      <div className="user-container">
        <img src={require("./user.png")} alt="icon" />
        <span>{this.props.userMsg}</span>
      </div>
    );
  }
}
