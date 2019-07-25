import React from 'react';
import axios from 'axios';

function save(data) {
  let restaurant = data;
  axios
    .post('/api/restaurant', restaurant)
    .then(response => {
      console.log('Saved!');
    })
    .catch(error => {
      console.log(error);
    });
};

function ListItem(props) {
  return (
    <div className='display'>
      <div className='overflow'>
        <img className='fade-in' src={props.data.image_url} height='300px' />
      </div>
      <div className='notof'>
        <p className='title'>{props.data.name}</p>
        <p>
          {props.data.location.address1} <br />
          {props.data.location.city} <br />
          {props.data.location.zip_code} <br />
          <br />
          <a href={props.data.url} target='_blank'>Yelp</a>
          <br />
          <br />
          <button onClick={() => { save(props.data), alert('Saved!') }}>Add</button>
        </p>
      </div>
    </div>
  );
};

export default ListItem;
