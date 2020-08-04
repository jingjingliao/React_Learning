import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to visit my website!",
    };
  }

  changeMessage() {
    if (this.state.message === "Welcome to visit my website!") {
      this.setState({
        message: "Thanks for clicking me!",
      });
    } else {
      this.setState({
        message: "Welcome to visit my website!",
      });
    }
  }

//   changeMessage() {
//     this.setState({
//       message: "Thanks for clicking me!",
//     });
//   }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Click me!</button>
      </div>
    );
  }
}

export default Message;
