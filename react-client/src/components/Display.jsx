import React from "react";

function Display(props) {
  return (
    <div className="display">
      <img className="fade-in" src={props.data.image_url} height="500px" />
    </div>
  );
}

export default Display;
