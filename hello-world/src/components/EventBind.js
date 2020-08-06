import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome!",
    };

    this.changeMessage = this.changeMessage.bind(this);
  }

  changeMessage() {
    this.setState({
      message: "Thank you!",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Change!</button>
      </div>
    );
  }
}

// Solution One:
//   changeMessage() {
//     this.setState({
//       message: "Thank you!",
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.message}</h1>
//         <button onClick={() => this.changeMessage()}>Change!</button>
//       </div>
//     );
//   }
// }

//   changeMessage() {
//     this.setState({
//       message: "Thank you!",
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.message}</h1>
//         <button onClick={this.changeMessage.bind(this)}>Change!</button>
//       </div>
//     );
//   }
// }

export default EventBind;
