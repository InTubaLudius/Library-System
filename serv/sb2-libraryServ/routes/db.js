var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "library",
  password: "*23uHcqW"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database!");
});
