var db = require('../db.js');

module.exports.getAllUsers = function(callback) {
  var query = "SELECT * FROM `users`";
  db.query(query, function(err, rows) {
    if (err) return callback({success: false, message: "Error getting all users.", data: []});
    return callback({success: true, message: "Successfully fetched all users.", data: rows});
  });
};

module.exports.getUserById = function(id, callback) {
  var query = "SELECT * FROM `users` WHERE `id`=" + id;
  db.query(query, function(err, rows) {
    if (err) return callback({success: false, message: "Error getting user.", data: []});
    return callback({success: true, message: "Successfully fetched all user.", data: rows[0]});
  });
};

module.exports.addUser = function(email, fname, lname, year_joined, callback) {
  var sql = 'INSERT INTO users (email, fname, lname, year_joined) VALUES (?, ?, ?, ?)'
  db.query(sql, email, fname, lname, year_joined, function(err, rows) {
    if (err) {
      console.log("Error while inserting user:", err);
      callback({success: false, message: "Error while inserting user.", data: []});
    } else {
      callback({success: true, message: "Successfully inserted user.", data: rows[0]});
    };
  });
};
