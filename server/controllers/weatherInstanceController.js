const { validationResult } = require('express-validator');
const weatherApiProvider = require('../services/weatherApiProvider');
const weatherNormalizer = require('../services/weatherNormalizer');

exports.index = function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

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
            data.city = location.title;
            data.currentDay = weatherNormalizer.normalize(response.consolidated_weather.shift());
            data.nextDays = [];

            for (let weather of response.consolidated_weather) {
              data.nextDays.push(weatherNormalizer.normalize(weather));
            }

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
