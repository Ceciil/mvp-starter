const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurants');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const itemSchema = mongoose.Schema({
  id: String,
  alias: String,
  name: String,
  image_url: String,
  is_closed: Boolean,
  url: String,
  review_count: Number,
  categories: [
    { alias: String, title: String },
    { alias: String, title: String },
    { alias: String, title: String }
  ],
  rating: Number,
  coordinates: { latitude: Number, longitude: Number },
  transactions: Array,
  price: String,
  location: {
    address1: String,
    address2: String,
    address3: String,
    city: String,
    zip_code: String,
    country: String,
    state: String,
    display_address: [String, String]
  },
  phone: String,
  display_phone: String,
  distance: Number
});

const Item = mongoose.model('Restaurant', itemSchema);

const selectOne = (query, callback) => {
  let lowercaseQuery = query.toLowerCase();
  
  if (lowercaseQuery === 'indian') {
    lowercaseQuery = 'indpak';
  }

  if (lowercaseQuery === 'american') {
    lowercaseQuery = 'tradamerican';
  }

  Item.find({ 'categories.0.alias': `${lowercaseQuery}` }, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const saveOne = data => {
  let restaurant = new Item(data);
  restaurant.save(error => {
    if (error) {
      return error;
    }
    console.log('Saved!');
  });
};

module.exports = {
  selectOne,
  saveOne
};
