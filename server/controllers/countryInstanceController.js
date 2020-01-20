const { validationResult } = require('express-validator');
const rp = require('request-promise');

exports.index = function(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.dir(errors.errors);
    res.status(500);
    res.send(errors);
  } else {
    const {latt, long} = req.query;
    const options = {
      method: 'GET',
      uri: 'https://www.metaweather.com/api/location/search/',
      qs: {
        lattlong: `${latt},${long}`,
      },
      json: true,
    }

    rp(options)
      .then(function (response) {
        const location = response.shift();

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({
          id: location.woeid,
          city: location.title,
        }));
      })
      .catch(function (err) {
        res.status(500);
        res.send(err);
      })
  }
};
