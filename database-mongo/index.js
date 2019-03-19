var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/restaurants");

var db = mongoose.connection;

db.on("error", function () {
  console.log("mongoose connection error");
});

db.once("open", function () {
  console.log("mongoose connected successfully");
});

var itemSchema = mongoose.Schema({
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

var Item = mongoose.model("Restaurant", itemSchema);

var selectOne = function (query, callback) {
  let lowercaseQuery = query.toLowerCase();
  if (lowercaseQuery === "indian") {
    lowercaseQuery = "indpak";
  }
  Item.find({ "categories.0.alias": `${lowercaseQuery}` }, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      console.log(data);
      callback(null, data);
    }
  });
};

module.exports = {
  selectOne
};
