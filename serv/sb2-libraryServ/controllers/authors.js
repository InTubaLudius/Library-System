var db = require('../db.js');

module.exports.getAllAuthors = function(callback) {
  var query = "SELECT * FROM `authors`";
  db.query(query, function(err, rows) {
    if (err) return callback({success: false, message: "Error getting all authors.", data: []});
    return callback({success: true, message: "Successfully fetched all authors.", data: rows});
  })
};

module.exports.getAuthorById = function(id, callback) {
  var query = "SELECT * FROM `author` WHERE `id`=" + id;
  db.query(query, function(err, rows) {
    if (err) return callback({success: false, message: "Error getting author.", data: []});
    return callback({success: true, message: "Successfully fetched all author.", data: rows[0]});
  })
};

module.exports.addAuthor = function(fname, lname, callback) {
  var sql = 'INSERT INTO author (fname, lname) VALUES (?, ?)'
  db.query(sql, fname, lname, function(err, rows) {
    if (err) {
      console.log("Error while inserting author:", err);
      callback({success: false, message: "Error while inserting authors.", data: []});
    } else {
      callback({success: true, message: "Successfully inserted authors.", data: rows[0]});
    };
  });
};
