import React from "react";

const Greet = (props) => {
  const { name, heroname } = props;
  return (
    <div>
      <h1>Name: {name}</h1>
      <h3>Heroname: {heroname}</h3>
    </div>
  );
};

export default Greet;
