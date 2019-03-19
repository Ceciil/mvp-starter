const axios = require('axios');
const token = require('../token.js');
const { selectOne, saveOne } = require('../database-mongo/index.js');

module.exports = {
  getRestaurants(req, res) {
    const search = req.params.search;
    const url = `https://api.yelp.com/v3/businesses/search?location=San Francisco&term=${search}`;
    axios
      .get(url, {
        headers: { Authorization: 'Bearer ' + token.TOKEN }
      })
      .then(response => {
        res.send(response.data);
      })
      .catch(error => {
        res.send(error);
      });
  },
  getOneRestaurant(req, res) {
    const category = req.params.category;
    selectOne(category, (error, data) => {
      if (error) {
        return error;
      }
      res.send(data);
    });
  },
  saveOneRestaurant(req, res) {
    saveOne(req.body, error => {
      if (error) {
        return error;
      }
      res.send();
    });
  }
};
