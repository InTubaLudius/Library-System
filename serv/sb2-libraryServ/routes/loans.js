var express = require('express');
var router = express.Router();

var loans = require('../controllers/loans.js');

router.get('/', function(req, res, next) {
  loans.getAllLoans(function(data) {
    return res.json(data);
  });
});

module.exports = router;
