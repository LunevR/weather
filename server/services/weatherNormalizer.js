exports.normalize = function (weather) {
  return {
    temp: +weather.the_temp.toFixed(0),
    minTemp: +weather.min_temp.toFixed(0),
    maxTemp: +weather.max_temp.toFixed(0),
    wind: +weather.wind_speed.toFixed(1),
    windDirection: weather.wind_direction_compass,
    img: weather.weather_state_abbr,
  }
};
