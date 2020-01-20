exports.normalize = function (weatherList) {
  let data = [];

  for (let weather of weatherList) {
    data.push({
      temp: weather.the_temp.toFixed(0),
      minTemp: weather.min_temp.toFixed(2),
      maxTemp: weather.max_temp.toFixed(2),
      wind: weather.wind_speed.toFixed(2),
      windDirection: weather.wind_direction,
      type: weather.weather_state_abbr,
    });
  }

  return data;
};
