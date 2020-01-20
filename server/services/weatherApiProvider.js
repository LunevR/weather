const rp = require('request-promise');

exports.getCity = function(latt, long) {
  const options = {
    method: 'GET',
    uri: 'https://www.metaweather.com/api/location/search/',
    qs: {
      lattlong: `${latt},${long}`,
    },
    json: true,
  }

  return rp(options);
}

exports.getWeather = function(cityId) {
  const options = {
    method: 'GET',
    uri: `https://www.metaweather.com/api/location/${cityId}/`,
    json: true,
  }

  return rp(options);
}
