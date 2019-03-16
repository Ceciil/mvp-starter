const axios = require("axios");
const token = require("../token.js");

module.exports = {
  getRestaurants(req, res) {
    const search = req.params.search;
    const url = `https://api.yelp.com/v3/businesses/search?location=San Francisco&term=${search}`;

    axios
      .get(url, {
        headers: { Authorization: "Bearer " + token.TOKEN }
      })
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.send(err);
      });
  }
};
