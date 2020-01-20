const express = require('express');
const router = express.Router();
const weather_instance_controller = require('../controllers/weatherInstanceController');

const { check } = require('express-validator');

router.get('/weather', [
    check('latt', 'Incorrect value for lattitude').isFloat(),
    check('long', 'Incorrect value for longitude').isFloat(),
  ], weather_instance_controller.index
);

module.exports = router;
