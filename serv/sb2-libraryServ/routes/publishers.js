var express = require('express');
var router = express.Router();

var pub = require('../controllers/publishers.js');

router.get('/', function(req, res, next) {
  pub.getAllPublishers(function(data) {
    return res.json(data);
  });
});

module.exports = router;
