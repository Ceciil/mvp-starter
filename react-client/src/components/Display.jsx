import React from "react";
import ListItem from "./ListItem.jsx";

function Display(props) {
  const listRestaurants = props.data.slice(0, 7).map(item => {
    return <ListItem data={item} key={item.id} />;
  });

  return (
    <div>
      <h2 className="choice-title">Add your favorite restaurants</h2>
      <div className="display-div">{listRestaurants}</div>
    </div>
  );
};

export default Display;
