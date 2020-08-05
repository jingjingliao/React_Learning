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
    const { name, heroname } = this.props;
    return (
      <div>
        <h1>Name: {name}</h1>
        <h3>Heroname: {heroname}</h3>
      </div>
    );
  }
}

export default Welcome;
