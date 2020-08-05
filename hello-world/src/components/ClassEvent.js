import React, { Component } from "react";

export class ClassEvent extends Component {
  increment() {
    console.log("Click ClassEvent");
  }
  render() {
    return (
      <div>
        <button onClick={this.increment}>Click ClassEvent</button>
      </div>
    );
  }
}

export default ClassEvent;
