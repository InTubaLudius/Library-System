var express = require('express');
var router = express.Router();

var authors = require('../controllers/authors.js');

router.get('/', function(req, res, next) {
  authors.getAllAuthors(function(data) {
    return res.json(data);
  });
});

module.exports = router;
