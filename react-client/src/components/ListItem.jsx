import React from "react";

function ListItem(props) {
  return (
    <div className="display">
      <div className="overflow">
        <img className="fade-in" src={props.data.image_url} height="300px" />
      </div>
      <div className="overflow">
        <p>{props.data.name}</p>
        <p>
          {props.data.location.address1} <br />
          {props.data.location.city} <br />
          {props.data.location.zip_code}
          <button onClick={props.onAdd}>Add</button>
        </p>
      </div>
    </div>
  );
}

export default ListItem;
