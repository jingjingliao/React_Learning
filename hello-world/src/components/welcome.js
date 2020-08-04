import React, { Component } from "react";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to visit my website",
    };
  }

  changeMessage() {
    this.setState = {
      message: "Thanks for clicking me!",
    };
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}

export default Welcome;
