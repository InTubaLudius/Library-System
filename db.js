var mysql = require('mysql');

var connection = mysql.createPool({
  host: "localhost",
  user: "library",
  password: "*23uHcqW",
  database: 'library'
});

module.exports = connection;
