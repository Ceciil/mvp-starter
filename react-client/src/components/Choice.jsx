import React from "react";

function Choice(props) {
  return (
    <div>
      <h2 className="choice-title">{props.data.name}</h2>
      <div className="display">
        <div className="overflow">
          <img className="fade-in" src={props.data.image_url} height="300px" />
        </div>
        <div className="notof">
          <p>{props.data.name}</p>
          <p>
            {props.data.location.address1} <br />
            {props.data.location.city} <br />
            {props.data.location.zip_code}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Choice;
