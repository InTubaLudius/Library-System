var express = require('express');
var router = express.Router();

var books = require('../controllers/books.js');

router.get('/', function(req, res, next) {
  books.getAllBooks(function(data) {
    return res.json(data);
  });
});

module.exports = router;
