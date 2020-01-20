const express = require('express');
const router = express.Router();
const country_instance_controller = require('../controllers/countryInstanceController');

const { check } = require('express-validator');

router.get('/country', [
    check('latt', 'Incorrect value for lattitude').isFloat(),
    check('long', 'Incorrect value for longitude').isFloat(),
  ], country_instance_controller.index
);

module.exports = router;
