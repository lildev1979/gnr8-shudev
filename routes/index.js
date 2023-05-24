var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SHU' });
});

router.get('/yards', function(req, res, next) {
  res.render('yards', { title: 'Rental Yards' });
});

router.get('/rentals', function(req, res, next) {
  res.render('properties', { title: 'Rental Properties' });
});

module.exports = router;
