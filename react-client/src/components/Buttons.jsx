import React from "react";

function Buttons(props) {
  return (
    <div className="buttons-div">
      <button onClick={props.onClick}>Chinese</button>
      <button onClick={props.onClick}>Indian</button>
      <button onClick={props.onClick}>Japanese</button>
      <button onClick={props.onClick}>Korean</button>
      <button onClick={props.onClick}>Vietnamese</button>
      <div>
        <button onClick={props.onClick}>American</button>
        <button onClick={props.onClick}>Burmese</button>
        <button onClick={props.onClick}>Greek</button>
        <button onClick={props.onClick}>Mexican</button>
        <button onClick={props.onClick}>Ramen</button>
        <button onClick={props.onClick}>Sushi</button>
        <button onClick={props.onClick}>Thai</button>
      </div>
    </div>
  );
}

export default Buttons;
