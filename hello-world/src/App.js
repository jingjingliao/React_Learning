import React from "react";
// import Counter from "./components/counter";
// import Greet from "./components/Greet";
// import Welcome from "./components/welcome";
import ClassEvent from "./components/ClassEvent";
import FunctionEvent from "./components/FunctionEvent";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Jingjing" heroname="Superman" />
      <Welcome name="Michael" heroname="Sppiderman" /> */}
      <ClassEvent />
      <FunctionEvent />
    </div>
  );
}

export default App;
