const { validationResult } = require('express-validator');
const weatherApiProvider = require('../services/weatherApiProvider');
const weatherNormalizer = require('../services/weatherNormalizer');

exports.index = function(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(500);
  } else {
    const {latt, long} = req.query;

    weatherApiProvider.getCity(latt, long)
      .then((response) => {
        const location = response.shift();

        weatherApiProvider.getWeather(location.woeid)
          .then((response) => {
            let data = {};

            data.weather = weatherNormalizer.normalize(response.consolidated_weather);
            data.city = location.title;

            res.send(data);
          })
          .catch((error) => {
            res.status(500);
          });
      })
      .catch((error) => {
        res.status(500);
      });
  }
};
