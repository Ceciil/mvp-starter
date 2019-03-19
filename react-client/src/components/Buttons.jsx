import React from "react";

function Buttons(props) {
  return (
    <div className="buttons-div">
      <button onClick={props.onClick}>Chinese</button>
      <button onClick={props.onClick}>Indian</button>
      <button onClick={props.onClick}>Japanese</button>
      <button onClick={props.onClick}>Korean</button>
      <button onClick={props.onClick}>Vietnamese</button>
    </div>
  );
}

export default Buttons;
