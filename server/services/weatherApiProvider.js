const rp = require('request-promise');

exports.getCity = async function(latt, long) {
  const options = {
    method: 'GET',
    uri: 'https://www.metaweather.com/api/location/search/',
    qs: {
      lattlong: `${latt},${long}`,
    },
    json: true,
  }

  const cities = await rp(options);
  const city = cities.shift();

  return city;
}

exports.getWeather = async function(cityId) {
  const options = {
    method: 'GET',
    uri: `https://www.metaweather.com/api/location/${cityId}/`,
    json: true,
  }

  return await rp(options);
}
