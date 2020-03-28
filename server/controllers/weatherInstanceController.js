const { validationResult } = require('express-validator');
const weatherApiProvider = require('../services/weatherApiProvider');
const weatherNormalizer = require('../services/weatherNormalizer');

exports.index = async function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(500);
  } else {
    const {latt, long} = req.query;

    const city = await weatherApiProvider.getCity(latt, long);
    const weatherInfo = await weatherApiProvider.getWeather(city.woeid);

    let data = {};
    data.city = city.title;
    data.currentDay = weatherNormalizer.normalize(weatherInfo.consolidated_weather.shift());
    data.nextDays = [];

    for (let weather of weatherInfo.consolidated_weather) {
      data.nextDays.push(weatherNormalizer.normalize(weather));
    }

    res.send(data);
  }
};
