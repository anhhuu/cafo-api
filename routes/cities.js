var express = require('express')
var router = express.Router()

const cityController = require('../app/controllers/CityController');

router.get('/:city_url', cityController.showOneByURL);
router.get('/id/:id', cityController.showOneByID);
router.get('/', cityController.showFull);

module.exports = router;