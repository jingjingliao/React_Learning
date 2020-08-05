import React from "react";

function FunctionEvent() {
  function increment() {
    console.log("Click FunctionEvent");
  }
  return (
    <div>
      <button onClick={increment}>Click FunctionEvent</button>
    </div>
  );
}

export default FunctionEvent;
