import React from "react";

export const Greet = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h3>Heroname: {props.heroname}</h3>
      <h5>Chilren: {props.children}</h5>
    </div>
  );
};

export default Greet;
